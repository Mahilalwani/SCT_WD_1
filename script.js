const header = document.querySelector('header');
const hamburger = document.querySelector('.shinchan');
const navLinks = document.querySelector('.nav-links');

// Toggle navigation menu on hamburger click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Change header style on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});