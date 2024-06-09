document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleButton");
  
    chrome.storage.sync.get("enabled", (data) => {
        toggleButton.textContent = data.enabled ? "Disable Setting" : "Enable Setting";
    });
  
    toggleButton.addEventListener("click", () => {
        chrome.storage.sync.get("enabled", (data) => {
            let newStatus = !data.enabled;
            chrome.storage.sync.set({ enabled: newStatus }, () => {
                toggleButton.textContent = newStatus ? "Disable Setting" : "Enable Setting";
                console.log("Setting toggled to:", newStatus);
            });
        });
    });
  });
  