// //? Scroll links 
$('.js-scroll').on('click', function (e) {
    e.preventDefault();
    var id  = $(this).attr('data-scroll'),
    top = $(id).offset().top - 120;
    
    $('body,html').animate({scrollTop: top}, 1500);
})
//? Scroll links  END

// //? Swiper иницилизация и первоначальные настройки ---------------------------------->>>>
const slider =  document.querySelector('.slider-partners');
if (slider) {
  const mySwiper = new Swiper(slider, {
    loop: true,
    slidesPerView: 4,
    autoplay: true,
    speed: 1000,
    observer: true,
    spaceBetween: 38,
    breakpoints: {
      1210: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      1: {
        slidesPerView: 2,
      },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});
}

//? Show block animtation
const worksBtn = document.querySelector('.js-works-btn');
const worksBLock = document.querySelector('.js-works-block');

function showBlock() {
  worksBLock.classList.toggle('b-show');
  
}
worksBtn.addEventListener('click', showBlock);

// //? Burger Menu and Link ------------------------------------------------>>>>>>
const body = document.querySelector('body'),
  menuButton = document.querySelector('.js-burger'),
  menu = document.querySelector('.js-nav'),
  closeMenu = document.querySelector('.js-close-menu');
  
function closeBurger() {
    menu.classList.remove('active');
    body.classList.remove('body-lock');
}
function openBurger() {
    menu.classList.add('active');
    body.classList.add('body-lock');
}

if (menuButton) {
  menuButton.addEventListener('click', openBurger)
  closeMenu.addEventListener('click', closeBurger);
}
const menuLink = document.querySelectorAll('.nav__link');
  menuLink.forEach((el) =>  {
    el.addEventListener('click', (e) => {
      closeBurger();
    if (el.getAttribute("href") === "#") {
      e.preventDefault();
    } else {
     
       }
    })
})
// //? Burger Menu and Link END ------------------------------------------------>>>>>>





