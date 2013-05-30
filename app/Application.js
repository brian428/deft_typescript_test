var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../definitions/ExtJS-4.2.0-Typed.d.ts" />
/// <reference path="../definitions/DeftJS.d.ts" />
/// <reference path="./config/AppConfig.ts" />
var __extends = function (d, b) {
    var temp = true;
};
var DeftTypeScript;
(function (DeftTypeScript) {
    var MyApplication = (function (_super) {
        __extends(MyApplication, _super);
        function MyApplication(_super) {
            if (typeof _super === "undefined") { _super = function () {
            }; }
                _super.call(this);
            this.extend = "Deft.mvc.Application";
            this.requires = [
                "DeftTypeScript.config.AppConfig", 
                "DeftTypeScript.view.Viewport"
            ];
            /**
            * init() runs when Ext.onReady() is called.
            */
            this.init = function () {
                this.beforeInit();
                Deft.ioc.Injector.configure(this.buildInjectorConfiguration());
                return this.afterInit();
            };
            /**
            * @protected
            * Returns the configuration object to pass to Deft.Injector.configure(). Override in subclasses to alter the Injector configuration before returning the config object.
            * @return {Object} The Injector configuration object.
            */
            this.buildInjectorConfiguration = function () {
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
            this.beforeInit = function () {
            };
            /**
            * @protected
            * Runs at the end of the init() method. Useful to create initial Viewport, start Jasmine tests, etc.
            */
            this.afterInit = function () {
                Ext.tip.QuickTipManager.init();
                return Ext.create("DeftTypeScript.view.Viewport");
            };
            /*
            
            this['constructor'] = function () {
            this.callParent(arguments);
            }
            */
                    }
        return MyApplication;
    })(Deft.mvc.Application);
    DeftTypeScript.MyApplication = MyApplication;    
})(DeftTypeScript || (DeftTypeScript = {}));
var config = new DeftTypeScript.MyApplication();
Ext.define("DeftTypeScript.Application", config);
//@ sourceMappingURL=Application.js.map
