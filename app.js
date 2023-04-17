/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ABC.Application',

    name: 'ABC',

    requires: [
        // This will automatically load all classes in the ABC namespace
        // so that application classes do not need to require each other.
        'ABC.*'
    ],

    // The name of the initial view to create.
    mainView: 'ABC.view.main.Main'
});
