$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('.menu').addClass('sticky-menu');
    } else {
        $('.menu').removeClass('sticky-menu');
    }
});