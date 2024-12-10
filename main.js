import { checkOut, joinHost, viewProfile, Signin, Signup, loadPage } from 'https://efieapp.github.io/efieprototype/index.js';

const jointoday = document.querySelectorAll('.listhome');
for(let i=0; i<jointoday.length; i++){
    jointoday[i].addEventListener("click", (e) => {
    e.preventDefault();
    
    joinHost();
});

}

const gohome = document.querySelectorAll('.home');
for(let i=0; i<gohome.length; i++){
    gohome[i].addEventListener("click", (e) => {
    e.preventDefault();
    
    loadPage()
});

}

const checkout = document.querySelectorAll('.buyhome');
for(let x=0; x<checkout.length; x++){
checkout[x].addEventListener("click", (e) => {
    e.preventDefault();
   
    checkOut();
});

}

const viewproperty = document.querySelectorAll('.viewprofile');
for(let y=0; y<viewproperty.length; y++){
    viewproperty[y].addEventListener("click", (e) => {
        e.preventDefault();
        
        viewProfile();
    });
}

const signin = document.querySelector('#signin');

signin.addEventListener("click", (e) => {
    e.preventDefault();
    
    Signin();
});

const signup = document.querySelectorAll('.signup');
for(let y=0; y<signup.length; y++){
    signup[y].addEventListener("click", (e) => {
        e.preventDefault();
        
        Signup();
    });
}

//search controller 
 const searchHelper = function (){
 let searxh = document.getElementById("searchterms").value;
let thesearxh = searxh.trim();
let searchresults;
let notfound;
  let inventory = ["Lease", "Sell", "Buy A home","Rent", "Ga-South Clientele"];
  for(count=0;count<inventory.length;count++){
      if(thesearxh.includes(inventory[count])){
          notfound = 1;
          console.log("search found");
          if(typeof(Storage) !== "undefined"){
              localStorage.searchresults = inventory[count];
              if(localStorage.searchresults === "Ga-South Clientele"){
                  document.write("loading... please wait");
                  window.location.assign("https://eduqii-blip.github.io/benitapollosolutions/basbusiness.html");
              }
              else{
           document.write("loading... please wait"); window.location.assign("https://eduqii-blip.github.io/benitapollosolutions/searchresult.html");
           }
          }
      }else{
          notfound = 2;
      }
  }
  
  if(notfound % 2 == 0){
      alert("not found");
      notfound = "found";
  }
}

const searchResult = function (){
let _searchterms = localStorage.searchresults;
    let contheader = document.querySelector("#searchheader");
    let contres = document.querySelector("#searchres1");
    document.querySelector("#resname").innerHTML = localStorage.searchresults;
    switch(localStorage.searchresults){
        case "Solutions" || "solutions":
            contheader.innerHTML = "Looking for: " + _searchterms + " <span class='badge rounded-pill bg-info'>11</span>";
        document.querySelector("#searchres1").innerText = "Solutions";
        document.querySelector("#searchres2").innerText = "Demo";
        break;
        case "Education" || "education":
           contheader.innerHTML = "Looking for: " + _searchterms + " <span class='badge rounded-pill bg-info'>106</span>";
           document.querySelector("#searchres1").innerText = "Up next";
           document.querySelector("#searchres2").innerText = "Solutions";
           break;
    }
}
