window.$ = window.jQuery = require('jquery');

//Sticky
$(window).scroll(function(){
    const bannerHeight = $('.home').outerHeight();
    if($(window).scrollTop() >= bannerHeight) {
        $('.header__wrapper').addClass('sticky');
    }
    else {
        $('.header__wrapper').removeClass('sticky');
    }
})

$(document).ready(function () {
    //Mobile menu
    $('.header__navigation-button').on('click', function() {
        $('.header__navigation').toggleClass('opened');
        $('body').toggleClass('no-scroll');
    })

    //Anchor links
    $('.anchor').on('click', function (e) {
        e.preventDefault();
        $('.header__navigation').removeClass('opened');
        $('body').removeClass('no-scroll')
        const hh = $('.header').outerHeight();
        if(this.hash !== '') {
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - hh
            }, 300, function () {
                window.location.hash = hash - hh;
            })
        }
    })

    // Works Slider
    const sliderContainer = document.querySelector('.works__slider-container');
    const slideRight = document.querySelector('.works__slider-right');
    const slideLeft = document.querySelector('.works__slider-left');
    const upButton = document.querySelector('.works__slider-upbutton');
    const downButton = document.querySelector('.works__slider-downbutton');
    const slidesLength = slideRight.querySelectorAll('div').length;
    let sliderMain = document.querySelector('.works__slider');
    let sliderHeight = sliderMain.computedStyleMap().get('height');
    let activeSlideIndex = 0;

    slideLeft.style.top = `-${(slidesLength - 1) * parseInt(sliderHeight, 10)}px`;
    upButton.addEventListener('click', () => changeSlide('up'));
    downButton.addEventListener('click', () => changeSlide('down'));
    
    const changeSlide = (direction) => {
        const sliderHeight = sliderContainer.clientHeight;
        if(direction === 'up') {
            activeSlideIndex++;
            if(activeSlideIndex > slidesLength - 1) {
                activeSlideIndex = 0;
            }
        } else if (direction === 'down') {
            activeSlideIndex--;
            if(activeSlideIndex < 0) {
                activeSlideIndex = slidesLength - 1;
            }
        }
        slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
        slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
    }
})
