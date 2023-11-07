using crudq.db as db from '../db/data-schema';

service EmpService {

    entity Employees as projection on db.employees;
    entity Projects as projection on db.projects;

}