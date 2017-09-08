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

                $(this).closest('.slider-wrapper').find('.currentSlide').html(this.getCurrentSlide()+1);
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

    $("#menu-opener").click(function() {
        $("#menu").fadeIn('fast', function() {
            $('#menu .content-mobile .accordion').accordion({
              collapsible: true
            });            
        });
        $(".wrapper").height($("#menu").height()).css('overflow','hidden');
        
    });

    $("#menu-closer").click(function() {
        $("#menu").fadeOut();
        $(".wrapper").css('overflow','visible').css('height','initial');
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
    



});