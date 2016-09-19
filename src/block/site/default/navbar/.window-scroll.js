$(
	function() {		
		var pos = $(document).scrollTop();		
		var gototop = $('.navbar-site');
		if(gototop.hasClass('fixed')) {
			if(pos < 60) {
				gototop.addClass('absolute').removeClass('fixed');
			}
		} else {
			if(pos > 60) {
				gototop.removeClass('absolute').addClass('fixed');
			}
		}
		
	}
);