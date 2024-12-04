const loadPage = function(){
    let loadr = document.querySelector("#loadpage");
    loadr.innerText = "Efie N'Fie Property Management Company.";
    const loadEfie = "https://efieapp.github.io/efieprototype/home.html";
    window.location.assign(loadEfie)
}

const checkOut = function(){
    const checkouturl = "https://efieapp.github.io/efieprototype/checkout/index.html";
    
    window.open(checkouturl, "_blank", "location=false, status=true");
    status = "Buy Home | Efie N'fie";
    if(location.href="https://efieapp.github.io/efieprototype/home.html"){
        window.close();
    }
}

const joinHost = function(){
    const clienteleurl = "https://efieapp.github.io/efieprototype/checkout/index.html";
    
    window.open(clienteleurl, "_blank", "location=false, status=true");
    status = "Join hosts | Efie N'fie";
    if(location.href="https://efieapp.github.io/efieprototype/home.html"){
        window.close();
  }
}

const signin = function (){
    const signinurl = "https://efieapp.github.io/efieprototype/signin/index.html";
}

export { loadPage, checkOut, joinHost };