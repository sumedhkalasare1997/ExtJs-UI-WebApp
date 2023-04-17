/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('ABC.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },


    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
console.log("Inside controller");

        }

    },

    onCreateClick: function(sender,record){

//       var seriesStore = this.getViewModel().getStore('seriesListStore');
//
// //adding dummy student
// var seriesModel = Ext.create('ABC.model.Personnel');
// seriesModel.set("Series_id", 0);
// seriesModel.set("Series_name","");
// seriesModel.set("Team1", "");
// seriesModel.set("Team2", "");
// seriesModel.set("Location", "");
// seriesModel.set("Timing", "");
// //seriesModel.set("DELETE", "");
// //seriesModel.set("UPDATE", "");
//
// seriesStore.insert(0, seriesModel);
//
// var seriesGrid = this.getView();
// seriesGrid.editingPlugin.startEdit(seriesModel, 1);
//
alert("Inserted Succeessfully");
      console.log("Inside create");
    },

    onReadClick:function(sender,record){
      alert("Inside Get Method");
      console.log("Inside Read");
    }








});
