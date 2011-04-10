app.views.parkingWorkflow.CarSelectionScreen = Ext.extend(Ext.Panel, {
    componentName: 'CarSelectionScreen',
    scroll: 'vertical',
    layout: {
        type: 'vbox',
        /* align: 'center' */
        align: 'stretch',
        pack: 'justify'
    },

    dockedItems: [
    {
        xtype: 'toolbar',
        dock: 'top',
        title: 'Cars',
        layout:
        {
            type: 'hbox',
            align: 'center',
            pack: 'justify'
        },
        items: [
        {
            text: 'Location',
            ui: 'back',
            handler: function ()
            {
                Ext.dispatch(
                {
                    controller: app.controllers.mainDispatcher,
                    action: 'previous',
                    animation: { type: 'slide', direction: 'right' }
                });
            }
        },
        ] // end dockedItems.items
    }], // end dockedItems

    items: [
        new Ext.Button({
            ui: 'normal',
            text: 'Ferrari F50 (XRK 543)',
            /* width: 320, */
            height: 50,
            padding: 10,
            margin: '30 10 15 10',
            centered: true,
            handler: function (record) {
                Ext.dispatch(
                    {
                        controller: app.controllers.mainDispatcher,
                        action: 'next',
                        animation: { type: 'slide', direction: 'left' }
                    });
            }
        }),
        new Ext.Button({
            ui: 'normal',
            text: 'Other',
            /* width: 320, */
            height: 50,
            padding: 10,
            margin: '15 10 30 10',
            centered: true
        })
        /*
        {
            xtype: 'list',
            width: 320,
            store: app.stores.availableCars,
            itemTpl: '{make} {model} ({licensePlate})',
            onItemSelect: function (record) {
                Ext.dispatch(
                    {
                        controller: app.controllers.mainDispatcher,
                        action: 'next',
                        animation: { type: 'slide', direction: 'left' }
                    });
            }
        }
        */
    ],

    listeners:{
        activate : function(panel){
            //panel.items.get(0).getSelectionModel().select(0);
        }
    },

    initComponent: function() {
        console.log('CarSelectionScreen.init');
        app.views.parkingWorkflow.CarSelectionScreen.superclass.initComponent.apply(
            this, arguments);
        //app.views.parkingWorkflow.carSelectionScreen.items.items[0].getSelectionModel().select(0);
    }
});
