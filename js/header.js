const mobileMenu = document.querySelector('.js-mobile-menu');

function menuToggle() {
    mobileMenu.classList.toggle('-open');
};

document.querySelector('.js-burger-btn').addEventListener('click', menuToggle);
document.querySelector('.js-menu-close').addEventListener('click', menuToggle);
