"use strict";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';

// loader-code: wait until gmailjs has finished loading, before triggering actual extensiode-code.
const loaderId = setInterval(() => {
    if (!window._gmailjs) {
        return;
    }

    clearInterval(loaderId);
    startExtension(window._gmailjs);
}, 100);

// actual extension-code
function startExtension(gmail) {
    console.log("Extension loading...");
    window.gmail = gmail;

    gmail.observe.on("load", () => {
        mountApp(gmail);
    });
}

function mountApp(gmail) {
    const root = document.createElement('div');
    document.body.appendChild(root);
    ReactDOM.createRoot(root).render(React.createElement(App, {gmail}));
}
