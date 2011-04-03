Ext.namespace('app.views.parkingWorkflow');
app.views.ParkingWorkflow = Ext.extend(Ext.Panel, {
    fullscreen: true,
    title: 'Park',
    iconCls: 'download',
    cardSwitchAnimation: 'slide',
    layout: 'card',
    
    dockedItems:[
    {
        xtype: 'toolbar',
        dock: 'top',
        layout: 
        {
            // pack: 'right'
            type: 'hbox',
            //align: 'stretch'
            align: 'center',
            pack: 'justify'
        },
        items: [
         {
             width: 50,
             text: 'Back',
             ui: 'back',
             handler: function ()
             {
                Ext.dispatch({
                    controller: app.controllers.mainDispatcher,
                    action: 'previous',
                    animation: {type: 'slide', direction: 'right'}
                });
             }
         },
          {
              width: 50,
            text: 'Ok',
            ui: 'forward',
            handler: function() {
                Ext.dispatch({
                    controller: app.controllers.mainDispatcher,
                    action: 'next',
                    animation: {type:'slide', direction:'left'}
                });
            }
         }
         ]
    }
    ],    
    listeners:{
        activate : function(panel){
            app.views.parkingWorkflow.setActiveItem(0);
        }
    },

    initComponent: function() {
        //app.stores.contacts.load();
        console.log('ParkingWorkflow.init');
        Ext.apply(app.views.parkingWorkflow, {
            locationScreen: new app.views.parkingWorkflow.LocationScreen(),
            carSelectionScreen: new app.views.parkingWorkflow.CarSelectionScreen(),
            timeSelectionScreen: new app.views.parkingWorkflow.TimeSelectionScreen(),
            paymentScreen: new app.views.parkingWorkflow.PaymentScreen()
        });

        Ext.apply(this, {
            locationScreen: app.views.parkingWorkflow.locationScreen,
            carSelectionScreen: app.views.parkingWorkflow.carSelectionScreen,
            timeSelectionScreen: app.views.parkingWorkflow.timeSelectionScreen,
            paymentScreen: app.views.parkingWorkflow.paymentScreen,
            items: [
                app.views.parkingWorkflow.locationScreen,
                app.views.parkingWorkflow.carSelectionScreen,
                app.views.parkingWorkflow.timeSelectionScreen,
                app.views.parkingWorkflow.paymentScreen
            ]

        });
        app.views.ParkingWorkflow.superclass.initComponent.apply(this, arguments);
    }
});
