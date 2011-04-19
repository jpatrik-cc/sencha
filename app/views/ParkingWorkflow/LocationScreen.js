app.views.parkingWorkflow.LocationScreen = Ext.extend(Ext.Panel, {
    componentName: 'LocationScreen',
    scroll: 'vertical',
    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'justify'
    },

    dockedItems: [
    {
        xtype: 'toolbar',
        dock: 'top',
        title: 'Location',
    }], 

    popup: new Ext.MessageBox({
        floating: true,
        modal: true,
        items: [
            {xtype: 'zipfield',
             name : 'numberstest',},
            new Ext.Button({
                ui  : 'confirm',
                text: 'Confirm',
                padding: 10,
                margin: '20 0 0 0',
                handler: function(a,b,c){
                    app.views.parkingWorkflow.locationScreen.popup.hide('pop');
                },
            }),
        ],
        dockedItems: [
            {xtype: 'toolbar',
             dock: 'top',
             title: 'Welcome!',},
            new Ext.Panel({
                html:'<div id="firstTime">Enter your activation code from <a href="http://www.linkid.com">linkid</a></div>',
            })
        ]
    }),
    
    listeners:{
        afterrender: function(panel){
            var user = localStorage.getItem("user")
            if ( user ){
                //temporary
                localStorage.removeItem("user");
            }else{
                
                localStorage.setItem("user", "activated");
            }
            //Move this to the first-time-use case
            this.popup.show('pop');
        },
        activate : function(panel){
            var geo = new Ext.util.GeoLocation({
                autoUpdate: false,
                listeners: {
                    locationupdate: function (geo) {
                        img = document.createElement('img');
                        img.setAttribute('style','border-radius: 5px;');
                        img.setAttribute('src','http://maps.google.com/maps/api/staticmap?markers='+geo.latitude+','+geo.longitude+'&zoom=16&size=300x140&sensor=true');
                        //img.setAttribute('src','http://maps.google.com/maps/api/staticmap?markers='+55.715593+','+13.21636+'&zoom=16&size=300x140&sensor=true');
                        div = document.getElementById("map_img");
                        if ( div.firstChild ){ //This is a little week, but works for now
                            div.removeChild(div.firstChild);
                        }
                        div.appendChild(img);
                    },
                    locationerror: function (   geo,
                                                bTimeout, 
                                                bPermissionDenied, 
                                                bLocationUnavailable, 
                                                message) {
                        if(bTimeout){
                            alert('Timeout occurred.');
                        }
                        else{
                            alert('Error occurred.');
                        }
                    }
                }
            });
            geo.updateLocation();
        }
    },

    items:[
        {
            contentEl: 'locationScreen'
        },
        /* {contentEl: 'parkingTerms'}, */
        new Ext.Button({
            ui  : 'normal',
            text: 'Park here',
            /* width: 320, */
            height: 50,
            padding: 10,
            margin: '10 10 10 10',
            centered: true,
            handler: function ()
            {
                Ext.dispatch(
                {
                    controller: app.controllers.mainDispatcher,
                    action: 'next',
                    animation: { type: 'slide', direction: 'left' }
                });
            }
        }),

    ],
    
    initComponent: function() {
        console.log('LocationScreen.init');
        app.views.parkingWorkflow.LocationScreen.superclass.initComponent.apply(this, arguments);
    }
});

