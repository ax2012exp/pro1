sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'project1/test/integration/FirstJourney',
		'project1/test/integration/pages/ordersetList',
		'project1/test/integration/pages/ordersetObjectPage'
    ],
    function(JourneyRunner, opaJourney, ordersetList, ordersetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheordersetList: ordersetList,
					onTheordersetObjectPage: ordersetObjectPage
                }
            },
            opaJourney.run
        );
    }
);