var cover_one = $(".deal.one .cover");
var content_one = $(".deal.one .deal-content.one");
var cover_two = $('.deal.two .cover');
var content_two = $('.deal.two .deal-content.two');
var cover_three = $('.deal.three .cover');
var content_three = $('.deal.three .deal-content.three');
var deals = $('.deals');
var width = $(window).width();


// cat timp latimea paginii este suficient de mare pt "modul browser" si nu se aplica css pentru "modul tableta/browser"
// daca suntem in modul browser, avem animatii cand tinem mouse-ul peste cele 3 zone
// daca suntem in modul tableta/mobile, nu mai avem animatii si textul apare fara animatie.(static mode)
//animatiile se activeaza/dezactiveaza adaugand/stergand anumite clase ale elementelor din html



if ( $(window).width() < 1026) {
    $('.deal-content').addClass('mobile');
    deals.addClass('unhoverable');
  }
if($(window).width() > 1025){
    deals.removeClass('unhoverable');
}
$(window).resize(function(){
  if ( $(window).width() < 1026) {
    $('.deal-content').addClass('mobile');
    deals.addClass('unhoverable');
  }
  else{
      if($('.deal-content').hasClass('mobile')){
        $('.deal-content').removeClass('mobile');
      }
  }
  if(  $(window).width() > 1025){
      deals.removeClass('unhoverable');
  }
})


$(document).ready(function (){
    
    //var lastWidth = $(window).width();
    
    
    $('.deal.one').hover(function(){
        if(!deals.hasClass('unhoverable')){
            if ( cover_one.hasClass('hover') ){
                cover_one.addClass('hover-reverse');
                content_one.addClass('hover-reverse');
                cover_one.removeClass('hover');
                content_one.removeClass('hover');
                setTimeout(() => {

                    cover_one.removeClass('hover-reverse');
                    content_one.removeClass('hover-reverse');
                }, 1000);
            }
            else{
                content_one.addClass('hover');
                cover_one.addClass('hover');
            }
        }
    })
    $('.deal.two').hover(function(){
        if(!deals.hasClass('unhoverable')){
            if ( cover_two.hasClass('hover') ){
                cover_two.addClass('hover-reverse');
                content_two.addClass('hover-reverse');
                cover_two.removeClass('hover');
                content_two.removeClass('hover');
                setTimeout(() => {
                    cover_two.removeClass('hover-reverse');
                    content_two.removeClass('hover-reverse');
                }, 1000);
            }
            else{
                content_two.addClass('hover');
                cover_two.addClass('hover');
            }
        }
    })
    $('.deal.three').hover(function(){
        if(!deals.hasClass('unhoverable')){
            if ( cover_three.hasClass('hover') ){
                cover_three.addClass('hover-reverse');
                content_three.addClass('hover-reverse');
                cover_three.removeClass('hover');
                content_three.removeClass('hover');
                setTimeout(() => {
                    cover_three.removeClass('hover-reverse');
                    content_three.removeClass('hover-reverse');
                }, 1000);
            }
            else{
                content_three.addClass('hover');
                cover_three.addClass('hover');
            }
        }
    })
  
    
})
