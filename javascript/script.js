ScrollReveal({
    // reset: true,
    distance: '150px',
    duration: 2000,
    delay: 200
});
window.onscroll = () => {
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
    ScrollReveal().reveal('.home-img, .services-container, .portfolio', { origin: 'bottom'});
}


var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('header nav a');


function changeActive(e) {
    var activeLink = e.target.getAttribute("id")
    var navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(links => {
        links.classList.remove('active');
    })

    document.getElementById(activeLink).classList.add("active")
}

function setHome(e) {
    var navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(links => {
        links.classList.remove('active');
    })

    document.getElementById("home-link").classList.add("active")
}

window.onscroll = () => {
    sections.forEach(sec => {
        var top = window.scrollY;
        var offset = sec.offsetTop - 150;
        var height = sec.offsetHeight;
        var id = sec.getAttribute('id');
        console.log("gorge");
        if (top >= offset && top < offset + height)
        {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}








let menuIconSpan = document.getElementById("menu-icon-span")


function menuCLick() {
    let menuIcon = document.getElementById("menu-icon")
    let navbar = document.querySelector('.navigation_bar');
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};



const typed = new Typed('.multiple-text', {
    strings: ['Faculty of Computer Science and Engineering','slavce'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


