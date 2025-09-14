const colorPicker = document.getElementById('colorPicker');
const saveButton = document.getElementById('saveButton');
const statusEl = document.getElementById('status');

// Carrega a cor salva quando o popup é aberto
document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get('highlightColor', (data) => {
    if (data.highlightColor) {
      colorPicker.value = data.highlightColor;
    }
  });
});

// Salva a nova cor quando o botão é clicado
saveButton.addEventListener('click', async () => {
  const color = colorPicker.value;
  
  chrome.storage.sync.set({ highlightColor: color }, () => {
    statusEl.textContent = 'Cor salva!';
    setTimeout(() => { statusEl.textContent = ''; }, 2000);
  });
});