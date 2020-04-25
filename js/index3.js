// height of the header
$('.header').height($(window).height());

$('.arrow').on('click', function () {
    $('html').animate({
        scrollTop: $('.feature').offset().top
    }, 1000);
});

$('.show-more').on('click', function () {
    $('.hiden').fadeIn(2000);
});
