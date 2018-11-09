(function () {
    const App = {
        init: function () {
            langBar.init();
            ourBrands.init();
        }
    };

    const langBar = {
        init: function () {
            const langBar = document.querySelector('.header__menu-item--language');

            langBar.addEventListener('click', function () {
                if (langBar.classList.contains('header__menu-item--language--closed')) {
                    langBar.classList.remove('header__menu-item--language--closed');
                    langBar.classList.add('header__menu-item--language--opened');
                } else {
                    langBar.classList.add('header__menu-item--language--closed');
                    langBar.classList.remove('header__menu-item--language--opened');
                }
            });

        }
    };
    const ourBrands = {
        init: function () {
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
        }
    };


    App.init();
})();