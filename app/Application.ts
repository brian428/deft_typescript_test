/// <reference path="../definitions/ExtJS-4.2.0-Typed.d.ts" />
/// <reference path="../definitions/DeftJS.d.ts" />
/// <reference path="./config/AppConfig.ts" />

var __extends = function (d, b) {
    var temp = true;
};

module DeftTypeScript {

    export class MyApplication extends Deft.mvc.Application {
        extend: string = "Deft.mvc.Application";
        requires: string[] = ["DeftTypeScript.config.AppConfig", "DeftTypeScript.view.Viewport"];
        
        constructor(_super = function () { } ) {
            super();
            /*
            
            this['constructor'] = function () {
                this.callParent(arguments);
            }
            */
        }

        /**
        * init() runs when Ext.onReady() is called.
        */
        init = function () {
            this.beforeInit();
            Deft.ioc.Injector.configure(this.buildInjectorConfiguration());
            return this.afterInit();
        };

        /**
        * @protected
        * Returns the configuration object to pass to Deft.Injector.configure(). Override in subclasses to alter the Injector configuration before returning the config object.
        * @return {Object} The Injector configuration object.
        */
        buildInjectorConfiguration = function() {
            var config;
            var DeftTypeScript = window['DeftTypeScript'];
            debugger;
            config = {
                appConfig: {
                    className: "DeftTypeScript.config.AppConfig",
                    parameters: [
                      {
                          environment: DeftTypeScript.config.AppConfig.MOCK_DATA_ENV
                      }
                    ]
                }
            };
            return config;
        };

        /**
        * @protected
        * Runs at the start of the init() method. Override in subclasses if needed.
        */
        beforeInit = function() {};

        /**
        * @protected
        * Runs at the end of the init() method. Useful to create initial Viewport, start Jasmine tests, etc.
        */
        afterInit = function() {
            Ext.tip.QuickTipManager.init();
            return Ext.create("DeftTypeScript.view.Viewport");
        }

    }
}
var config = new DeftTypeScript.MyApplication();
Ext.define("DeftTypeScript.Application", config);
