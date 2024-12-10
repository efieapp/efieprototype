const todayuser = document.querySelector(".browserdetails");
if(todayuser !== null){
 todayuser.innerText = navigator.appName + " " +       navigator.appVersion;
}

const text = document.querySelector(".sec-text");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "For Sale";
            }, 0);
            setTimeout(() => {
                text.textContent = "For Rent";
            }, 4000);
            setTimeout(() => {
                text.textContent = "For Lease";
            }, 8000); 
        }
        textLoad();
        setInterval(textLoad, 12000);