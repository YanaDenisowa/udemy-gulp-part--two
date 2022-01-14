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