$(document).ready(function(){
	$.redirecionarUrl = function(local)
	{
		var b = document.getElementsByTagName('base');
		if (b && b[0] && b[0].href)
		{
			if (b[0].href.substr(b[0].href.length-1) == '/' && local.charAt(0) == '/')
				local = local.substr(1);
			local = b[0].href + local;
		}
		window.location = local;
	}



	// --------> blocos produtos home
	$('#home-subcategorias li:first-child, #home-bloco-produtos .bloco:first-child').addClass('active');
	
	$('#home-subcategorias li').mouseenter(function() {
		target = $(this).data('id');

		$(this).addClass('active')
			.siblings()
			.removeClass('active');
		$('#home-bloco-produtos [data-id="' + target + '"]').addClass('active')
			.siblings()
			.removeClass('active');
	});


	//---------> swipebox
	$('.swipebox').swipebox({
		hideBarsDelay: 0
	});


	$(document.body)
		.on('click touchend','#swipebox-slider .current img', function(e){
			return false;
		})
		.on('click touchend','#swipebox-slider .current', function(e){
			$('#swipebox-close').trigger('click');
		})
		.on('change', '.jSelectStyle .field', function(event) {
			//event.preventDefault();
			var newValue = $('option:selected', this).text();
			$(this).siblings('.select').text(newValue);
			/* Act on the event */
		});
		;
	// -----------------------------------------------------------------------

	//---------> placeholder
	$('.pholder').placeholder();


	// --------> slide home / internas
	$('#mainSlideshow .imgs').cycle({
		fx: 			'fade',
		speed: 			800,
		timeout: 		5000,
		slides: 		'.slide',
		pager:			false,
		prev:			'.prevButton',
		next:			'.nextButton',
		log:			false
	});


	/* carrinho
	------------------------------------------------------------------------ */
	$('#btLembrarSenha').live('click', function(){
		$('#formClienteLogin').fadeOut('fast', function(){
			$('#formClienteLoginSenha').fadeIn('fast');
		});
	});

	$('#btLembreiSenha').live('click', function(){
		$('#formClienteLoginSenha').fadeOut('fast', function(){
			$('#formClienteLogin').fadeIn('fast');
		});
	});

	$('.pgPedidos .pedidos .pedido .top').click(function(){
		$(this).parent().toggleClass('ativo');
	});


	/* produto
	------------------------------------------------------------------------ */
	
	//---------> menu drop categorias
	$('#menuDropCat').click(function(){
		$('.target', this).toggleClass('active');
	});


	// --------> tabs
	$('.tabs-source .tab').click(function(){
		if (!$(this).hasClass('active')) {
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			
			var tabsContainer = $(this).parents('.tabs-main-container');
			var tab = $(this).data('tab');
			
			tabsContainer
				.find('.tabs-target .active')
				.removeClass('active');
			tabsContainer
				.find('.tabs-target [data-tab="'+ tab +'"]')
				.addClass('active');
		}
	});

	// --------> rating
	var ratingResult = $('.resultRating .result').data('rating-result');
	$('.resultRating .ratingCircle li:lt(' + ratingResult +')').addClass('active');

	var starRating = $('#starRating li');
	
	// add ativo onclick
	starRating.click(function(){
		var inxStar = $(this).index() + 1;
		$(this).siblings().removeClass('active');
		$('#starRating li:lt(' + inxStar + ')').addClass('active');	
		$('#starRatingValue').val(inxStar);
	});

	// add/remove ativo mouseenter/leave
	starRating.mouseenter(function(){
		var inxStar = $(this).index() + 1;
		starRating.removeClass('active')
		$('#starRating li:lt(' + inxStar + ')').addClass('hover');
	}).mouseleave(function(){
		starRating.removeClass('hover');
		starRating.slice(0, $('#starRatingValue').val()).addClass('active');
	});

	$('#optValidateCheck').on('change', function(){
		if (this.checked) {
			starRating.addClass('off');
		} else {
			starRating.removeClass('off');
			starRating.slice(0, $('#starRatingValue').val()).addClass('active');
		}
	});
	

	
	// --------> scrollTo
	$('[data-scroll-to]').click(function(e){
		e.preventDefault();
		var targetScroll = $(this).data('scroll-to');
		$('html, body').animate({
			scrollTop: $('[data-scroll-here="'+ targetScroll +'"]').offset().top - 150
		}, 500);
	});

	$('#jBtnDescricao').click(function(){
		$('[data-tab="descricao-completa"]').trigger('click');
	});

	$('#jBtnEsgotado').click(function(){
		$('[data-tab="avise-me"]').trigger('click');
	});


	// --------> box social media
	if ( $("#boxSocialMedia").length ){
		var alturaMinimaBox = $('#boxSocialMedia').offset().top;
	}

	$(window).scroll(function(){
		($(window).scrollTop() > alturaMinimaBox) 
			? $('#boxSocialMedia').addClass('boxFixo') 
			: $('#boxSocialMedia').removeClass('boxFixo');
	});

	
	// --------> select style
	/*
	$('.jSelectStyle .field').change(function(){
		var newValue = $('option:selected', this).text();
		$(this).siblings('.select').text(newValue);
	});
	*/

	$('.btn-active-header-search').click(function(){

		var headerSearch = $('.header-search');

		headerSearch.css('display', 'flex');

		headerSearch.click(function(event){
			if (event.target.className === 'header-search') {
				$(this).css('display', 'none');
			}
		});

	});
});