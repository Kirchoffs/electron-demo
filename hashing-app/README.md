# Notes
## Build
### Prerequisite
Install:
```
>> npm install --save-dev electron-builder
```

package.json:
```json
{
  ...,
  "scripts": {
    ...,
    "build": "electron-builder"
  },
  "build": {
    "appId": "org.syh.demo.hashing-app",
    "productName": "Hashing App",
    "files": [
      "**/*"
    ],
    "directories": {
      "output": "dist"
    }
  },
  ...
}
```

Run:
```
>> npm run dev
```

## Miscellaneous
### Electron
#### Application Events
ready -> window-all-closed -> activate -> before-quit -> will-quit -> quit

#### BrowserWindow Events
- close / closed
- focus / blur
- maximize / minimize / unmaximize
- resize
- show / hide
- read-to-show
- did-finish-load

### Tailwind
- px-1: padding X-axis 1, 1 = 4px = 0.25rem
- rem: root font size, 1rem = 16px

### Cross Origin
```
<script src="https://code.jquery.com/jquery-3.7.1.js" crossorigin="anonymous"></script>
```

Q: What's the purpose of `crossorigin="anonymous"`?  
A: From the perspective of a malicious website (attacker):

__Scenario A: Omitting `crossorigin` (The "Flying Blind" State)__
- __Request Type:__ Standard Script Request (Simple Request).
- __Browser Behavior:__ Permits the download and execution of the script.
- __Result:__ The script throws an error during execution (Syntax Error), but for security purposes, the browser sanitizes the error message into a generic __"Script error."__
- __Attacker Status:__ Can trigger the error but is unable to view the content or details.

__Scenario B: The Attacker Manually Adds `crossorigin="anonymous"`__
- __Request Type:__ CORS Request.
- __Browser Behavior:__ The browser mandates that the server present a "pass" (specifically, the `Access-Control-Allow-Origin` header).
- **Result:** Since the bank server does not provide this header, the browser __blocks the loading process entirely__.
- __Attacker Status:__ The script is never loaded, so the execution error event is never triggered (or it results in a network error, which contains no data payload).