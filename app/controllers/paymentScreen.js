// This needs to be re-defined
app.controllers.paymentScreen = new Ext.Controller({
    validate: function(){
        return true;
    },

    next: function (options) 
    {
        console.log('paymentScreen.next');
        if ( this.validate() )
        {
           /* Does not exist yet...
            app.views.parkingWorkflow.setActiveItem(
                app.views.parkingWorkflow.feedbackScreen, options.animation
            );
            */
        } 
        else {}
    },

    previous: function (options) 
    {
        console.log('paymentScreen.previous');
        if ( this.validate() )
        {
            app.views.parkingWorkflow.setActiveItem(
                app.views.parkingWorkflow.timeSelectionScreen, options.animation);
        } 
        else {}
    }
});
