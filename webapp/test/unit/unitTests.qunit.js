/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/learn/ui5/sapui5basics/test/unit/model/formatter"
	], function () {
		QUnit.start();
	});
});
