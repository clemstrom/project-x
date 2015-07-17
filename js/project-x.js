// console.log("JS with Steer");

// Click on the arrow in the header
// Scroll down ti the correct section instead of the default jump

// 1. Select something
// $('header a')
// 2. perform an action


$('.nav-trigger').click( function(){
	// instruction here
	console.log('clicking on the nav trigger?');

	// hide
	// $('nav').hide();

	// fade Out
	// $('nav').fadeOut();

	// fade in
	// $('nav').fadeIn();

	// Slide down
	// $('nav').slideDown();

	// Toggle
	$('nav').slideToggle();
	
});


$('.scroll').click( function(){
	// instructions
	// console.log('CLicked on the header a ?')

	// scroll down the page
	// - select the whole page 'html, body'
	// - jQuery animate to move the top of the window down the page
	//  - specify a duration for the animation

	// calculate distance to scroll to the the target section
	var href = $(this).attr('href');

	// console.log(href);

	// store information in variable
	var distanceToScroll = $(href).offset().top;

	// console.log(distanceToScroll);

	$('html, body').animate({ scrollTop : distanceToScroll }, 1000);

	// stop the default action (jumping down the page)
	// everything after the return is ignored - should be the last line of the code within the function
	return false;
});



$('.nav-trigger').on('click',function(){
  
  $('.nav-trigger').toggleClass('active');

});














