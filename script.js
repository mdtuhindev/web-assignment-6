const header = document.querySelector ("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.getElementById('menu-icon');
let navbar = document.getElementById('navbar');
menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
})

Window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};