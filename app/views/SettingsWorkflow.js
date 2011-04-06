Ext.namespace('app.views.settingsWorkflow');

app.views.SettingsWorkflow = Ext.extend(Ext.Panel, {
    fullscreen: true,
    title: 'Settings Info',
    iconCls: 'settings',
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
            app.views.settingsWorkflow.setActiveItem(0, 'fade');
        }
    },

    initComponent: function() {
        //app.stores.contacts.load();
        console.log('SettingsWorkflow.init');
        Ext.apply(app.views.settingsWorkflow, {
            emptyPanel: new Ext.Panel()
            //parkedCarDetailScreen: new app.views.settingsWorkflow.ParkedCarDetailScreen(),
        });

        Ext.apply(this, {
            emptyPanel: app.views.settingsWorkflow.emptyPanel,
            //parkedCarDetailScreen: app.views.settingsWorkflow.parkedCarDetailScreen,

            items: [
                app.views.settingsWorkflow.emptyPanel,
                //app.views.settingsWorkflow.parkedCarDetailScreen,
            ]
        });
        app.views.SettingsWorkflow.superclass.initComponent.apply(this, arguments);
    }
});
