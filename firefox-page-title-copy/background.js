browser.runtime.onInstalled.addListener(function () {
    // Create context menu items
    browser.contextMenus.create({
        id: "pageCopyTitle",
        title: "Copy Page Title",
        contexts: ["page"]
    });

    browser.contextMenus.create({
        id: "tabCopyTitle",
        title: "Copy Page Title",
        contexts: ["tab"]
    });
});

browser.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "pageCopyTitle" || info.menuItemId === "tabCopyTitle") {
        browser.tabs.sendMessage(tab.id, {action: "copyPageTitle"});
    }
});

browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "pageTitleCopied") {
        console.log("Page title copied to clipboard");
    }
});
