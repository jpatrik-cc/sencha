app.views.parkingWorkflow.TimeSelectionScreen = Ext.extend(Ext.Panel, {
    componentName: 'TimeSelectionScreen',
    scroll: 'vertical',

    dockedItems: [
    {
        xtype: 'toolbar',
        dock: 'top',
        title: 'Time',
        layout:
        {
            type: 'hbox',
            align: 'center',
            pack: 'justify'
        },
        items: [
        {
            text: 'Cars',
            ui: 'back',
            handler: function ()
            {
                Ext.dispatch(
                {
                    controller: app.controllers.mainDispatcher,
                    action: 'previous',
                    animation: { type: 'slide', direction: 'right' }
                });
            }
        }
        ] // end dockedItems.items
    }], // end dockedItems

    picker: new Ext.Picker({
        useTitles: true,
        width: 300,
        slots: [
            {name : 'hours',
             title: 'Hours',
             data : [{'text': '0', 'value': 0},
                     {'text': '1', 'value': 1},
                     {'text': '2', 'value': 2},
                     {'text': '3', 'value': 3},
                    ]
            },
            
            {name : 'minutes',
             title: 'Minutes',
             data : [{'text': '0', 'value': 0},
                     {'text': '5', 'value': 5},
                     {'text': '10', 'value': 10},
                     {'text': '15', 'value': 15},
                     {'text': '20', 'value': 20},
                     {'text': '25', 'value': 25},
                     {'text': '30', 'value': 30},
                     {'text': '35', 'value': 35},
                     {'text': '40', 'value': 40},
                     {'text': '45', 'value': 45},
                     {'text': '50', 'value': 50},
                     {'text': '55', 'value': 55}]

            },
        ],
        listeners: {
            change : function(picker, values) {
                var d = new Date();
                var d2 = new Date( d );
                d2.setHours(d.getHours() + values.hours);
                d2.setMinutes(d.getMinutes() + values.minutes);

                app.views.parkingWorkflow.timeSelectionScreen.items.get(0)
                    .setValue(d2.getHours()+":"+d2.getMinutes());

                var price_per_minute = 0.0166;
                var flat_rate = 10;
                var minutes = values.hours * 60 + values.minutes;
                if ( minutes >= 180 ){ 
                    var estimate = flat_rate
                }else{
                    var estimate = (minutes*price_per_minute).toFixed(2)
                }

                app.views.parkingWorkflow.timeSelectionScreen.items.get(1)
                    .setValue('€'+estimate);
            },
            // move: {
            //     element: 'el',
            //     fn: function(a, b, c){
            //         console.log(a,b,c);
            //     }
            // },
        }
    }),
    listeners:{
        activate : function(panel){
            // set the default time
            var default_hours = 1;
            var default_minutes = 0;

            var d = new Date();
            var d2 = new Date( d );
            d2.setHours(d.getHours() + default_hours);
            d2.setMinutes(d.getMinutes() + default_minutes);
            app.views.parkingWorkflow.timeSelectionScreen.items.get(0)
                .setValue(d2.getHours()+":"+d2.getMinutes());
            app.views.parkingWorkflow.timeSelectionScreen.items.get(1)
                .setValue('€'+(0.0166*60).toFixed(2));
            

            app.views.parkingWorkflow.timeSelectionScreen.picker.show();
            app.views.parkingWorkflow.timeSelectionScreen.picker.setValue({
               hours: 1,
               minutes: 0,
            })
            
        }
    },
    items:[
        //{contentEl: 'timeSelectionScreen'},

        {xtype: 'textfield',
         name : 'reminder',
         label: 'Reminder',
         listeners: {
             click: {
                 element: 'el', //bind to the underlying el property on the panel
                 fn: function(){ 
                     app.views.parkingWorkflow.timeSelectionScreen.picker.show();
                     app.views.parkingWorkflow.timeSelectionScreen.picker.setValue({
                         hours: 1,
                         minutes: 0,
                     });
                 }
             },
         },
        },
        
        {xtype: 'textfield',
         name : 'price',
         label: 'Price',
         disabled:true},

        
        new Ext.Button({
            ui  : 'normal',
            text: 'Confirm time',
            height: 50,
            padding: 10,
            margin: '10 10 10 10',
            centered: true,

            handler: function ()
            {
                Ext.dispatch(
                {
                    controller: app.controllers.mainDispatcher,
                    action: 'next',
                    animation: { type: 'slide', direction: 'left' }
                });
            }
        }),

    ],

    initComponent: function() {
        console.log('TimeSelectionScreen.init');
        app.views.parkingWorkflow.TimeSelectionScreen.superclass.initComponent.apply(
            this, arguments);
    }
});
