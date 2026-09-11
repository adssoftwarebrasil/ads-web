$(document).ready(function(){
	
	$('#lbVerificaCep form').ajaxForm({
		type: 'post',
		dataType: 'json',
		url: 'index.php',
		beforeSend: function() {
			if ($('#lbVerificaCep form').hasClass('enviando'))
				return false;
			$('#lbVerificaCep form').addClass('enviando');
			$('#lbVerificaCep form button').html('<i class="fa fa-refresh fa-spin"></i>');
			$('#lbVerificaCep form .msg').remove();
		},
		success: function(json) {
			if (json.rmcresult.data.status == '1') {
				fechaLb();
				adicionarProduto($("#lbVerificaCep").data('produto-id'));
			}

			if (json.rmcresult.data.msg)
				$('#lbVerificaCep form').append('<span class="msg">' + json.rmcresult.data.msg + '</span>');
		},
		complete: function() {
			$('#lbVerificaCep form').removeClass('enviando');
			$('#lbVerificaCep button').html('Enviar');
		}
	});

	$('#lbAreaNaoDisponivel #alterarCep').on('click', function() {
		fechaLb();
		abreLb();
		$("#lbVerificaCep").appendTo('body').absoluteCenter({ animation: false }).absoluteCenter().show();
		$('#lbVerificaCep input.cep').setMask();
		$("#lbVerificaCep input.cep").focus();
	});

	$("ul.listaProdutos").on('click', 'a.addToCart', function(ev) {
		ev.preventDefault();
		adicionarProduto($(this).data('produto-id'));
	});

	var adicionarProduto = function(produtoId) {
		$("#lbVerificaCep").data('produto-id', produtoId);
		
		$.ajax({
			type: "POST", 
			url: 'index.php',
			beforeSend: function(){
				$("#lbCompraProdutoImagem").attr('src','');
			},
			dataType: 'json',
			data:{
				cmd: 'ajax_adicionarProduto',
				codigoProduto: produtoId,
				quantidade:1
			},
		})
		.done(function(resultado) {
			switch (resultado.status)
			{
				case 'cepNaoInformado':
					abreLb();
					$("#lbVerificaCep").appendTo('body').absoluteCenter({ animation: false }).absoluteCenter().show();
					$('#lbVerificaCep input.cep').setMask();
					$("#lbVerificaCep input.cep").focus();
					return false;
				break;
				case 'cepAreaNaoDisponivel':
					abreLb();
					$("#lbAreaNaoDisponivel").appendTo('body').absoluteCenter({ animation: false }).absoluteCenter().show();
				break;
				case "indisponivel":
					alert("Produto Indisponível no momento!");
					return false;
				break;
				case "existente":
				case "ok":
					produtoInserido = resultado.produtoInserido;
					$("#counterItensCarrinho").html(resultado.totalItensCarrinho);
					$("#lbCompraProdutoTXT").html(resultado.textoAcao);

					$("#lbCompraProdutoNome").html(produtoInserido.nome);
					$("#adicionarQuantidadeLB").data('produto-id',produtoInserido.codigo);
					produtoInserido.referencia === false ? $("#lbCompraProdutoRef").empty().hide() : $("#lbCompraProdutoRef").html('C&oacute;d. '+produtoInserido.referencia+' |').show();
					produtoInserido.imagem === false ? $("#lbCompraProdutoImagem").attr('src','imagens/placeholder?230x230') : $("#lbCompraProdutoImagem").attr('src',produtoInserido.imagemDiretorio + "tbd_" + produtoInserido.imagem);
					
					$("#lbCompraProdutoRatingEstrelas").html(produtoInserido.ratingEstrelas);
					$("#lbCompraProdutoRatingTexto").html(produtoInserido.ratingTexto);
					$("#adicionarQuantidadeLB").html(produtoInserido.selectAlterarQuantidade);

					$("#adicionarQuantidadeLB").val(resultado.qtdAdicionada);
					$("#maskSelectQuantidadeLB").html(resultado.qtdAdicionada);
					$("#lbCompraProdutoAtributosTXT").html(resultado.atributoTXT);
					abreLb();
					$("#lbCompraProduto").appendTo('body').absoluteCenter({ animation: false }).absoluteCenter().show();
					return false;
				break;
			}
			return false;
		})
		.fail(function(err) { alert('Erro! Por favor recarregue a página e tente novamente! ' +err) })
		.always(function(){return false;});
	};


	/*
	$("ul.listaProdutos").on('click', 'a.addToCart', function(ev) {
		ev.preventDefault();
		var produtoId = $(this).data('produto-id');
		$.ajax({
			type: "POST", 
			url: 'index.php',
			beforeSend: function(){
				$("#lbCompraProdutoImagem").attr('src','');
			},
			dataType: 'json',
			data:{
				cmd: 'ajax_adicionarProduto',
				codigoProduto: produtoId,
				quantidade:1
			},
		})
		.done(function(resultado) {
			switch (resultado.status)
			{
				case "indisponivel":
					alert("Produto Indisponível no momento!");
					return false;
				break;
				case "existente":
				case "ok":
					produtoInserido = resultado.produtoInserido;
					$("#counterItensCarrinho").html(resultado.totalItensCarrinho);
					$("#lbCompraProdutoTXT").html(resultado.textoAcao);

					$("#lbCompraProdutoNome").html(produtoInserido.nome);
					$("#adicionarQuantidadeLB").data('produto-id',produtoInserido.codigo);
					produtoInserido.referencia === false ? $("#lbCompraProdutoRef").empty().hide() : $("#lbCompraProdutoRef").html('C&oacute;d. '+produtoInserido.referencia+' |').show();
					produtoInserido.imagem === false ? $("#lbCompraProdutoImagem").attr('src','imagens/placeholder?230x230') : $("#lbCompraProdutoImagem").attr('src',produtoInserido.imagemDiretorio + "tbd_" + produtoInserido.imagem);
					
					$("#lbCompraProdutoRatingEstrelas").html(produtoInserido.ratingEstrelas);
					$("#lbCompraProdutoRatingTexto").html(produtoInserido.ratingTexto);
					$("#adicionarQuantidadeLB").html(produtoInserido.selectAlterarQuantidade);

					$("#adicionarQuantidadeLB").val(resultado.qtdAdicionada);
					$("#maskSelectQuantidadeLB").html(resultado.qtdAdicionada);
					$("#lbCompraProdutoAtributosTXT").html(resultado.atributoTXT);
					abreLb();
					$("#lbCompraProduto").appendTo('body').absoluteCenter({ animation: false }).absoluteCenter().show();
					return false;
				break;
			}
			return false;
		})
		.fail(function(err) { alert('Erro! Por favor recarregue a página e tente novamente! ' +err) })
		.always(function(){return false;});
	});
	*/


	$("#adicionarQuantidadeLB").change(function(ev){
		ev.preventDefault();
		var produtoId = $(this).data('produto-id');
		$.ajax({
			url: 'index.php',
			beforeSend: function(){},
			dataType: 'json',
			data:{
				cmd: 'ajax_atualizarQuantidadeProduto',
				codigoProduto: produtoId,
				quantidade:$("#adicionarQuantidadeLB").val()
			},
		})
		.done(function(resultado) {
			switch (resultado.status)
			{
				case "indisponivel":
					alert("Produto Indisponível no momento!");
					return false;
				break;
				case "existente":case "ok":
					produtoInserido = resultado.produtoInserido;

					$("#lbCompraProdutoTXT").slideUp('fast', function() {
						$(this).html(resultado.textoAcao).slideDown('slow');
					});
					return false;
				break;
			}
			return false;
		})
	});
});