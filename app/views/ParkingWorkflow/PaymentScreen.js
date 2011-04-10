app.views.parkingWorkflow.PaymentScreen = Ext.extend(Ext.Panel, {
    componentName: 'PaymentScreen',
    fullscreen: true,
    scroll: 'vertical',
    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'justify'
    },
    popup: null,

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
            contentEl: 'paymentInfo'
        },
        new Ext.Button({
            ui  : 'normal',
            text: 'Start Parking',
            height: 50,
            padding: 10,
            margin: 10,
            handler: function() {
                if (!this.popup) {
                    app.views.parkingWorkflow.paymentScreen.popup = 
                      new Ext.MessageBox({
                        floating: true,
                        modal: true,
                        centered: true,
                        styleHtmlContent: true,
                        scroll: 'vertical',
                        items: [
                            {xtype: 'zipfield',
                             name : 'numberstest',},
                            new Ext.Button({
                                ui  : 'confirm',
                                text: 'Confirm',
                                padding: 10,
                                margin: '20 0 0 0',
                                handler: function(){
                                    app.views.parkingWorkflow.paymentScreen.popup.destroy()
                                    Ext.Msg.alert('Confirmation', 
                                                  'Your car has been parked.', 
                                                  function(){
                                                      app.views.viewport
                                                          .setActiveItem(
                                                              1, 
                                                              {type: 'slide', 
                                                               direction: 'left'});
                                                  });
                                },
                            })
                        ],
                        dockedItems: [
                            {xtype: 'toolbar',
                             dock: 'top',
                             title: 'PinCode',},
                        ]
                    });
                }
                app.views.parkingWorkflow.paymentScreen.popup.show('pop');
            },


            // handler: function(){
            //     /*
            //     Ext.Msg.alert('Confirmation', 'Your car has been parked.', 
            //                   function(){
            //                       app.views.viewport
            //                           .setActiveItem(1, 
            //                                          {type: 'slide', 
            //                                           direction: 'left'});
            //                   });
            //     */
            //     Ext.Msg.prompt('pin', 'Oh, hai! Insert PIN kthnxbai.', 
            //         function(number) {
            //             app.views.viewport.setActiveItem(1, 
            //                 {type: 'slide', direction: 'left'});
            //         }
            //     );
            // }
        })
    ],

    initComponent: function() {
        console.log('PaymentScreen.init');
        app.views.parkingWorkflow.PaymentScreen.superclass.initComponent.apply(
            this, arguments);
    }
});
