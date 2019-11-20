$(function () {
    'use strict';

    /* 
    *********************************
    search start 
    */
    $('input[type="search"]').hide();
    $('#search').on('click', function (e) {
        if ($('.form-control').is(':hidden')) {
            $('input[type="search"]').show(700);
            return false;
        }
    });

    /* 
    *********************************
    search end 
    */

    /* 
    *********************************
    slider main start 
    */
    let $allSlidesPrd = $('.main-slide-wrapper figure img'),
        $allSlideCuption = $('.main-slide-wrapper figure figcaption'),
        $allSlideFigures = $('.main-slide-wrapper figure'),
        $arrSliderSrc = [],
        $figcaption = [],
        $i = 0,
        i = 0,
        $indexPrd = 0;

    $allSlideFigures.remove();
    $allSlidesPrd.each(function () {
        $arrSliderSrc[$i] = $(this).attr('src');
        $i++;
    });

    $allSlideCuption.each(function () {
        $figcaption[i] = $(this).html();
        i++;
    });

    function initPdr() {
        for (let i = 0; i < $arrSliderSrc.length; i++) {
            let slideContent = $('<figure> <img src="' + $arrSliderSrc[i] +
                '" > <figcaption>' + $figcaption[i] + '</figcaption>');
            $('.main-slide-wrapper').append(slideContent);
            slideContent.css({
                'left': i * 100 - 100 + '%'
            });
        }


    }

    initPdr();


    function getPrevSlide() {
        $('.arrow-left').off('click', getPrevSlide);
        let currentSlides = $('.main-slide-wrapper figure'),
            newSlide = null,
            offset = 0;

        currentSlides.each(function () {
            $(this).css({
                'left': offset * 100 + '%'
            });
            offset++;
        });
        $indexPrd--;
        if ($indexPrd < 0 || $indexPrd == $arrSliderSrc.length) $indexPrd = $arrSliderSrc.length - 1;
        newSlide = $('<figure> <img src="' + $arrSliderSrc[$indexPrd] +
            '" > <figcaption>' + $figcaption[$indexPrd] + '</figcaption>');

        newSlide.css({
            'left': -100 + '%'
        });
        $('.main-slide-wrapper').prepend(newSlide);
        setTimeout(function () {
            $('.main-slide-wrapper figure:last').remove();
            $('.arrow-left').on('click', getPrevSlide);
        }, 400);
    }

    function getNextSlide() {

        $('.arrow-right').off('click', getNextSlide);
        let currentSlides = $('.main-slide-wrapper figure'),
            newSlide = null,
            offset = 0;

        currentSlides.each(function () {

            $(this).css({
                'left': offset * 100 - 200 + '%'
            });
            offset++;
        });
        if ($indexPrd == $arrSliderSrc.length) $indexPrd = 0;
        newSlide = $('<figure> <img src="' + $arrSliderSrc[$indexPrd] +
            '" > <figcaption>' + $figcaption[$indexPrd] + '</figcaption>');

        newSlide.css({
            'left': offset * 100 - 200 + '%'
        });
        $indexPrd++;

        $('.main-slide-wrapper').append(newSlide);
        setTimeout(function () {
            $('.main-slide-wrapper figure:first').remove();
            $('.arrow-right').on('click', getNextSlide);
        }, 400);

    }

    $('.arrow-left').on('click', getPrevSlide);
    $('.arrow-right').on('click', getNextSlide);


    /* 
    *********************************
    slider main end 
    */

    /* 
    *********************************
    section start 
    */

    $('.wrap-img').removeClass('wrap-img-after');
    $('.wrapper-hide').hide();
    $('.wrapper-hide').css({
        opacity: 0
    });

    $('.card').hover(
        function () {
            $(this).children('.wrap-img').addClass('wrap-img-after');
            $(this).children('.wrapper-hide').stop().show();
            $(this).children('.wrapper-hide').css({
                opacity: 1
            });
        },
        function () {
            $(this).children('.wrap-img').removeClass('wrap-img-after');
            $(this).children('.wrapper-hide').stop().hide();
            $(this).children('.wrapper-hide').css({
                opacity: 0
            });
        }
    );


    /* 
    *********************************
    section end 
    */

});