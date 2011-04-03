app.views.parkingWorkflow.CarSelectionScreen = Ext.extend(Ext.Panel, {
    componentName: 'CarSelectionScreen',
    items: [{
        xtype: 'list',
        store: app.stores.availableCars,
        itemTpl: '{make} {model} ({licensePlate})',
    }],

    listeners:{
        activate : function(panel){
            panel.items.get(0).getSelectionModel().select(0);
        }
    },

    initComponent: function() {
        console.log('CarSelectionScreen.init');
        app.views.parkingWorkflow.CarSelectionScreen.superclass.initComponent.apply(
            this, arguments);
        //app.views.parkingWorkflow.carSelectionScreen.items.items[0].getSelectionModel().select(0);
    }
});
