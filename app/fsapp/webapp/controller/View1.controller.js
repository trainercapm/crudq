sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("com.fsapp.fsapp.controller.View1", {
            onInit: function () {

            },
            onEdit: function () {
                //on Edit of Item
                this.getView().byId("idCreate").setVisible(false);
                var selItem = this.byId("idTable").getSelectedItem();
                if (selItem === null) {
                    MessageBox.error("Select an Item");
                }
                else {
                    this.getView().byId("idSF").setVisible(true);
                    var oContext = selItem.getBindingContext();
                    this.getView().byId("idSF").setBindingContext(oContext);
                }
            },
            onCreate: function () {
                // open a form and create
                this.getView().byId("idSF").setVisible(true)
               // this.getView().byId("idUpdate").setVisible(false);
            },

            onSFCreate: function (oEvent) {
               // read the data of form
                var empid = this.getView().byId("idEmpId").getValue();
                var empdesg = this.getView().byId("idEmpDesg").getValue();
                var empname = this.getView().byId("idEmpName").getValue();
                var empadd = this.getView().byId("idEmpAdd").getValue();
                var empsal = this.getView().byId("idEmpSal").getValue();
                var emppos = this.getView().byId("idEmpPos").getValue();

                //get the bindings of table : table data
                var oTable = this.getView().byId("idTable");
                var oBindings = oTable.getBinding("items");
                var oContext = oBindings.create({
                    empId: empid,
                    empDesg: empdesg,
                    empName: empname,
                    empAdd: empadd,
                    empSalary: empsal,
                    empPos: emppos
                   
                });
                oModel.submitBatch("empGroup").then(function () {

                }, function () {

                });
                oContext.created().then(function () {
                    MessageBox.success("Record Created");
                }, function () {
                    MessageBox.error("Record creation fail");
                });

                // oModel.create("/Employess",oContext,{
                //     success:function(){},
                //     error:function(){}
                // })


            },
            onSFUpdate: function () { 
                var oModel=this.getOwnerComponent().getModel();
                oModel.submitBatch('empGroup').then(function () {
                    MessageBox.success("Record Update");
                }, function () {
                    MessageBox.error("Record Update fail");
                });

                



            },
            onDelete: function () {

                var selItem = this.byId("idTable").getSelectedItem();
                if (selItem === null) {
                    MessageBox.error("Select an Item");
                }
                else {
                    var oContext = selItem.getBindingContext();
                    oContext.delete("$auto").then(function () {
                        MessageBox.success("Record delete");
                    }, function () {
                        MessageBox.error("Record delete fail");
                    });
                }

            },
            onNavV2:function(){
               const oRouter = this.getOwnerComponent().getRouter();
                // oRouter.navTo("RouteView2",{
                //  empid:1001 // With parameter
                // });

             oRouter.navTo("RouteView2"
                 
             );

            },

            onPressEmpbyPos:function(){
                
            }
        });
    });
