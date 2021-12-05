<img src="logo.svg" height="200" style="margin: auto;"/>

# [Raito](https://github.com/arnaudsm/raito)  | Minimal Markdown CMS
> Raito is ultralight, 100% static, and resides in a single 7kb file.  
> Hence the name, ライト meaning *light* in Japanese.

Made by [Arnaud de Saint Meloir](https://arnaud.at/), inspired by the defunct [MDwiki](https://github.com/Dynalon/mdwiki/)

[Check the demo!](https://arnaud.at/raito)

## Install
Just drop `index.html` in your website root.

## Usage
Place Markdown files in the directory. Folders redirect to `README.md`. 

Most modern Markdown components are supported, check [the examples](https://arnaud.at/raito/#/examples).

### Customisation
Edit the `config` variable in `index.html`.

### Components
Components are visible in every page, and useful for navbars, sidebars and footers.

Create your component in a `.md` file, then add it to `config.json`.

## Development
### Run locally
Run a local HTTP server in the directory, and access http://localhost:8000 

```bash
python -m http.server 8000
```

### Dependencies
- [Marked.js](https://github.com/markedjs/marked/)
- [highlight.js](https://github.com/highlightjs/highlight.js/)

