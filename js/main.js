 
(function ($) {
    "use strict";

    
jQuery(document).ready(function($){
	
	
	// one page nav
	$('#nav').onePageNav({
	    currentClass: 'current',
	    changeHash: true,
	    scrollSpeed: 1500,
	    scrollThreshold: 0.5,
	    filter: ':not(.external)',
	    easing: 'swing',
	    begin: function() {
	        //I get fired when the animation is starting
	    },
	    end: function() {
	        //I get fired when the animation is ending
	    },
	    scrollChange: function(jQuerycurrentListItem) {
	        //I get fired when you enter a section and I pass the list item of the section
	    }
	});
    
    $(".navbar-toggle").on("click", function(){
        $(".navbar-nav").addClass("mobile_menu");
    });
    $(".navbar-nav li a").on("click", function(){
        $(".navbar-collapse").removeClass("in");
    });

	// end of one page nav
	


	//jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        event.preventDefault();
    });
    

	// Owl Carousel for main slider
    $('.main_slide_owl').owlCarousel({
        loop:true,
        autoplay:true,
        animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
        dots:false,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:1
            },
            600:{
                items:1
            },
            992:{
                items:1
            }
        }
    });


    // start our services carousel

    $('.services-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:150,
		nav:true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			},
            1200:{
                items:4
            }
		}
	});

    // end our services carousel

    // jQuery Lightbox
    $('.lightbox').venobox({
        numeratio: true,
        infinigall: true
    });
    
    // jQuery MixItUp
    $('.work_all_item').mixItUp();

	

});

	

})(jQuery);

$(window).load(function() {
	$('#preload').fadeOut();
	$('.preload_spinner').delay(350).fadeOut('slow');
	$("body") .removeClass ("preloder_active");
	});