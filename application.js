Ext.setup({
   tabletStartupScreen: 'tablet_startup.png',
   phoneStartupScreen: 'phone_startup.png',
   icon: 'icon.png',
   glossOnIcon: false,
   onReady: function() {

      // Event handler for the buttons...
      var tapHandler = function(button, event) {
         var txt = "User tapped the '" + button.text + "' button.";
         Ext.getCmp('toolbartxt').update(txt);
      };

      // These are groups of buttons... 
      var topButtonGroup = [
         {
         text: 'Forward',
         ui: 'forward',
         handler: tapHandler
      }
      ];

      var bottomButtonGroup = [
         {
         text: 'Back',
         ui: 'back',
         handler: tapHandler
      },
      {
         text: 'Other',
         ui: 'default',
         handler: tapHandler
      }
      ];

      // These are docked to the "main" Panel...
      var dockedItems = [
         {
         xtype: 'toolbar',
         dock: 'top',
         title: 'Location'
      },
      {
         xtype: 'toolbar',
         dock: 'top',
         ui: 'light',
         align: 'right',
         items: topButtonGroup
      }, 
      {
         xtype: 'toolbar',
         ui: 'light',
         dock: 'bottom',
         items: bottomButtonGroup
      },
      ];

      // These are items included in the "main" Panel...
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
         defaults: {
            scroll: 'vertical',
            xtype: 'panel',
            layout: 'hbox',
            pack: 'justify',
            align: 'center',
            defaults: {
               xtype: 'button',
               ui: 'confirm',
            }
         },
         items: [map]
      });
   }
});
