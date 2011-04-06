app.views.checkoutWorkflow.ParkedCarDetailScreen = Ext.extend(Ext.Panel, {
    styleHtmlContent:true,
    scroll: 'vertical',
    items: [
        {tpl:[
            '<h4>Your car {licensePlate}</h4>',
            'has been parked at {owner} since {time}',
        ]},
        {tpl:[
            '<h4>Your total payment is: {ammount}</h4>',
        ]},
        new Ext.Button({
            ui  : 'confirm-round',
            text: 'Checkout'
        }),
        new Ext.Button({
            ui  : 'round',
            text: 'Extend'
        }),
    ]
});