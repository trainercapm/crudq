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
        console.log(" Testing");
        console.log(rs);
        for (var i = 0; i < rs.length; i++)
        {
            if (rs[i].empDesg == "Team Lead") {
                rs[i].empDesg = rs[i].empDesg + " (TL)";
            }
            else if (rs[i].empDesg == "Project Manager") {
                rs[i].empDesg = rs[i].empDesg + "(PM)";
            }
        }
        return rs;
    });
}