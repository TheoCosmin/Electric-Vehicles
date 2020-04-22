var n = $('.left-column p').length;
var heightt;

for (i=1; i<=n; i++ ){
    heightt = $('.left-column p:nth-child('+i+')').css('height');
    $('.right-column p:nth-child('+i+')').css('height',heightt);
}



$(window).on('resize',function (){
    for (i=1; i<=n; i++ ){
        heightt = $('.left-column p:nth-child('+i+')').css('height');
        $('.right-column p:nth-child('+i+')').css('height',heightt);
    }
})


