let brandsBar = document.querySelector('.header__brands');
let brandsToggle = document.querySelector('.header__navigation-item--brands');

brandsToggle.addEventListener('click', function () {
    if (brandsBar.classList.contains('header__brands--closed')) {
        brandsBar.classList.remove('header__brands--closed');
        brandsBar.classList.add('header__brands--opened');
        brandsToggle.classList.add('header__navigation-item--active-magenta');
    } else {
        brandsBar.classList.add('header__brands--closed');
        brandsBar.classList.remove('header__brands--opened');
        brandsToggle.classList.remove('header__navigation-item--active-magenta');

    }
});
