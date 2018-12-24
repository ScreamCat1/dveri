$( document ).ready( function () {
    $( '.doors__list' ).slick( {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: '<button class="arrow arrow--next"></button>',
        prevArrow: '<button class="arrow arrow--prev"></button>'
    });
    $( '.examples__list, .reviews__list' ).slick( {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button class="arrow arrow--next"></button>',
        prevArrow: '<button class="arrow arrow--prev"></button>'
    });
} );