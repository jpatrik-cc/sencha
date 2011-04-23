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

    //popupfield: {xtype: 'zipfield',
    //             name : 'numberstest',},

    popup: new Ext.MessageBox({
        floating: true,
        modal: true,
        items: [
            //app.views.parkingWorkflow.locationScreen.popupfield,
            {xtype: 'zipfield',
             name : 'numberstest',},
            new Ext.Button({
                ui  : 'confirm',
                text: 'Confirm',
                icon: 'app/images/seal_nogreen_small.png',
                iconAlign: 'right',
                //cls: 'x-btn-text-icon',
                padding: '5 10 5 60',
                margin: '20 0 0 0',
                height: 50,
                handler: function(a,b,c){
                    Ext.Msg.alert('Confirmation', 'Your linkID profile is activated for JustPark')
                    app.views.parkingWorkflow.locationScreen.popup.hide('pop');
                },
            }),
        ],
        dockedItems: [
            {xtype: 'toolbar',
             dock: 'top',
             title: 'Welcome!',},
            {html:'<div id="firstTime">You are using JustPark for the first time, please enter your activation code:</div>',},
        ]
    }),
    
    listeners:{
        activate : function(panel){
            var user = localStorage.getItem("user");
            if ( user ){
                localStorage.removeItem("user");
            }else{
                this.popup.show('pop');
                localStorage.setItem("user", "activated");
            }

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
                var parking = JSON.parse(localStorage.getItem("currentParking")) || {};
                parking['parkingLot'] = 'Q-Park 124'
                localStorage.setItem("currentParking", JSON.stringify(parking));

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

