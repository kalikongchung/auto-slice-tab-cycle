let tabId = null;

function openTab(url) {
    if (tabId === null) {
        chrome.tabs.create({ url: url }, (tab) => {
            tabId = tab.id;
            cycleTabs();
        });
    } else {
        chrome.tabs.update(tabId, { url: url });
    }
}

function cycleTabs() {
    // 打开 https://tab.sli.ce.it 并等待8秒
    openTab('https://tab.sli.ce.it');
    setTimeout(() => {
        // 切换到 https://google.com 并等待5秒
        openTab('https://google.com');
        setTimeout(() => {
            cycleTabs();
        }, 5000);
    }, 8000);
}

// 启动循环
cycleTabs();
