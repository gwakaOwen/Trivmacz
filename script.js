
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    menuToggle.textContent = navList.classList.contains('active') ? 'close' : 'menu';
});



const galleryGrid = document.querySelector('.gallery-grid');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

const scrollAmount = 300; // pixels to scroll per click

leftBtn.addEventListener('click', () => {
    galleryGrid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
    galleryGrid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});


const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


const animeBtn = document.getElementById('animebtn');

// add bounce class after 1s
setTimeout(() => {
    animeBtn.classList.add('bounce');
}, 1000);



document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.5 });
    elements.forEach(el => observer.observe(el));
});