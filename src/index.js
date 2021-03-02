import $ from 'jquery';
import './sass/style.sass';
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

        window.scrollTo(0, 0);

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
                    $(this).css('top', '100%');

                } else {
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

    //Chatra
    window.ChatraSetup = {
        colors: {
            buttonBg: '#8971d0'
        }
    };

    (function(d, w, c) {
        w.ChatraID = '8p86MwG7sfQzvrnai';
        var s = d.createElement('script');
        w[c] = w[c] || function() {
            (w[c].q = w[c].q || []).push(arguments);
        };
        s.async = true;
        s.src = 'https://call.chatra.io/chatra.js';
        if (d.head) d.head.appendChild(s);
    })(document, window, 'Chatra');
    //Chatra
})
