app.views.checkoutWorkflow.ParkedCarsScreen = Ext.extend(Ext.Panel, {
    items: [{
        xtype: 'list',
        store: app.stores.parkedCars,
        itemTpl: '{licensePlate} parked at {parkingLot} (since {time})',
        onItemDisclosure: function (record) {
            //Ext.dispatch({
            //    controller: app.controllers.contacts,
            //    action: 'show',
            //    id: record.getId()
            //});
        }
    }],

    initComponent: function() {
        console.log('ParkedCarsScreen.init');
        app.views.checkoutWorkflow.ParkedCarsScreen.superclass.initComponent.apply(this, arguments);
    }
});
