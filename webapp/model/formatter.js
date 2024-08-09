sap.ui.define([
    "sap/ui/model/json/JSONModel"
], 
function (JSONModel) {
    "use strict";

    return {
        translateStatusText: function (sStatus) {
               
            var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

            switch (sStatus) {
                case "INP":
                    return oResourceBundle.getText("INP");
                case "DLV":
                    return oResourceBundle.getText("DLV");
                case "PEN":
                    return oResourceBundle.getText("PEN");
                case "CAN":
                    return oResourceBundle.getText("CAN");
                case "SHP":
                    return oResourceBundle.getText("SHP");
                default:
                    return sStatus;
            }
        }
    }

});