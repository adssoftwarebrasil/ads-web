$(document).ready(function(){

	$('.btnLoad').on("click",function(){
		codigo = $(this).attr('codigo');
		pagina = parseInt($(this).attr('proximapagina'));
		$(this).attr('proximapagina',pagina+1);

		$.ajax({
			type: "POST",
			dataType:'html',
			url: 'index.php?cmd=conteudo&pagina='+pagina+'&codigo='+codigo+'&ajax=1',
			beforeSend:function(){
				$('.btnLoad').html('Carregando...');
			},
			error:function(){
				$('.btnLoad').html('Erro ajax.');
			},
			success:function(retorno){
				if(retorno != ""){
					$('.btnLoad').html('Carregar mais &darr;');
					$('.contentList').append(retorno);
				} else {
					$('.btnLoad').remove();
					$('.contentList').append('<p style="clear:both">N&atilde;o h&aacute; mais conte&uacute;dos dispon&iacute;veis</p>');
				}
			}
		});
	});


	//Expandir e recolher categorias do menu da direita
	$("#content .categories .catlist > li > span").on("click",function(e){
		if (!$(this).parent().hasClass("ativo")){
			$(this).parent().addClass("ativo");
			$(this).next("ul").slideDown();
		} else {
			$(this).parent().removeClass("ativo");
			$(this).next("ul").slideUp();
		}
	});


	//Carrosel modelo 1
	$(".pgContent .galeriaTop .carrosel ul").slick({
		speed: 200,
		arrows: false,
		dots: false,
		draggable: false,
		vertical: true,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 2
	});

	$('.pgContent .galeriaTop .carrosel ul').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		//alert(nextSlide);
	});

	$(".pgContent .galeriaTop .carrosel .next").click(function(){
		$(".pgContent .galeriaTop .carrosel ul").slick('slickNext');
	});
	$(".pgContent .galeriaTop .carrosel .prev").click(function(){
		$(".pgContent .galeriaTop .carrosel ul").slick('slickPrev');
	});


	//Carrosel modelo 2 e 3
	$(".pgContent .modelo .carrosel ul").slick({
		autoplay: false,
		autoplaySpeed: 3000,
		speed: 200,
		infinite: false,
		adaptiveHeight: true,
		arrows: false,
		dots: false,
		centerMode: false,
		centerPadding: '0',
		draggable: false,
		vertical: false,
		slidesToShow: 4,
		slidesToScroll: 2
	});
	$(".pgContent .modelo .carrosel .next").click(function(){
		$(".pgContent .modelo .carrosel ul").slick('slickNext');
	});
	$(".pgContent .modelo .carrosel .prev").click(function(){
		$(".pgContent .modelo .carrosel ul").slick('slickPrev');
	});



	//Evita link do addthis agir
	$(".pgContent .social a").click(function(event){ event.preventDefault(); });



	//Galeria botao mais fotos
	$('.pgContent .gallery .maisfotos').click(function(){
		$(this).toggleClass('ativo');
		if ($(this).hasClass('ativo')){
			$('ul', $(this).parent()).css({'max-height':'none'});
		} else {
			$('ul', $(this).parent()).css({'max-height':'335px'});
		}
	});



	//Formulario de comentario
	$('#formComentario').submit(function(e){
		e.preventDefault();
		form = $(this);
		alerta = $('.alerta', form);
		$.ajax({
			url: 'index.php',
			data: form.serialize(),
			type: 'POST',
			dataType:'json',
			beforeSend: function(){
				$(form).find('input, textarea, button, select').attr('disabled','disabled');
				alerta.removeClass('sucesso erro');
				alerta.html('<img src="imagens/ajax-loader.gif" /> Enviando...');
				alerta.show();
			},
			error: function(){
				$(form).find('input, textarea, button, select').removeAttr('disabled');
				alerta.addClass('erro');
				alerta.html('Erro AJAX. Por favor, tente novamente mais tarde.');
			},
			success: function(retorno){
				$(form).find('input, textarea, button, select').removeAttr('disabled');
				if (retorno.rmcresult.data[0].result.status == 1){
					form[0].reset();
				}
				alerta.addClass('sucesso');
				alerta.html(retorno.rmcresult.data[0].result.statusmsg);
			},
		});
	});



	//Parallax do img-full
	$(window).scroll(function() {
		var height = $(window).scrollTop();
		if(height  > 180) {
			$('.img-full').css({"background-attachment":"fixed"});
		} else{
			$('.img-full').css({"background-attachment":""});
		}
	});



	//Recaptcha dos comentarios
	$("#captchaContainer").click(function(event) {
		$.get('index.php?cmd=reCaptcha', function(data) {
			$("#captchaContainer").html(data)
		});
	});



});