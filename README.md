![logo](logo.svg)

# [Raito](https://arnaud.at/raito) | Mini Markdown CMS ✨📝
> Build your website with a single file!

Raito is an ultralight static CMS/Wiki that weights 8kb.  
Hence the name, ライト meaning *light* in Japanese.

Made by [Arnaud de Saint Meloir](https://arnaud.at), inspired by the defunct [MDwiki](https://github.com/Dynalon/mdwiki/)

Check the [Demo 🔥](https://arnaud.at/raito)

## Install
Just drop `index.html` in your website root.

## Usage
Place Markdown files in the directory. Folders redirect to `README.md`. 

Most modern Markdown components are supported, check [the examples](examples).


### Relative links
All links to local markdown files should be relative (not starting with `/`).  
Directory links (ending with `/`) will display the root `README.md`.

### Customisation
Edit the `config` variable in `index.html`.

### Syntax Highlighting
Uncomment the  [highlight.js](https://github.com/highlightjs/highlight.js/) imports in `index.html`.
This adds significant bundle size.

### Components
Components are visible in every page, and useful for navbars, sidebars and footers.

Create your component in a `.md` file, then add it to `config.json`.

## Development
- Install Node 16+ and Yarn
- `cd dev`
- `yarn` to install dependencies
- `yarn start` to start the HTTP server
- `yarn test` to run tests
- `yarn debug` to debug tests interactively

### Dependencies
- [Marked.js](https://github.com/markedjs/marked/)
- [highlight.js](https://github.com/highlightjs/highlight.js/) (Optional)
