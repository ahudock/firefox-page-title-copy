chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "copyTitle") {
        const tabTitle = document.title;

        // Create a temporary input element to copy the text
        const inputElement = document.createElement("input");
        inputElement.value = tabTitle;
        document.body.appendChild(inputElement);

        // Select the text in the input element
        inputElement.select();
        inputElement.setSelectionRange(0, 99999); // For mobile devices

        // Copy the selected text to the clipboard
        document.execCommand('copy');

        // Remove the temporary input element
        document.body.removeChild(inputElement);

        // Notify the background script that copying is done
        chrome.runtime.sendMessage({action: "copyTitleDone"});
    }
});
