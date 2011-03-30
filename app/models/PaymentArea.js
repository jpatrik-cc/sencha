app.models.PaymentArea = Ext.regModel("app.models.PaymentArea", {
    fields: [
        {name: "id", type: "int"},
        {name: "identifier", type: "string"},
        {name: "area", type: "string"},
        {name: "owner", type: "string"},
    ]
});

app.stores.paymentAreas = new Ext.data.Store({
    model: "app.models.PaymentArea",
    // proxy: {
    //     type: 'ajax',
    //     url : '/payment_areas/'
    // }
});

app.stores.paymentAreas.load()

app.stores.paymentAreas.add({id: 1, indetifier:'test', area:'[1,2]', owner:'QPark'});

app.stores.paymentAreas.sync();
