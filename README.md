# Native ECMAScript modules utilities

## Installation

* With npm: `npm install es-modules-utils`
* With yarn: `yarn add es-modules-utils`

## Usage

### no-module-fallback

Provides ability to use native ECMAScript modules (aka ES or ES6 modules, with native `import`/`export`)
or the bundled JavaScript file if they are not supported.

The utility script is expected to be included in HTML, e.g.:

```html
<script
            module="./module.js"
            no-module="./no-module.js"
            
            add-global-class
            add-global-variable
            
            src="es-modules-utils/no-module-fallback.js"
    >
    </script>
```

Params:

- `module="module-URL.js"`: the URL of the script file, which will be loaded if the browser DOES support native ECMAScript modules
- `no-module="no-module-URL.js"`: the URL of the script file, which will be loaded in case the browser DOES NOT support native ECMAScript modules
- `add-global-class`: the binary attribute, which enables adding the
`<html class="esmodules">` if ES modules are supported, `<html class="no-esmodules">` otherwise
(can be used e.g. to show some animation till the ES module is loaded)
- `add-global-variable`: the binary attribute, which enables adding the global Boolean variable
`window.esmodules=true/false` (can be used e.g. to decide which method to use to include new scripts)

The solution uses the [`nomodule`](https://html.spec.whatwg.org/#attr-script-nomodule) script attribute approach,
which also can be used without the additional features like:

```html
<script type="module" src="module-URL.js"></script>
<script nomodule src="no-module-URL.js"></script>
```

---

### [Demo live](https://malyw.github.com/es-modules-utils/demo/)

### [Demo code](https://github.com/malyw/es-modules-utils/tree/gh-pages/demo)

