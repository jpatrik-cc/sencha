// This needs to be re-defined
app.controllers.timeSelectionScreen = new Ext.Controller({
    validate: function(){
        return true;
    },

    next: function(options) {
        console.log('timeSelectionScreen.next')
        if (this.validate()){
            app.views.parkingWorkflow.setActiveItem(
                app.views.parkingWorkflow.paymentScreen, options.animation
            );
        } else {

        }
    }
});
