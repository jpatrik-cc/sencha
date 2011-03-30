app.views.parkingWorkflow.CarSelectionScreen = Ext.extend(Ext.Panel, {
    componentName: 'CarSelectionScreen',
    fullscreen: true,
    dockedItems: [
       /*
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
        */
    ],
    html: 'Car Selection Screen',

    initComponent: function() {
        console.log('CarSelectionScreen.init');
        app.views.parkingWorkflow.CarSelectionScreen.superclass.initComponent.apply(
            this, arguments);
    }
});
