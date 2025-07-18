Step 1 - Clone Repository into the following path inside your plugin project: (/home/user/projects/digital-manufacturing-extension-samples/dm-coreplugin-extensions/plugins/webapp/assemblyPointExtensionProvider) 
       - Open and find Data name in your plugin’s index.html file.
       
Step 2 - Identify the data  path (e.g., sap.example.plugins.assemblyPointExtensionProvider). And Replace with your plugin path. like (rits.extension.plugin)
       - Right-click on the cloned folder assemblyPointExtensionProvider.
       - Select "Find in Folder".
       - Perform the following search-and-replace operations:
       
	   1. Replace 1:
            - Use this in the Search field: sap.example.plugins.assemblyPointExtensionProvider
            - Use this in the replace field: rits.extension.plugin
            - Click "Replace All Icon".
       2. Replace 2:
            - Use this in the Search field:
            - Convert your data-name (e.g., rits.extension.plugin) to a folder path by replacing dots . with slashes / (e.g., rits/extension/plugin).
            - Use this in the replace field: rits/extension/plugin
            - Click "Replace All Icon".
            
Step 3 - Open the file: yourPlugin/webapp/designer/component.json
       - Inside the extensions list, add an entry for the plugin with the following structure:
          {
            "provider": "rits/custom/plugin/assemblyPointExtensionProvider/ExtensionProvider",
            "controller": "sap.dm.dme.plugins.assemblyPointExtensionProvider",
            "inclusions": [{
              "pods": ["YourPods"],
              "plants": ["YourPlant"]
            }]
          }
		  -["YourPods"] Replace with your Pod Name.
		  -["YourPlant"] Replace with your Plant.
    
Step 4 - Copy Past Utils from Clone Repository into the following path inside your plugin project: (plugins/webapp/utils)
	    - Replace all with your Plugin path (eg sap.example.plugins) => rits.customplugin.plugins.
	    -Ensure provider matches the correct plugin path. It should be:
     <data-name with slashes>/assemblyPointExtensionProvider/ExtensionProvider. 
     For example, if your data-name is rits.extension.plugin, then it becomes: rits/extension/plugin/assemblyPointExtensionProvider/ExtensionProvider.
     
Step 5 - Build your mta.yaml and Deploy Your mta.archives file. 

Step 6 - Verify the Result
       - Navigate to the relevant section in your app.
       - Verify that the extension is working as expected and is correctly displayed for the specified pods and plants configured in the component.json file.
       
