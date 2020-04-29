



var numberOfSlides = $('.image-element').length;
var slider = $('.image-element')
var currentSlideIndex;


$(document).ready(function (){
    $('.ui-loader').remove();


    slider.on('swiperight',function(){
        
        currentSlideIndex = $('.image-element.image-active').index()+1;
        console.log('current index',currentSlideIndex)
         fadeToNextSlide(currentSlideIndex,'right')
         
    })
    slider.on('swipeleft',function(){
        
        currentSlideIndex = $('.image-element.image-active').index()+1;
        console.log('current index',currentSlideIndex)
         fadeToNextSlide(currentSlideIndex,'left')
         
    })
    
})
 function getTheNextActiveSlide( currentSlide,swipeDirrection){
    if( currentSlide == numberOfSlides && swipeDirrection == 'right') return 1;
    if( currentSlide == 1  && swipeDirrection == 'left' ) return numberOfSlides;
    if( swipeDirrection == "right" ) return currentSlide + 1;
    else return currentSlide - 1;
 }


 function fadeToNextSlide(currentSlide, swipeDirrection){
    $('.image-element:nth-child('+currentSlide+')').fadeOut();
    $('.image-element:nth-child('+currentSlide+')').removeClass('image-active');
        var nextSlide = getTheNextActiveSlide(currentSlide,swipeDirrection)
        $('.image-element:nth-child('+nextSlide+')').fadeIn();
        $('.image-element:nth-child('+nextSlide+')').addClass('image-active');
        $('.image-element:nth-child('+nextSlide+')').css('display',"flex");

 }