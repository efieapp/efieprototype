const loadPage = function(){
    let loadr = document.querySelector("#loadpage");
    loadr.innerText = "Efie N'Fie Property Management Company.";
    const loadEfie = "https://efieapp.github.io/efieprototype/home.html";
    window.open(loadEfie,"_blank","location=false,status=true")
    status = "Efie N'Fie Property Management Company";
    if(location.href = "https://efieapp.github.io/efieprototype/index.html"){
        window.close();
    }
}

export { loadPage };