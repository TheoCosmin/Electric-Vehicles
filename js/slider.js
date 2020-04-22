i=1;
		
		 
$(document).ready(function(){
    $('.button-right').click(function(){
        i = i + 1;
        if ( i > 3) i = 1;

        if( !$('.button-right').hasClass('unclickable')){

            $('.button-right').addClass('unclickable');

            if ( i == 1){
                $('.slide-three').addClass('fade-out');
                setTimeout(() => {
                    $('.slide-three').removeClass('slide-active');
                    $('.slide-one').addClass('slide-active');
                    $('.slide-one').addClass('fade-in');
                    $('.slide-two').removeClass('slide-active');
                    $('.current-slide.one').addClass('active');
                    $('.current-slide.two').removeClass('active');
                    $('.current-slide.three').removeClass('active');
                }, 1000);
                setTimeout(() => {
                    $('.slide-three').removeClass('fade-out');
                    $('.slide-one').removeClass('fade-in');
                }, 3000);
                setTimeout(() => {
                    $('.button-right').removeClass('unclickable'); 
                }, 2200);
            }
            if ( i == 2){
                // fade out first slide
                $('.slide-one').addClass('fade-out');
                //delay 1s remove class-active from first+ slide:2 active+ fade-in
                setTimeout(() => {
                    $('.slide-one').removeClass('slide-active');
                    $('.slide-two').addClass('slide-active');
                    $('.slide-two').addClass('fade-in');
                    $('.slide-three').removeClass('slide-active');
                    $('.current-slide.two').addClass('active');
                    $('.current-slide.three').removeClass('active');
                    $('.current-slide.one').removeClass('active');
                // $('.top-promo').removeClass('unclickable');
                }, 1000);
                setTimeout(() => {
                    $('.slide-one').removeClass('fade-out');
                    $('.slide-two').removeClass('fade-in');
                    // $('.top-promo').removeClass('unclickable');
                }, 3000);
                setTimeout(() => {
                    $('.button-right').removeClass('unclickable'); 
                }, 2200);
            }

            if ( i == 3){
                $('.slide-two').addClass('fade-out');
                setTimeout(() => {
                    $('.slide-two').removeClass('slide-active');
                    $('.slide-three').addClass('slide-active');
                    $('.slide-three').addClass('fade-in');
                    $('.slide-one').removeClass('slide-active');
                    $('.current-slide.three').addClass('active');
                    $('.current-slide.one').removeClass('active');
                    $('.current-slide.two').removeClass('active');
                }, 1000);
                setTimeout(() => {
                    $('.slide-two').removeClass('fade-out');
                    $('.slide-three').removeClass('fade-in');
                }, 3000);
                setTimeout(() => {
                    $('.button-right').removeClass('unclickable'); 
                }, 2200);
            }
        
        }
        
    })
    


    $('.button-left').click(function(){
        i = i - 1;
        if ( i < 1) i = 3;
        if( !$('.button-left').hasClass('unclickable')){

            $('.button-left').addClass('unclickable');
        
            if ( i == 1){
                $('.slide-two').addClass('fade-out');
                setTimeout(() => {
                    $('.slide-two').removeClass('slide-active');
                    $('.slide-one').addClass('slide-active');
                    $('.slide-one').addClass('fade-in');
                    $('.slide-three').removeClass('slide-active');
                    $('.current-slide.one').addClass('active');
                    $('.current-slide.two').removeClass('active');
                    $('.current-slide.three').removeClass('active');
                }, 1000);
                setTimeout(() => {
                    $('.slide-two').removeClass('fade-out');
                    $('.slide-one').removeClass('fade-in');
                }, 3000);
                setTimeout(() => {
                    $('.button-left').removeClass('unclickable'); 
                }, 2200);
            }
            if ( i == 2){
                $('.slide-three').addClass('fade-out');
                setTimeout(() => {
                    $('.slide-three').removeClass('slide-active');
                    $('.slide-two').addClass('slide-active');
                    $('.slide-two').addClass('fade-in');
                    $('.slide-one').removeClass('slide-active');
                    $('.current-slide.two').addClass('active');
                    $('.current-slide.three').removeClass('active');
                    $('.current-slide.one').removeClass('active');
                }, 1000);
                setTimeout(() => {
                    $('.slide-three').removeClass('fade-out');
                    $('.slide-two').removeClass('fade-in');
                }, 3000);
                setTimeout(() => {
                    $('.button-left').removeClass('unclickable'); 
                }, 2200);
            
            }
            if ( i == 3){
                $('.slide-one').addClass('fade-out');
                setTimeout(() => {
                    $('.slide-one').removeClass('slide-active');
                    $('.slide-three').addClass('slide-active');
                    $('.slide-three').addClass('fade-in');
                    $('.slide-two').removeClass('slide-active');
                    $('.current-slide.three').addClass('active');
                    $('.current-slide.two').removeClass('active');
                    $('.current-slide.one').removeClass('active');
                }, 1000);
                setTimeout(() => {
                    $('.slide-one').removeClass('fade-out');
                    $('.slide-three').removeClass('fade-in');
                }, 3000);
                setTimeout(() => {
                    $('.button-left').removeClass('unclickable'); 
                }, 2200);
            }
        }
        
    })
})
