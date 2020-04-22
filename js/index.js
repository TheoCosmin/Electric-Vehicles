var motive_img_1 = $('.image-one-link');
var motive_img_2 = $('.image-two-link');
var motive_img_3 = $('.image-three-link');
var motive_img_4 = $('.image-four-link');
var motive_img_5 = $('.image-five-link');

$(document).ready(function (){
    setInterval(() => {
        motive_img_1.removeClass('notransition');
        motive_img_2.removeClass('notransition');
        motive_img_3.removeClass('notransition');
        motive_img_4.removeClass('notransition');
        motive_img_5.removeClass('notransition');
        
    }, 10);
})