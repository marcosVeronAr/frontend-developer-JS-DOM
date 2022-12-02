// desktop menu
const navbarEmail = document.querySelector('.navbar-email')
const menuDesktop = document.querySelector('.desktop-menu')

navbarEmail.addEventListener("click", toggleMenuDesktop)

function toggleMenuDesktop() {
    menuDesktop.classList.toggle('inactive')
}

// mobile menu 
const burguerMenu = document.querySelector('.menu')
const menuMobile = document.querySelector('.mobile-menu')

burguerMenu.addEventListener("click", toggleMenuMobile)

function toggleMenuMobile() {
    menuMobile.classList.toggle('inactive')
}

