$('.links li').on('click', function () {
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


//smooth scroll
$('.links a').on('click', function () {
    var dataValue = $(this).data('value');
    console.log(dataValue);
    $('html').animate({
        scrollTop: $('#'+dataValue).offset().top
    }, 1000);
});

