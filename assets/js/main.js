/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);

// AgriSolar Banner Slideshow
(function() {
	'use strict';
	
	function initBannerSlideshow() {
		var slides = document.querySelectorAll('.banner-slideshow .slide');
		var currentSlide = 0;
		
		if (slides.length === 0) return;
		
		function showNextSlide() {
			slides[currentSlide].classList.remove('active');
			currentSlide = (currentSlide + 1) % slides.length;
			slides[currentSlide].classList.add('active');
		}
		
		// Start the slideshow
		setInterval(showNextSlide, 4000); // 4 seconds interval
	}
	
	// Initialize when DOM is loaded
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initBannerSlideshow);
	} else {
		initBannerSlideshow();
	}
})();

// Video Modal functionality
(function() {
	'use strict';
	
	function initVideoModal() {
		var modal = document.getElementById('video-modal');
		var btn = document.getElementById('video-btn');
		var closeBtn = document.querySelector('.video-modal-close');
		var iframe = document.getElementById('youtube-iframe');
		
		// YouTube video ID extracted from the URL
		var videoId = 'X06uo96ZGJM';
		var embedUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&modestbranding=1';
		
		if (!modal || !btn || !closeBtn || !iframe) return;
		
		// Open modal when button is clicked
		btn.addEventListener('click', function(e) {
			e.preventDefault();
			iframe.src = embedUrl;
			modal.style.display = 'block';
			document.body.style.overflow = 'hidden'; // Prevent background scrolling
		});
		
		// Close modal when X is clicked
		closeBtn.addEventListener('click', function() {
			closeModal();
		});
		
		// Close modal when clicking outside of it
		modal.addEventListener('click', function(e) {
			if (e.target === modal) {
				closeModal();
			}
		});
		
		// Close modal with Escape key
		document.addEventListener('keydown', function(e) {
			if (e.key === 'Escape' && modal.style.display === 'block') {
				closeModal();
			}
		});
		
		function closeModal() {
			modal.style.display = 'none';
			iframe.src = ''; // Stop video playback
			document.body.style.overflow = ''; // Restore scrolling
		}
	}
	
	// Initialize when DOM is loaded
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initVideoModal);
	} else {
		initVideoModal();
	}
})();