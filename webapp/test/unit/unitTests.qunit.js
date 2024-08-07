/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comlearnui5/sap-ui5-basics/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
