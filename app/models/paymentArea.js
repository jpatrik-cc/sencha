// This needs to be re-defined
app.models.PaymentArea = Ext.regModel("app.models.PaymentArea", {
    fields: [
        {name: "id", type: "int"},
        {name: "givenName", type: "string"},
        {name: "familyName", type: "string"},
        {name: "emails", type: "auto"},
        {name: "phoneNumbers", type: "auto"},
    ]
});