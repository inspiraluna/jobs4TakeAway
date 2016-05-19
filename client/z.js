Template.body.rendered = function(){




		// jQuery( document ).ready( function($) {
			
			// Setup strict mode
			// (function() {
		
		    // "use strict";



				/* --------------------------------------------------------- */
				/* !Setup parallax elements */
				/* --------------------------------------------------------- */
				
				$('html.no-touch #hero-bg-rotator').find('.mtphr-rotator-resource').mtphr_parallax();
				$('html.no-touch #quotes').mtphr_parallax();
				$('html.no-touch #tweets').mtphr_parallax();
				$('html.no-touch #services-more').mtphr_parallax();
				$('html.no-touch #client-quotes').mtphr_parallax();
				
				
				/* --------------------------------------------------------- */
				/* !Setup the hero bg rotator as soon as possible */
				/* --------------------------------------------------------- */
				
				$( '#hero-bg-rotator' ).mtphr_rotator({
		      type : 'rotate',
		      rotate_type : 'fade',
		      rotate_ease : 'easeInOutQuint',
		      nav_reverse : 1,
			  });
			  
			  
			  /* --------------------------------------------------------- */
				/* !Setup WOW */
				/* --------------------------------------------------------- */
			
				var wow = new WOW({
					offset: 150,
					mobile: false
				});
				wow.init();
				
				
				/* --------------------------------------------------------- */
				/* !Setup the galleries */
				/* --------------------------------------------------------- */
			
				$('.mtphr-gallery').mtphr_gallery();
	
	
				/* --------------------------------------------------------- */
				/* !Setup the contact form validation */
				/* --------------------------------------------------------- */
	
				$('#contact-form').validate({
					errorClass: 'apex-error',
					validClass: 'apex-valid',
					errorElement: 'div',
					submitHandler: function(form) {
						$(form).find('button[type="submit"]').addClass('loading');
				    $(form).ajaxSubmit({
					    target: '#contact-form-response',
					    clearForm: true,
							resetForm: true,
							success: function() {
								$(form).find('button[type="submit"]').removeClass('loading');
							}
				    });
				  }
				});
			
			// }());

		// });
		
		// jQuery( window ).load( function() {
		
			// Setup strict mode
			// (function() {
		
		    // "use strict";
				
	
				/* --------------------------------------------------------- */
				/* !Setup the rotators */
				/* --------------------------------------------------------- */
	
	    	jQuery( '#hero-rotator' ).mtphr_rotator({
		      rotate_type : 'slide_up',
		      auto_rotate : 1,
		      rotate_delay : 7,
		      rotate_ease : 'easeInOutQuint',
		      nav_reverse : 1,
			  });
	
		  	jQuery( '#apex-rotator-quotes, #apex-rotator-tweets, #apex-rotator-client-quotes' ).mtphr_rotator({
		      rotate_type : 'slide_left',
		      auto_rotate : 1,
		      rotate_delay : 7,
		      rotate_ease : 'easeInOutQuint',
		      nav_reverse : 1,
			  });
			  
			  /* --------------------------------------------------------- */
			  /* !Setup the hero rotator listener */
			  /* --------------------------------------------------------- */
			  
			  $( '#hero-rotator' ).on('mtphr_rotator_before_change_single', function( e, vars ) {
					$( '#hero-bg-rotator' ).trigger('mtphr_rotator_goto', [vars.next]);
				});
				
				
				/* --------------------------------------------------------- */
				/* !Setup the sliders */
				/* --------------------------------------------------------- */
				
				jQuery('.mtphr-slider').mtphr_slider({
				  slide_speed : 1000
			  });
			  
			  
			  
			  /* --------------------------------------------------------- */
			  /* !Setup the slide graphs */
			  /* --------------------------------------------------------- */
			  
				jQuery( '.mtphr-slidegraph' ).mtphr_slidegraph();
			
			// }());
	
		// });
	}
		