/// <reference path="../definitions/ExtJS-4.2.0-Typed.d.ts" />
Ext.Loader.setConfig({
    enabled: true,
    paths: {
        "DeftTypeScript": "app"
    }
});
Ext.syncRequire([
    "Ext.Component", 
    "Ext.ComponentManager", 
    "Ext.ComponentQuery"
]);
