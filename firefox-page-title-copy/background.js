console.log("Page Title Copy: Creating menu items...");

// Create context menu items
browser.contextMenus.create({
        id: "copy-page-title",
        title: "Copy Page Title",
        contexts: ["all", "tab"]
    }, function () {
        console.log("Created page context menu items.");
    }
);

browser.contextMenus.onClicked.addListener((info, tab)=> {
    if (info.menuItemId === "copy-page-title") {
        browser.tabs.sendMessage(tab.id, {action: "copyPageTitle"});
    }
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "pageTitleCopied") {
        console.log("Page title copied to clipboard.");
    }
});
