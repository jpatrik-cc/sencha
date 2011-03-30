// This needs to be re-defined
app.controllers.determineLocation = new Ext.Controller({
    validate: function(){
        return true;
    },

    next: function(options) {
        console.log('determineLocation.next')
        if (this.validate()){
            app.views.parkingWorkflow.setActiveItem(
                app.views.parkingWorkflow.selectCar, options.animation
            );
        } else {

        }
    }
});
