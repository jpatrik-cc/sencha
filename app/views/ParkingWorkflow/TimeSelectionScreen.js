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
        {
            xtype: 'datepickerfield',
            name: 'reminder',
            label: 'Reminder',
            picker: { yearFrom: 2000 }
        },
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
