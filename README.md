# Projeto de Automação de Testes Web - Automation Exercise
[![Test and Generate Allure Report](https://github.com/pricaimiTech/qa.automationexercise-web.webdriverio/actions/workflows/test-and-report.yml/badge.svg)](https://github.com/pricaimiTech/qa.automationexercise-web.webdriverio/actions/workflows/test-and-report.yml)

## Descrição

Este projeto contém testes automatizados para o site [Automation Exercise](https://automationexercise.com/), desenvolvidos como parte de um desafio de automação. O objetivo é demonstrar boas práticas de automação de testes web, incluindo organização de código, uso de padrões de projeto, e integração com ferramentas de relatório e CI/CD.

**Aplicação Alvo:** [https://automationexercise.com/test_cases](https://automationexercise.com/test_cases)

## Casos de Teste Automatizados

Os seguintes casos de teste foram automatizados neste projeto:

1.  **Test Case 1:** Register User
2.  **Test Case 9:** Search Product
3.  **Test Case 12:** Add Products in Cart
4.  **Test Case 13:** Verify Product quantity in Cart
5.  **Test Case 17:** Remove Products From Cart

## Tecnologias e Frameworks Utilizados

*   **Framework de Automação:** WebdriverIO
*   **Linguagem:** JavaScript/TypeScript (conforme sua escolha no projeto WebdriverIO)
*   **Gerenciador de Pacotes:** NPM ou Yarn
*   **Relatórios:** Allure Reports
*   **CI/CD:** GitHub Actions
*   **Padrão de Projeto:** Page Object Model (POM) para organização e manutenibilidade do código.

## Estrutura do Projeto

```bash
. 
├── config/ # Arquivos de configuração do WebdriverIO 
│ └── wdio.conf.js 
├── allure-results/ # Diretório gerado para os resultados brutos do Allure 
├── allure-report/ # Diretório gerado para o relatório HTML do Allure 
├── node_modules/ # Dependências do projeto 
├── src
│ ├── data/ #dados fakes ou mocados 
│ ├── utils/ # Funções utils para a automação
├── test
│ ├── elements/ # mapeamento dos elementos 
│ ├── pageobjects/ # Classes Page Object para interação com as página da aplicação 
│ ├── specs/ # Arquivos de teste (specs) 
├── .github/ # Configurações do GitHub 
│ └── workflows/ 
│ └── main.yml # Workflow do GitHub Actions 
├── .gitignore 
├── package.json 
├── package-lock.json 
└── README.md
``` 


## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte software instalado em sua máquina:

*   [Node.js](https://nodejs.org/) (versão LTS recomendada)
*   [NPM](https://www.npmjs.com/) (geralmente vem com o Node.js) ou [Yarn](https://yarnpkg.com/)
*   [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) (versão 8 ou superior, necessário para o Allure Reports)

## Configuração e Instalação

1.  **Clone o Repositório:**
    ```bash
    git clone https://github.com/pricaimiTech/qa.automationexercise-web.webdriverio.git
    cd qa.automationexercise-web.webdriverio
    ```

2.  **Instale as Dependências:**
    Usando NPM:
    ```bash
    npm install
    ```

3.  **Configuração do Allure Commandline (se ainda não tiver):**
    Siga as instruções de instalação do Allure Commandline para o seu sistema operacional: [Allure Framework - Installation](https://allurereport.org/docs/gettingstarted-installation/).
    Certifique-se de que o `allure` esteja adicionado ao PATH do seu sistema.

## Executando os Testes

Os testes são configurados para rodar em modo *headless* por padrão, conforme especificado no arquivo `wdio.conf.js`.

1.  **Para executar todos os testes:**
    ```bash
    npm test
    ```
    Ou (se configurado no `package.json`):
    ```bash
    yarn test
    ```

2.  **Para executar uma suíte de testes específica:**
    Você pode configurar scripts no `package.json` ou usar a CLI do WebdriverIO para rodar suítes específicas.
    Exemplo de comando (pode variar dependendo da sua configuração `wdio.conf.js`):
    ```bash
    npx wdio wdio.conf.js --suite registerSuite
    npx wdio wdio.conf.js --suite productSuite
    ```
    *Nota: Você precisará definir as `suites` no seu arquivo `wdio.conf.js`.*

    Exemplo de configuração de suítes no `wdio.conf.js`:
    ```javascript
    // ... outras configurações ...
    suites: {
        registerSuite: [
            './specs/suite1/registerUser.e2e.js'
        ],
        productSuite: [
            './specs/suite2/productSearch.e2e.js',
            './specs/suite2/productCart.e2e.js'
            // Adicione aqui os outros testes relacionados a produtos
        ],
        // Adicione mais suítes conforme necessário
    },
    // ... outras configurações ...
    ```

## Relatórios de Teste com Allure

Após a execução dos testes, os resultados brutos do Allure são gerados no diretório `allure-results`.

1.  **Para gerar o relatório HTML do Allure:**
    ```bash
    npm run allure-report
    ```
    Ou (se configurado no `package.json`):
    ```bash
    yarn allure-report
    ```
    Este comando geralmente executa algo como:
    ```bash
    allure generate allure-results --clean && allure open
    ```
    O relatório será aberto automaticamente no seu navegador padrão.

## Pipeline de CI/CD com GitHub Actions

Este projeto está configurado com um pipeline no GitHub Actions, definido no arquivo `.github/workflows/main.yml`.
O pipeline será acionado automaticamente em eventos como `push` para a branch `main` ou em `pull requests` direcionados à `main`.

As etapas do pipeline geralmente incluem:
1.  Checkout do código.
2.  Setup do Node.js.
3.  Instalação de dependências.
4.  Execução dos testes.
5.  (Opcional) Geração e publicação do relatório Allure (pode ser feito usando GitHub Pages ou uma action específica).

## Mapeamento de Elementos

O mapeamento de elementos da interface do usuário é realizado utilizando o padrão Page Object Model. Cada página da aplicação possui uma classe correspondente no diretório `pageobjects/`. Nessas classes, os seletores dos elementos são armazenados e métodos são criados para interagir com esses elementos, promovendo reutilização e facilidade de manutenção.

## Considerações Sobre os Critérios de Avaliação

*   **Código de Fácil Entendimento:** Adoção do padrão Page Object Model (POM) e nomenclaturas claras para variáveis, funções e classes.
*   **Padrão de Projeto:** Utilização do Page Object Model.
*   **Execução Headless:** Configurada por padrão no `wdio.conf.js` para execução em ambientes de CI e para performance.
*   **Testes Organizados em Suítes:** Os testes são agrupados em suítes lógicas (ex: `registerSuite`, `productSuite`) no arquivo `wdio.conf.js` para facilitar a execução seletiva.
*   **Performance de Execução:** O modo headless contribui para a performance. A estrutura do WebdriverIO também é otimizada para execuções eficientes.
*   **Organização do Código:** Estrutura de diretórios clara separando configurações, page objects, specs e relatórios.
*   **Integração com Allure Reports:** Configurado para gerar relatórios detalhados após a execução dos testes.
*   **Pipeline no GitHub Actions:** Implementado para automação de build e teste.
*   **Mapeamento de Elementos:** Centralizado nas classes Page Object.
