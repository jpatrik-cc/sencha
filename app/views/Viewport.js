app.views.Viewport = Ext.extend(Ext.TabPanel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    tabBar: {
        dock: 'bottom',
        scroll: {
            direction: 'horizontal',
            useIndicators: false
        },
        layout: {
            pack: 'center'
        }
    },

    initComponent: function() {
        //put instances of cards into app.views namespace
        Ext.apply(app.views, {
            parkingWorkflow: new app.views.ParkingWorkflow()

            //contactDetail: new app.views.ContactDetail(),
            //contactForm: new app.views.ContactForm()
        });
        
        //put instances of cards into viewport

        Ext.apply(this, {
            items: [
                app.views.parkingWorkflow,

                //app.views.contactDetail,
                //app.views.contactForm,
            ]
        });
        app.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});