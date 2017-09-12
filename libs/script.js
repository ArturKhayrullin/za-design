var mainSlider = '';

$(document).ready(function() {

    /*MAIN MENU*/

    /*SERVICES FOR HOME SLIDER*/
    if ($('.services-for-home-slider ul').length > 0) {

        var servicesForHomeSlider = $('.services-for-home-slider ul').bxSlider({
            onSlideAfter: function($slideElement, oldIndex, newIndex) {
                // do mind-blowing JS stuff here
                $('.services-for-home-current-slide-number').html(servicesForHomeSlider.getCurrentSlide() + 1);
            }
        });
        var servicesForHomeSliderCount = servicesForHomeSlider.getSlideCount();
        $(".services-for-home-overall-slides-number").html(servicesForHomeSliderCount);

        $('#services-for-home-slider-prev').click(function() {
            servicesForHomeSlider.goToNextSlide();
            return false;
        });

        $('#services-for-home-slider-next').click(function() {
            servicesForHomeSlider.goToPrevSlide();
            return false;
        });
    }

    /*PLANS AND PACKETS SLIDER*/



    if ($('ul.slider').length > 0) {
        $('ul.slider').bxSlider({
            infiniteLoop: true,

            onSlideAfter: function($slideElement, oldIndex, newIndex) {

                $(this).closest('.slider-wrapper').find('.currentSlide').html(this.getCurrentSlide() + 1);
            },

            onSliderLoad: function(currentIndex) {
                //console.log(this);
                $(this).closest('.slider-wrapper').find('.countSlide').html(this.getSlideCount());
                var currentSlider = this;
                $(this).closest('.slider-wrapper').find('.slider-next').click(function() {
                    currentSlider.goToNextSlide();
                    return false;
                });
                $(this).closest('.slider-wrapper').find('.slider-prev').click(function() {
                    currentSlider.goToPrevSlide();
                    return false;
                });

            }
        });
    }

    // $('#menu .content-mobile .accordion').accordion({
    //   collapsible: true
    // });

    $('body').attr('data-initHeight', $('body').height());
    var animSpeed = 1000;
    var initialLeftSize = $('#menu > .left').css('width');
    $("#menu-opener").click(function() {

        if ($(window).width() <= 620) {
            $("#menu").fadeIn('fast', function() {
                $('#menu .content-mobile .accordion').accordion({
                    collapsible: true
                });
            });
        } else {
            $("body").height($("#menu").height()).css('overflow', 'hidden');

            $('#menu *').not('.child-menu').css('opacity', '0');
            $('#menu').css('display', 'block');
            $('#menu').css('width', '0%');

            $('#menu > .left').css('width', '0%').css('opacity', 'initial');
            $('#menu').animate({
                    width: '100%'
                },
                animSpeed,
                function() {
                    /* stuff to do after animation is complete */
                });

            setTimeout(function() {

                $('#menu > .left').animate({
                        width: initialLeftSize
                    },
                    animSpeed * 1.1,
                    function() {
                        /* stuff to do after animation is complete */
                        var time = 0;
                        var timeOffset = 10;
                        var duration = 500;
                        $('#menu *').not('#menu > .left, .child-menu').each(function(index, el) {
                            var currentElement = this;
                            setTimeout(function() {
                                $(currentElement).animate({ opacity: '1' }, duration);
                            }, time);
                            time += timeOffset;
                        });
                    });
            }, 300);



        }

    });

    $("#menu-closer").click(function() {

        if ($(window).width() <= 620) {
            $("#menu").fadeOut();
            $("body").css('overflow', 'visible').css('height', $('body').attr('data-initHeight'));
        } else {
            var time = 0;
            var timeOffset = 10;
            var duration = 500;

            var opacityArrayLength = $('#menu *').not('#menu > .left, .child-menu').length;
            console.log('length is ' + opacityArrayLength);
            $('#menu *').not('#menu > .left, .child-menu').each(function(index, el) {

                var currentElement = this;
                setTimeout(function() {
                    $(currentElement).animate({ opacity: '0' }, duration, function() {
                        console.log(index);
                        if (index == opacityArrayLength - 1) { //when last element has faded out

                            $('#menu > .left').animate({ width: '0%' }, animSpeed);
                            $('#menu').animate({
                                    width: '0%',
                                },
                                animSpeed * 1.1,
                                function() {
                                    /* stuff to do after animation is complete */
                                    $('#menu').hide();
                                    $('#menu').css('width', 'initial');
                                    $('#menu > .left').css('width',initialLeftSize);
                                    $("body").css('overflow', 'visible').css('height', $('body').attr('data-initHeight'));
                                });
                        }

                    });
                }, time);
                time += timeOffset;
            });



        }
    });

    $('#contacts-menu .header .right').click(function() {
        window.history.back();
    });

    $("#about-screen-7 .person img").mouseenter(function() {
        $(this).attr("src", $(this).attr("src").replace(".jpg", ".gif"));
    });

    $("#about-screen-7 .person img").mouseout(function() {
        $(this).attr("src", $(this).attr("src").replace(".gif", ".jpg"));
    });



    // var controller = new ScrollMagic.Controller();


    // /*INDEX PAGE*/
    // var homeScreen1 = new ScrollMagic.Scene({triggerElement: ".first-screen .frame h3", duration: 500})
    // .setTween(".frame", {left:-100})
    // .addTo(controller);

    // var homeScreen2 = new ScrollMagic.Scene({triggerElement: "#home-screen-2", duration: 500})
    // .on('start', function() {
    //     $('#home-screen-2 .fadeIn').addClass('active');
    // })
    // .addTo(controller);


    // $('#home-screen-3 .left').css('left','-10%');
    // var homeScreen3 = new ScrollMagic.Scene({triggerElement: "#home-screen-3", duration: 500})
    // .setTween("#home-screen-3 .left", {left:0})
    // .addTo(controller);     

    if ($(window).width() > 620) {

        $('#home-screen-3 > .content .row').click(function() {
            $('#home-screen-3 > .content').animate({
                    opacity: 0
                },
                200,
                function() {
                    $('#home-screen-3 > .content').hide();
                    $('#home-screen-3 .left, #home-screen-3 .right').addClass('expanded');
                });
        });

        $('#home-screen-3 .right .minimize').click(function() {
            $('#home-screen-3 .left, #home-screen-3 .right').removeClass('expanded');
            $('#home-screen-3 > .content').show();
            $('#home-screen-3 > .content').animate({
                    opacity: 1
                },
                200);
        });


        $(".parallaxify").inertiaScroll({
            parent: $(".wrapper"),
            childDelta1: 0.02,
            childDelta2: 0.1,
            parentDelta: 0.08
        });
    }

});