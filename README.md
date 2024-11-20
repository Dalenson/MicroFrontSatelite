# Micro Frontends com React e iFrames

Este repositório contém uma implementação simples de um sistema com **micro frontends** utilizando React. O projeto é dividido em três partes:  

1. **App Principal**: é o contêiner principal que carrega os aplicativos satélites através de iframes.  
2. **App Satélite 1**: um micro frontend independente, que pode ser carregado no App Principal via iframe.  
3. **App Satélite 2**: outro micro frontend independente, carregado no App Principal via iframe.  

## Estrutura do Projeto

```plaintext
MicroFrontSatelite --> https://github.com/Dalenson/MicroFrontSatelite
App1 --> https://github.com/Dalenson/MicroFrontAppOne
App2 --> https://github.com/Dalenson/MicroFrontAppTwo
```

## Tecnologias Utilizada
- React para a construção dos aplicativos.
- Webpack para empacotamento e otimização dos projetos.
- React Router (opcional) para navegação interna nos satélites.

## Como executar
- Instalar utilizando **npm install** em todos os projetos
- Executar os projetos com **npm start**
- Abrir o projeto principal na porta 8000
