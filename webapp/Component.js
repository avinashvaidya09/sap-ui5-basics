/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */
sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/learn/ui5/sapui5basics/model/models",
    "sap/ui/model/json/JSONModel"
],
    function (UIComponent, models, JSONModel) {
        "use strict";

        return UIComponent.extend("com.learn.ui5.sapui5basics.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                //  Set the data model on the view
                var oData = {
                    recepient: {
                        name: "UI5"
                    }
                };

                var oModel = new JSONModel(oData);
                this.setModel(oModel);
            },

            destroy: function() {
                UIComponent.prototype.destroy.apply(this, arguments);
            }

        });
    }
);