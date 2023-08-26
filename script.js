var menuBtn = document.querySelector('#menuBtn');
var sideNav = document.querySelector('#sideNav');
var menu = document.querySelector('#menu');

sideNav.style.right = "-240px"

menuBtn.onclick = function(){
    if(sideNav.style.right == "-240px"){
        sideNav.style.right = "0";
        menu.src = "img/close.png";
    }
    else{
        sideNav.style.right = "-240px";
        menu.src = "img/menu.png";
    }
}