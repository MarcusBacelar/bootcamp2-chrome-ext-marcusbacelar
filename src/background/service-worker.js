// Evento disparado quando a extensão é instalada
chrome.runtime.onInstalled.addListener(() => {
  // Define uma cor padrão inicial amarela no storage
  chrome.storage.sync.set({ highlightColor: '#FFFF00' });
});