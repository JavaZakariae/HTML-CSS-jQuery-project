// height of the header
$('.header').height($(window).height());



$('.arrow').on('click', function () {
    console.log('clicked');
    $('html').animate({
        scrollTop: $('.feature').offset().top
    }, 1000);
});
