const loadPage = function(){
    let loadr = document.querySelector(".loadpage");
    let loader = document.createElement("span");
    loader.classList.add('spinner-border');
    loadr.appendChild(loader);
    loadr.innerText = "Efie N'Fie Property Management Company.";
    
}

export { loadPage };