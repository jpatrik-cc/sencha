// This needs to be re-defined
app.controllers.mainDispatcher = new Ext.Controller({
    getNext: function(activeItem){
        return {DetermineLocation: app.controllers.determineLocation,
                SelectCar: app.controllers.selectCar}[activeItem]
    },

    next: function(options) {
        console.log('mainDispatcher.next')
        Ext.dispatch({
            controller: this.getNext(app.views.mainUI.getActiveItem().componentName),
            action: 'next',
            animation: {type:'slide', direction:'left'}
        });
    }
});
