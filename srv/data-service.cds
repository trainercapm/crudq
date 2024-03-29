using crudq.db as db from '../db/data-schema';

service EmpService {
    entity Employees as projection on db.employees;
    entity Projects as projection on db.projects;
    function getEmpbyPos(empPos:String) returns array of Employees;
    action makePermenant(empId:String) returns Employees;
    //function getEmpbyPos(empPos:String) returns Employees;
}