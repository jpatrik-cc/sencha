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
    }], // end dockedItems

    listeners:{
        activate : function(panel){
            var geo = new Ext.util.GeoLocation({
                autoUpdate: false,
                listeners: {
                    locationupdate: function (geo) {
                        img = document.createElement('img');
                        img.setAttribute('style','border-radius: 5px;');
                        img.setAttribute('src','http://maps.google.com/maps/api/staticmap?markers='+geo.latitude+','+geo.longitude+'&zoom=16&size=300x140&sensor=true');
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

//Jun  4-11
//May 21-28
//1200 USD

