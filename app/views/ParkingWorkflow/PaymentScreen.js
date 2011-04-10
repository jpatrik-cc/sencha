app.views.parkingWorkflow.PaymentScreen = Ext.extend(Ext.Panel, {
    componentName: 'PaymentScreen',
    fullscreen: true,
    scroll: 'vertical',
    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'justify'
    },

    dockedItems: [
    {
        xtype: 'toolbar',
        dock: 'top',
        title: 'Confirm',
        items: [
        {
            text: 'Time',
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
        {
            xtype: 'numberfield',
            name : 'pincode',
            label: 'PinCode'
        },
        {
            contentEl: 'paymentScreen'
        },
        new Ext.Button({
            ui  : 'normal',
            text: 'Confirm',
            height: 50,
            padding: 10,
            margin: 10,
            handler: function(button, event){
                Ext.Msg.alert('Confirmation', 'Your car has been parked.', 
                              function(){
                                  app.views.viewport
                                      .setActiveItem(1, 
                                                     {type: 'slide', 
                                                      direction: 'left'});
                              });
            }
        })
    ],

    initComponent: function() {
        console.log('PaymentScreen.init');
        app.views.parkingWorkflow.PaymentScreen.superclass.initComponent.apply(
            this, arguments);
    }
});
