//initialisation
$(function () {
   $('.header').height($(window).height());
    $('.header').width($(window).width());
});


$('.links li').on('click', function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});
