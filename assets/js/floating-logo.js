/**
 * Floating Logo Animation
 * Handles the floating logo fade-out on scroll
 */
(function() {
	'use strict';
	
	var floatingLogo = document.getElementById('floating-logo');
	var banner = document.getElementById('banner');
	
	if (!floatingLogo || !banner) return;
	
	function handleScroll() {
		var scrollY = window.scrollY;
		var bannerHeight = banner.offsetHeight;
		var scrollThreshold = bannerHeight * 0.3; // Start fading at 30% of banner height
		
		if (scrollY > scrollThreshold) {
			floatingLogo.classList.add('scrolled');
		} else {
			floatingLogo.classList.remove('scrolled');
		}
	}
	
	// Add scroll event listener
	window.addEventListener('scroll', handleScroll);
	
	// Initial check
	handleScroll();
})();
