sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('project1.ext.controller.CustomerObject', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf project1.ext.controller.CustomerObject
			 */
			onInit: function () {

				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				//var oModel = this.base.getExtensionAPI().getModel();
				let historyBtn = sap.ui.core.Element.getElementById("project1::CustomerObjectPage--fe::CustomAction::history");
				historyBtn.setIcon("sap-icon://work-history");
				//historyBtn.setIconFirst(false);

				if (historyBtn) {
					historyBtn.addStyleClass("historyBtn");
				}

				const oView = this.getView();

				
				oView.attachAfterRendering(() => {
					// const aInputs = oView.findAggregatedObjects(true, function (oControl) {
					// 	return oControl.isA("sap.m.Input") &&
					// 		oControl.getBinding("value") &&
					// 		oControl.getBinding("value").getPath() === "phoneNumber";
					// });

					// if (aInputs.length) {
					// 	aInputs[0].attachLiveChange(this.onPhoneLiveChange.bind(this));
					// }
					const phno=sap.ui.core.Element.getElementById("project1::CustomerObjectPage--fe::FormContainer::GeneratedFacet1::FormElement::DataField::phoneNumber::Field-edit");
					phno.attachLiveChange(this.onPhoneLiveChange.bind(this));
				})

			}
			
		}
		,
			onPhoneLiveChange: function (oEvent) {
				debugger;
				let sValue = oEvent.getParameter("value");

				// digit only
				sValue = sValue.replace(/\D/g, "");

				// to limit to 10 digit
				if (sValue.length > 10) {
					sValue = sValue.substring(0, 10);
				}

				oEvent.getSource().setValue(sValue);
			}
	});
});
