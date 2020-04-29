
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
        sliderContainer.css('transition','1s ease-in-out')
        counter++;
        sliderContainer.css('transform','translatex('+  (-width * counter)+'px)')
     })
     prvBtn.click(function(){
        if(counter <= 0 )return;
        sliderContainer.css('transition','1s ease-in-out')
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


const eTronOverlay = $('.e-tron-promo .overlay');
const eTronButton = $('.e-tron-promo .button');

eTronButton.hover(function(){
    eTronOverlay.css('background-color','rgba(0, 0, 0, 0.8)');
},function(){
    eTronOverlay.css('background-color','rgba(0, 0, 0, 0)');
})




const dealsElements = $('.deal-element')
var dealsElementWidth = dealsElements.width();
var windowWidth = $(window).width();
dealsElements.css('height',dealsElementWidth+'px')
console.log(windowWidth)
if(windowWidth < 1025){
    dealsElements.children('.deal-overlay').css("opacity",1) 
    dealsElements.children('.deal-overlay').css('background-color','rgba(0, 0, 0, 0.2)')
}
$(window).on('resize',function(){
    dealsElementWidth = dealsElements.width();
    dealsElements.css('height',dealsElementWidth+'px')
    windowWidth = $(window).width();
    if(windowWidth < 1025){
            dealsElements.children('.deal-overlay').css("opacity",1) 
            dealsElements.children('.deal-overlay').css('background-color','rgba(0, 0, 0, 0.4)')
    }
    else{
        dealsElements.children('.deal-overlay').css("opacity",0)
    }
})

dealsElements.hover(function(){
    if(windowWidth > 1025){
        $(this).children('.deal-overlay').css('opacity',1)
        $(this).children('.deal-overlay').css('background-color','rgba(0, 0, 0, 0.8)')
    }
},function(){
    if(windowWidth > 1025){
        $(this).children('.deal-overlay').css('opacity',0)
        $(this).children('.deal-overlay').css('background-color','rgba(0, 0, 0, 0)')
    }
})