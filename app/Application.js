/// <reference path="../definitions/ExtJS-4.2.0-Typed.d.ts" />
/// <reference path="../definitions/DeftJS.d.ts" />
/// <reference path="./config/AppConfig.ts" />
Ext.define("DeftTypeScript.Application", {
    extend: "Deft.mvc.Application",
    requires: [
        "DeftTypeScript.config.AppConfig", 
        "DeftTypeScript.view.Viewport"
    ],
    init: /**
    * init() runs when Ext.onReady() is called.
    */
    function () {
        this.beforeInit();
        Deft.ioc.Injector.configure(this.buildInjectorConfiguration());
        return this.afterInit();
    },
    buildInjectorConfiguration: /**
    * @protected
    * Returns the configuration object to pass to Deft.Injector.configure(). Override in subclasses to alter the Injector configuration before returning the config object.
    * @return {Object} The Injector configuration object.
    */
    function () {
        var config;
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
    },
    beforeInit: /**
    * @protected
    * Runs at the start of the init() method. Override in subclasses if needed.
    */
    function () {
    },
    afterInit: /**
    * @protected
    * Runs at the end of the init() method. Useful to create initial Viewport, start Jasmine tests, etc.
    */
    function () {
        Ext.tip.QuickTipManager.init();
        return Ext.create("DeftTypeScript.view.Viewport");
    }
});
//@ sourceMappingURL=Application.js.map
