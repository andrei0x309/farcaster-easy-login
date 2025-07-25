export const navigdateTo = (url: string) => {
        chrome.tabs.create({ url });
}