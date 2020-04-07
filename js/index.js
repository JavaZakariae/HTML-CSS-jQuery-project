$('.links li').on('click', function () {
    console.log('dddddddddd');
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});


$(document).ready(function(){
    $('.slider').bxSlider(
        {
            speed:1500
        }
    );
});

//initialisation
$(function () {
   $('.header').height($(window).height());
    $('.header').width($(window).width());
});


