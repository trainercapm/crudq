sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("com.fsapp.fsapp.controller.View2", {
            onPressBack:function(){
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView1");

            }
        });
    });
