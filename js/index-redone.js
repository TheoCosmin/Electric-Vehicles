


// var numberOfSlides = $('.image-element').length;
// var slider = $('.image-element')
// var currentSlideIndex;


// $(document).ready(function (){
//     $('.ui-loader').remove();


//     slider.on('swiperight',function(){
        
//         currentSlideIndex = $('.image-element.image-active').index()+1;
//         console.log('current index',currentSlideIndex)
//          fadeToNextSlide(currentSlideIndex,'right')
         
//     })
//     slider.on('swipeleft',function(){
        
//         currentSlideIndex = $('.image-element.image-active').index()+1;
//         console.log('current index',currentSlideIndex)
//          fadeToNextSlide(currentSlideIndex,'left')
         
//     })
    
// })
//  function getTheNextActiveSlide( currentSlide,swipeDirrection){
//     if( currentSlide == numberOfSlides && swipeDirrection == 'right') return 1;
//     if( currentSlide == 1  && swipeDirrection == 'left' ) return numberOfSlides;
//     if( swipeDirrection == "right" ) return currentSlide + 1;
//     else return currentSlide - 1;
//  }


//  function fadeToNextSlide(currentSlide, swipeDirrection){
//     $('.image-element:nth-child('+currentSlide+')').fadeOut();
//     $('.image-element:nth-child('+currentSlide+')').removeClass('image-active');
//         var nextSlide = getTheNextActiveSlide(currentSlide,swipeDirrection)
//         $('.image-element:nth-child('+nextSlide+')').fadeIn();
//         $('.image-element:nth-child('+nextSlide+')').addClass('image-active');
//         $('.image-element:nth-child('+nextSlide+')').css('display',"flex");

//  }


const sliderContainer = $('.slider-container');
const slider = $('.slider');
const sliderImages = $('.image-element')
const prvBtn = $('#prvBtn')
const nextBtn = $('#nextBtn')
var width = sliderContainer.width()/5;
let counter = 1;

sliderContainer.css('transform','translatex('+  (-width * counter)+'px)')


$(document).ready(function(){

    $(window).on('resize',function(){
        sliderContainer.css('transition','none')
        sliderContainer.css('transform','translatex(0px)')
        width=sliderContainer.width()/5;
        sliderContainer.css('transform','translatex('+  (-width * counter)+'px)')
    })



    nextBtn.click(function(){
        if(counter >= sliderImages.length-1) return ;
        sliderContainer.css('transition','0.4s ease-in-out')
        counter++;
        sliderContainer.css('transform','translatex('+  (-width * counter)+'px)')
     })
     prvBtn.click(function(){
        if(counter <= 0 )return;
        sliderContainer.css('transition','0.4s ease-in-out')
        counter--;
        sliderContainer.css('transform','translatex('+  (`${-width * counter}`)+'px)')
     })

     sliderContainer.on('transitionend' ,function(){
         if(sliderImages[counter].id == "firstClone") {
            sliderContainer.css('transition','none')
            counter = sliderImages.length - counter;
            sliderContainer.css('transform','translatex('+  (`${-width * counter}`)+'px)')
         }
         if(sliderImages[counter].id == 'lastClone'){
            sliderContainer.css('transition','none')
            counter = sliderImages.length - 2;
            sliderContainer.css('transform','translatex('+  (`${-width * counter}`)+'px)')
         }
     })
})


//script pt mobile gesture swipe-left/right

var swiper = {

    touchStartX: 0,
    touchEndX: 0,
    minSwipePixels: 30,
    detectionZone: undefined,
    swiperCallback: function() {},

    init: function (detectionZone, callback) {
        swiper.swiperCallback = callback
        detectionZone.addEventListener('touchstart', function (event) {
            swiper.touchStartX = event.changedTouches[0].screenX;
        }, false);
        detectionZone.addEventListener('touchend', function (event) {
            swiper.touchEndX = event.changedTouches[0].screenX;
            swiper.handleSwipeGesture();
        }, false);
    },

    handleSwipeGesture: function () {
        var direction,
            moved
        if (swiper.touchEndX <= swiper.touchStartX) {
            moved = swiper.touchStartX - swiper.touchEndX
            direction = "left"
        }
        if (swiper.touchEndX >= swiper.touchStartX) {
            moved = swiper.touchEndX - swiper.touchStartX
            direction = "right"
        }
        if (moved > swiper.minSwipePixels && direction !== "undefined") {
            swiper.swipe(direction, moved)
        }
    },

    swipe: function (direction, movedPixels) {
        var ret = {}
        ret.direction = direction
        ret.movedPixels = movedPixels
        swiper.swiperCallback(ret)
    }
}

var gestureZone = document.querySelector('.slider-container')
swiper.init(gestureZone, function(e) {
    
    if(e.direction == "left") {
        if(counter >= sliderImages.length-1) return ;
        sliderContainer.css('transition','0.4s ease-in-out')
        counter++;
        sliderContainer.css('transform','translatex('+  (-width * counter)+'px)')
    }
    if(e.direction == "right"){
        if(counter <= 0 )return;
        sliderContainer.css('transition','0.4s ease-in-out')
        counter--;
        sliderContainer.css('transform','translatex('+  (`${-width * counter}`)+'px)')
    }
})

//end script