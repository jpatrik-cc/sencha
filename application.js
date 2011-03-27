
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

   // For the new tab bar

      var tapHandler = function(button, event) {
         var txt = "User tapped the '" + button.text + "' button.";
         Ext.getCmp('toolbartxt').update(txt);
      }
        
      var buttonsGroup1 = [{
            text: 'Back',
            ui: 'back',
            handler: tapHandler
        }, {
            text: 'Default',
            handler: tapHandler
        }, {
            text: 'Round',
            ui: 'round',
            handler: tapHandler
        }];

      var buttonsGroup2 = [{
            text: 'Back',
            ui: 'back',
            handler: tapHandler
        }, {
            text: 'Default',
            handler: tapHandler
        }, {
            text: 'Round',
            ui: 'round',
            handler: tapHandler
        }];

         var dockedItems = [{
                xtype: 'toolbar',
                // dock this toolbar at the top
                dock: 'top',
                //items: buttonsGroup1.concat(buttonsGroup2).concat(buttonsGroup3).concat(buttonsGroup4)
                items: buttonsGroup1
            }, {
                xtype: 'toolbar',
                // dock this toolbar at the bottom
                ui: 'light',
                dock: 'bottom',
                //items: buttonsGroup1.concat(buttonsGroup2).concat(buttonsGroup3).concat(buttonsGroup4)
                items: buttonsGroup2
            }];

   // end tab bar

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
            dockedItems: dockedItems,
            items: [map]
        });
    }
});
