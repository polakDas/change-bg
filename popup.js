let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', (data) => {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
} );

changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
});

function setPageBackgroundColor() {
    chrome.storage.sync.get('color', (data) => {
        document.body.style.backgroundColor = data.color;
    });
}