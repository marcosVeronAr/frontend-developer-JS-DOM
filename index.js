// desktop menu
const navbarEmail = document.querySelector('.navbar-email')
const menuDesktop = document.querySelector('.desktop-menu')

navbarEmail.addEventListener("click", toggleMenuDesktop)

function toggleMenuDesktop() {
    menuDesktop.classList.toggle('inactive')

    // cierra los otros menus
    productDetail.classList.add('inactive')
}

// mobile menu 
const burguerMenu = document.querySelector('.menu')
const menuMobile = document.querySelector('.mobile-menu')

burguerMenu.addEventListener("click", toggleMenuMobile)

function toggleMenuMobile() {
    menuMobile.classList.toggle('inactive')

    // cierra los otros menus
    productDetail.classList.add('inactive')
    menuDesktop.classList.add('inactive')
}

// product detail 
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')

shoppingCart.addEventListener("click", toggleProductDetail)

function toggleProductDetail(){
    productDetail.classList.toggle('inactive')

    // cierra los otros menus
    menuMobile.classList.add('inactive')
    menuDesktop.classList.add('inactive')

}
