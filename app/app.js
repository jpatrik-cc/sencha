Ext.regApplication({
    name: 'app',
    phoneStartupScreen: 'app/images/phone_startup.png',
    icon: 'app/images/icon.png',
    launch: function() {
        this.launched = true;
        this.mainLaunch();
    },
    mainLaunch: function() {
        //uncomment this to make the app device-only
        //if (!device || !this.launched) {return;}
        console.log('app.mainLaunch');
        this.views.viewport = new this.views.Viewport();
    }
});