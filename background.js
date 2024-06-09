chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ enabled: false }, () => {
        console.log("Initial setting set to false.");
    });
});

chrome.storage.onChanged.addListener((changes, namespace) => {
    if (changes.enabled) {
        console.log("Enabled state changed to:", changes.enabled.newValue);

        // Update content settings for images globally
        chrome.contentSettings.images.set({
            primaryPattern: "<all_urls>",
            setting: changes.enabled.newValue ? "block" : "allow"
        }, () => {
            // Reload the current tab after changing the setting
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.tabs.reload(tabs[0].id);
            });
        });
    }
});
