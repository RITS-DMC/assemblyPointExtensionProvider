 sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginExtensionProvider",
    "rits/phaseDetailplugin/plugin/phaseDetailExtension/assemblyPointExtensionProvider/LifecycleExtension",
    "rits/phaseDetailplugin/plugin/phaseDetailExtension/assemblyPointExtensionProvider/PluginEventExtension",
    "rits/phaseDetailplugin/plugin/phaseDetailExtension/assemblyPointExtensionProvider/PropertyEditorExtension",
    "rits/phaseDetailplugin/plugin/phaseDetailExtension/assemblyPointExtensionProvider/ExtensionUtilities",
    "rits/phaseDetailplugin/plugin/phaseDetailExtension/utils/ExtensionUtilities"
], function (PluginExtensionProvider, LifecycleExtension, PluginEventExtension, 
             PropertyEditorExtension, ExtensionUtilities) {
    "use strict";
    return PluginExtensionProvider.extend("rits.phaseDetailplugin.plugin.phaseDetailExtension.assemblyPointExtensionProvider.ExtensionProvider", {
        constructor: function () {
            this.oExtensionUtilities = new ExtensionUtilities();
        },
        getExtensions: function () {
           return [
               new LifecycleExtension(this.oExtensionUtilities),
               new PluginEventExtension(this.oExtensionUtilities),
               new PropertyEditorExtension(this.oExtensionUtilities)
           ];
        }
    })
});
