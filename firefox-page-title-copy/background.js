browser.runtime.onInstalled.addListener(function () {
    console.log("Page Title Copy: Creating menu items...");

    // Create context menu items
    browser.contextMenus.create({
            id: "copy-page-title-page",
            title: "Copy Page Title",
            contexts: ["page"]
        }, function () {
            console.log("Created page context menu item.");
        }
    );

    browser.contextMenus.create({
            id: "copy-page-title-tab",
            title: "Copy Page Title",
            contexts: ["tab"]
        }, function () {
            console.log("Created tab context menu item.");
        }
    );
});

browser.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "copy-page-title-page" || info.menuItemId === "copy-page-title-tab") {
        browser.tabs.sendMessage(tab.id, {action: "copyPageTitle"});
    }
});

browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "pageTitleCopied") {
        console.log("Page title copied to clipboard.");
    }
});
