app.models.ParkedCars = Ext.regModel("app.models.ParkedCars", {
    fields: [
        {name: "licensePlate", type: "string"},
        {name: "parkingLot", type: "string"},
        {name: "time", type: "string"},
    ]
});

app.stores.parkedCars = new Ext.data.JsonStore({
    model  : 'app.models.ParkedCars',

    data: [
        {id: 'XRK-55D', licensePlate: 'RDE 154', parkingLot: 'City', time:'1 min'},
    ]
});

