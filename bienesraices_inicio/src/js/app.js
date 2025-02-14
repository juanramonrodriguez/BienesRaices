document.addEventListener("DOMContentLoaded", function(){
    botonMenu()
    darkMode()
})
function darkMode(){
    const botonDarkMode = document.querySelector(".dark-mode-boton")
    botonDarkMode.addEventListener("click", function(){
        document.body.classList.toggle("dark-mode")
    })
}

function botonMenu(){
const mobileMenu = document.querySelector(".mobile-menu");

mobileMenu.addEventListener('click', openMenu);
}

function openMenu(){
   const navegacion = document.querySelector(".navegacion")
   navegacion.classList.toggle("mostrar")
};