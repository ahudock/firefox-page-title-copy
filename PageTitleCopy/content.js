browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "copyPageTitle") {
        // Get the document title
        const pageTitle = document.title;

        // Create temporary input with page title
        const inputElement = document.createElement("input");
        inputElement.value = pageTitle;
        document.body.appendChild(inputElement);

        // Select input text
        inputElement.select();
        inputElement.setSelectionRange(0, 99999); // For mobile devices

        // Copy text
        document.execCommand('copy');

        // Remove temp input
        document.body.removeChild(inputElement);

        // Callback
        browser.runtime.sendMessage({action: "pageTitleCopied"});
    }
});
