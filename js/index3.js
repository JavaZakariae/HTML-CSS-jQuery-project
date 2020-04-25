// height of the header
$('.header').height($(window).height());

$('.arrow').on('click', function () {
    $('html').animate({
        scrollTop: $('.feature').offset().top
    }, 1000);
});

$('.show-more').on('click', function () {
    $('.items-box .hidden').fadeIn(2000);
});

//activate/deactivate  arrow
function checkClients() {
    console.log('hello');
    let leftArrow = $('.client .left');
    let rightArrow = $('.client .right');
    if($('.client:first').hasClass('active'))
    {
        leftArrow.fadeOut();
    }
    else{
        leftArrow.fadeIn();
    }
    if($('.client:last').hasClass('active'))
    {
        rightArrow.fadeOut();
        leftArrow.fadeIn();
    }
    else{
        rightArrow.fadeIn();
    }
};
checkClients();


$('.testimonial i').on('click', function () {
    if($(this).hasClass('right')){
        $('.testimonial .active').fadeOut(1000, function () {
            $(this).removeClass('active');
            $(this).next().addClass('active');
            $(this).next().fadeIn();
            checkClients();
        })
    }
    else
    {/*left arrow*/
        $('.testimonial .active').fadeOut(1000, function () {
            $(this).removeClass('active');
            $(this).prev().addClass('active');
            $(this).prev().fadeIn();
            checkClients();
        })
    }
});

//
