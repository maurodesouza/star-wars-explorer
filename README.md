<div align="center" id="top">
  <img src="./.github/assets/app.gif" alt="Star Wars Explorer App Gif" />

  &#xa0;
  <p align="center">
    <a href="https://star-wars-explorer.vercel.app">💻 Site</a> &#xa0; | &#xa0;
    <a href="https://stories-star-wars-explorer.vercel.app">📚 Stories</a> &#xa0; | &#xa0;
    <a href="https://coverage-star-wars-explorer.vercel.app">🤖 Coverage</a> &#xa0;
</div>

<h1 align="center">Star Wars Explorer</h1>

<p align="center">
  <img alt="Badge mostrando a principal linguagem do projeto" src="https://img.shields.io/github/languages/top/maurodesouza/star-wars-explorer?color=FFE81F">

  <img alt="Badge mostrando a quantidade de linguagens no projeto" src="https://img.shields.io/github/languages/count/maurodesouza/star-wars-explorer?color=FFE81F">

  <img alt="Badge mostrando o tamanho do repositório" src="https://img.shields.io/github/repo-size/maurodesouza/star-wars-explorer?color=FFE81F">

  <img alt="Badge mostrando quando foi feito o ultimo commit" src="https://img.shields.io/github/last-commit/maurodesouza/star-wars-explorer?color=FFE81F">

  <img alt="Badge mostrando o status da ci" src="https://github.com/maurodesouza/star-wars-explorer/workflows/ci/badge.svg">

</p>

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0;
  <a href="#rocket-principais-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-pré-requisitos">Pré requisitos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a> &#xa0; | &#xa0;
  <a href="#memo-licença">Licença</a> &#xa0; | &#xa0;
  <a href="https://github.com/maurodesouza" target="_blank">Autor</a>
</p>

<br>

## :dart: Sobre ##

O Star Wars Explorer é um projeto que foi desenvolvido para o desafio front end da [Mamboo](https://mamboo.co.ao)!

O desafio consiste em criar um pequeno app utilizando a [API do Star Wars](https://swapi.dev) para que seja possível, pesquisar por algum personagem e ver mais informações sobre o ele, e poder salva-lo como favorito.

Para fazer o app utilizei o [Nextjs](https://nextjs.org) para criar toda a interface, [Storybook](https://storybook.js.org) para fazer a documentação dos componentes, e para os teste unitários [Jest](https://jestjs.io) com [Testing Library](https://testing-library.com/docs/dom-testing-library/intro/) e os e2e [Cypress](https://www.cypress.io), e tudo isso com [Typescript](https://www.typescriptlang.org) ❤

## :rocket: Principais tecnologias ##

<a href="https://nextjs.org">
  <img width="40" title="NextJs" alt="Logo do Next" src="https://raw.githubusercontent.com/maurodesouza/maurodesouza/master/assets/next-logo.svg">
</a> &#xa0; &#xa0;

<a href="https://www.typescriptlang.org">
  <img width="40" title="Typescript" alt="Logo do Typescript" src="https://raw.githubusercontent.com/maurodesouza/maurodesouza/master/assets/typescript-logo.svg">
</a> &#xa0; &#xa0;

<a href="https://styled-components.com">
  <img width="40" title="Styled Components" alt="Logo do Styled Components" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/styled-components/styled-components.png">
</a> &#xa0; &#xa0;

<a href="https://storybook.js.org">
  <img width="40" title="Storybook" alt="Logo do Storybook" src="https://raw.githubusercontent.com/maurodesouza/maurodesouza/master/assets/storybook-logo.svg">
</a> &#xa0; &#xa0;

<a href="https://jestjs.io">
  <img width="40" title="Jest" alt="Logo do Jest" src="https://raw.githubusercontent.com/maurodesouza/maurodesouza/master/assets/jest-logo.svg">
</a> &#xa0; &#xa0;

<a href="https://testing-library.com/docs/dom-testing-library/intro/">
  <img width="40" title="React Testing Library" alt="Logo do React Testing Library" src="https://testing-library.com/img/octopus-64x64.png">
</a> &#xa0; &#xa0;

<a href="https://www.cypress.io">
  <img width="40" title="Cypress" alt="Logo do Cypress" src="https://github.com/maurodesouza/maurodesouza/raw/master/assets/cypress-logo.svg">
</a> &#xa0; &#xa0;

<a href="https://eslint.org">
  <img  width="40" title="Eslint" alt="Logo do Eslint" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/eslint/eslint.png">
</a> &#xa0; &#xa0;

<a href="https://prettier.io">
  <img width="40" title="Prettier" alt="Logo do Prettier" src="https://prettier.io/icon.png">
</a>

&#xa0;

<details>
  <summary>Ver mais</summary>

  <br>

  * [Styled Media Query](https://github.com/morajabi/styled-media-query)
  * [Styled Icons](https://styled-icons.js.org)
  * [React Lottie](https://github.com/chenqingspring/react-lottie)
  * [Axios](https://github.com/axios/axios)
  * [Plop](https://plopjs.com)

</details>

## :white_check_mark: Pré requisitos ##

Antes de começar :checkered_flag:, você precisa ter o [Git](https://git-scm.com) e o [Node](https://nodejs.org/en/) instalados em sua maquina.

## :checkered_flag: Começando ##

```bash
# Clone este repositório
$ git clone https://github.com/maurodesouza/star-wars-explorer

# Entre na pasta
$ cd star-wars-explorer

# Crie um arquivo .env.local e preencha as seguintes variavéis

NEXT_PUBLIC_LOCAL_STORAGE_KEY=@sw-explorer:
SWAPI_API_URL=https://swapi.dev/api

## Você pode seguir o arquivo .env.example também se preferir!

# Instale as dependências
$ yarn

# Para iniciar o projeto
$ yarn dev

# O app vai inicializar em <http://localhost:3000>
```

## :video_game: Comandos

- `dev`: inicia a aplicação em `localhost:3000`
- `build`: cria a build para produção
- `start`: inicia um server com o código da build
- `lint`: roda o eslint na pasta src
- `test`: roda os testes
- `test:watch`: roda os testes no watch mode
- `storybook`: inicia o storybook em `localhost:6006`
- `build-storybook`: cria a build do storybook
- `generate`: cria a estrutura padrão de um componente

&#xa0;

## :memo: Licença ##

Este projeto está sob licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.


Feito com :heart: por <a href="https://github.com/maurodesouza" target="_blank">Mauro de Souza</a>

&#xa0;

<a href="#top">Voltar para o topo</a>

*Readme criado com [Simple Readme](https://marketplace.visualstudio.com/items?itemName=maurodesouza.vscode-simple-readme)*
