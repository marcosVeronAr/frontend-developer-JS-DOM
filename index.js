
const navbarEmail = document.querySelector('.navbar-email')
const menuDesktop = document.querySelector('.desktop-menu')

navbarEmail.addEventListener("click", toggleMenuDesktop)

function toggleMenuDesktop() {
    menuDesktop.classList.toggle('inactive') //intercambia la clase inactive
}
