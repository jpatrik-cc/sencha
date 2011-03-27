var application = (function(){
  return {
    addComponent: function(component){
      if(!this.loaded[component]){
        var s = document.createElement('script');
        s.setAttribute('type', 'text/javascript');
        s.setAttribute('src',component);
        document.getElementsByTagName('head')[0].appendChild(s);
        this.loaded[component] = true;
      }
    },

    loaded: {},
    components: [],
    sections: [],

    init: function(){
      Ext.each(application.components, function(component, index){
        application.addComponent(component);
      });
      application.load();
    },

    load: function(){
      alert(mainUI);
      var tapHandler = function(button, event) {
        var txt = "User tapped the '" + button.text + "' button.";
        Ext.getCmp('toolbartxt').update(txt);
      };

      var buttonsGroup1 = [{
                             text: 'OK',
                             ui: 'forward',
                             handler: tapHandler
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
                                                    items: buttonsGroup1
                                                  }],
                                     cardSwitchAnimation: 'slide',
                                     items: [map]
                                   });

      var current_panel = {
        iconCls: 'time',
        title: 'Parkings',
        html: 'Infor about your currently parked cars'
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
  };
}());

Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false});
Ext.onReady(application.init, application);
