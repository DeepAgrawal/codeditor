# Codeditor

Codeditor is an online code editor for HTML, CSS and JavaScript built on **React (TypeScript)**. Its perfect for quick code runs and testing without opening full featured IDE on PC.

## Installation

NPM package managers is required for installation. ([click here](https://nodejs.org/en/) to download node)

```bash
# install all packages in package.json
npm install
```

## Usage

```bash
# start the server
npm start
```

## Features

- Hot Reload
- Code Intellisense
- Syntax Highlighting
- Collapsible Editor

## Libraries

- [Monaco](https://www.npmjs.com/package/@monaco-editor/react#multi-model-editor) - Text editor library used by vs code
- [SASS](https://www.npmjs.com/package/node-sass) - For SASS support
- [Typescript](https://www.npmjs.com/package/typescript) - For TypeScript support

## Dyte Tasks Status

- There are 3 sections, namely:
  - “file explorer” pane that contains 3 files: index.html, index.css, index.js. ✅
  - “code editor” that supports syntax highlighting for HTML, CSS, and JS. ✅
  - “live view” section to show the rendered HTML website. ✅
- Clicking on a file from the “file explorer” should display the corresponding content on the code editor for editing. ✅
- The “live view” section must display the rendered website that was created by the user. When a change is made to any of the index.html, index.css, or index.js files, the “live view” section should hot-reload, and display the new output. ✅
- Bonus:
  - Create a feature to save your code, and generate a shareable link (such as https://editor.io/edit/<unique-id>) that should show the saved code when the link is visited. Use the Pastebin Developer API to save your code, generate a unique link, and then load it back at a later stage.
  - Deploy your website on Github pages. ✅
  - Make your React application using Typescript. ✅

## License

[MIT](https://choosealicense.com/licenses/mit/)
