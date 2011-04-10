app.views.checkoutWorkflow.ParkedCarDetailScreen = Ext.extend(Ext.Panel, {
    styleHtmlContent:true,
    scroll: 'vertical',
    dockedItems: [
    {
        xtype: 'toolbar',
        dock: 'top',
        title: 'Your parking',
        items: [
        {
            text: 'Parking',
            ui: 'back',
            handler: function (){
                app.views.checkoutWorkflow.setActiveItem(0, { type: 'slide', 
                                                              direction: 'right' });
            }
        },
        ]
    }],// end dockedItems.items
    items: [
        {tpl:[
            '<h4>Your car {licensePlate}</h4>',
            'has been parked at {owner} since {time}',
        ]},
        {tpl:[
            '<h4>Your total payment is: {ammount}</h4>',
        ]},
        {contentEl: 'parkedCarDetailScreen'},

        new Ext.Button({
            ui  : 'confirm-round',
            text: 'Checkout',
            handler: function() {
                if (!this.actions) {
                    this.actions = new Ext.ActionSheet({
                        items: [
                            {text:"Final payment: €3.5"},
                            {
                                text: 'Accept',
                                ui: 'confirm',
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
            ui  : 'round',
            text: 'Extend',
            handler : function(){
                app.views.checkoutWorkflow.setActiveItem(
                    app.views.checkoutWorkflow.extensionScreen
                );
            }
        }),
    ]
});