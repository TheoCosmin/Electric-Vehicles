const navbar = $('.navbar')
const toggleMenu = $('.toggle-button')
const navLInks = $('.nav-links')

toggleMenu.click(function(){
    navbar.toggleClass('active')
    navLInks.toggleClass('active ')
    toggleMenu.toggleClass('rotate')
})