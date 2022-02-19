(() => {
    const CreateLink = href => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = `./css/${href}`;
        return link;
    },
    CreateScript = (src, defer = true, async = false) => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = `./js/${src}`;
        script.defer = defer;
        script.async = async;
        return script;
    };

    const fragment = document.createDocumentFragment();

    fragment.appendChild(CreateLink(screen.width < 1024 ? "mobile.css" : "desktop.css"));
    fragment.appendChild(CreateScript("main.js"));

    document.getElementsByTagName("head")[0].appendChild(fragment);
})();