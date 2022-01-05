!(function($) {
    "use strict";

    // Preloader
    $(window).on('load', function() {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function() {
                $(this).remove();
            });
        }
    });

    // Smooth scroll for the navigation menu and links with .scrollto classes
    var scrolltoOffset = $('#header').outerHeight() - 1;
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                e.preventDefault();

                var scrollto = target.offset().top - scrolltoOffset;

                if ($(this).attr("href") == '#header') {
                    scrollto = 0;
                }

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu, .mobile-nav').length) {
                    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-overly').fadeOut();
                }
                return false;
            }
        }
    });

    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function() {
        if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
                var scrollto = $(initial_nav).offset().top - scrolltoOffset;
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');
            }
        }
    });

    // Mobile Navigation
    if ($('.nav-menu').length) {
        var $mobile_nav = $('.nav-menu').clone().prop({
            class: 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('.mobile-nav').prepend('<button type="button" class="mobile-nav-close"><i class="icofont-close"></i></button>');
        $('#header').append('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');

        $(document).on('click', '.mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-overly').toggle();
        });

        $(document).on('click', '.mobile-nav-close', function(e) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-overly').fadeOut();
        });

        $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
            e.preventDefault();
            $(this).next().slideToggle(300);
            $(this).parent().toggleClass('active');
        });

        $(document).click(function(e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
            }
        });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
    }

    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
            $('#topbar').addClass('topbar-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
            $('#topbar').removeClass('topbar-scrolled');
        }
    });

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
        $('#topbar').addClass('topbar-scrolled');
    }

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    // Menu list isotope and filter
    $(window).on('load', function() {
        var menuIsotope = $('.menu-container').isotope({
            itemSelector: '.menu-item',
            layoutMode: 'fitRows'
        });

        $('#menu-flters li').on('click', function() {
            $("#menu-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            menuIsotope.isotope({
                filter: $(this).data('filter')
            });
            aos_init();
        });
    });

    //speakers carousel

    window.onscroll = function () {
        //var info5Y = document.getElementById('info5').offsetTop;
        var info4Y = document.getElementById('info4').offsetTop;
        var info3Y = document.getElementById('info3').offsetTop;
        var info2Y = document.getElementById('info2').offsetTop;
        var info1Y = document.getElementById('info1').offsetTop;
        var currentScrollPos = window.pageYOffset;
        if(currentScrollPos + 80 < info4Y){
            document.getElementById('ed5').style.opacity = "1"
            document.getElementById('ed4').style.opacity = "0.7";
            document.getElementById('ed3').style.opacity = "0.7";
            document.getElementById('ed2').style.opacity = "0.7";
            document.getElementById('ed1').style.opacity = "0.7";
        }  
        else if(currentScrollPos + 80 >= info4Y && currentScrollPos + 80 < info3Y){
            document.getElementById('ed5').style.opacity = "0.7"
            document.getElementById('ed4').style.opacity = "1";
            document.getElementById('ed3').style.opacity = "0.7";
            document.getElementById('ed2').style.opacity = "0.7";
            document.getElementById('ed1').style.opacity = "0.7";
        }  
        else if(currentScrollPos + 80 >= info3Y && currentScrollPos + 80 < info2Y){
            document.getElementById('ed5').style.opacity = "0.7"
            document.getElementById('ed4').style.opacity = "0.7";
            document.getElementById('ed3').style.opacity = "1";
            document.getElementById('ed2').style.opacity = "0.7";
            document.getElementById('ed1').style.opacity = "0.7";
        }
        else if(currentScrollPos +80 >= info2Y && currentScrollPos + 80 < info1Y){
            document.getElementById('ed5').style.opacity = "0.7"
            document.getElementById('ed4').style.opacity = "0.7";
            document.getElementById('ed3').style.opacity = "0.7";
            document.getElementById('ed2').style.opacity = "1";
            document.getElementById('ed1').style.opacity = "0.7";
        }   
        else{
            document.getElementById('ed5').style.opacity = "0.7"
            document.getElementById('ed4').style.opacity = "0.7";
            document.getElementById('ed3').style.opacity = "0.7";
            document.getElementById('ed2').style.opacity = "0.7";
            document.getElementById('ed1').style.opacity = "1";
        }
    }
    

    //sponsors carousel
    $('.sponsors_OWL').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        responsive: {
            480: {
                items: 1
            },
            678: {
                items: 2
            },
            960: {
                items: 3
            }
        }
    })

    //gallery carousel
    $('.nonloop').owlCarousel({
        center: true,
        loop: false,
        margin: 5,
        autoplay: false,
        rewind: true,
        autoplayHoverPause: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        smartSpeed: 1000,
        fluidSpeed: 10,
        startPosition: 1,
        nav: true,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            480: {
                items: 2
            },
            678: {
                item: 5
            },
            960: {
                items: 5
            }
        }
    });


    //TEAM CAROUSEL
    $('.nonloop1').owlCarousel({
        center: true,
        loop: false,
        margin: 5,
        autoplay: false,
        rewind: true,
        autoplayHoverPause: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        smartSpeed: 1000,
        fluidSpeed: 10,
        startPosition: 1,
        nav: true,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            480: {
                items: 2
            },
            678: {
                item: 5
            },
            960: {
                items: 5
            }
        }
    });

    //testimonials carousel
    //gallery carousel
    $('.test-carousel').owlCarousel({
        center: true,
        loop: false,
        margin: 5,
        autoplay: false,
        rewind: true,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        fluidSpeed: 10,
        startPosition: 2,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            480: {
                items: 2
            },
            678: {
                item: 5
            },
            960: {
                items: 5
            }
        }
    });

    // Initiate venobox lightbox
    $(document).ready(function() {
        $('.venobox').venobox();
    });

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true
        });
    }
    $(window).on('load', function() {
        aos_init();
    });
})(jQuery);