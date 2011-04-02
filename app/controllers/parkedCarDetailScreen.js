app.controllers.parkedCarDetailScreen = new Ext.Controller({
    show: function(options) {
        console.log('controllers.parkedCarDetailScreen.show');
        car = app.stores.parkedCars.getById(options.id);
        if (car) {
            //app.views.checkoutWorkflow.ParkedCarDetailScreen.updateWithRecord(contact);
            app.views.checkoutWorkflow.setActiveItem(
                app.views.checkoutWorkflow.parkedCarDetailScreen
            );
        }
    },
    checkout: function(options) {

    }
});
