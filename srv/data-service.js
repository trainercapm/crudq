module.exports = srv => {

    // srv.on("READ","Employees", req => {
    //     console.log("Testing");
    //     console.log(req.data);
    //     const { Employees } = cds.entities;
    //     const tx = cds.transaction(req);
    //     if (req.data.Empid) {
    //         return tx.run(SELECT.from(Employees).where({ Empid: req.data.Empid }));
    //     }
    //     else {
    //         return tx.run(SELECT.from(Employees));
    //     }
    // });
    
    srv.after("READ", "Employees", rs => {
        console.log("Read Testing");
        console.log(rs);
        for (var i = 0; i < rs.length; i++) {
            if (rs[i].empDesg == "Team Lead") {
                rs[i].empDesg = rs[i].empDesg + " (TL)";
            }
            else if (rs[i].empDesg == "Project Manager") {
                rs[i].empDesg = rs[i].empDesg + "(PM)";
            }
        }
        return rs;
    });

    // srv.before("CREATE", "Employees", req => {
    //     console.log("Create Testing");
    //     console.log(req.data);
    //     if (req.data.Status === "Permenant"){ 
    //         req.data.StatusCriticality = 3;
    //     }else{
    //     req.data.StatusCriticality = 1;
    //     }

    // });

    srv.on("CREATE", "Employees", req => {
        if (req.data.Status === "Permenant"){ 
                    req.data.StatusCriticality = "PRIO-1";
                }else{
                req.data.StatusCriticality = "PRIO-2";
                }
        const Employees = cds.entities;
        const tx = cds.transaction(req)
        return tx.run(INSERT.into(Employees)
            .columns('empId', 'empName', 'empDesg', 'empAdd', 'empSalary', 'empPos')
            .values(req.data.empId,
                req.data.empName,
                req.data.empDesg,
                req.data.empAdd,
                req.data.empSalary,
                req.data.empPos));

    });

    srv.on("UPDATE", "Employees", async req => {
        const Employees = cds.entities;
        const tx = cds.transaction(req)
        return await tx.run(UPDATE(Employees).set({empPos:req.data.empPos}).where({empId:req.data.empId}));
    });

    srv.on("DELETE", "Employees", async req => {
        const Employees = cds.entities;
        const tx = cds.transaction(req)
        return await tx.run(DELETE(Employees).where({empId:req.data.empId}));
    });
}