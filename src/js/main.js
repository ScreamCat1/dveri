$( document ).ready( function () {
    const fieldsElement  = {
        name: `<div class="action__field action__field--name">
                <input type="text"
                    placeholder="Ваше имя">
                <img class="action__icon"
                src="./images/name-icon.png"
                alt="">
            </div>`,

        tel: `<div class="action__field action__tel">
                <input type="tel"
                    placeholder="Ваш телефон">
                <img class="action__icon"
                src="./images/phone-icon.png"
                alt="">
            </div>`,

        email: `<div class="action__field action__field--email">
                <input type="email"
                    placeholder="Ваш телефон">
                <img class="action__icon"
                src="./images/mail-icon.png"
                alt="">
            </div>`,


        text: `<div class="action__field action__field--text">
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>`
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
        const type = $(e.target).data('type');

        const dataObj = {
            question : {
                fields: [
                    'name',
                    'tel',
                    'email',
                    'text'
                ],
                submitBtn: 'задать вопрос',
                text: 'чтобы задать вопрос, и мы перезвоним Вам в течение 15 мин,чтобы'
            },
            callback: {
                fields: [
                    'name',
                    'tel'
                ],
                submitBtn: 'перезвоните мне',
                text: 'и наш менеджер перезвонит Вам в течение 15 мин, чтобы ответить на все вопросы'
            },
            consultation: {
                fields: [
                    'name',
                    'tel'
                ],
                submitBtn: 'получить консультацию',
                text: 'чтобы получить консультацию по индивидуальному заказу, и наш менеджер свяжеться с Вами в течение 15 мин'
            },
            catalog: {
                fields: [
                    'name',
                    'tel'
                ],
                submitBtn: 'получить фотокаталог',
                text: 'и мы отправим фотокаталог дверей с сценами на Вашу почту в течение 15 мин'
            },
            individual: {
                fields: [
                    'name',
                    'tel'
                ],
                submitBtn: 'получить консультацию',
                text: 'чтобы получить консультацию по индивидуальному заказу, и наш менеджер свяжеться с Вами в течение 15 мин'
            },
            price: {
                fields: [
                    'name',
                    'tel'
                ],
                submitBtn: 'узнать стоимость',
                text: 'чтобы узнать стоимость, и наш менеджер свяжеться с Вами в течение 15 мин'
            },
            master: {
                fields: [
                    'name',
                    'tel',
                    'email'
                ],
                submitBtn: 'вызвать мастера',
                text: 'чтобы вызвать мастера на замер, и наш менеджер свяжеться с Вами в течение 15 мин'
            },
            more: {
                fields: [
                    'name',
                    'tel',
                    'email'
                ],
                submitBtn: 'узнать подробнее',
                text: 'чтобы узнать про изготовление под индивидуальный заказ, и наш менеджер свяжеться с Вами в течение 15 мин'
            },
            order: {
                fields: [
                    'name',
                    'tel'
                ],
                submitBtn: 'оставить заявку',
                text: 'чтобы задать вопрос, и мы перезвоним Вам в течение 15 мин,чтобы'
            }
        }

        $('.popup__wrapper .article__btn').text(dataObj[type].submitBtn);
        $('.form__fileds-wrapper').html(addFields(dataObj[type].fields));
        $('.popup__description').text(dataObj[type].text);
        $('.popup__overlay, .popup__wrapper').css({ display: 'block' });
    });

    function addFields(fields) {
        return fields.reduce((accum, field) => accum + fieldsElement[field], '');
    }
});
