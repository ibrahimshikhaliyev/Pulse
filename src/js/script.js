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

const more_link= document.querySelectorAll('.catalog-item_link');
const back_link= document.querySelectorAll('.catalog-item_back-link');
const catalog_item_main= document.querySelectorAll('.catalog-item_main-content');
const catalog_item_secondary= document.querySelectorAll('.catalog-item_secondary-content');

for(let i=0; i<more_link.length;i++){
    more_link[i].addEventListener('click',e=>{
        catalog_item_main[i].classList.remove('catalog-item_main-content_active');
        catalog_item_secondary[i].classList.add('catalog-item_secondary-content_active');
    })
}

for(let i=0; i<back_link.length;i++){
    back_link[i].addEventListener('click',e=>{
        catalog_item_main[i].classList.add('catalog-item_main-content_active');
        catalog_item_secondary[i].classList.remove('catalog-item_secondary-content_active')
    })
}




