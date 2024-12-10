import { loadPage } from 'https://efieapp.github.io/efieprototype/index.js';

window.addEventListener("load", (e) => {
    e.preventDefault();
    
    let loadr = document.querySelector("#loadpage");
    loadr.innerText = "Efie N'Fie Property Management Company.";
    
    loadPage()
});