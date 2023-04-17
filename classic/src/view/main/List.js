// /**
//  * This view is an example list of people.
//  */
// Ext.define('ABC.view.main.List', {
//     extend: 'Ext.grid.Panel',
//     xtype: 'mainlist',
//
//     requires: [
//         'ABC.store.Personnel'
//     ],
//
//     title: 'Personnel',
//
//     store: {
//         type: 'personnel'
//     },
//
//     columns: [
//         { text: 'Name',  dataIndex: 'name' ,flex: 1},
//         { text: 'Email', dataIndex: 'email', flex: 1 },
//         { text: 'Phone', dataIndex: 'phone', flex: 1 }
//     ],
//
//     listeners: {
//         select: 'onItemSelected'
//     }
// });


// /**
//  * This view is an example list of people.
//  */


 Ext.define('ABC.view.main.List', {
     extend: 'Ext.grid.Panel',
     xtype: 'mainlist',

    requires: [
        'ABC.store.Personnel'
    ],

    title: 'Personnel',


    store: {
        type: 'personnel'
    },
    tbar: {items: [
        {text: 'Create',handler: 'onCreateClick'},
        {text: 'Read',handler: 'onReadClick'}]},
    columns: [
        { text: 'Series_id',  dataIndex: 'Series_id' ,flex: 1},
        { text: 'Series_name', dataIndex: 'Series_name', flex: 1 },
        { text: 'Team1', dataIndex: 'Team1', flex: 1 },
        { text: 'Team2', dataIndex: 'Team2', flex: 1 },
        { text: 'Location', dataIndex: 'Location', flex: 1 },
        { text: 'Timing', dataIndex: 'Timing', flex: 1 },
        //{ text: 'Operation', dataIndex: 'Operation', flex: 1 }
        {
           text: 'DELETE',
           align: 'center',
           xtype: 'actioncolumn',
           items: [
               {
                  xtype: 'button',
                  text: 'DELETE ME',
                  scale: 'small',
                  handler: function(sender,record) {
                    //store.remove(record);
console.log("Inside delete function");
                    var seriesGrid = this.getView();
var seriesStore = seriesGrid.getStore();

//delete selected rows if selModel is checkboxmodel
var selectedRows = seriesGrid.getSelectionModel().getSelection();

seriesStore.remove(selectedRows);
                    alert("Deleted Succeessfully!");
                  }
               }
           ]
       },
       {
           text: 'UPDATE',
           align: 'center',
           xtype: 'actioncolumn',
           items: [
               {
                  xtype: 'button',
                  text: 'DELETE ME',
                  scale: '',
                  handler: function(sender,record,isSelected) {


                  console.log("inside update function");
                            // var removeBtn = this.lookupReference('btnRemoveStudent');
                            // if(record.length)
                            //     removeBtn.setDisabled(false);
                            // else
                            //     removeBtn.setDisabled(true);
                            var seriesGrid = this.getView();
                            var seriesStore = seriesGrid.getStore();

                            //delete selected rows if selModel is checkboxmodel
                            var selectedRows = seriesGrid.getSelectionModel().getSelection();




                      alert("Updated Successfullly");
                  }
               }
           ]
       },


    ],

  listeners: {
        select: 'onItemSelected'
    }
});
