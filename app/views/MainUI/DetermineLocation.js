app.views.mainUI.DetermineLocation = Ext.extend(Ext.Map, {
    componentName: 'DetermineLocation',
    title: 'Map',
    getLocation: true,
    mapOptions: {
        zoom: 17
    },
    useCurrentLocation: true,

    initComponent: function() {
        console.log('DetermineLocation.init');
        app.views.mainUI.DetermineLocation.superclass.initComponent.apply(this, arguments);
    }
});