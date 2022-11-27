$(document).ready(function(){
    $('.carousel_inner').slick({
      speed:1200,
      infinite:true,
      adaptiveHeight: true,
      dots: false,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow-left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow-right.svg"></button>',
      responsive: [
        {
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            }
        },
        {
            breakpoint: 786,
            settings: {
                dots: true,
                arrows: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            }
        }
      ]
    });
});

