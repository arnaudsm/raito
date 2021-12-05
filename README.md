<img src="logo.svg" height="200" style="margin: auto;"/>

# [Raito](https://arnaud.at/raito)  | Minimal Markdown CMS
> Raito is ultralight, 100% static, and resides in a single 7kb file.  
> Hence the name, ライト meaning *light* in Japanese.

Made by [Arnaud de Saint Meloir](https://arnaud.at/), inspired by the defunct [MDwiki](https://github.com/Dynalon/mdwiki/)

## Usage
Just drop `index.html` in your website root.

## Components
### Code Blocks
``` js
var foo = function (bar) {
  return bar++;
};
```

### Tables
| Ingredient    | Quantity      | Price  |
| ------------- |---------------|--------|
| Milk          | 1L            | $5     |
| Flour         | 350g          | $2     |
| Eggs          | 6             | $6.50  |

### Checklists
- [x] Beer
- [ ] Pancakes

### Lists
- Frodo Baggins
- Gandalf the Grey



## Development
### Run locally
Run a local HTTP server in the directory, and access http://localhost:8000 

```bash
python -m http.server 8000
```
### Customisation
Use `config.json` to configure strings and components.

### Components
Components are visible in every page, and useful for navbars, sidebars and footers.

Create your component in a `.md` file, then add it to `config.json`, 

## Todo
- [ ] No reload onclick?
- [ ] Subdirectory support