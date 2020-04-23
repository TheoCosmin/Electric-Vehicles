
$(document).ready(function a(){

    $('.menu-toggle').click(function(){
        if(! $('header').hasClass('unclickable') ){

            if($('header').hasClass('to-fade')){
                
                $('header').addClass('unclickable');
                $('header').removeClass('to-fade');
                setTimeout(() => {
                    $('header').removeClass('active');
                    $('header').removeClass('unclickable');
                }, 1000);
                // $('body').removeClass('locked');
            }

            else{

                $('header').addClass('unclickable');
                $('header').addClass('active');
                $('header').addClass('to-fade');
                $('nav').addClass('to-fade');
                setTimeout(() => {
                    $('header').removeClass('unclickable');
                }, 1000);
                // $('body').addClass('locked');
            }
        }
        
    })
})
