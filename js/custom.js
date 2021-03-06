// JavaScript Document

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });



    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: false,
        disable: 'mobile',
        mirror:true,
    });

    //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });
    });

    //animatedModal

    //#demo01
    $("#demo01").animatedModal({
        animationDuration: '1s',
        animatedIn: 'bounceInLeft',
        animatedOut: 'bounceOutLeft',
        beforeOpen: function() {
            var children = $(".thumb");
            var index = 0;
            function addClassNextChild() {
              if (index == children.length) return;
              children.eq(index++).show().velocity("transition.expandIn", {
                opacity: 1,
                stagger: 250
              });
              window.setTimeout(addClassNextChild, 200);
            }
            addClassNextChild();
        },
        afterClose: function() {
            $(".thumb").hide();
        }
    });

    //#demo02
    $("#demo02").animatedModal({
        animationDuration: '1s',
        beforeOpen: function() {
            var children = $(".thumb");
            var index = 0;
            function addClassNextChild() {
                if (index == children.length) return;
                children.eq(index++).show().velocity("transition.expandIn", {
                    opacity: 1,
                    stagger: 250
                });
                window.setTimeout(addClassNextChild, 200);
            }
            addClassNextChild();
        },
        afterClose: function() {
            $(".thumb").hide();
        }
    });

    //#demo03
    $("#demo03").animatedModal({
        animationDuration: '1s',
        animatedIn: 'bounceInRight',
        animatedOut: 'bounceOutRight',
        beforeOpen: function() {
            var children = $(".thumb");
            var index = 0;
            function addClassNextChild() {
                if (index == children.length) return;
                children.eq(index++).show().velocity("transition.expandIn", {
                    opacity: 1,
                    stagger: 250
                });
                window.setTimeout(addClassNextChild, 200);
            }
            addClassNextChild();
        },
        afterClose: function() {
            $(".thumb").hide();
        }
    });
    
    //#demo04
    $("#demo04").animatedModal({
        animationDuration: '1s',
        animatedIn: 'bounceInLeft',
        animatedOut: 'bounceOutLeft',
        beforeOpen: function() {
            var children = $(".thumb");
            var index = 0;
            function addClassNextChild() {
                if (index == children.length) return;
                children.eq(index++).show().velocity("transition.expandIn", {
                    opacity: 1,
                    stagger: 250
                });
                window.setTimeout(addClassNextChild, 200);
            }
            addClassNextChild();
        },
        afterClose: function() {
            $(".thumb").hide();
        }
    });
    
    //#demo05
    $("#demo05").animatedModal({
        animationDuration: '1s',
        beforeOpen: function() {
            var children = $(".thumb");
            var index = 0;
            function addClassNextChild() {
                if (index == children.length) return;
                children.eq(index++).show().velocity("transition.expandIn", {
                    opacity: 1,
                    stagger: 250
                });
                window.setTimeout(addClassNextChild, 200);
            }
            addClassNextChild();
        },
        afterClose: function() {
            $(".thumb").hide();
        }
    });
    
    //#demo06
    $("#demo06").animatedModal({
        animationDuration: '1s',
        animatedIn: 'bounceInRight',
        animatedOut: 'bounceOutRight',
        beforeOpen: function() {
            var children = $(".thumb");
            var index = 0;
            function addClassNextChild() {
                if (index == children.length) return;
                children.eq(index++).show().velocity("transition.expandIn", {
                    opacity: 1,
                    stagger: 250
                });
                window.setTimeout(addClassNextChild, 200);
            }
            addClassNextChild();
        },
        afterClose: function() {
            $(".thumb").hide();
        }
    });
    
    //#demo07
    $("#demo07").animatedModal({
        animationDuration: '1s',
        animatedIn: 'bounceInLeft',
        animatedOut: 'bounceOutLeft',
        beforeOpen: function() {
            var children = $(".thumb");
            var index = 0;
            function addClassNextChild() {
                if (index == children.length) return;
                children.eq(index++).show().velocity("transition.expandIn", {
                    opacity: 1,
                    stagger: 250
                });
                window.setTimeout(addClassNextChild, 200);
            }
            addClassNextChild();
        },
        afterClose: function() {
            $(".thumb").hide();
        }
    });
    
    //#demo08
    $("#demo08").animatedModal({
        animationDuration: '1s',
        beforeOpen: function() {
            var children = $(".thumb");
            var index = 0;
            function addClassNextChild() {
              if (index == children.length) return;
              children.eq(index++).show().velocity("transition.expandIn", {
                opacity: 1,
                stagger: 250
              });
              window.setTimeout(addClassNextChild, 200);
            }
            addClassNextChild();
        },
        afterClose: function() {
            $(".thumb").hide();
        }
    });
    
    // easypiechart
    $(window).scroll(function(){
        if($('#chart').hasClass('aos-animate') == true){
            $('.chart').easyPieChart({
                easing: 'easeOutBounce',
                barColor: '#87ceeb',
                trackColor: '#fff',
                scaleColor: '#ccc',
                lineCap: 'butt',
                lineWidth: 20,
                size: 150,
                animate: 1300,
                onStart: $.noop,
                onStop: $.noop,
                onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });
    
    
    // Contact Form 	

    // validate contact form
    //     $(function () {
    //         $('#contact-form').validate({
    //             rules: {
    //                 name: {
    //                     required: true,
    //                     minlength: 2
    //                 },
    //                 email: {
    //                     required: true
    //                 },
    //                 phone: {
    //                     required: false
    //                 },
    //                 message: {
    //                     required: true
    //                 }

    //             },
    //             messages: {
    //                 name: {
    //                     required: "This field is required",
    //                     minlength: "your name must consist of at least 2 characters"
    //                 },
    //                 email: {
    //                     required: "This field is required"
    //                 },
    //                 message: {
    //                     required: "This field is required"
    //                 }
    //             },
    //             submitHandler: function (form) {
    //                 $(form).ajaxSubmit({
    //                     type: "POST",
    //                     data: $(form).serialize(),
    //                     url: "process.php",
    //                     success: function () {
    //                         $('#contact :input').attr('disabled', 'disabled');
    //                         $('#contact').fadeTo("slow", 1, function () {
    //                             $(this).find(':input').attr('disabled', 'disabled');
    //                             $(this).find('label').css('cursor', 'default');
    //                             $('#success').fadeIn();
    //                         });
    //                     },
    //                     error: function () {
    //                         $('#contact').fadeTo("slow", 1, function () {
    //                             $('#error').fadeIn();
    //                         });
    //                     }
    //                 });
    //             }
    //         });
    //     });
    
});
