sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("com.learn.ui5.sapui5basics.controller.HelloPanel", {
            onInit: function () {
                // Set variables required on init of the view
                
            },
            onPress: function () {
                // Read the message from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recepient/name");
                var finalMessage = oBundle.getText("helloMessage", sRecipient);

                // Show UI5 alert
                MessageToast.show(finalMessage);
            },
            onOpenDialog: function () {
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sViewName = oBundle.getText("helloPanelTitle");
                this.getOwnerComponent().openHelloDialog(sViewName);
            }
        });
    });
