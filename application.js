Ext.setup({
   tabletStartupScreen: 'tablet_startup.png',
   phoneStartupScreen: 'phone_startup.png',
   icon: 'icon.png',
   glossOnIcon: false,
   onReady: function() {

      // Event handler for the buttons...
      var tapHandler = function(button, event) {
/*
var txt = "User tapped the '" + button.text + "' button.";
Ext.getCmp('toolbartxt').update(txt);
*/
         //panel.layout.next(slide, true);
         //panel.setActiveItem(2);
      };

      var buttonsGroup1 = [{
         text: 'Ok',
         ui: 'forward',
         //iconMask: true,
         //iconAlign: 'right',
         //iconCls: 'arrow_right',
         handler: function() {
            var nextItem = panel.getLayout().getNext();
            panel.getLayout().setActiveItem(nextItem);
         }
      }];

      var map = new Ext.Map({
         title: 'Map',
         getLocation: true,
         mapOptions: {
            zoom: 12
         }
      });

      //This is going to be our main UI panel where most interactions will happen
      var ui_panel = new Ext.Panel({
         fullscreen: true,
         title: 'Park',
         iconCls: 'download',
         dockedItems:[{
            xtype: 'toolbar',
            dock: 'top',
            layout: {pack: 'right'},
            items: buttonsGroup1
         }],
         cardSwitchAnimation: 'slide',
         layout: 'card',
         items: [map,
            {html: 'card 2'}]
      });

      var current_panel = {
         iconCls: 'time',
         title: 'Parkings',
         html: 'Info about your currently parked cars'
      };

      var cars_panel = {
         iconCls: 'bookmarks',
         title: 'Cars',
         html: 'Pressed Cars'
      };

      var user_panel = {
         iconCls: 'user',
         title: 'User',
         html: 'Pressed User'
      };

      var panel = new Ext.TabPanel(
         {
         defaults: {
            cls: 'card card3'
         },
         fullscreen:true,
         layout: 'card',
         items: [
            ui_panel,
            cars_panel,
            current_panel,
            user_panel
         ],

         tabBar: {
            dock: 'bottom',
            scroll: {
               direction: 'horizontal',
               useIndicators: false
            },
            layout: {
               pack: 'center'
            }
         }
      });
   }
});
