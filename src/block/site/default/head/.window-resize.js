var h_window = $(window).height(), 
	w_window = $(window).width(),

	h_navbar = $('.navbar-site').outerHeight(true),
	h_header = $('.header-site').outerHeight(true),
	h_footer = $('.footer-site').outerHeight(true),
	h_content_index = h_window,
	h_content_index_sm = h_window - h_navbar,
	h_content = h_window - h_navbar - h_footer;

if (device.mobile() || device.tablet()) {
	$('.navbar-site').addClass('navbar-fixed-top');	 
} else {
	$('.index-header-block').css("height", h_content_index);
	$('.map-page-content').css("height", h_content_index);
}
if (device.tablet()) {	 
	$('.index-header-block').css("height", h_content_index_sm);
	$('.map-page-content').css("min-height", h_content_index_sm);
}
if (device.mobile()) {
	$('.content-site').removeAttr("style");
	$('._nbr__scroller').removeClass("scroller");
} else {
	$('.content-site').css("min-height", h_content);
	$('.full-window').css("min-height", h_content_index);
}
$(".navbar-fixed-top").autoHidingNavbar();
$(".scroller").mCustomScrollbar();
