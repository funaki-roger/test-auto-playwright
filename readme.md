# 🕵️‍♂️ Teste Automático com Playwright

Este projeto realiza uma automação de busca no site do Yahoo utilizando o [Playwright](https://playwright.dev/). O script simula uma digitação lenta do termo **"Pacto Soluções"**, aceita cookies se necessário, e exibe um alerta ao final da busca.

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
<<<<<<< HEAD
    "busca": "node busca.js"
    }
=======
     "busca": "node busca.js"
   }
>>>>>>> c93c4006de5dd976fd4d9ec5d65503bb3e858574
