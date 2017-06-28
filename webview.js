module.exports = (Franz, options) => {
    (function (window) {
        const openExternal = require('electron').shell.openExternal;
        
        window.addEventListener('click', (event) => {
            const baseRegex = new RegExp(`${ window.location.hostname}`);
            if (event.target.tagName === 'A' && !baseRegex.test(event.target.href)) {
                openExternal(event.target.href);
                event.preventDefault();
            }
        });

        var backButton = document.createElement("a");
        backButton.style.position = 'relative';
        backButton.innerHTML = "Back";
        backButton.onclick = function () {
            window.history.back();
        };

	var li = document.createElement("li");
        li.appendChild(backButton);
        document.getElementsByClassName("aui-nav")[0].appendChild(li);

    })(window);
}
