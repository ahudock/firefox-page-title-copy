chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "copyPageTitle") {
        // Get the document title
        const tabTitle = document.title;

        // Create temporary input
        const inputElement = document.createElement("input");
        inputElement.value = tabTitle;
        document.body.appendChild(inputElement);

        // Select input element text
        inputElement.select();
        inputElement.setSelectionRange(0, 99999); // For mobile devices

        // Copy selected text
        document.execCommand('copy');

        // Remove temp input
        document.body.removeChild(inputElement);

        // Trigger the background script
        chrome.runtime.sendMessage({action: "pageTitleCopied"});
    }
});
