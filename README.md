# 🧪 Swag Labs - Test Automation with Cypress + Cucumber

Projeto de automação de testes End-to-End (E2E) desenvolvido para o **Swag Labs (SauceDemo)** utilizando **Cypress**, **Cucumber (BDD)** e **JavaScript**.

O projeto foi estruturado seguindo o padrão **Page Object Model (POM)**, priorizando organização, reutilização de código e facilidade de manutenção.

A automação contempla o fluxo completo de compra da aplicação, desde o login até a finalização do pedido, incluindo integração contínua com **GitHub Actions** e geração de relatórios de execução utilizando **Mochawesome**.

---

# 🌐 Aplicação testada

**Swag Labs (SauceDemo)**

https://www.saucedemo.com/

O SauceDemo é uma aplicação de e-commerce disponibilizada pela Sauce Labs para estudos e prática de automação de testes.

---

# 🚀 Tecnologias utilizadas

* Cypress
* JavaScript
* Node.js
* Cucumber (Gherkin)
* @badeball/cypress-cucumber-preprocessor
* Page Object Model (POM)
* Mochawesome
* GitHub Actions

---

# 📁 Estrutura do projeto

```text
cypress
│
├── e2e
│   └── features
│       ├── login.feature
│       ├── product.feature
│       ├── cart.feature
│       ├── checkout.feature
│       └── checkout_overview.feature
│
├── fixtures
│
├── reports
│
├── screenshots
│
└── support
    ├── helpers
    │   └── sorting_helpers.js
    │
    ├── pages
    │   ├── login_page.js
    │   ├── product_page.js
    │   ├── detail_page.js
    │   ├── cart_page.js
    │   ├── checkout_page.js
    │   ├── checkout_overview_page.js
    │   └── checkout_complete_page.js
    │
    ├── step_definitions
    │   ├── login_steps.js
    │   ├── product_steps.js
    │   ├── detail_steps.js
    │   ├── cart_steps.js
    │   ├── checkout_steps.js
    │   ├── checkout_overview_steps.js
    │   └── checkout_complete_steps.js
    │
    ├── commands.js
    └── e2e.js

.github
└── workflows
    └── ci.yml
```

---

# ✅ Funcionalidades automatizadas

## 🔐 Login

Validação dos principais fluxos de autenticação da aplicação.

### Cenários automatizados

* Login com credenciais válidas:

  * standard_user
  * problem_user
  * performance_glitch_user
  * error_user
  * visual_user
* Login com credenciais inválidas
* Login sem usuário e senha
* Login apenas com usuário
* Login apenas com senha
* Usuário bloqueado
* Credenciais inválidas
* Validação das mensagens de erro

---

## 🛍️ Catálogo de Produtos

Validação da página de produtos após a autenticação.

### Cenários automatizados

* Visualização da lista de produtos
* Validação das informações dos produtos:

  * Nome
  * Descrição
  * Preço
* Ordenação por:

  * Nome (A → Z)
  * Nome (Z → A)
  * Menor preço
  * Maior preço
* Adição de produtos ao carrinho
* Acesso à página de detalhes do produto

---

## 🛒 Carrinho de Compras

Validação das funcionalidades da página de carrinho.

### Cenários automatizados

* Visualização dos produtos adicionados
* Remoção de produtos do carrinho
* Continuação das compras
* Redirecionamento para a página de Checkout

---

## 📦 Checkout Information

Validação do formulário de informações do cliente.

### Cenários automatizados

* Preenchimento do formulário com dados válidos
* Validação dos campos obrigatórios:

  * Primeiro nome obrigatório
  * Sobrenome obrigatório
  * CEP obrigatório
* Cancelamento do checkout

---

## 📋 Checkout Overview

Validação da revisão do pedido antes da finalização da compra.

### Cenários automatizados

* Exibição das informações do pedido
* Finalização da compra com sucesso
* Cancelamento da compra e retorno ao catálogo de produtos

---

# 📊 Relatórios de execução

O projeto utiliza **Mochawesome** para geração de relatórios detalhados da execução dos testes.

Os relatórios incluem:

* Cenários executados
* Testes aprovados e reprovados
* Tempo de execução
* Evidências da execução (quando disponíveis)

---

# ⚙️ Integração Contínua

O projeto possui uma pipeline de **GitHub Actions**, responsável por:

* Instalar as dependências do projeto
* Executar automaticamente todos os testes
* Gerar os relatórios de execução
* Validar a automação a cada *push* e *pull request*

---

# ✔️ Boas práticas utilizadas

O projeto foi desenvolvido seguindo práticas que facilitam a manutenção e escalabilidade da automação.

* ✅ Page Object Model (POM)
* ✅ BDD utilizando Gherkin
* ✅ Step Definitions organizadas por funcionalidade
* ✅ Reutilização de código através de Helpers
* ✅ Assertions para validação dos comportamentos esperados
* ✅ Utilização de Background para reduzir repetição de passos
* ✅ Utilização de Scenario Outline para cenários orientados a dados
* ✅ Separação das responsabilidades entre Features, Pages, Step Definitions e Helpers

---

# ▶️ Instalação

Clone o repositório:

```bash
git clone https://github.com/Nellefb/swaglabs_cypress.git
```

Acesse a pasta do projeto:

```bash
cd swaglabs_cypress
```

Instale as dependências:

```bash
npm install
```

---

# ▶️ Executando os testes

### Abrir o Cypress (modo interativo)

```bash
npx cypress open
```

### Executar todos os testes (modo headless)

```bash
npx cypress run
```

---

# 📝 Exemplo de cenário em Gherkin

```gherkin
Feature: Checkout Information

Scenario: Checkout information is submitted successfully
    When the user fills firstname "Nala", lastname "Frutildis" and postal code "12345678"
    And clicks the Continue button
    Then the Checkout Overview page should be displayed
```

---

# 👩‍💻 Autora

Projeto desenvolvido como parte dos meus estudos em **Quality Assurance (QA)**, com foco em automação de testes utilizando **Cypress**, **Cucumber (BDD)**, **JavaScript** e boas práticas para construção de projetos de automação de testes.
