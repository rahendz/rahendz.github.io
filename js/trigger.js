$(document).ready(function(){
	$('[role="scrollto"]').on('click',function(){
		var anchor = $(this).attr('href');
		var target = $(anchor);
		// $(this).parents('ul').find('li').removeClass('active');
		// $(this).parent().addClass('active');
		$('html').animate({scrollTop: target.offset().top},'slow');
	});
});