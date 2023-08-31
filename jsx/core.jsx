/**************************************************************************************************
*
* ADOBE SYSTEMS INCORPORATED
* Copyright 2015 Adobe Systems Incorporated
* All Rights Reserved.
*
* NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
* terms of the Adobe license agreement accompanying it.  If you have received this file from a
* source other than Adobe, then your use, modification, or distribution of it requires the prior
* written permission of Adobe.
*
**************************************************************************************************/

function getMessageFromCore() {
	return 'This is the message from getMessageFromCore';
}

var objCore = {};
objCore.getMessage = function () {
    return 'message from objCore.getMessage';
}

function importFile(filePath) {
    app.project.importFiles([filePath],
        false, // suppress warnings 
        app.project.getInsertionBin(),
        false); // import as numbered stills
}