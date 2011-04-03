// This needs to be re-defined
app.controllers.mainDispatcher = new Ext.Controller({
	/* Private utility function */
    getController: function(activeItem) {
        return {
           LocationScreen: app.controllers.locationScreen, 
           CarSelectionScreen: app.controllers.carSelectionScreen,
           TimeSelectionScreen: app.controllers.timeSelectionScreen,
           PaymentScreen: app.controllers.paymentScreen
        }[activeItem]
    },

    previous: function (options)
    {
        console.log('mainDispatcher.previous')
        Ext.dispatch(
        {
            controller: this.getController(app.views.parkingWorkflow.getActiveItem().componentName),
            action: 'previous',
            animation: {type: 'slide', direction: 'right'}
        });
    },

    next: function(options) {
        console.log('mainDispatcher.next')
        Ext.dispatch({
            controller: this.getController(app.views.parkingWorkflow.getActiveItem().componentName),
            action: 'next',
            animation: {type:'slide', direction:'left'}
        });
    }
});
