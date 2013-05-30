/// <reference path="../../definitions/ExtJS-4.2.0-Typed.d.ts" />
Ext.define("DeftTypeScript.view.Viewport", {
    extend: "Ext.container.Viewport",
    requires: [
        "DeftTypeScript.view.MainPanel"
    ],
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
//@ sourceMappingURL=Viewport.js.map
