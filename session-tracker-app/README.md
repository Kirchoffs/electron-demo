# Notes
## Miscellaneous
### Difference Between `require('path')` and `required(node:path)`
Both `require('path')` and `require('node:path')` load the same built-in Node.js path module and are functionally identical in CommonJS (CJS).

However:
- In CJS, `require('path')` is the legacy form, while `require('node:path')` makes it explicit that you're using a __Node.js core module__, avoiding ambiguity if a third-party package named path exists.
- In ES Modules (ESM), only `import ... from 'node:path'` works. The bare specifier `import ... from 'path'` will fail, because ESM requires the `node:` prefix for __core modules__.
