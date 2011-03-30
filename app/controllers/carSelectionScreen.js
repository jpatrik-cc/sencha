// This needs to be re-defined
app.controllers.carSelectionScreen = new Ext.Controller({
    validate: function(){
        return true;
    },

    next: function(options) {
        console.log('carSelectionScreen.next')
        if (this.validate()){
            app.views.parkingWorkflow.setActiveItem(
                app.views.parkingWorkflow.timeSelectionScreen, options.animation
            );
        } else {

        }
    }
});
