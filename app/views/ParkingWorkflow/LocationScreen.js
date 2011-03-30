app.views.parkingWorkflow.LocationScreen = Ext.extend(Ext.Map, {
    componentName: 'LocationScreen',
    title: 'Map',
    getLocation: true,
    mapOptions: {
        zoom: 17
    },
    useCurrentLocation: true,

    initComponent: function() {
        console.log('LocationScreen.init');
        app.views.parkingWorkflow.LocationScreen.superclass.initComponent.apply(this, arguments);
    }
});
