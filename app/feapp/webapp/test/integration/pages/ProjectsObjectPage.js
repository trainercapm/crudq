sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.feapp.feapp',
            componentId: 'ProjectsObjectPage',
            contextPath: '/Employees/toProject'
        },
        CustomPageDefinitions
    );
});