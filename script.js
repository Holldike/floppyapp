$(document).ready(function () {
    function burgerMenu(selector) {
        let menu = $(selector);
        let button = menu.find('.burger-menu-button');
        let links = menu.find('.burger-menu-link');
        let overlay = menu.find('.burger-menu-overlay');

        button.on('click', (e) => {
            e.preventDefault();
            toggleMenu()

        });

        links.on('click', function () {
            toggleMenu();
            replaceContent($(this).data('content'));

        });

        overlay.on('click', () => toggleMenu());

        function toggleMenu() {
            menu.toggleClass('burger-menu-active');

            if (menu.hasClass('burger-menu-active')) {
                $('body').css('overflow', 'hidden');
            } else {
                $('body').css('overflow', 'visible');

            }
        }

    }

    function replaceContent(content) {
        let contents = $('.content .content-box');
        let images = $('.right-side').find('img');

        showNecessary(contents);
        showNecessary(images);

        function showNecessary(elements) {
            elements.each(function () {
                if ($(this).data('content') !== content) {
                    $(this).hide();

                } else {
                    $(this).show('normal');

                }

            });
        }

    }

    $('.click').on('click', function () {
        replaceContent($(this).data('content'));

    });

    burgerMenu('.burger-menu');
    replaceContent('home');

})
