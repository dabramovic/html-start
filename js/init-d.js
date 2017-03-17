/*$(window).load(function(){
	dajSirinu();
	//isteVisine();
	

});*/

$(window).resize(function() {
	dajSirinu();
	//isteVisine();

	
/*kraj*/
});

$(window).scroll(function() {
	'use strict';
	
	/*STICKY HEADER*/
	
	var sirina = $(window).width();
	if (sirina >767) {
		
		if ($(this).scrollTop() > 100 ) {  
			$('header').addClass("sticky");
		}
		else {
			$('header').removeClass("sticky");
		}
	}
	
	/*STICKY HEADER*/
	
/*kraj*/
});


$(document).ready(function() {
	
	scrollrev(".magnific-gallery .col-xs-6, .tablesaw, .container, container-fluid");
	
	dajSirinu();
	gimmeRandom(1,5);
	
	$(".klasa").click(function(){	
		/* $(".planer").hide();	*/
	});
	
	gimmeRandom(1,5);
	//alert(broj);
	
	var $hamburger = $(".hamburger");
	  $hamburger.on("click", function(e) {
	    $hamburger.toggleClass("is-active");
	    // Do something else, like open/close menu
	});
	
	$(".big").slick({
		autoplay: true,
		autoplaySpeed: 2000,
		lazyLoad: 'ondemand',
    	dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		arrows:false
    });
	$(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:false
    });
	

	var windowT = $(window);
	$("#back-top").hide();
	$(function () {
		windowT.scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#back-top').fadeIn();
		} else {
			$('#back-top').fadeOut();
		}
	});
	$('#back-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
			}, 600);
			return false;
		});
	});
	
	$(".search").click(function() {
		$(".search").fadeToggle();
		$(".searchholder").toggleClass("active");
	})	


	$('.link-magnific').magnificPopup({
		type: 'image'
  	});
	$('.image-magnific').magnificPopup({type:'image'});
	$('.magnific-gallery').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image',
	  gallery:{enabled:true}
	  // other options
	});
	
});

function dajSirinu() {
	var device="desktop: ";
	var sirinaProzora = $(window).width();
	
	if (sirinaProzora < 1024) {
		var device = "tablet: ";
	}
	
	if (sirinaProzora < 768) {
		var device = "mobitel: ";
	}
	$(".sirinaTest").html(device + sirinaProzora + "px");
}

function gimmeRandom(x,y) {
	var broj = Math.floor(Math.random() * ((y-x)+1) + x);
	$(".broj").hide();
	$("#" + broj).show();
}



function scrollrev(kaj) {
	var pokazi = {
	 /* delay    : 600,
	  //distance : '90px',
	  easing   : 'ease-in-out',
	  //rotate   : { z: 10 },
	  scale    : 0.6*/
	  
	  viewFactor : 0.15,
      duration   : 800,
      distance   : "0px",
      scale      : 0.8
	};
	
	window.sr = ScrollReveal({ reset: true });
	sr.reveal(kaj, pokazi);
	
}

