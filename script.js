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

        showNecessaryText(contents);
        showNecessaryImage(images);

        function showNecessaryText(elements) {
            elements.each(function () {
                if ($(this).data('content') !== content) {
                    $(this).css('display', 'none');

                } else {
                    $(this).fadeIn('slow');

                }

            });

        }

        function showNecessaryImage(elements) {
            elements.each(function () {


                if ($(this).data('content') !== content) {
                    $(this).css('transform', 'rotate3d(1, 1, 1, -100deg)');
                    $(this).css('top', '150%');

                } else {
                    $(this).css('transform', 'rotate3d(1, 1, 1, 0deg)');
                    $(this).css('top', '0%');

                }

            });

        }

    }

    $('.click').on('click', function () {
        replaceContent($(this).data('content'));

    });

    $('.logo').on('click', function () {
        replaceContent($(this).data('content'));

    });

    $('header > .items > div').on('click', function () {
        replaceContent($(this).data('content'));

    });

    burgerMenu('.burger-menu');
    replaceContent('home');

})
