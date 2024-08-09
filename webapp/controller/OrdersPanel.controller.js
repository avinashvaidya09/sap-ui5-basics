sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
],
    function (Controller, JSONModel, formatter) {
        "use strict";

        return Controller.extend("com.learn.ui5.sapui5basics.controller.OrdersPanel", {
            formatter: formatter,
            onInit: function () {
                // Set variables required on init of the view
                var oViewModel = new JSONModel({
                    currency: "EUR"
                });

                this.getView().setModel(oViewModel, "view")
                
            }
            
        
        });
    });
