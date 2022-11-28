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

// catalog item additional information script

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


// modal windows script


const consultation_btns=document.querySelectorAll('[data-modal="consultation"]');
const overlay=document.querySelector('.overlay');
const consultation_modal= document.querySelector('#consultation');
const order_modal= document.querySelector('#order');
const thanks_modal=document.querySelector('#thanks');
const modal_close=document.querySelectorAll('.modal_close');
const order_btns=document.querySelectorAll('[data-modal="order"]');

window.addEventListener('click',e=>{
    if(e.target.classList.contains('overlay')){
        overlay.style.display="none";
    }
})


consultation_btns.forEach(item=>{
    item.addEventListener('click' ,e=>{
        overlay.style.display="block";
        consultation_modal.style.display="block";
    })
})

modal_close.forEach(item=>{
    item.addEventListener('click',e=>{
        overlay.style.display="none";
    })
})


order_btns.forEach(item=>{
    
    item.addEventListener('click' ,e=>{
        overlay.style.display="block";
        order_modal.style.display="block";
    })
})







