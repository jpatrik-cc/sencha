Ext.namespace('app.views.mainUI');
app.views.MainUI = Ext.extend(Ext.Panel, {
    fullscreen: true,
    title: 'Park',
    iconCls: 'download',
    cardSwitchAnimation: 'slide',
    layout: 'card',
    
    dockedItems:[{
        xtype: 'toolbar',
        dock: 'top',
        layout: {pack: 'right'},
        items: [{
            text: 'Ok',
            ui: 'forward',
            handler: function() {
                // Something like this
                //Ext.dispatch({
                //    controller: app.controllers.contacts,
                //    action: 'show',
                //    id: record.getId()
                //});
            }
        }]
    }],    

    initComponent: function() {
        //app.stores.contacts.load();
        console.log('MainUI.init');
        Ext.apply(app.views.mainUI, {
            determineLocation: new app.views.mainUI.DetermineLocation()
        });

        Ext.apply(this, {
            items: [
                app.views.mainUI.determineLocation
            ]
        });
        app.views.MainUI.superclass.initComponent.apply(this, arguments);
    }
});