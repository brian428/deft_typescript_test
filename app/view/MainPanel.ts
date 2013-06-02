/// <reference path="../../definitions/ExtJS.d.ts" />
/// <reference path="../../definitions/DeftJS.d.ts" />

/**
* Main (root) UI container.
*/
Ext.define("DeftTypeScript.view.MainPanel", <Ext.panel.IPanel>{
    extend: "Ext.panel.Panel",
    alias: [ "widget.deftTypeScript-view-mainPanel" ],
    controller: "DeftTypeScript.controller.MainPanelController",

    header: true,
    title: "Main Panel",
    layout: "anchor",

    defaults: {
        anchor: "100% 100%"
    },

    initComponent: function () {
        Ext.applyIf(this, {
            items: [
              {
                  html: "<div style='padding: 20px; font-size: x-large'>Add your own views as children of MainPanel.</span>"
              }
            ]
        });
        return this.callParent(arguments);
    }

});