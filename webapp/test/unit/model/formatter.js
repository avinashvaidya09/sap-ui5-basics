sap.ui.define([
	"com/learn/ui5/sapui5basics/model/formatter",
	"sap/ui/model/resource/ResourceModel",
], (formatter, ResourceModel) => {
	"use strict";

	QUnit.module("Formatting functions", {});

	QUnit.test("Should return the translated texts", (assert) => {
        
        const oResourceModel = new ResourceModel({
            bundleUrl: sap.ui.require.toUrl("com/learn/ui5/sapui5basics/i18n/i18n.properties"),
            supportedLocales: [
                ""
            ],
            fallbackLocale: ""
        });

		var oModel = this.stub();
		oModel.withArgs("i18n").returns(oResourceModel);
		var oViewStub = {
			getModel: oModel
		};
		var oControllerStub = {
			getView: this.stub().returns(oViewStub)
		};


        const fnIsolatedFormatter = formatter.translateStatusText.bind(oControllerStub);

        // Assert
        assert.strictEqual(fnIsolatedFormatter("PEN"), "Pending", "The long text for Status PEN is correct");
        assert.strictEqual(fnIsolatedFormatter("INP"), "In Prog", "The long text for Status INP is incorrect");
        assert.strictEqual(fnIsolatedFormatter("CAN"), "Done", "The long text for Status CAN is incorrect");
        assert.strictEqual(fnIsolatedFormatter("SHP"), "Shipped", "The long text for Status SHP is correct");
	});
});