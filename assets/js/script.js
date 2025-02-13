function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

function activeInScrollElement() {
    document.querySelectorAll('.slide-right, .slide-left').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('finish');  
        } else {
            el.classList.remove('finish')
        }
    });
}

window.addEventListener('scroll', activeInScrollElement);

document.querySelector('.scale-zoom').classList.add('active');

document.querySelectorAll('.slide-bottom-start, .slide-right-start, .slide-left-start').forEach(el => {
    el.classList.add('finish');
});

