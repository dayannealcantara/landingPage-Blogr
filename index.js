
let btn = document.getElementById('mobileMenu');
let btnNav = document.getElementById('mobileNav');

btnNav.style.left = '-100%';

 btn.onclick = function () {
    if(btnNav.style.left == "-100%") {
        btnNav.style.left = "50%";
        btn.src = "./images/icon-close.svg"
    } else {
        btnNav.style.left = "-100%";
        btn.src = "./images/icon-hamburger.svg";
    }
}