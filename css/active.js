;(function($){
    'use strict';

    var browserWindow = $(window);

    // :: 2.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#magNav').classyNav();
    }

    // :: 3.0 Sticky Active Code
    if ($.fn.sticky) {
        $("#sticker").sticky({
            topSpacing: 0
        });
    }

    function featured_video() {
        $('.featured-video-posts-slide').owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            dots: false,
            autoplay: true,
            autoplayTimeout:5000,
            smartSpeed: 900
        });
    } featured_video();

    function most_viewed() {
        $('.most-viewed-videos-slide').owlCarousel({
            items: 3,
            margin: 10,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            dots: false,
            autoplay: true,
            autoplayTimeout:5000,
            smartSpeed: 900,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 2
                },
                1500: {
                    items: 3
                }
            }
        });
    } most_viewed();

    function youtube() {
        var slide = $('.youtube-slides');
        slide.owlCarousel({
            items: 1,
            loop: false,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            dots:false,
            video:true,
            lazyLoad : true,
            mergeFit:true,
            rewind: true,
            autoHeight:true,
            autoplay: true,
            autoplayTimeout:5000,
            center: true,
        });
    } youtube();

    // -----------hotspot------------//
    function hotspotjogja() {
        var slide = $('.trending-post-slides');
        if (slide.length) {
            slide.owlCarousel({
                items: 2,
                loop: true,
                margin: 10,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                dots:false,
                video:true,
                mergeFit:true,
                rewind: true,
                autoHeight:true,
                autoplay: true,
                autoplayTimeout:5000,
                responsive: {
                    0: {
                        items: 1
                    },
                    992: {
                        items: 2
                    },
                    1500: {
                        items: 2
                    }
                }
            });
        }
    }
    hotspotjogja();

    // -----------info terkini------------//
    function infoterkini() {
        var slide = $('.info-terkini-slides');
        if (slide.length) {
            slide.owlCarousel({
                items: 1,
                loop: true,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                dots: false,
                autoplay: true,
                smartSpeed: 900,
                animateOut: 'fadeOut',
                animateIn: 'fadein',
                autoplayTimeout:5000,
                autoplayHoverPause:true,
            });
        }
    }
    infoterkini();

    // -----------Tautan SLide------------//
    function linktautan(){
        var slide = $("#owl-carousel");
        if (slide.length) {
            slide.owlCarousel({
                loop : true,
                responsiveClass:true,
                margin:10,
                autoplay : true,
                autoplayTimeout:5000,
                autoplayHoverPause:true,
                smartSpeed: 900,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:3
                    }
                }
            });
        }
    }
    linktautan();

    // -----------Pengaduan Upik------------//
    function pengaduan() {
        var slide = $(".pengaduan-slides");
        slide.owlCarousel({
            items : 1,
            loop : true,
            margin:10,
            autoplay : true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            nav : true,
            dots:false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        });
    }
    pengaduan();

})(jQuery);

$(document).ready(function(){
    $('#login-toggle').click(function(){
        var $flogin = $('#flogin');
        if ($flogin.hasClass('open') == true) {
            $flogin.removeClass('open');
        } else{
            $flogin.addClass('open');
        };
    });
    // Breadcrumbs Responsive
    $(window).resize(function() {
        ellipses1 = $("#bcr1 :nth-child(2)")
        if ($("#bcr1 a:hidden").length >0) {ellipses1.show()} else {ellipses1.hide()}
    });
})

$(document).ready(function(){
    $('#summernote').summernote({
        placeholder: 'mulai tulis sesuatu...',
        tabsize: 2,
        height: 200,
        toolbar: [
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough', 'superscript', 'subscript']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']]
        ]
    });
})

$(document).on("scroll", function(){
    if
      ($(document).scrollTop() > 80){
        $("#topnav").removeClass("navbar-dark").addClass("shadow-sm navbar-light bg-white animated fadeInDown");
        $("#topnav2").addClass("fixed-top bg-white animated fadeInDown");
        $('.nav-item .fixed').css('color', '#484848');
        $("#logo").removeClass("logo");
        $("#logo").addClass("logo-white");
      }  else {
        $("#topnav").removeClass("shadow-sm navbar-light bg-white animated fadeInDown").addClass("navbar-dark");
        $("#topnav2").removeClass("fixed-top bg-white animated fadeInDown");
        $('.nav-item .fixed').css('color', 'white');
        $("#logo").removeClass("logo-white");
        $("#logo").addClass("logo");
    }
});