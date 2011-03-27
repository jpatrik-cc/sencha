
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
      };

      var buttonsGroup1 = [{
            text: 'OK',
            ui: 'next',
            handler: tapHandler
        }];

      var buttonsGroup2 = [{
        text: 'Button1',
        ui: 'next',
        handler: tapHandler
      },
      {
        text: 'Button2',
        ui: 'next',
        handler: tapHandler
      }];

      // var Icons = new Ext.TabPanel({
      //   items: [{
      //             iconCls: 'bookmarks',
      //             title: 'Bookmarks',
      //             html: 'Both toolbars and tabbars have built-in, ready to use icons. Styling custom icons is no hassle.<p><small>If you can&#8217;t see all of the buttons below, try scrolling left/right.</small></p>'
      //           }, {
      //             iconCls: 'download',
      //             title: 'Download',
      //             html: 'Pressed Download'
      //           }, {
      //             iconCls: 'favorites',
      //             title: 'Favorites',
      //             html: 'Pressed Favorites'
      //           }, {
      //             iconCls: 'info',
      //             title: 'Info',
      //             html: 'Pressed Info'
      //           }]});

         var dockedItems = [{
                xtype: 'toolbar',
                dock: 'top',
                items: buttonsGroup1
            }, {
                xtype: 'toolbar',
                ui: 'light',
                dock: 'bottom',
                items: buttonsGroup2
            },
         ];

   // end tab bar
      var map2 = new Ext.Map({
            title: 'Map2',
            getLocation: true,
            mapOptions: {
                zoom: 12
            },
            margin:100,
            draggable:false,
            fullscreen:false
        });


      var map = new Ext.Map({
            title: 'Map',
            getLocation: true,
            mapOptions: {
                zoom: 12
            },
        });

        var panel = new Ext.Panel({
            fullscreen: true,
            cardSwitchAnimation: 'slide',
            dockedItems: dockedItems,
            items: [map]
        });
    }
});
