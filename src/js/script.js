//slick slider
$(document).ready(function(){

    $('.carousel__inner').slick({
        speed: 1000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/chevron%20left%20solid.png" alt=""></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="img/chevron%20right%20solid.png" alt=""></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            },
            // {
            //     breakpoint: 576,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 2
            //     }
            // },
            // {
            //     breakpoint: 480,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //     }
            // }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });


    // $('.catalog-item__link').each(function(i){
    //     $(this).on('click', function(e){
    //         e.preventDefault();
    //         $('.catalog-item__content ').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    // })
    // $('.catalog-item__back').each(function(i){
    //     $(this).on('click', function(e){
    //         e.preventDefault();
    //         $('.catalog-item__content ').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    // })

    function toggleSlide(item){
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content ').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

// Modal
//    open modal consultation
    $('[data-modal = consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    //close all modals after click to X
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    //open all buy modal by clicking buy button
    // $('.button_mini').on('click', function () {
    // $('.overlay, #order').fadeIn('slow');
    // });

    // open modal order with each subtitle inside
    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');

        });
    });

    // $('.consultation-form').validate();
    // $('#consultation form').validate({
    //     rules:{
    //         name:{
    //             required: true,
    //             minlength: 2
    //         },
    //         phone: 'required',
    //         email: {
    //             required: true,
    //             email: true
    //         }
    //     },
    //     messages: {
    //         name: {
    //             required: "Пожалуйста, введите свое имя",
    //             minlength: jQuery.validator.format("Введите {0} симовла!")
    //         },
    //         phone: "Пожалуйста, введите свой номер телефона",
    //         email: {
    //             required: "Пожалуйста, введите почту",
    //             email: "Неправильно введен адрес почты"
    //         }
    //     }
    // }
    // );
    // $('#order form').validate();
    function validateForms(form){
        $(form).validate({
                rules:{
                    name:{
                        required: true,
                        minlength: 2
                    },
                    phone: 'required',
                    email: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    name: {
                        required: "Пожалуйста, введите свое имя",
                        minlength: jQuery.validator.format("Введите {0} симовла!")
                    },
                    phone: "Пожалуйста, введите свой номер телефона",
                    email: {
                        required: "Пожалуйста, введите почту",
                        email: "Неправильно введен адрес почты"
                    }
                }
            }
        );
    }
    validateForms('#consultation form');
    validateForms('#consultation-form');
    validateForms('#order form');

    $('input[name=phone]').mask("+3(999) 999-99-99");


//scroll and pageup
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    $("a[href^='#']").click(function () {
        var _href= $(this).attr('href');
        $('html, body').animate({scrollTop: $(_href).offset().top+'px'});
        return false;
    });

});


//tiny slider
// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     autoplay: false,
//     controls: false,
//     nav: false
//
//
// });
// document.querySelector('.prev').addEventListener('click', function () {
//         slider.goTo('prev');
// });
//
// document.querySelector( '.next').addEventListener('click', function() {
//     slider.goTo('next');
// })


