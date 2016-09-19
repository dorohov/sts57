$('.map-svg__button').on('mousemove', function(){
	$(this).parent().attr('data-svg-hover', 'hover'); 
});
$('.map-svg__button').on('mouseout', function(){
	$(this).parent().attr('data-svg-hover', ''); 
});
$('.map-svg__button').on('click', function(){
	$(this).parent().attr('data-svg-focus', 'focus'); 
	var svgTarget = $(this).attr('data-target');
	$(svgTarget).attr('data-hover', 'onhover');
});
$('.map-tooltip__item button.btn-close').on('click', function(){
	$(this).closest(".map-tooltip__item").attr('data-hover', '');
	$(".map-svg__item").attr('data-svg-focus', ''); 
});
$('.map-tooltip__item .map-tooltip__closest').on('click', function(){
	$(this).closest(".map-tooltip__item").attr('data-hover', '');
	$(".map-svg__item").attr('data-svg-focus', ''); 
});