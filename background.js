let color = '#' + Math.floor(Math.random() * 16777215).toString(16);

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({color: color});
    console.log('Default background color set to', `${color}`);
});