let currentHighlightColor = '';

// Função para aplicar o destaque nos links da página
function highlightLinks(color) {
  const links = document.querySelectorAll('a');
  for (const link of links) {
    link.style.backgroundColor = color;
  }
}

// Função inicial que pega a cor salva e aplica na página
function applyInitialHighlight() {
    chrome.storage.sync.get('highlightColor', (data) => {
        if (data.highlightColor) {
            currentHighlightColor = data.highlightColor;
            highlightLinks(currentHighlightColor);
        }
    });
}

// Roda a função assim que o script é injetado
applyInitialHighlight();

// Ouve por mudanças na cor (se o usuário salvar uma nova cor no popup)
chrome.storage.onChanged.addListener((changes, namespace) => {
    if (changes.highlightColor) {
        const newColor = changes.highlightColor.newValue;
        currentHighlightColor = newColor;
        highlightLinks(currentHighlightColor);
    }
});