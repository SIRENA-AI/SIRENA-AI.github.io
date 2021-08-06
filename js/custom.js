$(window).on('load', function(){

	"use strict";


	/* ========================================================== */
	/*   Navigation Background Color                              */
	/* ========================================================== */

	$(window).on('scroll', function() {
		if($(this).scrollTop() > 450) {
			$('.navbar-fixed-top').addClass('opaque');
		} else {
			$('.navbar-fixed-top').removeClass('opaque');
		}
	});


	/* ========================================================== */
	/*   Hide Responsive Navigation On-Click                      */
	/* ========================================================== */

	  $(".navbar-nav li a").on('click', function(event) {
	    $(".navbar-collapse").collapse('hide');
	  });


	/* ========================================================== */
	/*   Navigation Color                                         */
	/* ========================================================== */

	$('#navbarCollapse').onePageNav({
		filter: ':not(.external)'
	});


	/* ========================================================== */
	/*   SmoothScroll                                             */
	/* ========================================================== */

	$(".navbar-nav li a, a.scrool").on('click', function(e) {

		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;

		$('html,body').animate({scrollTop:target_top -70}, 1000);
			return false;

	});


	/* ========================================================== */
	/*   Newsletter                                               */
	/* ========================================================== */

	$('.newsletter-form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'email':$('input[name="nf_email"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p.newsletter_success_box').show();
					});
				});
				e.preventDefault();
			}
		});
	});


	/* ========================================================== */
	/*   Register Top Home Section                                */
	/* ========================================================== */

	$('#register-form-home').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'names':$('input[name="register_names_home"]').val(),
					'email':$('input[name="register_email_home"]').val(),
					'ticket':$('select[name="register_ticket_home"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p.register_success_box_home').show();
					});
				});
				e.preventDefault();
			}
		});
	})


	/* ========================================================== */
	/*   Contact                                                 */
	/* ========================================================== */

	$('#contact-form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'names':$('input[name="contact_names"]').val(),
					'phone':$('input[name="contact_phone"]').val(),
					'email':$('input[name="contact_email"]').val(),
					'ticket':$('select[name="contact_ticket"]').val(),
					'message':$('textarea[name="contact_message"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p.contact_success_box').show();
					});
				});
				e.preventDefault();
			}
		});
	})
});



	/* ========================================================== */
	/*   Popup-Gallery                                            */
	/* ========================================================== */
	$('.popup-gallery').find('a.popup1').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	});

	$('.popup-gallery').find('a.popup2').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	});

	$('.popup-gallery').find('a.popup3').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	});

	$('.popup-gallery').find('a.popup4').magnificPopup({
		type: 'iframe',
		gallery: {
		  enabled:false
		}
	});


	/* ========================================================== */
	/*   New Feautures                                            */
	/* ========================================================== */
	const genNumber = () => {
	  document.querySelector("h6").style.setProperty("--percent", 372);
		 document.querySelector("h7").style.setProperty("--percent", 3);
		 		 document.querySelector("h8").style.setProperty("--percent", 42)
	};

	setInterval(genNumber, 2000);
	setTimeout(genNumber);
