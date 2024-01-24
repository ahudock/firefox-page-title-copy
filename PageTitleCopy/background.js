chrome.runtime.onInstalled.addListener(function () {
    // Create context menu items
    chrome.contextMenus.create({
        id: "copyTitle",
        title: "Copy Page Title",
        contexts: ["page"]
    });

    chrome.contextMenus.create({
        id: "copyTabTitle",
        title: "Copy Tab Title",
        contexts: ["tab"]
    });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "copyTitle" || info.menuItemId === "copyTabTitle") {
        chrome.tabs.sendMessage(tab.id, {action: "copyTitle"});
    }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "copyTitleDone") {
        console.log("Page title copied to clipboard");
    }
});
