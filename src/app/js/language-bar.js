var langBar = document.querySelector('.header__menu-item--language');

langBar.addEventListener('click', function () {
    if (langBar.classList.contains('header__menu-item--language--closed')) {
        langBar.classList.remove('header__menu-item--language--closed');
        langBar.classList.add('header__menu-item--language--opened');
    } else {
        langBar.classList.add('header__menu-item--language--closed');
        langBar.classList.remove('header__menu-item--language--opened');
    }
});
