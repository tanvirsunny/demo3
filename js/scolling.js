$(document).ready(function(){
	//new nav

$(window).scroll(function(){
        if($(document).scrollTop()>20){
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
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });

//scolling animation
	var controller=new ScrollMagic.Controller();

	var ourScene=new ScrollMagic.Scene({
		triggerElement:'#byke',
		duretion:'100%',
		triggerHook: -4
	})
	.setClassToggle('#byke','bykeout')
	.addTo(controller);



	var ourScene2=new ScrollMagic.Scene({
		triggerElement:'#about-us-heading',
		duretion:'100%',
		triggerHook: 1
	})
	.setClassToggle('#about-us-heading','about-us-heading2')
	.addTo(controller);


	var ourScene3=new ScrollMagic.Scene({
		triggerElement:'#text-about-us',
		duretion:'100%',
		triggerHook: 8
	})
	.setClassToggle('#text-about-us','text-about-us2')
	.addTo(controller);


	var ourScene4=new ScrollMagic.Scene({
		triggerElement:'#abous-us-right-area',
		duretion:'100%',
		triggerHook: 1
	})
	.setClassToggle('#abous-us-right-area','abous-us-right-area2')
	.addTo(controller);
})