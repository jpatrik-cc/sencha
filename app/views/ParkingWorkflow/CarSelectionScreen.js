app.views.parkingWorkflow.CarSelectionScreen = Ext.extend(Ext.Panel, {
    componentName: 'CarSelectionScreen',
    fullscreen: true,
    html: 'Car Selection Screen',

    initComponent: function() {
        console.log('CarSelectionScreen.init');
        app.views.parkingWorkflow.CarSelectionScreen.superclass.initComponent.apply(
            this, arguments);
    }
});
