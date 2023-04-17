// Custom file


// Ext.application({
//   name:'CricketSeriesApp',
//
//   requires:[
//     'Ext.data.*',
//     'Ext.grid.*',
//     'Ext.form.*'
//   ],
//
//   launch: function(){
//     Ext.define('CricketSeries', {
//       extend:'Ext.data.Model',
//       fields:[
// {name: 'id',type:'int'},
// {name:'name',type:'string'},
// {name:'year',type:'int'},
// {name:'venue',type:'string'},
// {name:'champion,type:'string'}
//
//       ]
//     });
//
//     var CricketSeriesStore=Ext.create('Ext.data.Store',{
//       Model:'CricketSeries',
//       autoLoad:true,
//       proxy:{
//         type:'ajax',
//         url:'cricket-series.json',    //-----------------------------change url matches with server side API
//         reader:{
//           type:'json',
//           rootProperty:'data'
//         },
//         writer:{
//           type:'json',
//           writeAllFields:true
//         }
//       }
//     });
//
//     var CricketSeriesGrid=Ext.create('Ext.grid.Panel',{
//       renderTo:Ext.getBody(),
//       store:CricketSeriesStore,
//       width:600,
//       height:400,
//       title:'Cricket Series',
//       columns:[{
//         text:'Name',
//         dataIndex:'name',
//         flex:1
//       }, {
//         text:'Year',
//         dataIndex:'year'
//       },{
//         text:'Venue',
//         dataIndex:'venue',
//         flex:1
//       }, {
//         text:'Champion',
//         dataIndex:'champion'
//       }],
//       dockedItems:[{
//         xtype:'toolbar',
//         items:[{
//           text:'Add',
//           handler:function(){
//             var form=Ext.create('Ext.form.Panel',{
//               title:'Add Cricket Series',
//               bodyPadding:10,
//               defaultType:'textfield',
//               items:[{
//                 fieldLabel:'Name',
//                 name:'name',
//                 allowBlank:false
//               }, {
//                 fieldLabel:'Year',
//                 name:'year',
//                 xtype:'numberfield',
//                 allowBlank:false
//               }, {
//                 fieldLabel:'Venue',
//                 name:'venue',
//                 allowBlank:false
//               }, {
//                 fieldLabel:'Champion',
//                 name:'champion',
//                 allowBlank:false
//               }],
//
//               buttons:[{
//                 text:'save',
//                 var values=form.getValues();
//                 var CricketSeries=Ext.create('CricketSeries',values);
//                 cricketSeriesStore.add(cricketSeries);
//                 cricketSeriesStore.sync({
//                   success: function(){
//                     cricketSeriesGrid.getView
//                   }
//                 })
//               }]
//             })
//           }
//         }]
//       }]
//     })
//   }
// })
