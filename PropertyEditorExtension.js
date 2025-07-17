sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginPropertyEditorExtension"
], function (PluginPropertyEditorExtension) {
    "use strict";

    return PluginPropertyEditorExtension.extend("rits.phaseDetailplugin.plugin.phaseDetailExtension.assemblyPointExtensionProvider.PropertyEditorExtension", {
        constructor: function (oExtensionUtilities) {
            this._oExtensionUtilities = oExtensionUtilities;
        },

        /*
         * Function to override to add content before core properties
         *
         * @param {sap.ui.layout.form.SimpleForm} oPropertyFormContainer Form to add controls to
         * @param {object} oPropertyData Defined Property Data
         * @override
         */
        addPropertyEditorContentBefore: function (oPropertyFormContainer, oPropertyData) {
     
            let oPropertyEditor = this.getController();
            if (oPropertyEditor) {
               
                // let oInput = oPropertyEditor.addInput(oPropertyFormContainer, "bom", oPropertyData);
                // let iIndex = oPropertyFormContainer.indexOfContent(oInput);
                // let aContent = oPropertyFormContainer.getContent();
                // if (aContent[iIndex - 1] && aContent[iIndex - 1].setText) {
                //     aContent[iIndex - 1].setText("BOM :");
                //     console.log("Adding BOM input field");
                // }
        
                let oSwitch = oPropertyEditor.addSwitch(oPropertyFormContainer, "clearMainInput", oPropertyData);
                let iIndex = oPropertyFormContainer.indexOfContent(oSwitch);
                let aContent = oPropertyFormContainer.getContent();
                if (aContent[iIndex - 1] && aContent[iIndex - 1].setText) {
                    aContent[iIndex - 1].setText("Clear Main Input Field");
                }
        
                oSwitch = oPropertyEditor.addSwitch(oPropertyFormContainer, "logToConsole", oPropertyData);
                iIndex = oPropertyFormContainer.indexOfContent(oSwitch);
                aContent = oPropertyFormContainer.getContent();
                if (aContent[iIndex - 1] && aContent[iIndex - 1].setText) {
                    aContent[iIndex - 1].setText("Log to console");
                }
            }
        },

        /*
         * Function to override to add content after core properties
         *
         * @param {sap.ui.layout.form.SimpleForm} oPropertyFormContainer Form to add controls to
         * @param {object} oPropertyData Defined Property Data
         * @override
         */
        addPropertyEditorContentAfter: function (oPropertyFormContainer, oPropertyData) {
            this._oExtensionUtilities.logMessage("PropertyEditorExtension.addPropertyEditorContentAfter: hi");
            return;
        },

        /*
         * Function to override to add custom default property values to core property data
         *
         * @param {object} oPropertyData Defined Property Data
         * @returns {object} Updated Property Data
         * @override
         */
        getPropertyData: function (oPropertyData) {
            if (!oPropertyData) {
                oPropertyData = {};
            }
            if (typeof oPropertyData.clearMainInput === "undefined") {
                oPropertyData.clearMainInput = true;
            }
            if (typeof oPropertyData.logToConsole === "undefined") {
                oPropertyData.logToConsole = true;
            }
            // if (typeof oPropertyData.bom === "undefined") {
            //         oPropertyData.bom = "";
            //     }
            
            return oPropertyData;
        },

        /*
         * Function to override to add custom default property values to core property data
         *
         * @param {object} oPropertyData Defined Property Data
         * @returns {object} Updated Property Data
         * @override
         */
        setPropertyData: function (oPropertyData) {
            this._oExtensionUtilities.logMessage("PropertyEditorExtension.setPropertyData: ", oPropertyData);
            // if (typeof oPropertyData.logToConsole === "undefined") {
            //     oPropertyData.logToConsole = false;
            // }
            return oPropertyData;
        },

        /*
         * Function to override to add custom default property values
         *
         * @param {object} oPropertyData Defined Property Data
         * @returns {object} Updated Property Data
         * @override
         */
        getDefaultPropertyData: function (oPropertyData) {
            oPropertyData.clearMainInput = true;
            oPropertyData.logToConsole = false;
           // oPropertyData.bom = "";
            return oPropertyData;
        }
    })
});
