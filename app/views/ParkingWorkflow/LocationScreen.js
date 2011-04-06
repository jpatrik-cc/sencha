app.views.parkingWorkflow.LocationScreen = Ext.extend(Ext.Panel, {
    componentName: 'LocationScreen',
    title: 'Map',
    // getLocation: true,
    // mapOptions: {
    //     zoom: 16
    // },
    // useCurrentLocation: true,
    dockedItems: [
    {
        xtype: 'toolbar',
        dock: 'top',
        title: 'Location',
    }], // end dockedItems
    scroll: 'vertical',
    layout: {
        type: 'vbox',
        align: 'strech'
    },

    items:[
        {contentEl: 'locationScreen', },

        new Ext.Button({
            ui  : 'confirm-round',
            text: 'Next',
            handler: function ()
            {
                Ext.dispatch(
                {
                    controller: app.controllers.mainDispatcher,
                    action: 'next',
                    animation: { type: 'slide', direction: 'left' }
                });
            }
        }),

    ],
    
    initComponent: function() {
        console.log('LocationScreen.init');
        app.views.parkingWorkflow.LocationScreen.superclass.initComponent.apply(this, arguments);
    }
});

//Jun  4-11
//May 21-28
//1200 USD

