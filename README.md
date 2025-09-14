# 🎨 Marca-Texto Universal

![Versão](https://img.shields.io/badge/version-1.0.0-blue)
![Licença](https://img.shields.io/badge/license-MIT-green)

*Uma extensão simples e poderosa para o Google Chrome (Manifest V3) que permite destacar todos os links de uma página com a sua cor preferida.*

![Demo da Extensão](https://i.imgur.com/gU82p5u.gif)
*Substitua o link acima por um GIF ou screenshot do seu projeto em ação!*

## 📖 Sobre o Projeto

Este projeto foi desenvolvido como parte do Bootcamp II, com o objetivo de criar uma extensão para Google Chrome funcional e bem estruturada, utilizando as mais recentes especificações do **Manifest V3**. A "Marca-Texto Universal" resolve um problema simples: a dificuldade de visualizar links em páginas com design poluído ou pouco acessível. Com ela, o usuário tem controle total sobre a aparência dos links, podendo destacá-los com qualquer cor que desejar.

---

## ✨ Funcionalidades

-   🎨 **Escolha de Cor Personalizada:** Um seletor de cores intuitivo permite que você escolha qualquer cor para o destaque.
-   💾 **Salva Automaticamente:** Sua cor escolhida é salva e sincronizada entre seus dispositivos através da `chrome.storage.sync` API.
-   ⚡ **Aplicação Instantânea:** A cor é aplicada ou atualizada em tempo real na página, sem a necessidade de recarregar.
-   🌐 **Funciona em Qualquer Site:** Projetada para rodar em praticamente todas as páginas da web (HTTP e HTTPS).
-   🎈 **Leve e Rápida:** Construída com JavaScript puro, sem frameworks, garantindo performance e baixo consumo de memória.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

-   **Manifest V3:** A mais nova plataforma de extensões do Google Chrome.
-   **JavaScript (ES6+):** Lógica principal da extensão.
-   **HTML5:** Estrutura do popup.
-   **CSS3:** Estilização do popup.
-   **Chrome Storage API:** Para armazenamento de dados do usuário.
-   **Chrome Runtime API:** Para comunicação entre os componentes da extensão.

---

## 🚀 Instalação Manual

Como esta extensão não está na Chrome Web Store, ela precisa ser instalada manualmente em modo de desenvolvedor.

1.  **Baixe o Código-Fonte:**
    -   Vá para a página de [Releases](https://github.com/[SEU_USUARIO]/[SEU_REPOSITORIO]/releases) do projeto.
    -   Baixe o arquivo `.zip` da versão mais recente e descompacte-o em uma pasta no seu computador.

2.  **Ative o Modo de Desenvolvedor no Chrome:**
    -   Abra o Google Chrome e navegue até `chrome://extensions`.
    -   No canto superior direito, ative a opção **"Modo de desenvolvedor"**.

3.  **Carregue a Extensão:**
    -   Clique no botão **"Carregar sem compactação"**.
    -   Uma janela do explorador de arquivos será aberta. Selecione a pasta que você descompactou no primeiro passo.
    -   Pronto! A extensão estará instalada e ativa.

---

## 🎮 Como Usar

1.  **Abra o Popup:** Clique no ícone de marca-texto 🎨 que aparecerá na barra de ferramentas do seu navegador.
2.  **Escolha uma Cor:** Use o seletor de cores para encontrar o tom perfeito.
3.  **Salve e Aplique:** Clique no botão "Salvar e Aplicar".
4.  **Navegue com Estilo:** Todos os links na página atual (e em qualquer outra que você visitar) serão destacados com a cor que você escolheu!

---

## 📂 Estrutura de Pastas

O projeto está organizado da seguinte forma para facilitar a manutenção e o entendimento:
