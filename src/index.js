import $ from 'jquery';
import './sass/style.sass';
import language from "./language";
import './form';

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
            replaceAll($(this).data('content'));

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

    function replaceBackgroundImage(image) {
        let backgroundImages = $('.right-side').find('img');

        backgroundImages.each(function () {
            if ($(this).data('content') !== image) {
                $(this).css('top', '100%');

            } else {
                $(this).css('top', '0%');

            }

        });

    }

    function replaceContent(content) {
        let contents = $('.content .content-box');

        contents.each(function () {
            if ($(this).data('content') !== content) {
                $(this).css('display', 'none');

            } else {
                $(this).fadeIn('slow');

            }

        });

    }

    function scrollToToTop() {
        window.scrollTo(0, 0);

    }

    function detectLangCode() {
        return navigator.language.slice(0, 2);

    }

    function insertText(langCode = 'en') {
        if (!language.hasOwnProperty(langCode)) {
            return;

        }

        let text = language[langCode];

        let textElements = $('text');

        textElements.each(function () {
            let textContent = $(this).attr('content');

            if (!textContent || !text.hasOwnProperty(textContent)) return;

            $(this).append(text[textContent]);

        });

    }

    function replaceAll(to) {
        replaceBackgroundImage(to);
        replaceContent(to);
        scrollToToTop();

    }

    $('.click').on('click', function () {
        replaceAll($(this).data('content'));

    });

    $('.logo').on('click', function () {
        replaceAll($(this).data('content'));

    });

    $('header > .items > div').on('click', function () {
        replaceAll($(this).data('content'));

    });

    burgerMenu('.burger-menu');
    replaceBackgroundImage('home');
    replaceContent('home');
    insertText(detectLangCode());

})
