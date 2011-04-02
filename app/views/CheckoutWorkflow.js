Ext.namespace('app.views.checkoutWorkflow');
app.views.CheckoutWorkflow = Ext.extend(Ext.Panel, {
    fullscreen: true,
    title: 'Checkout',
    iconCls: 'time',
    cardSwitchAnimation: 'slide',
    layout: 'card',
    
    dockedItems:[{
        xtype: 'toolbar',
        dock: 'top',
        layout: {pack: 'right'},
    }],    

    initComponent: function() {
        //app.stores.contacts.load();
        console.log('Checkoutworkflow.init');
        Ext.apply(app.views.checkoutworkflow, {
        });

        Ext.apply(this, {
            items: [
            ]
        });
        app.views.CheckoutWorkflow.superclass.initComponent.apply(this, arguments);
    }
});
