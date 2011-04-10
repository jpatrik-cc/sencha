app.views.checkoutWorkflow.ParkedCarDetailScreen = Ext.extend(Ext.Panel, {
    styleHtmlContent:true,
    scroll: 'vertical',
    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start'
    },

    dockedItems: [
    {
        xtype: 'toolbar',
        dock: 'top',
        title: 'Your parking',
        items: [
        {
            text: 'Parked cars',
            ui: 'back',
            handler: function (){
                app.views.checkoutWorkflow.setActiveItem(0, { type: 'slide', 
                                                              direction: 'right' });
            }
        },
        ]
    }],// end dockedItems

    items: [
        {tpl:[
            '<h4>Your car {licensePlate}</h4>',
            'has been parked at {owner} since {time}',
        ]},
        {tpl:[
            '<h4>Your total payment is: {ammount}</h4>',
        ]},
        {contentEl: 'parkedCarDetailScreen'},
        /*
    {
        xtype: 'text',
        store: app.stores.parkedCars,
        itemTpl: '{licensePlate} parked at {parkingLot} (since {time})',
    },
    */
        /*
        {
            html: 'RDE 154 parked at Ideon (since 1 min)',
            centered: true
        },
        */
        new Ext.Button({
            ui  : 'confirm',
            text: 'Checkout',
            height: 50,
            centered: true,
            margin: 10,
            handler: function() {
                if (!this.actions) {
                    this.actions = new Ext.ActionSheet({
                        items: [
                            {text:"Final payment: €3.5"},
                            {
                                text: 'Accept',
                                ui: 'confirm',
                                height: 50,
                                centered: true,
                                scope : this,
                                handler: function(button, event){
                                    Ext.Msg.alert(
                                        'Confirmation', 
                                        'Your car has checked out.',
                                        function(){
                                            app.views.checkoutWorkflow
                                                .setActiveItem(0, 
                                                              {type: 'slide', 
                                                               direction: 'right'});
                                        });
                                    this.actions.hide();
                                }
                            },{
                                text : 'Cancel',
                                ui: 'normal',
                                height: 50,
                                centered: true,
                                scope : this,
                                handler : function(){
                                    this.actions.hide();
                                }
                            }]
                    });
                }
                this.actions.show();
            }
        }),
        new Ext.Button({
            ui  : 'normal',
            text: 'Extend',
            height: 50,
            margin: 10,
            centered: true,
            handler : function(){
                app.views.checkoutWorkflow.setActiveItem(
                    app.views.checkoutWorkflow.extensionScreen
                );
            }
        }),
    ]
});
