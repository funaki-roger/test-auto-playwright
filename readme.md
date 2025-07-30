# 🕵️‍♂️ Teste Automático com Playwright

Este projeto realiza uma automação de busca no site do Yahoo utilizando o [Playwright](https://playwright.dev/). 

## 📂 Repositório

🔗 [GitHub - funaki-roger/test-auto-playwright](https://github.com/funaki-roger/test-auto-playwright)

## 🚀 Funcionalidades

- Abre o navegador em modo visível (`headless: false`)
- Simula digitação lenta com `slowMo` e `keyboard.type`
- Realiza busca por "Pacto Soluções"
- Fecha o navegador após 3 segundos

## 📦 Requisitos

- [Node.js](https://nodejs.org/) instalado
- [npm](https://www.npmjs.com/) para gerenciar pacotes

## 🔧 Instalação

1. Clone o repositório:
   ```bash
   git clone git@github.com:funaki-roger/test-auto-playwright.git
   cd test-auto-playwright

## ▶️ Como executar

1. Execute o script com o comando:
    ```bash
    npm run busca

2. Esse comando deve estar definido no seu package.json assim
   ```bash
   "scripts": {
  "busca": "node busca.js"
  }