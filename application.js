
/*
var mapScreen = new Ext.Component({
    title: 'Location',
    getLocation: true,
    mapOptions: {
       zoom: 12
    }
});

var panel = new Ext.TabPanel({
    fullscreen: true,
    cardAnimation: 'slide',
    items: [mapScreen]
});
*/

Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady: function() {
        
         var map = new Ext.Map({
            title: 'Map',
            getLocation: true,
            mapOptions: {
                zoom: 12
            }
        });

        var panel = new Ext.TabPanel({
            fullscreen: true,
            cardSwitchAnimation: 'slide',
            items: [map]
        });
    }
});
