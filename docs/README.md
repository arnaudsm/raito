# Docs

## Pages
Every markdown file becomes a page.
Root paths redirect to `README.md`.

```
├── folder
│   ├── page.md    = example.com/#/folder/page
│   └── README.md  = example.com/#/folder/
├── about.md       = example.com/#/about
├── README.md      = example.com/#/
└── index.html
```

## Browser Router
Recommended to improve SEO and user experience.

Browser Router is disabled by default, since it requires a default redirection to `index.html`
CloudFlare Pages does it by default.


| Config                 | Example URL          | SEO Friendly |
| ---------------------- | -------------------- | ------------ |
| `browserRouter: false` | `example.com/#/page` | ❌            |
| `browserRouter: true`  | `example.com/page`   | ✅            |


## Components and footer

Components are visible in every page. Useful for navbars, sidebars and footers.

Create your `.md` file under the structure:

```
├── navbar.md
├── index.html
└── footer.md
```

Then add it to the `components`/`footers` list in `index.html`.

```
const config = {
    components: ["navbar"],
    footers: ["footer.md"],
}
```

## Links
```markdown
- [Absolute Link](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
- [Relative Link](subdir/b.md)
- [Parent Page](README.md)
```
Output ⬇️

- [Absolute Link](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
- [Relative Link](subdir/b.md)
- [Parent Page](README.md)

## Blockquotes
```markdown
> Not all those who wander are lost
```

Output ⬇️
> Not all those who wander are lost

## Tables
```markdown
| Ingredient | Quantity | Price |
| ---------- | -------- | ----- |
| Milk       | 1L       | $5    |
| Flour      | 350g     | $2    |
| Eggs       | 6        | $6.50 |
```

Output ⬇️
| Ingredient | Quantity | Price |
| ---------- | -------- | ----- |
| Milk       | 1L       | $5    |
| Flour      | 350g     | $2    |
| Eggs       | 6        | $6.50 |

## Checklists
```markdown
- [x] Beer
- [ ] Pancakes
```

Output ⬇️
- [x] Beer
- [ ] Pancakes

## Lists
```markdown
- Frodo Baggins
- Gandalf the Grey
```
Output ⬇️
- Frodo Baggins
- Gandalf the Grey

## Code Blocks
````markdown
```js
var foo = function (bar) {
  return bar++;
};
```
````
Output ⬇️
``` js
var foo = function (bar) {
  return bar++;
};
```

Synthax highlighting is optional. Enable by uncommenting the  [highlight.js](https://github.com/highlightjs/highlight.js/) imports in `index.html`.

## Images
```markdown
![logo](logo.svg)
```
Output ⬇️

![logo](logo.svg)


## HTML
```markdown
<a href="https://youtu.be/ZxGiEoczryg" class="button">My favorite album</a>
```
Output ⬇️

<a href="https://youtu.be/ZxGiEoczryg" class="button">My favorite album</a>

## Include
```markdown
include(include.md)
```
Output ⬇️
include(include.md)

## Internal Anchors
```markdown
[Link Documentation](#links)
```
Output ⬇️

[Link Documentation](#links)
