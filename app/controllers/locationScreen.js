// This needs to be re-defined
app.controllers.locationScreen = new Ext.Controller({
    validate: function(){
        return true;
    },

    next: function(options) {
        console.log('locationScreen.next')
        if (this.validate()){
            app.views.parkingWorkflow.setActiveItem(
                app.views.parkingWorkflow.carSelectionScreen, options.animation
            );
        } 
	else {}
    },

    prev: function(options) {
       console.log('locationScreen.prev')
       if (this.validate())
       {
          app.views.parkingWorkflow.setActiveItem(
             app.views.parkingWorkflow.locationScreen);
       }
       else {}
    }
});
