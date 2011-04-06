Ext.namespace('app.views.userWorkflow');

app.views.UserWorkflow = Ext.extend(Ext.Panel, {
    fullscreen: true,
    title: 'User Info',
    iconCls: 'user',
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
            app.views.userWorkflow.setActiveItem(0, 'fade');
        }
    },

    initComponent: function() {
        //app.stores.contacts.load();
        console.log('UserWorkflow.init');
        Ext.apply(app.views.userWorkflow, {
            emptyPanel: new Ext.Panel()
            //parkedCarDetailScreen: new app.views.userWorkflow.ParkedCarDetailScreen(),
        });

        Ext.apply(this, {
            emptyPanel: app.views.userWorkflow.emptyPanel,
            //parkedCarDetailScreen: app.views.userWorkflow.parkedCarDetailScreen,

            items: [
                app.views.userWorkflow.emptyPanel,
                //app.views.userWorkflow.parkedCarDetailScreen,
            ]
        });
        app.views.UserWorkflow.superclass.initComponent.apply(this, arguments);
    }
});
