chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.enabled !== undefined) {
        if (request.enabled) {
            document.querySelectorAll("img").forEach(img => img.style.display = "none");
        } else {
            document.querySelectorAll("img").forEach(img => img.style.display = "");
        }
        sendResponse({ status: "done" });
    }
});