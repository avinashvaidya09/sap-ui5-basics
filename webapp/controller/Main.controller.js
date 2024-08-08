sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller, ResourceBundle) {
        "use strict";

        return Controller.extend("com.learn.ui5.sapui5basics.controller.Main", {
            onInit: function () {
                // Set variables required on init of the view
                
            },
            onOpenDialog: function () {
                // Access the i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sViewName = oBundle.getText("reusableComponentPanel");

                this.getOwnerComponent().openHelloDialog(sViewName);
            }
        });
    });
