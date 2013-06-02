/// <reference path="../../definitions/ExtJS.d.ts" />

Ext.define("DeftTypeScript.view.Viewport", <Ext.container.IViewport>{
    extend: "Ext.container.Viewport",
    requires: ["DeftTypeScript.view.MainPanel"],

    layout: {
        type: "fit"
    },

    initComponent: function () {
        Ext.applyIf(this, {
            items: [
              {
                  xtype: "deftTypeScript-view-mainPanel"
              }
            ]
        });
        return this.callParent(arguments);
    }

});