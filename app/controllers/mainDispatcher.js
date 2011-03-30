// This needs to be re-defined
app.controllers.mainDispatcher = new Ext.Controller({
    getNext: function(activeItem) {
        return {
           LocationScreen: app.controllers.locationScreen, 
           CarSelectionScreen: app.controllers.carSelectionScreen,
           TimeSelectionScreen: app.controllers.timeSelectionScreen,
           PaymentScreen: app.controllers.paymentScreen
        }[activeItem]
    },

    next: function(options) {
        console.log('mainDispatcher.next')
        Ext.dispatch({
            controller: this.getNext(app.views.parkingWorkflow.getActiveItem().componentName),
            action: 'next',
            animation: {type:'slide', direction:'left'}
        });
    }
});
