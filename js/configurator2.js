var numberOfPages = $('.fullpage').length;
var currentSlide = "#model";
var JSON;
var model;
var selectedOption = 0;
var autonomie = [];
var viteza_max = [];
var acceleratie = [];
var init = false;

var models = []
var modelsNo;
var models_price = [];
var selectedModel = 0;

var colors = [];
var colors_name = [];
var colors_price = [];
var colorNumber;
var selectedColor = 0;

var wheels = [];
var wheels_name = [];
var wheels_price =[];
var wheelsNumber;
var selectedWheel = 0;

var interior = [];
var interior_name = [];
var interior_price = [];
var interiorNumber;
var selectedInterior = 0;

var accesorii = [];
var accesorii_name = [];
var accesorii_price = [];
var accesoriiNumber;
var selectedAccesorii = []; 

var price = 0;



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


model = getUrlVars()['model'];
function changeTabs(){
    $('header nav ul li a').click(function(){
        //get the index of which element we've clicked on
        var index = $(this).parent().index();
        //stop stop showing old tab
        $(currentSlide).fadeOut();
        //start displaying the new tab that we have clicked on
        setTimeout(() => {
            for (i = 0; i < numberOfPages; i++){
                if( i == index){
                    var page = $('.fullpage')[i].id;  
                    currentSlide = "#"+page;
                    $(currentSlide).fadeIn();
                    $(currentSlide).css('display','flex');
                    $(this).addClass('active');
                }
                else{
                    var toRemoveClass = i+1
                    $('header nav ul li:nth-child('+toRemoveClass+') a').removeClass('active');
                }
            }
           }, 500);
    })
}
function mobileChangeTabs(){
    $('#button-1,#button-2,#button-3, #button-4').click(function(){
        $(currentSlide).fadeOut();
        setTimeout(() => {
            var index = $(this)[0].id.split('-')
            var page = $('.fullpage')[index[1]].id;
            currentSlide = "#"+page;
            $(currentSlide).fadeIn();
            $(currentSlide).css('display','flex');
            for(i  = 1; i <=numberOfPages; i++){
                var toChange = parseInt(index[1])+1;
                if ( i == toChange ){
                   $('header nav ul li:nth-child('+i+') a').addClass('active')
                }
                else{
                  
                    $('header nav ul li:nth-child('+i+') a').removeClass('active')
                }
            }
        }, 500);
    })
}



function getCarSpecs(){

    $.getJSON("js/testing.json", function(result){
        JSON = result;

        //update car subtitle
        $('#model_subtitle').text(JSON[model].subtitle);

        //get how many model options this car has
        modelsNo = JSON[model].mode_options.length;       

        if( !init ){
            //load autonomie + viteza_max + acceleratie for all options
            for( i = 0; i< modelsNo; i++){
                autonomie.push(JSON[model].mode_options[i].autonomie);
                viteza_max.push(JSON[model].mode_options[i].viteza_max);
                acceleratie.push(JSON[model].mode_options[i].acceleratie);
                models.push(JSON[model].mode_options[i].name);
                models_price.push(JSON[model].mode_options[i].pret);

            }
            colorNumber = JSON[model].paint.length;
            wheelsNumber = JSON[model].wheels.length;
            interiorNumber = JSON[model].interior.optiuni.length;
            accesoriiNumber = JSON[model].accesorii.length;

            for( i = 0 ; i < colorNumber; i++){
                colors.push(JSON[model].paint[i].id)
                colors_name.push(JSON[model].paint[i].name)
                colors_price.push(JSON[model].paint[i].pret)
            }
            for( i = 0 ; i < wheelsNumber; i++){
                wheels.push(JSON[model].wheels[i].id)
                wheels_name.push(JSON[model].wheels[i].name)
                wheels_price.push(JSON[model].wheels[i].pret)
            }
            for(i = 0; i < interiorNumber ; i++){
                interior.push(JSON[model].interior.optiuni[i].id)
                interior_name.push(JSON[model].interior.optiuni[i].name)
                interior_price.push(JSON[model].interior.optiuni[i].pret)
            }
            for(i = 0 ; i < accesoriiNumber; i++){
                accesorii.push(JSON[model].accesorii[i].id)
                accesorii_name.push(JSON[model].accesorii[i].name)
                accesorii_price.push(JSON[model].accesorii[i].pret)
                selectedAccesorii.push(0)
            }
            updateImage();
            updateInteriorImage();
            insertOptions();
            insertColors();
            insertWheels();
            insertInterior();
            insertInteriorDescription();
            insertAccesoriiOptions();
            writePrice(models_price[selectedModel])
            insertSummaryPrice();
            insertReviewItems();
            init = true;
        }
    })
    $.ajaxSetup({
        "error":function() { 
            $('.preview').css('background','url(img/configurator/oops.png)');  
            $('.preview').css('background-position','center');
            $('.preview').css('background-repeat','no-repeat');
            $('.preview').css('background-size','contain');
    }
  });
}



function insertSpecs(){
         // //get autonomie + viteza_max + acceleratie for initial default option selected
        $.getJSON("js/testing.json", function(result){
            JSON = result;  
            $('#autonomie').text(JSON[model].mode_options[selectedOption].autonomie+' km');
            $('#viteza_maxima').text(JSON[model].mode_options[selectedOption].viteza_max+' km/h');
            $('#acceleratie').text(JSON[model].mode_options[selectedOption].acceleratie+' s');
        })
}
function addCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
}
function getColorName(){
    var pret= colors_price[selectedColor];
    $('<div id="color_container" class="flex"></div>').appendTo("#culoare_aleasa");
    $('<div class = "name flex">'+colors_name[selectedColor]+'</div><div class ="pret flex">'+addCommas(pret)+'€</div>').appendTo("#color_container");
}

function getWheelName(){
    var pret= wheels_price[selectedWheel];
    $('<div id="wheel_container" class="flex"></div>').appendTo("#roti_alese");
    $('<div class = "name flex">'+wheels_name[selectedWheel]+'</div><div class ="pret flex">'+addCommas(pret)+'€</div>').appendTo("#wheel_container");
}
function getInteriorName(){
    // $('<p>'+interior_name[selectedInterior]+'</p>').appendTo('#interior_ales');
    var pret= interior_price[selectedInterior];
    $('<div id="interior_container" class="flex"></div>').appendTo("#interior_ales");
    $('<div class = "name flex">'+interior_name[selectedInterior]+'</div><div class ="pret flex">'+addCommas(pret)+'€</div>').appendTo("#interior_container");
}


function insertWheels(){
    $.getJSON("js/testing.json", function(result){
        JSON = result;   
        //add html code for each wheel option
        $('<div id="roti" class = " flex"></div>').appendTo('#roti_alese');
        for(i = 1 ; i<= wheelsNumber;i++){
            $('<div class ="roata"></div>').appendTo('#roti');
        }
        //add the wheel background for each option
        for(i = 1; i<= wheelsNumber; i++){
            $('.roata:nth-child('+i+')').css('background','url(img/configurator/'+model+'/wheels/'+wheels[i-1]+'.png)');
            $('.roata:nth-child('+i+')').css('background-position','center');
            $('.roata:nth-child('+i+')').css('background-repeat','no-repeat');
            $('.roata:nth-child('+i+')').css('background-size','contain');
        }

        //add selected class to the first color(default)
        $('.roata:first').addClass('selected');
        //write color name of first color
        getWheelName();
    })
}

function insertColors(){
    $.getJSON("js/testing.json", function(result){
        JSON = result;   
        //add html code for each color option
        $('<div id="culori" class = " flex"></div>').appendTo('#culoare_aleasa');
        for(i = 1 ; i<= colorNumber;i++){
            $('<div class ="color"></div>').appendTo('#culori');
        }

        //add the color background for each option
        for(i = 1; i<= colorNumber; i++){
            $('.color:nth-child('+i+')').css('background','url(img/configurator/'+model+'/colors/'+colors[i-1]+'.png)');
            $('.color:nth-child('+i+')').css('background-position','center');
            $('.color:nth-child('+i+')').css('background-repeat','no-repeat');
            $('.color:nth-child('+i+')').css('background-size','contain');
        }
        //add selected class to the first color(default)
        $('.color:first').addClass('selected');
        //write color name of first color
        getColorName();
    })
}

function insertInterior(){
    $('<div id="interior_options" class = " flex"></div>').appendTo('#interior_ales');
        for(i = 1 ; i<= interiorNumber;i++){
            $('<div class ="interior_option"></div>').appendTo('#interior_options');
        }
        for(i = 1; i<= interiorNumber; i++){
            $('.interior_option:nth-child('+i+')').css('background','url(img/configurator/'+model+'/interior/'+interior[i-1]+'.png)');
            $('.interior_option:nth-child('+i+')').css('background-position','center');
            $('.interior_option:nth-child('+i+')').css('background-repeat','no-repeat');
            $('.interior_option:nth-child('+i+')').css('background-size','cover');
        }
        $('.interior_option:first').addClass('selected');
        getInteriorName();
}

function insertInteriorDescription(){
    $.getJSON("js/testing.json", function(result){
        JSON = result;   
        $('<p>Interiorul Include:</div>').appendTo('#descriere_interior');
        $('<ul class="elements_description"></ul>').insertAfter("#descriere_interior p")
        for(i = 0 ; i< JSON[model].interior.descriere.length;i++){
            $('<li>'+JSON[model].interior.descriere[i]+'</li>').appendTo("#descriere_interior ul");
        }
    })
}
function insertAccesoriiOptions(){
    for(i = 0 ;i<accesoriiNumber;i++){
        $('<div class="optiune flex"><div class="container flex"><p>'+accesorii_name[i]+'</p><p>'+addCommas(accesorii_price[i])+'€</p></div></div>').appendTo("#accesorii_options");
    }
}

function writePrice(data){
    $('<p> '+addCommas(data)+'€</p>').appendTo(".total_price");
}
function updatePrice(){
    var price_old = price;
    price = models_price[selectedOption]+ colors_price[selectedColor] + wheels_price[selectedWheel] + interior_price[selectedInterior];
    for(i = 0; i<selectedAccesorii.length; i++){
        price += selectedAccesorii[i];
    }48
    $({someValue: price_old}).animate({someValue: price}, {
        duration: 1000,
        ease: 'swing',
        step: function() { 
            $('.total_price p').text(addCommas(Math.round(this.someValue)) + '€');
        }
    });
    setTimeout(() => {
        $('.total_price p').text(addCommas(price) + '€');
    }, 1090);
    insertSummaryPrice();
    insertReviewItems();
}

/* <div class="container flex">
                        <p>Pret</p>
                        <p>2325623e</p>
                    </div> */
                    // <!-- <p>Model S Long Range</p>
                    // <p>Pearl White</p>
                    // <p>19" tempest wheels</p>
                    // <p>Interior All Black</p>
                    // <p>Autopilot</p>
                    // <p>Self-driving</p> -->
function insertSummaryPrice(){
    $('#payment_price div').remove();
    $('<div class="container flex"> <p>Pret</p> <p>'+addCommas(price)+'€</p></div>').appendTo('#payment_price');
}
function insertReviewItems(){
    $('#review_items p').remove();
    $('<p>Model '+models[selectedOption]+'</p>').appendTo("#review_items")
    $('<p>Autonomie '+autonomie[selectedOption]+'km</p>').appendTo("#review_items")
    $('<p>Viteza Maxima '+viteza_max[selectedOption]+'km/h</p>').appendTo("#review_items")
    $('<p>Acceleratie 0-100km/h '+acceleratie[selectedOption]+'s</p>').appendTo("#review_items")
    $('<p>'+colors_name[selectedColor]+'</p>').appendTo("#review_items")
    $('<p>'+wheels_name[selectedWheel]+'</p>').appendTo("#review_items")
    $('<p>Interior '+interior_name[selectedInterior]+'</p>').appendTo("#review_items")
    for(i = 0 ;i < selectedAccesorii.length; i++){
        if (selectedAccesorii[i] != 0)
        $('<p> '+accesorii_name[i]+'</p>').appendTo("#review_items")
    }


}


function insertOptions(){

    for( i = 0 ; i < modelsNo ;i++){
        $('<div class="optiune flex"> <div class ="container flex"> <p>'+models[i]+'</p> <p>'+addCommas(models_price[i])+'€</p></div></div>').appendTo('#options');
    }
    $('.optiune:first').addClass('selected');
    price = models_price[selectedOption];
}

function getCarDescription(){
    $.getJSON("js/testing.json", function(result){
        JSON = result;  
        //insert description text for the selected option if there is any
        var selectedDescription = JSON[model].mode_options[selectedOption].description;
        if(selectedDescription){
            for(i = 1; i< selectedDescription.length ;i++){
                $('<li>'+selectedDescription[i]+'</li>').appendTo('#description_elements');
            }
            $('<p>'+selectedDescription[0]+'</p>').insertBefore('#selected_option_description ul');
        }
    })
}





function colorClick(){
    $(document).on('click','#culori .color', function(){
        if($(this).index() != selectedColor){
            $(this).addClass('selected');
            selectedColor = $(this).index() ;
            $('#culori .color').each(function(){
                if ($(this).index() != selectedColor) {
                    $(this).removeClass('selected');
                }
            })
            //remove old color name+price and update with the new,selected color name+price
            $('#color_container').remove();
            getColorName();

            //update the car preview image to match the color selected
            $('.preview').fadeOut(300);
            setTimeout(() => {
                updateImage();
                $('.preview').fadeIn(300);
            }, 250);
            updatePrice();
        }
    })
}
function wheelsClick(){
    $(document).on('click','#roti .roata', function(){
        if($(this).index() != selectedWheel){
            $(this).addClass('selected');
            selectedWheel = $(this).index() ;
            $('#roti .roata').each(function(){
                if ($(this).index() != selectedWheel) {
                    $(this).removeClass('selected');
                }
            })
            //remove old wheel name and update with the new,selected wheel name
            // $('#roti_alese p').remove();
            $('#wheel_container').remove();
            getWheelName();

            //update the car preview image to match the wheel selected
            $('.preview').fadeOut(300);
            setTimeout(() => {
                updateImage();
                $('.preview').fadeIn(300);
            }, 250);
            updatePrice();
        }
    })
}

function interiorOptionClick(){
    $(document).on('click','#interior_options .interior_option',function(){
        if($(this).index() != selectedInterior){
            $(this).addClass('selected');
            selectedInterior = $(this).index();
            $('#interior_options .interior_option').each(function(){
                if($(this).index()!= selectedInterior){
                    $(this).removeClass('selected');
                }
            })

            // $('#interior_ales p').remove();
            $('#interior_container').remove();
            getInteriorName();

            $('.interior_preview').fadeOut(300);
            setTimeout(() => {
                updateInteriorImage();
                $('.interior_preview').fadeIn(300);
            }, 250);
            updatePrice();
        }
    })
}
function accesoriiClick(){
   $(document).on('click',"#accesorii_options .optiune", function(){
        if(!$(this).hasClass('selected')){
            selectedAccesorii[$(this).index()] = accesorii_price[$(this).index()]
        }
        else{
            selectedAccesorii[$(this).index()] = 0
        }
       updatePrice();
       $(this).toggleClass('selected')
   })
}



function optiuneClick(){
    $(document).on('click', '#options .optiune', function(){

        if( $(this).index() != selectedOption){
            var selectedOption_old = selectedOption;
            //when clicked, clear old option description and get specs for selected model + update description
            selectedOption = $(this).index() ;
            $('#description_elements').empty();
            $('#selected_option_description p').remove();
            getCarSpecs();
            getCarDescription();

            //add selected class to selected element to highlight current selected element for user
            $(this).addClass('selected');
            $('#options .optiune').each(function(){
                if ($(this).index() != selectedOption) {
                    $(this).removeClass('selected');
                }
            })

            //update autonomie + viteza_max + acceleratie in an animation
            $({someValue: autonomie[selectedOption_old]}).animate({someValue: autonomie[selectedOption]}, {
                duration: 1000,
                step: function() { 
                    $('#autonomie').text(Math.round(this.someValue)+ ' km');
                }
            });
            $({someValue: viteza_max[selectedOption_old]}).animate({someValue: viteza_max[selectedOption]}, {
                duration: 1000,
                step: function() { 
                    $('#viteza_maxima').text(Math.round(this.someValue)+ ' km/h');
                }
            });
            $({someValue: acceleratie[selectedOption_old]}).animate({someValue: acceleratie[selectedOption]}, {
                duration: 1000,
                step: function() { 
                    $('#acceleratie').text(Math.round(this.someValue *10)/10 + ' s');
                }
            });

            updatePrice();
        }
    })
}
function updateImage(){
    $('.preview').css('background','url(img/configurator/'+model+'/model_'+model+'_'+colors[selectedColor]+'_'+wheels[selectedWheel]+'.png)');
    $('.preview').css('background-position','center');
    $('.preview').css('background-repeat','no-repeat');
    $('.preview').css('background-size','contain');
}
function updateInteriorImage(){
    // img/configurator/model_s/model_model_s_interior_black.png
    $('.interior_preview').css('background','url(img/configurator/'+model+'/model_'+model+'_interior_'+interior[selectedInterior]+'.png)');
    $('.interior_preview').css('background-position','center');
    $('.interior_preview').css('background-repeat','no-repeat');
    $('.interior_preview').css('background-size','cover');
}







getCarSpecs();

$(document).ready(function(){

    changeTabs();
    mobileChangeTabs();
    // insertOptions();
    insertSpecs();
    optiuneClick();
    colorClick();
    wheelsClick();
    accesoriiClick();
    interiorOptionClick();
    // updatePrice();

});




