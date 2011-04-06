Ext.namespace('app.views.checkoutWorkflow');

app.views.CheckoutWorkflow = Ext.extend(Ext.Panel, {
    fullscreen: true,
    title: 'Parked Cars',
    iconCls: 'time',
    cardSwitchAnimation: 'slide',
    layout: 'card',
    
    // dockedItems:[{
    //     xtype: 'toolbar',
    //     dock: 'top',
    //     layout: {pack: 'right'},
    //     title: 'Parked Cars'
    // }],    

    listeners:{
        activate : function(panel){
            app.views.checkoutWorkflow.setActiveItem(0, 'fade');
        }
    },

    initComponent: function() {
        //app.stores.contacts.load();
        console.log('CheckoutWorkflow.init');
        Ext.apply(app.views.checkoutWorkflow, {
            parkedCarsScreen: new app.views.checkoutWorkflow.ParkedCarsScreen(),
            parkedCarDetailScreen: new app.views.checkoutWorkflow.ParkedCarDetailScreen(),
        });

        Ext.apply(this, {
            parkedCarsScreen: app.views.checkoutWorkflow.parkedCarsScreen,
            parkedCarDetailScreen: app.views.checkoutWorkflow.parkedCarDetailScreen,

            items: [
                app.views.checkoutWorkflow.parkedCarsScreen,
                app.views.checkoutWorkflow.parkedCarDetailScreen,
            ]
        });
        app.views.CheckoutWorkflow.superclass.initComponent.apply(this, arguments);
    }
});
