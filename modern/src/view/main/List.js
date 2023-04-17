/**
 * This view is an example list of people.
 */
Ext.define('ABC.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'ABC.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [{
        text: 'Series_name',
        dataIndex: 'series_name',
        width: 100,
        cell: {
            userCls: 'bold'
        }
    }, {
        text: 'Email',
        dataIndex: 'email',
        width: 230
    }, {
        text: 'Phone',
        dataIndex: 'phone',
        width: 150
    }],

    listeners: {
        select: 'onItemSelected'
    }
});
