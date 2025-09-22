/**
 * Testimonial Slideshow
 * Handles the testimonial carousel functionality
 */
(function() {
	'use strict';
	
	var slides = document.querySelectorAll('.testimonial-slide');
	var dots = document.querySelectorAll('.testimonial-dot');
	var currentSlide = 0;
	var slideInterval;
	
	if (slides.length === 0) return;
	
	function showSlide(index) {
		// Hide all slides
		slides.forEach(function(slide) {
			slide.classList.remove('active');
		});
		
		// Remove active from all dots
		dots.forEach(function(dot) {
			dot.classList.remove('active');
		});
		
		// Show current slide
		slides[index].classList.add('active');
		if (dots[index]) {
			dots[index].classList.add('active');
		}
	}
	
	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length;
		showSlide(currentSlide);
	}
	
	function startSlideshow() {
		slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
	}
	
	function stopSlideshow() {
		clearInterval(slideInterval);
	}
	
	// Add click handlers to dots
	dots.forEach(function(dot, index) {
		dot.addEventListener('click', function() {
			currentSlide = index;
			showSlide(currentSlide);
			stopSlideshow();
			startSlideshow(); // Restart the timer
		});
	});
	
	// Pause slideshow on hover
	var testimonialContainer = document.getElementById('testimonial-slideshow');
	if (testimonialContainer) {
		testimonialContainer.addEventListener('mouseenter', stopSlideshow);
		testimonialContainer.addEventListener('mouseleave', startSlideshow);
	}
	
	// Start the slideshow
	startSlideshow();
})();
