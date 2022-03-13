// Variables with the reference to html tag
let button_bar = document.getElementById("header__img--trigger");
let close_bar = document.getElementById("navbar__close");

// I add the event to the html tag
button_bar.addEventListener("click", prueba);
close_bar.addEventListener("click", prueba);

// fuction for put and delete the style "navbar--hidden"
function prueba(){
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle("navbar--hidden");
}