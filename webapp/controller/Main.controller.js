sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],
    function (Controller, MessageToast, JSONModel, ResourceModel) {
        "use strict";

        return Controller.extend("com.learn.ui5.sapui5basics.controller.Main", {
            onInit: function () {
                //  Set the data model on the view
                var oData = {
                    recepient: {
                        name: "UI5"
                    }
                };

                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);

                // Set i18n model
                var i18nModel = new ResourceModel({
                    bundleName: "com.learn.ui5.sapui5basics.i18n.i18n",
                    supportedLocales: [""],
                    fallbackLocale: ""
                });

                this.getView().setModel(i18nModel, "i18n");
            },
            onPress: function () {
                // Read the message from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recepient/name");
                var finalMessage = oBundle.getText("helloMessage", sRecipient);

                // Show UI5 alert
                MessageToast.show(finalMessage);
            }
        });
    });
