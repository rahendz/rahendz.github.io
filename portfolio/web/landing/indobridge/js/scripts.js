document.addEventListener('DOMContentLoaded', function () {

	var objectTouch = $('[role="touch"]'),
    	objectType = typeof objectTouch.data('touch') != "undefined" ? objectTouch.data('touch') : 'top',
    	objectClass = typeof objectTouch.data('class') != "undefined" ? objectTouch.data('class') : 'scrolled',
    	objectTarget = typeof objectTouch.data('target') != "undefined" ? objectTouch.data('target') : objectTouch.attr('class'),
    	objectOffset = objectType === 'top' ? objectTouch.offset().top : objectTouch.offset().top+objectTouch.height(),
        parallmax = document.querySelectorAll(".parallmax"),
        parallmaxSpeed = 0.5;

    try {
    	parallax = paraxify('.parallax',{speed:1});
    	// console.log(window.getComputedStyle(document.getElementsByClassName('parallax'), false).backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0]);
    	// console.log(document.querySelector('parallax'));
    } catch (e) {console.log(e);}

    $(window).load(function(){
        if ( $(window).scrollTop() > objectOffset ) {
            $(objectTarget).addClass(objectClass);
        }
    });

	$(window).scroll(function(){
    	if ( $(window).scrollTop() > objectOffset ) {
        	$(objectTarget).addClass(objectClass);
    	}
    	else if ( $(window).scrollTop() <= objectOffset ) {
        	$(objectTarget).removeClass(objectClass);
    	}
        [].slice.call(parallmax).forEach(function(el,i){
            var windowYOffsetParallmax = window.pageYOffset,
                elBackgrounPosParallmax = "50% " + (windowYOffsetParallmax * parallmaxSpeed) + "px";
            el.style.backgroundPosition = elBackgrounPosParallmax;
        });
	});
});