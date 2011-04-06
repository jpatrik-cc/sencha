/*
 * Notes
 *
 * J-P likes the concept of "sane defaults". By that he means that most
 * user input required should be pre-filled with an "appropriate" value.
 *
 * Both titles should be identical so that there is no confusion.
 *
 * A few tips from the Apple developers guide:
 *
 * Navigation bar - drilling down hierarchial content.
 *
 * Tab bar - display groups of content or functionality, modes, 
 * views.
 *
 * Tab bar:
 * Use the tab bar (lower bar) to display the different modes of the
 * application or to show the different content categories.
 *
 * Navigation bar:
 * The "back" button should have the title/text of the previous screen, 
 * NOT "back".
 *
 * All action-oriented elements, i.e. buttons etc. should be really prominent
 * and intuitive -- they should be very "tappable". They should also have a
 * minimum size of 44 x 44 pixels.
 *
 * In contrast to website users, app users do NOT mind scrolling, in fact
 * the user controls of app devices are meant to be scrollable. So long lists are
 * MUCH better than a lot of "screens" that require taps.
 *
 * There's also the distinction towards websites that mobile applications are for
 * accomplishing a specific task, whereas websites function as an information 
 * source.
 *
 */

Ext.namespace('app.views.parkingWorkflow');

app.views.ParkingWorkflow = Ext.extend(Ext.Panel, {
    fullscreen: true,
    title: 'Park',
    iconCls: 'download',
    cardSwitchAnimation: 'slide',
    layout: 'card',
    
    // dockedItems: [
    // {
    //     xtype: 'toolbar',
    //     dock: 'top',
    //     title: 'Park',
    //     layout: 
    //     {
    //         // pack: 'right'
    //         type: 'hbox',
    //         //align: 'stretch'
    //         align: 'center',
    //         pack: 'justify'
    //     },
    //     // These items belongs to this dockedItems toolbar
    //     items: [
    //     {
    //         width: 50,
    //         text: 'Back',
    //         ui: 'back',
    //         handler: function ()
    //         {
    //         Ext.dispatch({
    //             controller: app.controllers.mainDispatcher,
    //             action: 'previous',
    //             animation: {type: 'slide', direction: 'right'}
    //         });
    //         }
    //     },
    //     {
    //         width: 50,
    //         text: 'Ok',
    //         ui: 'forward',
    //         handler: function() {
    //             Ext.dispatch({
    //                 controller: app.controllers.mainDispatcher,
    //                 action: 'next',
    //                 animation: {type:'slide', direction:'left'}
    //             });
    //         }
    //     }
    //     ] // end items
    // }
    // ], // end dockedItems toolbar

    listeners:{
        activate : function(panel){
            app.views.parkingWorkflow.setActiveItem(0);
        }
    },

    initComponent: function() {
        //app.stores.contacts.load();
        console.log('ParkingWorkflow.init');
        Ext.apply(app.views.parkingWorkflow, {
            locationScreen: new app.views.parkingWorkflow.LocationScreen(),
            carSelectionScreen: new app.views.parkingWorkflow.CarSelectionScreen(),
            timeSelectionScreen: new app.views.parkingWorkflow.TimeSelectionScreen(),
            paymentScreen: new app.views.parkingWorkflow.PaymentScreen()
        });

        Ext.apply(this, {
            locationScreen: app.views.parkingWorkflow.locationScreen,
            carSelectionScreen: app.views.parkingWorkflow.carSelectionScreen,
            timeSelectionScreen: app.views.parkingWorkflow.timeSelectionScreen,
            paymentScreen: app.views.parkingWorkflow.paymentScreen,
            items: [
                app.views.parkingWorkflow.locationScreen,
                app.views.parkingWorkflow.carSelectionScreen,
                app.views.parkingWorkflow.timeSelectionScreen,
                app.views.parkingWorkflow.paymentScreen
            ]

        });
        app.views.ParkingWorkflow.superclass.initComponent.apply(this, arguments);
    }
});
