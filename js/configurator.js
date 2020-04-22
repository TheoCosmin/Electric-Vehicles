function getUrlVars()
{
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
    function(m,key,value)
    {
        vars[key] = value;
    });
    return vars;
}




function model_buttons(){
    var variable= $("#autonomie-performance."+model).text().split(" ");
      var aut_x = parseFloat(variable[0]);;
      var variable= $('#autonomie-long-range.'+model).text().split(" ");
      var aut_y = parseFloat(variable[0]);

      var variable= $('#max-speed-performance.'+model).text().split(" ");
      var speed_x = parseFloat(variable[0]);
      var variable= $('#max-speed-long-range.'+model).text().split(" ");
      var speed_y = parseFloat(variable[0]);

      var variable= $('#acceleratie-performance.'+model).text().split(" ");
      var acc_x = parseFloat(variable[0]);
      var variable= $('#acceleratie-long-range.'+model).text().split(" ");
      var acc_y = parseFloat(variable[0]);



     
      $('.selection .long-range .container p').click(function(){
        //click pe Long range plus
        $('.selection .long-range').toggleClass('not-selected');
        $('.selection .long-range').toggleClass('selected');
        $('.selection .performance').toggleClass('not-selected');
        $('.selection .performance').toggleClass('selected');

        $({someValue: aut_x}).animate({someValue: aut_y}, {
            duration: 1000,
            step: function() { 
                $('#autonomie-performance.'+model).text(Math.round(this.someValue)+ ' km');
            }
        });
        $({someValue: speed_x}).animate({someValue: speed_y}, {
            duration: 1000,
            step: function() { 
                $('#max-speed-performance.'+model).text(Math.round(this.someValue)+ ' km/h');
            }
        });

        $({someValue: acc_x}).animate({someValue: acc_y}, {
            duration: 1000,
            step: function() { 
                $('#acceleratie-performance.'+model).text(Math.round(this.someValue * 10)/10+ ' s');
            }
        });

      })

      $('.selection .performance .container p').click(function(){
        //click pe Performance
        $('.selection .long-range').toggleClass('not-selected');
        $('.selection .long-range').toggleClass('selected');
        $('.selection .performance').toggleClass('not-selected');
        $('.selection .performance').toggleClass('selected');


        $({someValue: aut_y}).animate({someValue: aut_x}, {
            duration: 1000,
            step: function() {
                $('#autonomie-performance.'+model).text(Math.round(this.someValue)+ ' km');
            }
        });
        $({someValue: speed_y}).animate({someValue: speed_x}, {
            duration: 1000,
            step: function() { 
                $('#max-speed-performance.'+model).text(Math.round(this.someValue)+ ' km/h');
            }
        });

        $({someValue: acc_y}).animate({someValue: acc_x}, {
            duration: 1000,
            step: function() { 
                $('#acceleratie-performance.'+model).text(Math.round(this.someValue * 10)/10+ ' s');
            }
        });


      })
}



//get model name to load needed images
var model = getUrlVars()['model'];
var color;
var tyres;

function loadDefaultImage(){
    if(model == "model_s"){
        color = 'pearl_white';
        tyres = 'tempest';
    }
    if(model == 'e-tron'){
        color = 'glacier_white';
        tyres = 'arm';
    }
    if(model == 'mach-e'){
        color = "star_white";
        tyres = 'default';
    }
}
loadDefaultImage();

function loadImages(){
    $('.preview').css('background','url(img/configurator/'+model+'/model_'+model+'_'+color+'_'+tyres+'.png)');
    $('.preview').css('background-position','center');
    $('.preview').css('background-repeat','no-repeat');
    $('.preview').css('background-size','contain');
}




function loadContent(){
    $('.element h2.'+model+'.performance').removeClass('hidden');
    $('.container.'+model).removeClass('hidden');
    $('.extra.'+model).removeClass('hidden');
    $('.selection .'+model).removeClass('hidden');
}







var currentSlide = '#model';
function changeSlideArrow(){

    $('#next').click(function(){
        if(currentSlide == '#model') {
            $(currentSlide).fadeOut();
            currentSlide = '#exterior';
            setTimeout(() => {
                $(currentSlide).delay(500).fadeIn();
                $(currentSlide).css('display','flex');
            }, 500);
            // current active "layer"
            var index = parseInt($('header nav ul li a.active').parent().index() + 1);
            
            $('header nav ul li:nth-child('+index+') a').removeClass('active');
            index ++;
            $('header nav ul li:nth-child('+index+') a').addClass('active');
        }    
    });
    $('#next2').click(function(){
        if(currentSlide == '#exterior') {
            $(currentSlide).fadeOut();
            currentSlide = '#interior';
            setTimeout(() => {
                $(currentSlide).delay(500).fadeIn();
                $(currentSlide).css('display','flex');
            }, 500);
            var index = parseInt($('header nav ul li a.active').parent().index() + 1);
            
            $('header nav ul li:nth-child('+index+') a').removeClass('active');
            index ++;
            $('header nav ul li:nth-child('+index+') a').addClass('active');
        }    
    });
    $('#next3').click(function(){
        if(currentSlide == '#interior') {
            $(currentSlide).fadeOut();
            currentSlide = '#accesorii';
            setTimeout(() => {
                $(currentSlide).delay(500).fadeIn();
                $(currentSlide).css('display','flex');
            }, 500);
            var index = parseInt($('header nav ul li a.active').parent().index() + 1);
            
            $('header nav ul li:nth-child('+index+') a').removeClass('active');
            index ++;
            $('header nav ul li:nth-child('+index+') a').addClass('active');
        }    
    });
    $('#next4').click(function(){
        if(currentSlide == '#accesorii') {
            $(currentSlide).fadeOut();
            currentSlide = '#plata';
            setTimeout(() => {
                $(currentSlide).delay(500).fadeIn();
                $(currentSlide).css('display','flex');
            }, 500);
            var index = parseInt($('header nav ul li a.active').parent().index() + 1);
            
            $('header nav ul li:nth-child('+index+') a').removeClass('active');
            index ++;
            $('header nav ul li:nth-child('+index+') a').addClass('active');
        }    
    });
}


function selectLayer(){
    
    $('header nav ul li a').click(function(){
        //index - index of the element we've clicked on
        var index = $(this).parent().index()+1;
        console.log('click pe ', index);
        console.log('current slide = ',currentSlide);
        $(currentSlide).fadeOut();
        
       setTimeout(() => {
        for (i=1;i<=6;i++){
            if( i == index){
                console.log('i=',i);
                if(i == 1) {
                    $('#model').fadeIn();
                    $('#model').css('display','flex');
                }
                if(i == 2) {
                    $('#exterior').fadeIn();
                    $('#exterior').css('display','flex');
                }
                if(i == 3) {
                    $('#interior').delay(500).fadeIn();
                    $('#interior').css('display','flex');
                }
                if(i == 4) {
                    $('#accesorii').fadeIn();
                    $('#accesorii').css('display','flex');
                }
                if(i == 5) {
                    $('#plata').fadeIn();
                    $('#plata').css('display','flex');
                }
                $(this).addClass('active');
            }
            else{
                $('header nav ul li:nth-child('+i+') a').removeClass('active');
            }
        }
       }, 500);
        if(index == 1)currentSlide = '#model';
        if(index == 2)currentSlide = '#exterior';
        if(index == 3)currentSlide = '#interior';
        if(index == 4)currentSlide = '#accesorii';
        if(index == 5)currentSlide = '#plata';
    })
}


function loadColors(){
//    console.log($('.colors').attr('class'));
   for (i = 1; i <= 5; i++){
        $('.colors .color:nth-child('+i+')').css('background','url(img/configurator/'+model+'/colors/'+model+'_'+ $('.colors .color:nth-child('+i+')').attr('class').split(" ")[1]+'.png)');
        $('.colors .color:nth-child('+i+')').css('background-position','center');
        $('.colors .color:nth-child('+i+')').css('background-size','contain');
        $('.colors .color:nth-child('+i+')').css('background-repeat','no-repeat');
   }
}
function colorClick(){
    $('.color').click(function(){
        var indexColor = $(this).index() + 1;
        $('.colors .color:nth-child('+indexColor+')').addClass('active');
        for(i = 0; i<=5; i++ ){
            if(i != indexColor) $('.colors .color:nth-child('+i+')').removeClass('active');
        }
        updateColorName(indexColor);
        $('.preview').animate({opacity: 0},500);

        var culoareSelectata = $(this).attr('class').split(" ")[1];
        if (culoareSelectata == 'white'){
            if(model == 'model_s') color = 'pearl_white';
            if(model == 'e-tron') color = 'glacier_white';
            if(model == 'mach-e') color = 'star_white';
        }
        if (culoareSelectata == 'black'){
            if(model == 'model_s') color = 'solid_black';
            if(model == 'e-tron') color = 'mythos_black';
            if(model == 'mach-e') color = 'shadow_black';
        }
        if (culoareSelectata == 'grey'){
            if(model == 'model_s') color = 'midnight_silver';
            if(model == 'e-tron') color = 'typhoon_grey';
            if(model == 'mach-e') color = 'iconic_silver';
        }
        if (culoareSelectata == 'red'){
            if(model == 'model_s') color = 'red_multi_coat';
            if(model == 'e-tron') color = 'catalunya_red';
            if(model == 'mach-e') color = 'rapid_red';
        }
        if (culoareSelectata == 'blue'){
            if(model == 'model_s') color = 'deep_blue';
            if(model == 'e-tron') color = 'galaxy_blue';
            if(model == 'mach-e') color = 'grabber_blue';
        }



        setTimeout(() => {
            loadImages();
            $('.preview').css('background','url(img/configurator/'+model+'/model_'+model+'_'+color+'_'+tyres+'.png) center no-repeat contain').animate({opacity: 1},500);
        }, 500);
    })
}

function updateColorName(index){
    for(i = 1; i<=5; i++){
        if (i == index)  $('.color-text.'+model+' p:nth-child('+i+')').removeClass('hidden');
        else{
            $('.color-text.'+model+' p:nth-child('+i+')').addClass('hidden');
        }
    }
}
function initialColorAndWheels(){
    $('.colors .color:nth-child('+1+')').addClass('active');
    $('.color-text.'+model+' p:nth-child('+1+')').removeClass('hidden');
}
initialColorAndWheels();


$(document).ready(function (){

   
    model_buttons();
    loadImages();
    changeSlideArrow();
    selectLayer();
    loadContent(); 
    loadColors();
    colorClick();
    // $('#inserttest').load('hi.html');
});



$('.testbutton').click(function(){
    $('.preview').animate({opacity: 0},500);
    // color = 'deep_blue';
    color = $(this).attr('class').split(" ")[1];


    setTimeout(() => {
        loadImages();
        $('.preview').css('background','url(img/configurator/'+model+'/model_'+model+'_'+color+'_'+tyres+'.png) center no-repeat contain').animate({opacity: 1},500);
    }, 500);
   
})

$('.testbutton_wheels').click(function(){
    $('.preview').animate({opacity: 0},500);
    // color = 'deep_blue';
    tyres = $(this).attr('class').split(" ")[1];


    setTimeout(() => {
        loadImages();
        $('.preview').css('background','url(img/configurator/'+model+'/model_'+model+'_'+color+'_'+tyres+'.png) center no-repeat contain').animate({opacity: 1},500);
    }, 500);
   
})


// $('#inserttest').innerHTML='<object type="text/html" data="hi.html" ></object>';

// $('#inserttest').load('hi.html');





console.log('hi');
var JSON;
$.getJSON('js/testing.json',function(result){
    "use strict";
    // console.log(result.book[0].id);
    JSON = result;
    console.log(JSON);
})

$('#insert_shit').html('<p> hello </p>');



