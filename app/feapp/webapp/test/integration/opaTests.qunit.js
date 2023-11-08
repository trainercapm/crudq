sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/feapp/feapp/test/integration/FirstJourney',
		'com/feapp/feapp/test/integration/pages/EmployeesList',
		'com/feapp/feapp/test/integration/pages/EmployeesObjectPage',
		'com/feapp/feapp/test/integration/pages/ProjectsObjectPage'
    ],
    function(JourneyRunner, opaJourney, EmployeesList, EmployeesObjectPage, ProjectsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/feapp/feapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEmployeesList: EmployeesList,
					onTheEmployeesObjectPage: EmployeesObjectPage,
					onTheProjectsObjectPage: ProjectsObjectPage
                }
            },
            opaJourney.run
        );
    }
);