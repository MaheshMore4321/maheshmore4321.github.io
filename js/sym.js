$('.js-sym-nav-toggle').on('click', function(event){
	event.preventDefault();
	if ($('body').hasClass('offcanvas')) {
		$(this).removeClass('active');
		$('body').removeClass('offcanvas');
	} else {
		$(this).addClass('active');
		$('body').addClass('offcanvas');
	}
});