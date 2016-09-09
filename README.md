# Questionnaire Service for Node.js

This project is split into the following Node.js modules:

1. qne-core in the "core" folder
  * Contains database scripts and endpoints to JSON API validation, but is server agnostic.
2. qne-respondent in the "respondent" folder
  * Contains lightweight Angular 2 sources compatible with a large number of browsers that implement the respondent's UI
3. qne-admin in the "admin" folder
  * Contains questionnaire admin UI Angular 2 sources, primarily for latest browsers.
4. qne in the "server" folder
  * This contains a standalone implementation of the questionnaire service, using Koa 2 as server and Angular Universal hosting for the qne-respondent module and static hosting for the qne-admin module.

The reason for splitting the project into four separate modules is to make it possible to easily attach qne to your existing server, and to make development of the frontend and backend independent.

## Compilation

Run

```
npm start
```

to build everything and start the server listening at port 3000. Run

```
npm run dev
```

to begin listening to changes and running unit and integration tests.

## Development

### Visual Studio Code

We recommend installing these extensions for [Visual Studio Code](https://code.visualstudio.com/):
* [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
