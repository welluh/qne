# Questionnaire Service for Node.js

This project is split into three separate Node.js modules:

1. qne-core in the "core" folder
  * Contains database scripts and endpoints to JSON API validation, but is server agnostic.
2. qne-client in the "client" folder
  * Contains Angular 2 client sources.
3. qne in the "server" folder
  * This contains a standalone implementation of the questionnaire service, using Koa 2 as server and Angular Universal.

The reason for splitting the project in to three modules is to make it possible to easily attach qne to your existing server.

## Compilation

### qne-core

When creating the backend Typescript interfaces from SQL database, clone [sequelize-auto-ts](https://github.com/keunlee/sequelize-auto-ts) and run
```
npm install
node lib/cli.js
```
to generate

### qne-client

## Development

### Visual Studio Code

We recommend installing these extensions for [Visual Studio Code](https://code.visualstudio.com/):
* [WallabyJS](https://marketplace.visualstudio.com/items?itemName=WallabyJs.wallaby-vscode)
* [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) plugin to get correct settings.
