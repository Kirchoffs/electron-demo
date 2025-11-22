# Notes
## Miscellaneous
### Draggable
```css
body {
  -webkit-app-region: drag;
}

p {
  -webkit-app-region: no-drag;
}
```

### Frameless
```js
const mainWindow = new BrowserWindow({
  ...,
  frame: false,
  ...
});
```
