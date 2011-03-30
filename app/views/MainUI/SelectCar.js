app.views.mainUI.SelectCar = Ext.extend(Ext.Panel, {
    componentName: 'SelectCar',
    fullscreen: true,
    dockedItems: [
        {
            dock : 'top',
            xtype: 'toolbar',
            title: 'Standard Titlebar'
        },
        {
            dock : 'top',
            xtype: 'toolbar',
            ui   : 'light',
            items: [
                {
                    text: 'Test Button'
                }
            ]
        }
    ],
    html: 'Testing',

    initComponent: function() {
        console.log('SelectCar.init');
        app.views.mainUI.SelectCar.superclass.initComponent.apply(this, arguments);
    }
});