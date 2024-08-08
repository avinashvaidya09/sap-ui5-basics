sap.ui.define([
    "sap/ui/base/ManagedObject",
],
    function (ManagedObject) {
        "use strict";

        return ManagedObject.extend("com.learn.ui5.sapui5basics.controller.HelloDialog", {
            
            constructor: function (oView) {
                this._oView = oView;
            },

            exit: function () {
                delete this._oView;
            },

            open: function (sViewName) {
                var oView = this._oView;
                
                    
                // Create dialog lazily
                if (!oView.byId("helloDialog")) {
                    // Create a fragment controller
                    var oFragmentController = {
                        onCloseDialog: function () {
                            oView.byId("helloDialog").close();
                        }
                    }
                    // Load the fragment definition and add it to the view
                    var oDialog = sap.ui.xmlfragment(oView.getId(), "com.learn.ui5.sapui5basics.view.fragment.HelloDialog", oFragmentController);
                    oView.addDependent(oDialog);
                    // Access and set the text of the Text control
              
                    
                    oDialog.open();

                } else {
                    
                    oView.byId("helloDialog").open();
                }
                
                var oText = oView.byId("helloDialogText");
                if (oText) {
                    oText.setText("Called from: " + sViewName);
                }
                
            }
        });
    });
