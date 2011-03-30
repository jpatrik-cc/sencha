app.views.parkingWorkflow.TimeSelectionScreen = Ext.extend(Ext.Panel, {
    componentName: 'TimeSelectionScreen',
    fullscreen: true,
    dockedItems: [
        {
            dock : 'top',
            xtype: 'toolbar',
            title: 'Standard Titlebar'
        },
        {
            dock : 'top',
            xtype: 'toolbar',
            ui   : 'light',
            items: [
                {
                    text: 'Test Button'
                }
            ]
        }
    ],
    html: 'Testing',

    initComponent: function() {
        console.log('TimeSelectionScreen.init');
        app.views.parkingWorkflow.TimeSelectionScreen.superclass.initComponent.apply(
            this, arguments);
    }
});
