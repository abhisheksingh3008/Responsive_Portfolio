/*============toggle icon navbar ===============*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*============scroll section active link ===============*/

let sections = document.querySelectorall('section');
let navlinks = document.querySelectorall('header nav a');

window.onscroll= () => {
    sections.forEach.apply(sec => {
        let top = window.scrollY;
        letoffset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach.apply{links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            }};
        };
    });
}

/*============sticky navbar ===============*/

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/*============remove toggle icon and navbar ===============*/

menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

/*=============scroll reveal===============*/
scrollReaval({
    distance: '80px',
    duration:2000,
    Delay:200,
});

scrollReveal().reveal('.home-content,heading', { origin: 'top' });
scrollReveal().reveal('.home-img, .services-container, .portfolio.box, .contact form', { origin: 'button' });
scrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
scrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*=============typed js===============*/
var typed = new Typed(".text",{
    strings:["Frontend Developer", "Java Developer", "Web Developer"],
    typeSpeed : 10,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});

/*=============circle skill===============*/

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i = 0 ; i < dots ; i++){
        points += `<div class= "points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    /*const pointsMarked = elem.querySelectorAll('.points');
    for(let i= 0; i<percent; i++){
        pointsMarked[i].classList.add('marked')
    }
})*/