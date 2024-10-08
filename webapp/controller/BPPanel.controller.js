sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    function (Controller, JSONModel, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("com.learn.ui5.sapui5basics.controller.BPPanel", {
            onInit: function () {
                // Set variables required on init of the view
                this.loadBusinessPartnerData();
                
            },
            loadBusinessPartnerData: function () {
                var oModel = this.getOwnerComponent().getModel("businessPartner");
                var oParameters = {
                    $top: 10,
                    $inlinecount: "allpages"
                    // Additional parameters like $filter, $select, etc. can be added here
                };

                oModel.read("/A_BusinessPartner", 
                {
                    urlParameters: oParameters,
                    success: function(oData) {
                        var oBusinessPartnerModel = new JSONModel(oData.results);
                        this.getView().setModel(oBusinessPartnerModel, "businessPartner")
                    }.bind(this), 
                    error: function (oError) {
                        console.error("Error loading business partners from API hub");
                    }
                })
            },
            onFilterBusinessPartners: function (oEvent) {
                var aFilter = [];

                var sQuery = oEvent.getParameter("query");

                if (sQuery) {
                    aFilter.push(new Filter("BusinessPartner", FilterOperator.Contains, sQuery));
                }

                const oList = this.byId("businessPartnersList");
                const oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);
            },
            loadAddressDetails: function (oEvent) {
                
                var sBusinessPartnerId = oEvent.getSource().getBindingContext("businessPartner").getProperty("BusinessPartner");
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteBPDetails", {
                    businessPartnerId: sBusinessPartnerId
                });
            }
            
        
        });
    });
