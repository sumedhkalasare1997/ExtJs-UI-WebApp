Ext.define('ABC.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'ABC.model.Personnel',

    data: { items: [
        { Series_id: '1', Series_name: "Ashes", Team1: "India", Team2:"Pakistan", Location:"Mohali", Timing:"7:30 pm", Operation:"Delete/Update" },
        { Series_id: '2', Series_name: "Champions Trophy",  Team1: "India",  Team2:"Bangladesh", Location:"Pune", Timing:"7:30 pm", Operation:"Delete/Update"},
        { Series_id: '3', Series_name: "XYZ", Team1: "Srilanka", Team2:"India", Location:"Indore", Timing:"7:30 pm", Operation:"Delete/Update" },
        { Series_id: '4', Series_name: "ABC", Team1: "England", Team2:"India", Location:"Delhi", Timing:"7:30 pm", Operation:"Delete/Update" },
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
