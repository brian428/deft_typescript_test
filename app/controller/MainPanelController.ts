/// <reference path="../../definitions/ExtJS-4.2.0-Typed.d.ts" />
/// <reference path="../../definitions/DeftJS.d.ts" />

Ext.define("DeftTypeScript.controller.MainPanelController", <Deft.mvc.IViewController>{
    extend: "Deft.mvc.ViewController",

    /*
      Add any inject, control or observe configuration here. E.g.:
    
      inject: [ "someDependencyName" ]
    
      config:
        someDependencyName: null
    
      control:
        someItemId: true
    
      observe:
        someDependencyName:
          someEventName: "someHandlerMethodName"
    */

    init: function () {
        return this.callParent(arguments);
    }
});