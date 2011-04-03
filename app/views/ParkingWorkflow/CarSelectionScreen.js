app.views.parkingWorkflow.CarSelectionScreen = Ext.extend(Ext.Panel, {
    fullscreen: true,
    title: 'Car Selection',
    componentName: 'CarSelectionScreen',

    dockedItems: [
    {
        xtype: 'toolbar',
        dock: 'top',
        layout:
        {
            type: 'hbox',
            align: 'center',
            pack: 'justify'
        },
        items: [
        {
            width: 50,
            text: 'Back',
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
        {
            text: 'Car Selection'
        },
        {
            width: 50,
            text: 'Ok',
            ui: 'forward',
            handler: function ()
            {
                Ext.dispatch(
                {
                    controller: app.controllers.mainDispatcher,
                    action: 'next',
                    animation: { type: 'slide', direction: 'left' }
                });
            }
        }] // end dockedItems.items
    }], // end dockedItems

    items: [{
        xtype: 'list',
        store: app.stores.availableCars,
        itemTpl: '{make} {model} ({licensePlate})',
    }],

    listeners:{
        activate : function(panel){
            panel.items.get(0).getSelectionModel().select(0);
        }
    },

    initComponent: function() {
        console.log('CarSelectionScreen.init');
        app.views.parkingWorkflow.CarSelectionScreen.superclass.initComponent.apply(
            this, arguments);
        //app.views.parkingWorkflow.carSelectionScreen.items.items[0].getSelectionModel().select(0);
    }
});
