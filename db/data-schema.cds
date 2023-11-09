namespace crudq.db;

entity  employees {
    key empId:String(12);
    empName : String;
    empDesg:String(10);
    empAdd:String(20);
    empSalary:String;
    empPos:String;
    StatusCriticality:String;
    //toProject:Association to many projects on toProject.empId=empId;
    toProject:Composition of  many projects on toProject.empId=empId;
}
entity  projects {
    key empId:String(12);
    key PrjCode:String;
    PrjName : String;
    PrjDesc:String;
    
}