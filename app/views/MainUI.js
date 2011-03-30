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
                // Something like tahis
                Ext.dispatch({
                    controller: app.controllers.paymentOptions,
                    action: 'next',
                    id: '1',
                    animation: {type:'slide', direction:'left'}
                });
            }
        }]
    }],    

    initComponent: function() {
        //app.stores.contacts.load();
        console.log('MainUI.init');
        Ext.apply(app.views.mainUI, {
            determineLocation: new app.views.mainUI.DetermineLocation(),
            selectCar: new app.views.mainUI.SelectCar()
        });

        Ext.apply(this, {
            determineLocation: app.views.mainUI.determineLocation,
            selectCar: app.views.mainUI.selectCar,
            items: [
                app.views.mainUI.determineLocation,
                app.views.mainUI.selectCar
            ]

        });
        app.views.MainUI.superclass.initComponent.apply(this, arguments);
    }
});