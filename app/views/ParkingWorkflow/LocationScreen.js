app.views.parkingWorkflow.LocationScreen = Ext.extend(Ext.Panel, {
    componentName: 'LocationScreen',
    title: 'Map',
    // getLocation: true,
    // mapOptions: {
    //     zoom: 16
    // },
    // useCurrentLocation: true,
    contentEl: 'locationScreen',
    
    initComponent: function() {
        console.log('LocationScreen.init');
        app.views.parkingWorkflow.LocationScreen.superclass.initComponent.apply(this, arguments);
    }
});
