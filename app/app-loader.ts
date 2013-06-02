/// <reference path="../definitions/ExtJS.d.ts" />

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        "DeftTypeScript": "app"
    }
});

Ext.syncRequire(["Ext.Component", "Ext.ComponentManager", "Ext.ComponentQuery"]);