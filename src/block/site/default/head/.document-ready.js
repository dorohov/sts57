$('img').addClass('img-responsive');
$('.text-block ul').addClass('ul-site');
var url = window.location.pathname;
$('.navbar-nav a[href="'+url+'"]').parent().addClass('active'); 
$('._ppc__btn-block .btn-grey-light[href="'+url+'"]').addClass('active'); 
$('._ipc__slider-carousel .item').eq(0).addClass('active');

$('.text-block table').addClass('table table-bordered');
$('.text-block .table.table-bordered').parent().addClass('table-responsive');
$('.text-block img').parent().addClass('_tb__img'); 
$('.fancybox').fancybox({
	prevEffect : 'none',
	nextEffect : 'none',
});
// конструкция для активации fancybox <a class="fancybox-buttons" data-fancybox-group="button" href="" data-title=""><img src="" alt="" /></a>
$('.fancybox-buttons').fancybox({
	openEffect  : 'none',
	closeEffect : 'none',
	prevEffect : 'none',
	nextEffect : 'none',
	closeBtn  : false,
	helpers : {
		title : {
			type : 'inside'
		},
		buttons	: {}
	},
	afterLoad : function() {
		this.title = this.title;
	}
});
$("form.form-site").validationEngine(
	'attach', {
		promptPosition : "bottomLeft"
	}
);