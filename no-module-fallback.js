(function () {
    // VARS
    const currentScript = document.currentScript;

    // METHODS
    function insertScript({isModule, src, scriptContent}) {
        const script = document.createElement('script');

        if (isModule) {
            script.type = 'module';
        } else {
            script.setAttribute('nomodule', '');
        }

        if (src) {
            script.src = src;
        }

        if (scriptContent) {
            script.innerHTML = scriptContent;
        }

        document.head.appendChild(script); // start loading the script;
    }

    function getCommonScriptContent({isModule}) {
        let commonScriptContent = '';

        if (currentScript.hasAttribute('add-global-class')) {
            commonScriptContent +=
                `document.documentElement.classList.add("${isModule ? 'esmodules' : 'no-esmodules'}");`;
        }

        if (currentScript.hasAttribute('add-global-variable')) {
            commonScriptContent += `window.esmodules = ${String(isModule)};`;
        }

        return commonScriptContent;
    }

    // INIT
    // module
    insertScript({
        isModule: true,
        scriptContent: getCommonScriptContent({isModule: true})
    });
    insertScript({
        isModule: true,
        src: currentScript.getAttribute('module')
    });
    // no-module
    insertScript({
        isModule: false,
        scriptContent: getCommonScriptContent({isModule: false})
    });
    insertScript({
        isModule: false,
        src: currentScript.getAttribute('no-module')
    });
}());