import $ from 'jquery';

$(document).ready(function () {
    let form = $('.form');
    let submit = form.find('input[type=submit]');

    let emailInput = form.find('input[name=email]');
    let phoneInput = form.find('input[name=phone]');
    let textInput = form.find('input[name=text]');

    let inputValidationHandlers = {
        email: function (input) {
            if (!input.val()) {
                return false;
            }

            return true;
        },
        phone: function () {

        },
        text: function () {

        }
    }

    submit.on('click', function () {
        if (
            inputValidationHandlers.email(emailInput) &&
            inputValidationHandlers.phone(emailInput) &&
            inputValidationHandlers.text(emailInput)
        ) {
            alert('send');
        }
    });
})
