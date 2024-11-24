import { loadPage } from 'https://gamezoneofficial.github.io/Afieapp/index.js';

window.addEventlistener("load", (e) => {
    e.preventDefault();
    
    loadPage()
});

