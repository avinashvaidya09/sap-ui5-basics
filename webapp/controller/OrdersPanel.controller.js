sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    function (Controller, JSONModel, formatter, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("com.learn.ui5.sapui5basics.controller.OrdersPanel", {
            formatter: formatter,
            onInit: function () {
                // Set variables required on init of the view
                var oViewModel = new JSONModel({
                    currency: "EUR"
                });

                this.getView().setModel(oViewModel, "view")
                
            },
            onFilterSalesOrders: function (oEvent) {
                var aFilter = [];

                var sQuery = oEvent.getParameter("query");

                if (sQuery) {
                    aFilter.push(new Filter("OrderNumber", FilterOperator.Contains, sQuery));
                }

                const oList = this.byId("ordersList");
                const oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);
            }
            
        
        });
    });
