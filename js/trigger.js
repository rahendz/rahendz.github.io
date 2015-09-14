$(document).ready(function(){
	$('[role="scrollto"]').on('click',function(){
		var anchor = $(this).attr('href');
		var target = $(anchor);
		// $(this).parents('ul').find('li').removeClass('active');
		// $(this).parent().addClass('active');
		$('html').animate({scrollTop: target.offset().top},'slow');
	});
	$('[role="button-toggle"]').on('click',function(){
		var target = $(this).data('target');
		$(this).toggleClass('toggled in');
		$(target).toggleClass('in');
		$('.aside-overlay').toggleClass('in');
	});
	$('.aside-overlay').on('click',function(){
		var btnToggle = $('[role=button-toggle]'),
			target = btnToggle.data('target');
		$(this).toggleClass('in');
		btnToggle.toggleClass('in');
		$(target).toggleClass('in');
	});
});