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
    items:[
        new Ext.form.FormPanel({
            items: [
                {
                    xtype: 'textfield',
                    name : 'first',
                    label: 'First name'
                },
                new Ext.Picker({
                    slots: [
                        {
                            name : 'limit_speed',
                            title: 'Speed',
                            data : [
                                {text: '50 KB/s', value: 50},
                                {text: '100 KB/s', value: 100},
                                {text: '200 KB/s', value: 200},
                                {text: '300 KB/s', value: 300}
                            ]
                        }
                    ]
                })
            ]
        }),
            
        // new Ext.Picker({
        //     slots: [
        //         {
        //             name : 'limit_speed',
        //             title: 'Speed',
        //             data : [
        //                 {text: '50 KB/s', value: 50},
        //                 {text: '100 KB/s', value: 100},
        //                 {text: '200 KB/s', value: 200},
        //                 {text: '300 KB/s', value: 300}
        //             ]
        //         }
        //     ]
        // }),

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
