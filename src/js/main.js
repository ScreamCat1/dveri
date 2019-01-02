$( document ).ready( function () {
    const fieldsElement  = {
        name: `<div class="action__field action__field--name">
                <input type="text"
                    required
                    name="name"
                    minlength="2"
                    placeholder="Ваше имя">
                <img class="action__icon"
                src="./images/name-icon.png"
                alt="">
            </div>`,

        tel: `<div class="action__field action__tel">
                <input type="tel"
                    required
                    name="tel"
                    minlength="5"
                    placeholder="Ваш телефон">
                <img class="action__icon"
                src="./images/phone-icon.png"
                alt="">
            </div>`,

        email: `<div class="action__field action__field--email">
                <input type="email"
                    required
                    name="email"
                    placeholder="Ваш e-mail">
                <img class="action__icon"
                src="./images/mail-icon.png"
                alt="">
            </div>`,


        text: `<div class="action__field action__field--text">
                <textarea name="textarea" required ></textarea>
            </div>`,

        type: `<input type="text"
        class="input__hidden"
        name="type"
        hidden
        value="">`
    }
    $( '.doors__list' ).slick( {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: '<button class="arrow arrow--next"></button>',
        prevArrow: '<button class="arrow arrow--prev"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $( '.examples__list, .reviews__list' ).slick( {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button class="arrow arrow--next"></button>',
        prevArrow: '<button class="arrow arrow--prev"></button>'
    });


    $('.navigation__link').click(function(e) {
        $('html, body').animate({
            scrollTop: $(`.${e.target.href.split('#')[1]}`).offset().top
        }, 500);
        return false;
    });


    (function setCountDown () {
        const finishedData = new Date('2017', '0', '1', '0', '0');
        const date = new Date();
        let diff = finishedData - date.getTime();
        diff = diff > 0
            ? diff
            : new Date(date.getFullYear(), date.getMonth(), date.getDate() + 3).getTime() - date.getTime();
        const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
        const hoursLeft = Math.floor(diff / 1000 / 60 / 60 - ( daysLeft * 24 ));
        const minutesLeft = Math.floor(diff / 1000 / 60 - ( daysLeft * 24 * 60 + hoursLeft * 60 ) );
        const secondsLeft = Math.floor(diff / 1000 - ( daysLeft * 24 * 60 * 60  + hoursLeft * 60 * 60 + minutesLeft * 60 ) );

        $('.timer__value--days').text(daysLeft);
        $('.timer__value--hours').text(hoursLeft);
        $('.timer__value--minutes').text(minutesLeft);
        $('.timer__value--sec').text(secondsLeft);
        setTimeout(setCountDown, 1000);
    })();

    $('.popup__close, .popup__overlay').click(() => {
        $('.form__fileds-wrapper').html('');
        $('.popup__overlay, .popup__wrapper').css({ display: 'none' });
    });

    $('.article__btn, .header__button, .get-information__btn, .services__btn').click(e => {
        const typePopup = $(e.target).data('type');

        const dataObj = {
            question : {
                fields: [
                    'name',
                    'tel',
                    'email',
                    'text',
                    'type'
                ],
                submitBtn: 'задать вопрос',
                text: 'чтобы задать вопрос, и мы перезвоним Вам в течение 15 мин,чтобы',
                type: 'Задать вопрос'
            },
            callback: {
                fields: [
                    'name',
                    'tel',
                    'type'
                ],
                submitBtn: 'перезвоните мне',
                text: 'и наш менеджер перезвонит Вам в течение 15 мин, чтобы ответить на все вопросы',
                type: 'Обратный звонок'
            },
            consultation: {
                fields: [
                    'name',
                    'tel',
                    'type'
                ],
                submitBtn: 'получить консультацию',
                text: 'чтобы получить консультацию по индивидуальному заказу, и наш менеджер свяжеться с Вами в течение 15 мин',
                type: 'Консультацию'
            },
            catalog: {
                fields: [
                    'name',
                    'tel',
                    'type'
                ],
                submitBtn: 'получить фотокаталог',
                text: 'и мы отправим фотокаталог дверей с сценами на Вашу почту в течение 15 мин',
                type: 'Получить фотокаталог'
            },
            individual: {
                fields: [
                    'name',
                    'tel',
                    'type'
                ],
                submitBtn: 'получить консультацию',
                text: 'чтобы получить консультацию по индивидуальному заказу, и наш менеджер свяжеться с Вами в течение 15 мин',
                type: 'Индивидуальный заказ'
            },
            price: {
                fields: [
                    'name',
                    'tel',
                    'type'
                ],
                submitBtn: 'узнать стоимость',
                text: 'чтобы узнать стоимость, и наш менеджер свяжеться с Вами в течение 15 мин',
                type: 'Узнать стоимость'
            },
            master: {
                fields: [
                    'name',
                    'tel',
                    'email',
                    'type'
                ],
                submitBtn: 'вызвать мастера',
                text: 'чтобы вызвать мастера на замер, и наш менеджер свяжеться с Вами в течение 15 мин',
                type: 'Вызвать мастера'
            },
            more: {
                fields: [
                    'name',
                    'tel',
                    'email',
                    'type'
                ],
                submitBtn: 'узнать подробнее',
                text: 'чтобы узнать про изготовление под индивидуальный заказ, и наш менеджер свяжеться с Вами в течение 15 мин',
                type: 'Узнать подробнее'
            },
            order: {
                fields: [
                    'name',
                    'tel',
                    'type'
                ],
                submitBtn: 'оставить заявку',
                text: 'чтобы задать вопрос, и мы перезвоним Вам в течение 15 мин,чтобы',
                type: 'Оставить заявку'
            }
        }

        $('.popup__wrapper .popup__btn').text(dataObj[typePopup].submitBtn);
        $('.form__fileds-wrapper').html(addFields(dataObj[typePopup].fields));
        $('.input__hidden').val(dataObj[typePopup].type);
        $('.popup__description').text(dataObj[typePopup].text);
        $('.popup__overlay, .popup__wrapper').css({ display: 'block' });
    });

    function addFields(fields) {
        return fields.reduce((accum, field) => accum + fieldsElement[field], '');
    }
});
