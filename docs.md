# Docs

## Pages
Links to local markdown files should be relative (not starting with `/`).  
Directory links (ending with `/`) will display the root `README.md`.

```
├── folder
│   └── page.md   = example.com/#/folder/page
├── about.md      = example.com/#/about
├── README.md     = example.com/#/
└── index.html
```

### Config
All the config flags are in the the `config` variable in `index.html`.

### Components
Components are visible in every page, and useful for navbars, sidebars and footers.

Create your component in a `.md` file, then add it to `config.json`.


## Links
Markdown
```markdown
[Here's a link](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
```
Output

[Here's a link](https://www.youtube.com/watch?v=dQw4w9WgXcQ)


## Blockquotes
Markdown
```markdown
> Not all those who wander are lost
```

Output
> Not all those who wander are lost

## Tables
Markdown
```markdown
| Ingredient | Quantity | Price |
| ---------- | -------- | ----- |
| Milk       | 1L       | $5    |
| Flour      | 350g     | $2    |
| Eggs       | 6        | $6.50 |
```

Output
| Ingredient | Quantity | Price |
| ---------- | -------- | ----- |
| Milk       | 1L       | $5    |
| Flour      | 350g     | $2    |
| Eggs       | 6        | $6.50 |

## Checklists
Markdown
```markdown
- [x] Beer
- [ ] Pancakes
```

Output
- [x] Beer
- [ ] Pancakes

## Lists
Markdown
```markdown
- Frodo Baggins
- Gandalf the Grey
```

Output
- Frodo Baggins
- Gandalf the Grey

## Code Blocks
Markdown
````markdown
```js
var foo = function (bar) {
  return bar++;
};
```
````
Output
``` js
var foo = function (bar) {
  return bar++;
};
```

Synthax highlighting is optional. Enable by uncommenting the  [highlight.js](https://github.com/highlightjs/highlight.js/) imports in `index.html`.

## Images
Markdown
```markdown
![logo](logo.svg)
```
Output

![logo](logo.svg)

