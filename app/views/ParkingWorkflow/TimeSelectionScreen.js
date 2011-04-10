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
        height: 450,
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
                app.views.parkingWorkflow.timeSelectionScreen.items.get(0)
                    .setValue(values.hours+":"+values.minutes);
                console.log(picker, values);
            }
        }
    }),
    listeners:{
        activate : function(panel){
            //app.views.parkingWorkflow.timeSelectionScreen.picker.show();
            //app.views.parkingWorkflow.timeSelectionScreen.picker.setValue({
            //    hours: 0,
            //    minutes: 15,
            //})
        }
    },
    items:[
        //{contentEl: 'timeSelectionScreen'},

        {xtype: 'textfield',
         name : 'reminder',
         label: 'Reminder Time',
         value: '0:15',
         listeners: {
             click: {
                 element: 'el', //bind to the underlying el property on the panel
                 fn: function(){ 
                     app.views.parkingWorkflow.timeSelectionScreen.picker.show();
                     app.views.parkingWorkflow.timeSelectionScreen.picker.setValue({
                         hours: 0,
                         minutes: 15,
                     });
                 }
             },
         },
        },

        new Ext.Button({
            ui  : 'normal',
            text: 'Confirm time',
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
