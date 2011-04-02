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
        title: 'Checkout'
    }],    

    initComponent: function() {
        //app.stores.contacts.load();
        console.log('CheckoutWorkflow.init');
        Ext.apply(app.views.checkoutWorkflow, {
            parkedCarsScreen: new app.views.checkoutWorkflow.ParkedCarsScreen(),
        });

        Ext.apply(this, {
            parkedCarsScreen: app.views.checkoutWorkflow.parkedCarsScreen,
            items: [
                app.views.checkoutWorkflow.parkedCarsScreen,
            ]
        });
        app.views.CheckoutWorkflow.superclass.initComponent.apply(this, arguments);
    }
});
