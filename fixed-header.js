$(document).ready(function() {
    // Fixed хидер

    var w = ($(window).width() >= 768) ? 100 : 0;

    $(window).resize(function() {
        w = ($(window).width() >= 768) ? 100 : 0;
        if ($(window).scrollTop() >= w) {
            $('.header__top').addClass('fixed-top');
        } else {
            $('.header__top').removeClass('fixed-top');
        }
    });

    if ($(window).scrollTop() >= w) {
        $('.header__top').addClass('fixed-top');
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() >= w) {
            $('.header__top').addClass('fixed-top');
        } else {
            $('.header__top').removeClass('fixed-top');
        }
    });
});