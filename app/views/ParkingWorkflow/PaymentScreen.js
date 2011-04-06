app.views.parkingWorkflow.PaymentScreen = Ext.extend(Ext.Panel, {
    componentName: 'PaymentScreen',
    fullscreen: true,
    dockedItems: [
    {
        xtype: 'toolbar',
        dock: 'top',
        title: 'Confirm',
        items: [
        {
            text: 'Time Selection',
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
            ui  : 'confirm-round',
            text: 'Confirm',
            handler: function(button, event){
                Ext.Msg.alert('Confirmation', 'Your car has been parked.', 
                              Ext.emptyFn);
            }
        })
    ],
    contentEl: 'paymentScreen',

    initComponent: function() {
        console.log('PaymentScreen.init');
        app.views.parkingWorkflow.PaymentScreen.superclass.initComponent.apply(
            this, arguments);
    }
});
