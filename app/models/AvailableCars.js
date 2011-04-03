app.models.availableCars = Ext.regModel("app.models.AvailableCars", {
    fields: [
        {name: "licensePlate", type: "string"},
        {name: "make", type: "string"},
        {name: "model", type: "string"},
    ]
});

app.stores.availableCars = new Ext.data.JsonStore({
    model  : 'app.models.AvailableCars',

    data: [
        {id: 'XRK-55D', licensePlate: 'XRK-55D', make: 'Ferrari', model:'F50'},
        {id: 'XBV-931', licensePlate: 'XBV-931', make: 'BMW', model:'335is'},
        {id: 'XBV-931', licensePlate: 'XBV-931', make: 'Bentley', 
         model:'Continental Supersports'},
    ]
});

