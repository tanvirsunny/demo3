jQuery(function ($) {

    /*-- Strict mode enabled --*/
    "use strict";
    $(window).on('load', function() { // makes sure the whole site is loaded 
        $('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(350).css({'overflow':'visible'});
    });
    //nav-button
    $('.navbar-toggler').click(function() { 
        $(this).toggleClass('active');
    });
    // nav-scroll
    $(window).scroll(function(){
      if($(document).scrollTop()>150){

          $('.navbar').addClass('navnew');
      }
      else{
          $('.navbar').removeClass('navnew');
      }
        
    });

    $('.navbar-collapse li a').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target
        || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
          var targetOffset = $target.offset().top;
          $('html,body')
          .animate({scrollTop: targetOffset}, 1500);
         return false;
        }
      }
    });

    //aos-settings
    AOS.init({

      once: true
      

    });

    //sliders
    $('.autoplay').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade:true,
      dots: false,
      autoplaySpeed: 3000,
      arrows:false
    }).slickAnimation();

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    }).slickAnimation();
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      arrows:false,
      centerPadding: '0'
    });

}(jQuery));