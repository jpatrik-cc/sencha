app.views.checkoutWorkflow.ParkedCarsScreen = Ext.extend(Ext.Panel, {
    dockedItems: [
    {
        xtype: 'toolbar',
        dock: 'top',
        title: 'Parked Cars',
    }],// end dockedItems.items
    items: [{
        xtype: 'list',
        store: app.stores.parkedCars,
        itemTpl: '{licensePlate} parked at {parkingLot} (since {time})',
        onItemSelect: function (record) {
            Ext.dispatch({
                controller: app.controllers.parkedCarDetailScreen,
                action: 'show',
                id: record.getId()
            });
        }
    }],

    initComponent: function() {
        console.log('ParkedCarsScreen.init');
        app.views.checkoutWorkflow.ParkedCarsScreen.superclass.initComponent.apply(this, arguments);
    }
});
