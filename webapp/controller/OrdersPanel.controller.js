sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.learn.ui5.sapui5basics.controller.OrdersPanel", {
            onInit: function () {
                // Set variables required on init of the view
                var oViewModel = new JSONModel({
                    currency: "EUR"
                });

                this.getView().setModel(oViewModel, "view")
                
            }
        
        });
    });
