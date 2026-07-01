# 🧪 Swag Labs - Test Automation with Cypress + Cucumber

Projeto de automação de testes End-to-End (E2E) desenvolvido para o **Swag Labs (SauceDemo)** utilizando **Cypress**, **Cucumber (Gherkin)** e **JavaScript**.

O projeto foi estruturado seguindo o padrão **Page Object Model (POM)**, com foco em organização, reutilização de código e facilidade de manutenção.

Esta é a **primeira etapa** da automação da aplicação, contemplando os fluxos de **Login**, **Catálogo de Produtos** e **Carrinho de Compras**.

---

## 🌐 Aplicação testada

**Swag Labs (SauceDemo)**

https://www.saucedemo.com/

O SauceDemo é uma aplicação de e-commerce disponibilizada pela Sauce Labs para estudos e prática de automação de testes.

---

## 🚀 Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- Cucumber (Gherkin)
- @badeball/cypress-cucumber-preprocessor
- Page Object Model (POM)

---

## 📁 Estrutura do projeto

```text
cypress
│
├── e2e
│   └── features
│       ├── cart.feature
│       ├── login.feature
│       └── product.feature
│
├── fixtures
│
├── screenshots
│
└── support
    ├── helpers
    │   └── sorting_helpers.js
    │
    ├── pages
    │   ├── cart_page.js
    │   ├── detail_page.js
    │   ├── login_page.js
    │   └── product_page.js
    │
    ├── step_definitions
    │   ├── cart_steps.js
    │   ├── detail_steps.js
    │   ├── login_steps.js
    │   ├── product_steps.js
    │   └── checkout_overview_steps.js
    │
    ├── commands.js
    └── e2e.js
```

---

## ✅ Funcionalidades automatizadas

### 🔐 Login

Validação dos principais fluxos de autenticação da aplicação.

#### Login com credenciais válidas

- standard_user
- problem_user
- performance_glitch_user
- error_user
- visual_user

#### Login com credenciais inválidas

- Login sem usuário e senha
- Login apenas com usuário
- Login apenas com senha
- Usuário bloqueado
- Credenciais inválidas
- Validação das mensagens de erro exibidas pela aplicação

---

### 🛍️ Catálogo de Produtos

Validação da página de produtos após a autenticação.

Cenários automatizados:

- Visualização da lista de produtos
- Validação das informações dos produtos (nome, descrição e preço)
- Ordenação por:
  - Nome (A → Z)
  - Nome (Z → A)
  - Menor preço
  - Maior preço
- Adição de produto ao carrinho
- Acesso à página de detalhes do produto

---

### 🛒 Carrinho de Compras

Validação das funcionalidades da página de carrinho.

Cenários automatizados:

- Visualização dos produtos adicionados
- Remoção de produtos do carrinho
- Continuação das compras
- Redirecionamento para a página de Checkout

---

## ✔️ Boas práticas utilizadas

O projeto foi desenvolvido seguindo práticas que facilitam a manutenção e escalabilidade da automação:

- ✅ Page Object Model (POM)
- ✅ Escrita dos cenários utilizando Gherkin (BDD)
- ✅ Step Definitions organizadas por funcionalidade
- ✅ Helpers para reutilização de funções auxiliares
- ✅ Assertions para validação dos comportamentos esperados
- ✅ Utilização de `Background` para evitar repetição de passos
- ✅ Utilização de `Scenario Outline` para execução de múltiplos cenários com diferentes dados
- ✅ Separação das responsabilidades entre Features, Pages, Step Definitions e Helpers

---

## ▶️ Instalação

### Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
```

### Acesse a pasta do projeto

```bash
cd SEU-REPOSITORIO
```

### Instale as dependências

```bash
npm install
```

---

## ▶️ Executando os testes

### Abrir o Cypress (modo interativo)

```bash
npx cypress open
```

### Executar todos os testes (modo headless)

```bash
npx cypress run
```

---

## 📝 Exemplo de cenário em Gherkin

```gherkin
Feature: Product Catalog

Scenario: Add a product to the cart
    When the user adds the product "Sauce Labs Backpack" to the cart
    Then the cart badge should display "1"
```

---

## 🚧 Próximas implementações

As próximas etapas da automação contemplarão:

- Checkout
- Checkout Overview
- Finalização da compra
- Geração de relatórios de execução
- Integração com GitHub Actions (CI/CD)

---

## 👩‍💻 Autora

Projeto desenvolvido como parte dos meus estudos em **Quality Assurance (QA)**, com foco em automação de testes utilizando **Cypress**, **Cucumber (BDD)** e **JavaScript**.
