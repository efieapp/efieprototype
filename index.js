const loadPage = function(){
    let loadr = document.querySelector("#loadpage");
    loadr.innerText = "Efie N'Fie Property Management Company.";
    const loadEfie = "https://efieapp.github.io/efieprototype/home.html";
    window.location.assign(loadEfie)
}

const checkOut = function(){
    const checkouturl = "https://efieapp.github.io/efieprototype/index-check.html";
    document.write("<h3><span class='spinner spinner-grow'></span>Loading... please wait</h3>");
    
    window.location.assign(checkouturl);
}

const joinHost = function(){
    const clienteleurl = "https://efieapp.github.io/efieprototype/index-list.html";
    
    window.location.assign(clienteleurl);
   
}

const signin = function (){
    const signinurl = "https://efieapp.github.io/efieprototype/signin.html";
    window.location.assign(signinurl);
}

export { loadPage, checkOut, joinHost };