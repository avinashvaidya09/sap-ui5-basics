sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History",
    "sap/ui/core/BusyIndicator"
],
    function (Controller, JSONModel, History, BusyIndicator) {
        "use strict";

        return Controller.extend("com.learn.ui5.sapui5basics.controller.BPDetails", {
            onInit: function () {
                 this.loadBusinessPartnerAddressData();
            },
            loadBusinessPartnerAddressData: function() {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("RouteBPDetails").attachPatternMatched(this._onObjectMatched, this);
            },
            _onObjectMatched: function(oEvent) {
                var bpId = window.decodeURIComponent(oEvent.getParameter("arguments").businessPartnerId);
                this.populateBPAddressData(bpId);
                //Call Address Detail oData service with bpid
            },
            populateBPAddressData: function(bpId) {
                BusyIndicator.show(0);
                var oModel = this.getOwnerComponent().getModel("businessPartner");
                var oParameters = {
                    $top: 10,
                    // Additional parameters like $filter, $select, etc. can be added here
                };

                oModel.read("/A_BusinessPartner('"+bpId+"')/to_BusinessPartnerAddress", 
                {
                    urlParameters: oParameters,
                    success: function(oData) {
                        var businessPartnerDetails = oData.results[0];
                        var oBusinessPartnerAddressModel = new JSONModel(businessPartnerDetails);
                        
                        this.getView().setModel(oBusinessPartnerAddressModel, "businessPartnerAddress").updateBindings();
                        BusyIndicator.hide();
                    }.bind(this), 
                    error: function (oError) {
                        console.error("Error loading business partners from API hub", oError);
                        BusyIndicator.hide();
                    }
                })
            },
            onNavBack: function () {
                const oHistory = History.getInstance();
			    const sPreviousHash = oHistory.getPreviousHash();

			    if (sPreviousHash !== undefined) {
				    window.history.go(-1);
			    } else {
				    const oRouter = this.getOwnerComponent().getRouter();
				    oRouter.navTo("RouteMain", {}, true);
			    }
            }
            
        
        });
    });
