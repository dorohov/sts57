$(function(){var e="noname-browser",o=navigator.userAgent.toLowerCase();-1!=o.indexOf("msie")&&(e="msie"),-1!=o.indexOf("trident")&&(e="msie"),-1!=o.indexOf("konqueror")&&(e="konqueror"),-1!=o.indexOf("firefox")&&(e="firefox"),-1!=o.indexOf("safari")&&(e="safari"),-1!=o.indexOf("chrome")&&(e="chrome"),-1!=o.indexOf("chromium")&&(e="chromium"),-1!=o.indexOf("opera")&&(e="opera"),-1!=o.indexOf("yabrowser")&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){moment.locale(window.navigator.userLanguage||window.navigator.language)});
$(window).load(function(a){$(".page-loader").removeClass("active")});
$(document.body).on("click.fecss.scrollto",".scrollto",{},function(t){t.preventDefault(),console.log("body trigger:click.fecss.scrollto");var o=$(this),l=$(o.attr("href")).eq(0),e=parseInt(o.attr("data-scrollto-diff"))||0,r=parseInt(o.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:l.offset().top+e},r)});
$("img").addClass("img-responsive"),$(".text-block ul").addClass("ul-site");var url=window.location.pathname;$('.navbar-nav a[href="'+url+'"]').parent().addClass("active"),$('._ppc__btn-block .btn-grey-light[href="'+url+'"]').addClass("active"),$("._ipc__slider-carousel .item").eq(0).addClass("active"),$(".text-block table").addClass("table table-bordered"),$(".text-block .table.table-bordered").parent().addClass("table-responsive"),$(".text-block img").parent().addClass("_tb__img"),$(".fancybox").fancybox({prevEffect:"none",nextEffect:"none"}),$(".fancybox-buttons").fancybox({openEffect:"none",closeEffect:"none",prevEffect:"none",nextEffect:"none",closeBtn:!1,helpers:{title:{type:"inside"},buttons:{}},afterLoad:function(){this.title=this.title}}),$("form.form-site").validationEngine("attach",{promptPosition:"bottomLeft"});

$(".map-svg__button").on("mousemove",function(){$(this).parent().attr("data-svg-hover","hover")}),$(".map-svg__button").on("mouseout",function(){$(this).parent().attr("data-svg-hover","")}),$(".map-svg__button").on("click",function(){$(this).parent().attr("data-svg-focus","focus");var t=$(this).attr("data-target");$(t).attr("data-hover","onhover")}),$(".map-tooltip__item button.btn-close").on("click",function(){$(this).closest(".map-tooltip__item").attr("data-hover",""),$(".map-svg__item").attr("data-svg-focus","")}),$(".map-tooltip__item .map-tooltip__closest").on("click",function(){$(this).closest(".map-tooltip__item").attr("data-hover",""),$(".map-svg__item").attr("data-svg-focus","")});