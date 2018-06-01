$(document).ready(function(){
      $('#menu-button').click(function() { 
          $(this).toggleClass('active');
          $('.humberbug').toggleClass('active');
          $('#menu').toggleClass('open');
          $('#menu-left').toggleClass('active');
    });


    // const tilt = $('.service-single-content').tilt()
    // tilt.on('change', function(e, transforms){});



    // $('.center').slick({
    //   centerMode:true,
    //   centerPadding: '0px',
    //   slidesToShow: 4,
    //   responsive: [
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         arrows: false,
    //         centerMode: true,
    //         centerPadding: '40px',
    //         slidesToShow: 1
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         arrows: false,
    //         centerMode: true,
    //         centerPadding: '40px',
    //         slidesToShow: 1
    //       }
    //     }
    //   ]
    // });
    $('.one-time').slick({
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1
    });
    $('.team-main-slider').slick({
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1
    });


     $('#fullpage').fullpage({
        anchors:['header', 'services', 'protfulio-area', 'our-team','contact-us'],
        verticalCentered: true,
        scrollOverflow: true,
        scrollingSpeed: 1500
    });

     particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 380,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#d5ddf1"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 0,
            "height": 0
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 4,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });

})

    var controller=new ScrollMagic.Controller();

    var ourScene=new ScrollMagic.Scene({
      triggerElement:'.heading_sec',
      duretion:'100%',
      triggerHook: 1
    })
    .setClassToggle('.heading_sec','heading_sec_anim')
    .addTo(controller);  


    var ourScene=new ScrollMagic.Scene({
      triggerElement:'.process-text',
      duretion:'100%',
      triggerHook: 1
    })
    .setClassToggle('.process-text','process-text_anim')
    .addTo(controller);

    var ourScene=new ScrollMagic.Scene({
      triggerElement:'.item_sec_1',
      duretion:'100%',
      triggerHook: 1
    })
    .setClassToggle('.item_sec_1','item_sec_1_anim')
    .addTo(controller);
    

    var ourScene=new ScrollMagic.Scene({
      triggerElement:'.item_sec_2',
      duretion:'100%',
      triggerHook: 1
    })
    
    .setClassToggle('.item_sec_2','item_sec_1_anim2')
    .addTo(controller);
    

    var ourScene=new ScrollMagic.Scene({
      triggerElement:'.item_sec_3',
      duretion:'100%',
      triggerHook: 1
    })
    .setClassToggle('.item_sec_3','item_sec_1_anim3')
    .addTo(controller);
    

    var ourScene=new ScrollMagic.Scene({
      triggerElement:'.item_sec_4',
      duretion:'100%',
      triggerHook: 1
    })
    .setClassToggle('.item_sec_4','item_sec_1_anim4')
    .addTo(controller);
    

    var ourScene=new ScrollMagic.Scene({
          triggerElement:'.heading_sec_2',
          duretion:'100%',
          triggerHook: 1
        })
        .setClassToggle('.heading_sec_2','heading_sec_2_anim')
        .addTo(controller);
     

     var ourScene=new ScrollMagic.Scene({
        triggerElement:'.sec_text',
        duretion:'100%',
        triggerHook: 1
      })
      .setClassToggle('.sec_text','sec_text_anim')
      .addTo(controller); 

      var ourScene=new ScrollMagic.Scene({
        triggerElement:'.protfulio-wrapper',
        duretion:'100%',
        triggerHook: 1
      })
      .setClassToggle('.protfulio-wrapper','protfulio-wrapper_anim')
      .addTo(controller);


      var ourScene=new ScrollMagic.Scene({
        triggerElement:'.heading_sec_3',
        duretion:'100%',
        triggerHook: 1
      })
      .setClassToggle('.heading_sec_3','heading_sec_3_anim')
      .addTo(controller); 

      var ourScene=new ScrollMagic.Scene({
        triggerElement:'.sec_text_3',
        duretion:'100%',
        triggerHook: 1
      })
      .setClassToggle('.sec_text_3','sec_text_3_anim')
      .addTo(controller); 

      var ourScene=new ScrollMagic.Scene({
        triggerElement:'.service-process-heading',
        duretion:'100%',
        triggerHook: 1
      })
      .setClassToggle('.service-process-heading','service-process-heading_anim')
      .addTo(controller);

      var ourScene=new ScrollMagic.Scene({
        triggerElement:'.service-process-text',
        duretion:'100%',
        triggerHook: 1
      })
      .setClassToggle('.service-process-text','service-process-text_anim')
      .addTo(controller); 


      var ourScene=new ScrollMagic.Scene({
        triggerElement:'.service-process-single-content',
        duretion:'100%',
        triggerHook: 1
      })
      .setClassToggle('.service-process-single-content','service-process-single-content_anim')
      .addTo(controller);
      

      var ourScene=new ScrollMagic.Scene({
        triggerElement:'.team-main-slider',
        duretion:'100%',
        triggerHook: 1
      })
      .setClassToggle('.team-main-slider','team-main-slider_anim')
      .addTo(controller);
      

      var ourScene=new ScrollMagic.Scene({
        triggerElement:'.heading_sec_4',
        duretion:'100%',
        triggerHook: 1
      })
      .setClassToggle('.heading_sec_4','heading_sec_4_anim')
      .addTo(controller);
      

      var ourScene=new ScrollMagic.Scene({
        triggerElement:'.contact-us-main',
        duretion:'100%',
        triggerHook: 1
      })
      .setClassToggle('.contact-us-main','contact-us-main_anim')
      .addTo(controller);
