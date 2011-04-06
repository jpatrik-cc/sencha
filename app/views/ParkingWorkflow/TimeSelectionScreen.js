app.views.parkingWorkflow.TimeSelectionScreen = Ext.extend(Ext.Panel, {
    componentName: 'TimeSelectionScreen',

    dockedItems: [
    {
        xtype: 'toolbar',
        dock: 'top',
        title: 'Time Selection',
        layout:
        {
            type: 'hbox',
            align: 'center',
            pack: 'justify'
        },
        items: [
        {
            text: 'Car Selection',
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
        },
        ] // end dockedItems.items
    }], // end dockedItems

    picker: new Ext.Picker({
        useTitles: true,
        slots: [
            {name : 'hours',
             title: 'Hours',
             data : [{'text': '1', 'value': 1},
                     {'text': '2', 'value': 2},
                     {'text': '3', 'value': 3},
                     {'text': '4', 'value': 4},
                     {'text': '5', 'value': 5},
                     {'text': '6', 'value': 6},
                     {'text': '7', 'value': 7},
                     {'text': '8', 'value': 8},
                     {'text': '9', 'value': 9},
                     {'text': '10', 'value': 10},
                     {'text': '11', 'value': 11},
                     {'text': '12', 'value': 12},
                    ]
            },

            {name : 'minutes',
             title: 'Minutes',
             data : [{'text': '1', 'value': 1},
                     {'text': '2', 'value': 2},
                     {'text': '3', 'value': 3},
                     {'text': '4', 'value': 4},
                     {'text': '5', 'value': 5},
                     {'text': '6', 'value': 6},
                     {'text': '7', 'value': 7},
                     {'text': '8', 'value': 8},
                     {'text': '9', 'value': 9},
                     {'text': '10', 'value': 10},
                     {'text': '11', 'value': 11},
                     {'text': '12', 'value': 12},
                     {'text': '13', 'value': 13},
                     {'text': '14', 'value': 14},
                     {'text': '15', 'value': 15},
                     {'text': '16', 'value': 16},
                     {'text': '17', 'value': 17},
                     {'text': '18', 'value': 18},
                     {'text': '19', 'value': 19},
                     {'text': '20', 'value': 20},
                     {'text': '21', 'value': 21},
                     {'text': '22', 'value': 22},
                     {'text': '23', 'value': 23},
                     {'text': '24', 'value': 24},
                     {'text': '25', 'value': 25},
                     {'text': '26', 'value': 26},
                     {'text': '27', 'value': 27},
                     {'text': '28', 'value': 28},
                     {'text': '29', 'value': 29},
                     {'text': '30', 'value': 30},
                     {'text': '31', 'value': 31},
                     {'text': '32', 'value': 32},
                     {'text': '33', 'value': 33},
                     {'text': '34', 'value': 34},
                     {'text': '35', 'value': 35},
                     {'text': '36', 'value': 36},
                     {'text': '37', 'value': 37},
                     {'text': '38', 'value': 38},
                     {'text': '39', 'value': 39},
                     {'text': '40', 'value': 40},
                     {'text': '41', 'value': 41},
                     {'text': '42', 'value': 42},
                     {'text': '43', 'value': 43},
                     {'text': '44', 'value': 44},
                     {'text': '45', 'value': 45},
                     {'text': '46', 'value': 46},
                     {'text': '47', 'value': 47},
                     {'text': '48', 'value': 48},
                     {'text': '49', 'value': 49},
                     {'text': '50', 'value': 50},
                     {'text': '51', 'value': 51},
                     {'text': '52', 'value': 52},
                     {'text': '53', 'value': 53},
                     {'text': '54', 'value': 54},
                     {'text': '55', 'value': 55},
                     {'text': '56', 'value': 56},
                     {'text': '57', 'value': 57},
                     {'text': '58', 'value': 58},
                     {'text': '59', 'value': 59}]
            },

            {name : 'Type',
             title: 'type',
             data : [{'text': 'A.M.', 'value': 'am'},
                     {'text': 'P.M.', 'value': 'pm'},
                    ]
            },
            
        ]
    }),
    listeners:{
        activate : function(panel){
            app.views.parkingWorkflow.timeSelectionScreen.picker.show();
            app.views.parkingWorkflow.timeSelectionScreen.picker.setValue({
                hours: 3,
                minutes: 45,
                type: 'pm'
            })
        }
    },
    items:[
        {contentEl: 'timeSelectionScreen'},
        new Ext.Button({
            ui  : 'confirm-round',
            text: 'Next',
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
