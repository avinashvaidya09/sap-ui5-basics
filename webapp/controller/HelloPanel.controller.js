sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/Fragment"
],
    function (Controller, MessageToast, Fragment) {
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
                var oView = this.getView();

                // Create dialog lazily
                if (!this.byId("helloDialog")) {
                    // Load the fragment definition and add it to the view
                    // Load the fragment definition and add it to the view
                    var oDialog = sap.ui.xmlfragment(oView.getId(), "com.learn.ui5.sapui5basics.view.fragment.HelloDialog", this);
                    oView.addDependent(oDialog);
                    oDialog.open();
                } else {
                  this.byId("helloDialog").open();
                }
            },
            onCloseDialog: function () {
                this.byId("helloDialog").close();
            }
        });
    });
