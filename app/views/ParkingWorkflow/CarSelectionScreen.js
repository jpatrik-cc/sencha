app.views.parkingWorkflow.CarSelectionScreen = Ext.extend(Ext.Panel, {
    fullscreen: true,
    componentName: 'CarSelectionScreen',

    dockedItems: [
    {
        xtype: 'toolbar',
        dock: 'top',
        title: 'Car Selection',
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

    items: [{
        xtype: 'list',
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
    }],

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
