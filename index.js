const loadPage = function(){
    const loadEfie = "https://efieapp.github.io/efieprototype/home.html";
    window.location.assign(loadEfie)
}

const checkOut = function(){
    const checkouturl = "https://efieapp.github.io/efieprototype/index-gallery.html";
    document.write("<h3><span class='spinner spinner-grow'></span>Loading... please wait</h3>");
    
    window.location.assign(checkouturl);
}

const joinHost = function(){
    const clienteleurl = "https://efieapp.github.io/efieprototype/index-list.html";
    document.write("<h3><span class='spinner spinner-grow'></span>Loading... please wait</h3>");
    
    window.location.assign(clienteleurl);
   
}

const Signin = function (){
    const signinurl = "https://efieapp.github.io/efieprototype/signin.html";
    document.write("<h3><span class='spinner spinner-grow'></span>Loading... please wait</h3>");
    
    window.location.assign(signinurl);
}

const Signup = function (){
    const signupurl = "https://efieapp.github.io/efieprototype/signup.html";
    document.write("<h3><span class='spinner spinner-grow'></span>Loading... please wait</h3>");
    
    window.location.assign(signupurl);
}

const viewProfile = function (){
    const viewprofile = "https://efieapp.github.io/efieprototype/profile.html";
    document.write("<h3><span class='spinner spinner-grow'></span>Loading... please wait</h3>");
    
    window.location.assign(viewprofile)
}

export { loadPage, checkOut, joinHost, viewProfile, Signin, Signup };