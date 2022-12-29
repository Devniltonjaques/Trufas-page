var nav = document.getElementById('meunav');
window.addEventListener("scroll", function(event) {
            if(window.pageYOffset>100){

                nav.style.background = "#fff";

            }
            else{
                nav.style.background = "transparent";
            }
        });

let menu = document.getElementById('menucor');
window.addEventListener("scroll", function(item) {
    if(window.pageYOffset >= 100) {
        menu.style.color = "#000";
    }
     
})


