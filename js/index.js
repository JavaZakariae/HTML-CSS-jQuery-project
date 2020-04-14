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


//testimonial custom slider
(function autoSlider() {

    $('.custom-slider .active').each(function () {
        if (!$(this).is(':last-child')){
            $(this).delay(3000).fadeOut(1500, function () {
                $(this).removeClass('active');
                let nextDiv = $(this).next();
                nextDiv.addClass('active');
                nextDiv.fadeIn();
                autoSlider();
            });
        }else{
            $(this).delay(3000).fadeOut(1500, function () {
                $(this).removeClass('active');
                let firstChild = $('.custom-slider div').eq(0);
                firstChild.addClass('active');
                firstChild.fadeIn();
                autoSlider();
            });
        }

    });
}());
