var navBar = document.getElementById('ver_navbar')
var navLink = document.getElementsByClassName('nav-icon')

function openNav() {
   
    navBar.style.width = '250px';
    navBar.style.padding= '1rem';
    navBar.style.boxShadow = ' 0px 2px 3px 1px black'

    console.log('Close nav is working...check your codes')
}
function closeNav() {
   
    navBar.style.width = '0px';
    navBar.style.padding= '0px';
    navBar.style.boxShadow = 'none'

    console.log('Close nav is working...check your codes')
}