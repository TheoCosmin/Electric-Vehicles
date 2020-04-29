var audi_cover = $(".audi-deal .cover");

$(document).ready(function (){
    $(".audi-deal .content a").hover(function () {
        if( audi_cover.hasClass('hover')){
            audi_cover.addClass('hover-effect-reverse');
            audi_cover.removeClass('hover');
            setTimeout(() => {
                audi_cover.removeClass('hover-effect-reverse');
            }, 1200);
        }
        else{
            audi_cover.addClass('hover');
        }
    })
})
