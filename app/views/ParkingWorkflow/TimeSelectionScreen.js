app.views.parkingWorkflow.TimeSelectionScreen = Ext.extend(Ext.Panel, {
    componentName: 'TimeSelectionScreen',
    fullscreen: true,
    dockedItems: [],
    html: 'Time Selection Screen',

    initComponent: function() {
        console.log('TimeSelectionScreen.init');
        app.views.parkingWorkflow.TimeSelectionScreen.superclass.initComponent.apply(
            this, arguments);
    }
});
