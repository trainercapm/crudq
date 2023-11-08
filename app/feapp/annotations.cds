using EmpService as service from '../../srv/data-service';

annotate service.Employees with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'empId',
            Value : empId,
        },
        {
            $Type : 'UI.DataField',
            Label : 'empName',
            Value : empName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'empDesg',
            Value : empDesg,
        },
        {
            $Type : 'UI.DataField',
            Label : 'empAdd',
            Value : empAdd,
        },
        {
            $Type : 'UI.DataField',
            Label : 'empSalary',
            Value : empSalary,
        },
    ]
);
annotate service.Employees with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'empId',
                Value : empId,
            },
            {
                $Type : 'UI.DataField',
                Label : 'empName',
                Value : empName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'empDesg',
                Value : empDesg,
            },
            {
                $Type : 'UI.DataField',
                Label : 'empAdd',
                Value : empAdd,
            },
            {
                $Type : 'UI.DataField',
                Label : 'empSalary',
                Value : empSalary,
            },
            {
                $Type : 'UI.DataField',
                Label : 'empPos',
                Value : empPos,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
