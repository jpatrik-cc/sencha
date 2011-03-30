Ext.namespace('app.views.parkingWorkflow');
app.views.ParkingWorkflow = Ext.extend(Ext.Panel, {
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
                Ext.dispatch({
                    controller: app.controllers.mainDispatcher,
                    action: 'next',
                    animation: {type:'slide', direction:'left'}
                });
            }
        }]
    }],    

    initComponent: function() {
        //app.stores.contacts.load();
        console.log('ParkingWorkflow.init');
        Ext.apply(app.views.parkingWorkflow, {
            determineLocation: new app.views.parkingWorkflow.DetermineLocation(),
            selectCar: new app.views.parkingWorkflow.SelectCar()
        });

        Ext.apply(this, {
            determineLocation: app.views.parkingWorkflow.determineLocation,
            selectCar: app.views.parkingWorkflow.selectCar,
            items: [
                app.views.parkingWorkflow.determineLocation,
                app.views.parkingWorkflow.selectCar,
            ]

        });
        app.views.ParkingWorkflow.superclass.initComponent.apply(this, arguments);
    }
});