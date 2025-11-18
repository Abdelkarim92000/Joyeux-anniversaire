var responsive = document.getElementById('responsive');
var grid2 = document.getElementById('grid2');
var i = 0;
var largeurEcran = window.innerWidth;
var k = 0;

setInterval(() => {

largeurEcran = window.innerWidth;
    
}, 3000);



setInterval('console.log("largeur ecran : " + largeurEcran + "  valeur k : " + k)',3000);


function k1(){
if(largeurEcran <= 800){
    k = 0;



}
else{

    k = 1;
    responsive.style.transform = "rotate(90deg)";
    responsive.style.transition = "transform 0.5s";
    grid2.style.transform = "translatex(0%)";


}
}
setInterval('k1()', 1000);


function grid(){

    if(i == 0){
responsive.style.transform = "rotate(90deg)";
responsive.style.transition = "transform 0.5s";
grid2.style.transform = "translatex(0%)";
grid2.style.transition = "transform 1s";

i = 1;
    }else{

        responsive.style.transform = "rotate(0deg)";
        responsive.style.transition = "transform 0.5s";
        grid2.style.transform = "translatex(-150%)";
        grid2.style.transition = "transform 1s";
        i = 0;


    }

}


    
