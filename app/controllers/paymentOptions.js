// This needs to be re-defined
app.controllers.paymentOptions = new Ext.Controller({
    validate: function(){
        return true;
    },

    getNext: function(activeItem){
        return {DetermineLocation: app.views.mainUI.selectCar,
                SelectCar: app.views.mainUI.determineLocation}[activeItem]
    },

    next: function(options) {
        console.log('paymentOptions.next')
        var activeItem = app.views.mainUI.getActiveItem();
        if (this.validate(activeItem.componentName)){
            app.views.mainUI.setActiveItem(
                this.getNext(activeItem.componentName), options.animation
            );
        } else {

        }
    }
});
