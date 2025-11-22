# Notes
## App Creation
```
>> node -v
>> npm -v
```

```
>> mkdir electron-app
>> cd electron-app
>> npm init -y
```

```
>> npm install --save-dev electron
```

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
