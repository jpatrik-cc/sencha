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
        {id: 'XRK-55D', licensePlate: 'XRK-55D', parkingLot: 'IDEON', time:'15:04:35'},
        {id: 'XBV-931', licensePlate: 'XBV-931', parkingLot: 'ICA', time:'15:04:35'},
    ]
});

