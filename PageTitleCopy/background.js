chrome.runtime.onInstalled.addListener(function () {
    // Create context menu items
    chrome.contextMenus.create({
        id: "pageCopyTitle",
        title: "Copy Page Title",
        contexts: ["page"]
    });

    chrome.contextMenus.create({
        id: "tabCopyTitle",
        title: "Copy Page Title",
        contexts: ["tab"]
    });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "pageCopyTitle" || info.menuItemId === "tabCopyTitle") {
        chrome.tabs.sendMessage(tab.id, {action: "copyPageTitle"});
    }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "pageTitleCopied") {
        console.log("Page title copied to clipboard");
    }
});
