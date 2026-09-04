var pressEnter = function(a) {
	13 == a.keyCode && "INPUT" == $(this).attr("tagName") && $(this).data("myform").submit()
};
$(document).ready(function() {
	var forms = $("form.validate");
	if (forms.length > 0) {
		$.validator.addMethod("cep", function(a, e) {
			return this.optional(e) || 8 == a.replace(/[^0-9]/gi, "").length
		}, "Informe um CEP v&aacute;lido."), $.validator.addMethod("telefone", function(a, e) {
			var a = a.replace(/[^0-9]/gi, "");
			return this.optional(e) || 10 == a.length && parseInt(a.substring(0, 2)) > 10 && parseInt(a.substring(2, 3)) > 1
		}, "Informe um telefone v&aacute;lido."), $.validator.addMethod("telefoneFixo", function(a, e) {
			var a = a.replace(/[^0-9]/gi, ""),
				t = parseInt(a.substring(2, 3));
			return this.optional(e) || 10 == a.length && parseInt(a.substring(0, 2)) > 10 && t > 1 && 6 > t
		}, "Informe um telefone fixo v&aacute;lido."), $.validator.addMethod("celular", function(a, e) {
			var a = a.replace(/[^0-9]/gi, "");
			return this.optional(e) || (11 == a.length || 10 == a.length) && parseInt(a.substring(0, 2)) > 10 && parseInt(a.substring(2, 3)) > 5
		}, "Informe um telefone celular v&aacute;lido.");
		var inputCleanup = function(a) {
			var a = $(a),
				e = a.attr("defaultValue");
			e && a.val().toLowerCase() == e.toLowerCase() && a.val("")
		}
	}
	forms.each(function() {
		var form = $(this),
			inputs = $(":input[title]", this),
			evalRules = "",
			evalMessages = "",
			evalGroups = "";
		if (inputs.each(function() {
				var scriptEval = ("validate={" + $(this).attr("title") + "}").replace(/\;/gi, ",").replace(/\,\,/gi, ",").replace(/\,\}/gi, "}");
				try {
					eval(scriptEval)
				} catch (e) {
					return
				}
				var input = $(this).removeAttr("title").data("validate", validate).data("myform", form).bind("keypress", pressEnter);
				if (validate.title && input.attr("title", validate.title), validate.cleanup) {
					var defaultValue = input.attr("defaultValue");
					defaultValue && (input.val().toLowerCase() != defaultValue.toLowerCase() || input.hasClass("default-value") || input.addClass("default-value")), input.bind("focus", function() {
						inputCleanup(this)
					}).bind("blur", function() {
						var a = $(this),
							e = a.attr("defaultValue");
						"" == a.val().replace(/ /gi, "") && e && a.val(e).addClass("default-value")
					}).bind("keydown", function() {
						var a = $(this),
							e = a.attr("defaultValue");
						e && (a.val().toLowerCase() != e.toLowerCase() ? a.removeClass("default-value") : a.hasClass("default-value") || a.addClass("default-value"))
					})
				}
				validate.mask && (validate.mask_char || (input.data("validate").mask_char = "#"), input.bind("keypress", function(a) {
					var e = $(this);
					if (void 0 == a.charCode && (a.charCode = a.keyCode), a.charCode > 0) {
						var t = String.fromCharCode(a.charCode),
							r = e.data("validate").mask_char,
							l = e.data("validate").mask.substring(e.val().length).substring(0, 1);
						l != r && l != t && e.val(e.val() + l)
					}
				}).bind("keyup", function() {
					var a = $(this);
					a.val().substring(0, 1) != a.data("validate").mask.substring(0, 1) && a.val().length > 0 && a.data("validate").mask_char != a.data("validate").mask.substring(0, 1) && a.val(a.data("validate").mask.substring(0, 1) + a.val())
				})), parseInt(validate.maxlength) > 0 && (parseInt(input.attr("maxlength")) < 1 || "NaN" == parseInt(input.attr("maxlength")).toString()) ? input.attr("maxlength", validate.maxlength).data("maxlength", validate.maxlength) : parseInt(input.attr("maxlength")) > 0 && "NaN" != parseInt(input.attr("maxlength")).toString() && input.data("maxlength", input.attr("maxlength")), "TEXTAREA" == input.attr("tagName") && input.bind("keypress", function(a) {
					var e = $(this);
					if (void 0 == a.charCode && (a.charCode = a.keyCode), a.charCode > 0) {
						var t = parseInt(e.data("maxlength"));
						if (e.val().length >= t && t > 0) return !1
					}
				}), validate.autotab && ("boolean" == typeof validate.autotab ? $(':input[type!="hidden"]', form).attr("index", function(a) {
					return a
				}).each(function(a) {
					$(this).data("nextInput", $("[index=" + (parseInt(a) + 1) + "]", form))
				}).removeAttr("index") : input.data("nextInput", $(validate.autotab)), input.data("nextInput").length > 0 && input.bind("keypress", function(a) {
					void 0 == a.charCode && (a.charCode = a.keyCode), $(this).data("autotab", a.charCode > 0)
				}).bind("keyup", function(a) {
					var e = $(this),
						t = parseInt(e.data("maxlength"));
					e.data("autotab") && e.val().length >= t && t > 0 && e.data("nextInput").focus()
				})), evalRules += ("" != evalRules ? "," : "") + input.attr("name") + ":{", evalMessages += ("" != evalMessages ? "," : "") + input.attr("name") + ":{", $.each(validate, function(prop, value) {
					var prop = prop.toString(),
						value = "string" == typeof value ? "\\'" + value + "\\'" : value;
					eval("if(typeof($.validator.methods." + prop + ")!='undefined'){evalRules +='" + prop + ":" + value + "," + (validate.cleanup && "required" == prop ? "depends:inputCleanup," : "") + "';if(validate.msg_" + prop + "){evalMessages +='" + prop + ":\"'+validate.msg_" + prop + "+'\",';}else if(validate.msg){evalMessages +='" + prop + ":\"'+validate.msg+'\",';}" + ("required" == prop ? "else{evalMessages +='required:\"Preenchimento obrigat&oacute;rio.\",'}" : "") + "}")
				}), evalRules += "}", evalRules = evalRules.replace(/\,\}/gi, "}"), evalMessages += "}", evalMessages = evalMessages.replace(/\,\}/gi, "}"), validate.group && (evalGroups += ("" != evalGroups ? "," : "") + input.attr("name") + ':"' + input.attr("name") + " " + validate.group + '"', validate.localError || $.each(validate.group.split(" "), function(a, e) {
					e.length > 0 && $(':input[name="' + e + '"]', form).data("localError", input).data("localErrorGroup", !0)
				})), validate.localError && input.data("localError", $(validate.localError))
			}), "" != evalRules) {
			try {
				eval("evalRules={" + evalRules + "}"), eval("evalMessages={" + evalMessages + "}"), eval("evalGroups={" + evalGroups + "}")
			} catch (e) {
				return
			}
			form.attr("onsubmit") && form.data("submitHandler", form.attr("onsubmit")).removeAttr("onsubmit"), form.validate({
				ignore: ".ignore-validate, .hide, .hide input, .hide select, .hide textarea, :hidden",
				errorClass: "input-error",
				errorElement: "div",
				wrapper: "div",
				rules: evalRules,
				messages: evalMessages,
				groups: evalGroups,
				errorPlacement: function(a, e) {
					var t, r = e.data("localError");
					if (clearTimeout(window.closeAllErrors), a.addClass("input-error-global").attr("title", "Clique para fechar.").click(function() {
							a.fadeOut(300)
						}), r) {
						switch (e.data("validate").localErrorMethod) {
							case "before":
								r.before(a), t = r.parent();
								break;
							case "after":
								r.after(a), t = r.parent();
								break;
							case "prepend":
								r.prepend(a), t = r;
								break;
							default:
								r.append(a), t = r
						}
					} else {
						e.after(a), t = e.parent()
					}
					if (a.css("display", "inline-block"), "absolute" == a.css("position")) {
						r && e.data("validate").localErrorGroup && (e = r);
						var l = t.css("padding-left"),
							i = t.css("padding-top");
						l = l ? parseInt(l.replace("px")) : 0, i = i ? parseInt(i.replace("px")) : 0, l = isNaN(l) ? 0 : l, i = isNaN(i) ? 0 : i, t.css("position", "relative")
					}
					a.fadeIn(300), window.closeAllErrors = setTimeout("$('.input-error-global').fadeOut(300)", 2e4)
				},
				submitHandler: function(form) {
					var Ret = !0;
					try {
						if ($(form).data("submitHandler")) {
							var fcn = $(form).data("submitHandler").replace("this", "form").replace("return ", "Ret=");
							eval(fcn)
						}
					} catch (e) {}
					if (Ret) {
						if ($(".default-value", form).val(""), $(form).hasClass("send-ajax")) return $.ajax({
							type: "POST",
							url: $(form).attr("action"),
							data: $(form).serialize(),
							dataType: "text",
							cache: !1,
							timout: 9999,
							beforeSend: function() {
								$(":input", form).attr("readonly", "readonly"), $('a.submit, input[type="submit"]', form).attr("disabled", !0)
							},
							success: function(a) {
								var e = $("input.message-success", form).length > 0 ? $("input.message-success", form).val() : a;
								"" != e && ($(".validate-success").remove(), $(form).prepend('<div class="validate-success">' + e + "</div>"))
							},
							complete: function() {
								$(":input", form).removeAttr("readonly"), $('a.submit, input[type="submit"]', form).removeAttr("disabled")
							}
						}), !1;
						$(form).unbind("submit").submit()
					}
				}
			})
		}
	})
});


$(document).ready(function() {
	var dataInitialize = $("#iC");
	dataInitialize.length > 0 && (eval("var data=" + dataInitialize.val()), cart.init(data), dataInitialize.remove())
}), $(window).bind("load", function() {
	!cart.wait && cart.shipping.html.length > 0 && cart.scroll($("#middle").offset().top, function() {
		$("#cep").length > 0 && 0 == $("#cep").val().length && $("#cep").focus()
	})
});
var cart = {
	id: 0,
	itens: {
		length: 0,
		availability: 0
	},
	shipping: {
		free: !1,
		id: 0,
		cost: 0,
		time: "",
		html: "",
		options: {
			length: 0
		}
	},
	discount: 0,
	iota: 0,
	subtotal: 0,
	total: 0,
	discountMSG: "C?digo Inv?lido",
	wait: !1,
	dataType: "text",
	async: !0,
	unloaded: !1,
	specialCall: !1,
	goDownScroll: !0,
	discountPlacement: {},
	subtotalPlacement: {},
	totalPlacement: {},
	shippingPlacement: {},
	shippingContentPlacement: {},
	shippingLoadingPlacemnet: {},
	temProdutoComEntrega: !0,
	init: function(vars) {
		for (var i in vars) eval("cart." + i + "=vars." + i + ";");
		this.subtotalPlacement = $("#subtotalPlacement"), this.shippingPlacement = $("#shippingPlacement"), this.discountPlacement = $("#discountPlacement"), this.totalPlacement = $("#totalPlacement"), this.shippingContentPlacement = $("#shipping-types .content"), this.shippingLoadingPlacemnet = $("#shipping-types .loading"), this.goDownScroll = 0 == $("#shipping-types .shippingOptions").length, "function" == typeof pressEnter && $("form.cart :input").unbind("keypress", pressEnter).keypress(function(t) {
			return 13 == t.keyCode ? !1 : void 0
		}), $(".jRemoveItemCarrinho").click(function() {
			return cart.wait ? !1 : void(confirm("Deseja retirar este produto de seu carrinho ?") && cart.removeItem($(this)))
		}), $("input.jCampoQtde").change(function() {
			var t = parseInt($(this).val()),
				a = !0;
			(t == $(this).data("previousValue") || t > $(this).data("validate").max) && (a = !1), cart.setQuantity($(this), !1, !0), $(this).blur().focus()
		}).keypress(function(t) {
			if (13 == t.keyCode) {
				var a = parseInt($(this).val()),
					e = !0;
				(a == $(this).data("previousValue") || a > $(this).data("validate").max) && (e = !1), cart.setQuantity($(this), !1, !0), $(this).blur().focus()
			}
		}).each(function() {
			$(this).data("previousValue", parseInt($(this).val()))
		}), $('form.cart input[name="presente"]').click(function() {
			cart.gift($(this))
		}), $("#botaoCalcularFrete").click(this.getShipping), $("#botaoCalcularCupomDesconto").click(function() {
			$("form.cart").validate().element("#cupomDesconto")
		}), $("#cupomDesconto").bind("keypress", function(t) {
			13 == t.keyCode && $("form.cart").validate().element("#cupomDesconto")
		}).bind("change", function() {
			$(this).removeClass("input-error").removeClass("valid")
		}), $("#botaoRemoverDesconto").click(this.removeDiscount), $(".btFinaliza").click(function(t) {
			cart.validate(t)
		}), $(".btLimpa").click(function() {
			return cart.wait ? !1 : void(confirm("Deseja esvaziar seu carrinho ?") && cart.vanish())
		});
		var cep = $("#cep"),
			cepVal = "";
		"undefined" != cep.val() && (cepVal = cep.val().replace(/[^0-9]/gi, ""), cep.keypress(function(t) {
			13 == t.keyCode && ($(this).blur().focus(), cart.getShipping())
		}).data("previousValue", cepVal), cep.blur(function(t) {
			cart.getShipping()
		})), 8 != cepVal.length || "" != this.shipping.html && this.shipping.html ? "" != this.shipping.html && this.shipping.html && ($(".shipping small").addClass("selected"), cart.shippingLoadingPlacemnet.hide(), $("#shipping-types td").show(), cart.shippingContentPlacement.append(this.shipping.html).show(), this.setShipping()) : (cep.data("previousValue", ""), this.getShipping())
	},
	removeItem: function(i) {
		if (cart.wait) return !1;
		var item = $(i).parents("li"),
			itemSplitter = item.attr("id").split("_"),
			itemID = itemSplitter[1],
			bollCalculaCep = !0;
		cart.async = !1, cart.sendDataServer({
			cmd: "atualizarCarrinho",
			acao: "remover",
			id: itemID
		}, function(data) {
			if (cart.specialCall = !0, cart.itens.length > 1 && cart.getDiscount(), cart.specialCall = !1, eval(data), remove.success) {
				var numItens, classSelect;
				if (classSelect = $(item).attr("class"), numItens = "" == $(item).attr("class") ? cart.itens.length - 1 : cart.itens.length - $("li." + classSelect).length, 0 == numItens) window.location.reload();
				else {
					$("div", item).slideUp(450);
					var itemSelecionado;
					itemSelecionado = "" == $(item).attr("class") ? item : $("li." + classSelect), itemSelecionado.fadeOut(400, function() {
						itemSelecionado.remove();
						var tempItens = {};
						if ("" != classSelect) {
							for (var i in cart.itens) 0 == i.indexOf("$") && eval("tempItens." + i + "=cart.itens." + i);
							tempItens.length = cart.itens.length - 1
						} else {
							for (var i in cart.itens) 0 == i.indexOf("$") && i != "$" + itemID && eval("tempItens." + i + "=cart.itens." + i);
							tempItens.length = cart.itens.length - 1
						}
						if (cart.itens = tempItens, cart.calculateSubtotal(), cart.changeValues(), bollCalculaCep) {
							if (bollCalculaCep = !1, cart.shipping.html && "" != cart.shipping.html) {
								var cep = $("#cep");
								if (8 != cep.val().replace(/[^0-9]/gi, "").length && 8 == cep.data("previousValue").replace(/[^0-9]/gi, "").length) {
									var celVal = cep.data("previousValue").substr(0, 5) + "-" + cep.data("previousValue").substr(5);
									cep.val(celVal).keyup()
								}
								cep.data("previousValue", ""), cart.getShipping()
							}
						} else cart.mostrarPrazo()
					})
				}
			}
		})
	},
	setQuantity: function(t, a, e) {
		if (cart.wait) return !1;
		var t = t,
			i = parseInt(t.val());
		if ((isNaN(i) || 1 > i) && (i = t.val(t.data("previousValue")).val()), !(i == t.data("previousValue") || i > t.data("validate").max)) {
			t.data("previousValue", i);
			var r = t.parents("li"),
				n = r.attr("id").split("_"),
				s = n[1],
				c = cart.getDataItem(s);
			c.quantity = i, c.total = c.priceBase * i, c.gift && (c.total += c.giftCost * i), cart.calculateSubtotal(), cart.async = !1, a || cart.sendDataServer({
				cmd: "atualizarCarrinho",
				acao: "atualizar",
				id: s,
				novaQtde: i
			}, function(t) {
				cart.specialCall = !0, cart.getDiscount(), cart.async = !0, cart.specialCall = !1, e ? ("undefined" != $("#cep").val() && $("#cep").data("previousValue", ""), cart.wait = !1, cart.getShipping()) : cart.temProdutoComEntrega ? $("#shipping-estimated").show() : $("#shipping-estimated").hide()
			}), cart.changeValues()
		}
	},
	getDiscount: function() {
		var ret = !0,
			obj = $("#cupomDesconto"),
			cupom = obj.val();
		return cupom != obj.data("previousValue") || cart.specialCall ? (obj.data("previousValue", cupom), cupom.length < 1 && !cart.specialCall ? (ret = !1, cart.discountMSG = "Informe um c&oacute;digo v&aacute;lido.") : ($("#cupomDesconto").removeClass("input-error"), cart.sendDataServer("cmd=calcularCupomDesconto&codigoCupom=" + cupom, function(data) {
			eval(data), cart.discountMSG = "", discountMsg.length > 0 ? 1 == discountError ? ($("#botaoRemoverDesconto").hide(), $("#discountMessage").html("").hide(), cart.discountMSG = discountMsg, ret = !1) : ($("#discountMessage").show().html(discountMsg), $("#botaoRemoverDesconto").show(), ret = !0) : cart.specialCall || (ret = !0, $("#botaoRemoverDesconto").show()), cart.changeValues()
		}))) : ret = !1, ret
	},
	removeDiscount: function() {
		cart.sendDataServer("cmd=removerCupomDesconto", function(data) {
			eval(data), $("#cupomDesconto .input-error-global").hide(), $("#cupomDesconto").val(""), $("#discountMessage").html("").hide(), $("#botaoRemoverDesconto").hide();
			var obj = $("#cupomDesconto");
			obj.data("previousValue", ""), cart.changeValues()
		})
	},
	vanish: function() {
		cart.sendDataServer({
			cmd: "atualizarCarrinho",
			acao: "anular",
			id: "anular"
		}, function(data) {
			eval(data), vanish.success && window.location.reload()
		})
	},
	gift: function(gift) {
		var id;
		if (cart.async = !1, gift.val().indexOf(",") > -1)
			for (arrItens = gift.val().split(","), i = 0; i < arrItens.length; i++) {
				if (0 == i) {
					intRetornaValores = 1, strCompreJunto = "true";
					var itemData = cart.getDataItem(arrItens[i]);
					itemData.gift = gift.attr("checked")
				} else strCompreJunto = "false", intRetornaValores = 0;
				cart.sendDataServer("acao=Presente&CompreJunto=" + strCompreJunto + "&boolRetornaValores=" + intRetornaValores + "&presente=" + itemData.gift + "&id=" + arrItens[i] + "&quantidade=" + itemData.quantity, function(ret) {
					eval(ret)
				})
			} else {
				var itemData = cart.getDataItem(gift.val());
				itemData.gift = gift.attr("checked"), cart.sendDataServer("acao=Presente&CompreJunto=false&boolRetornaValores=1&presente=" + itemData.gift + "&id=" + itemData.id + "&quantidade=" + itemData.quantity, function(ret) {
					eval(ret)
				})
			}
		cart.calculateSubtotal(), cart.changeValues(), cart.async = !0
	},
	mostrarPrazo: function() {
		cart.temProdutoComEntrega ? $("#shipping-estimated").show() : $("#shipping-estimated").hide()
	},
	getShipping: function() {
		if (cart.wait) return !1;
		var callbackShow = function(data) {
			if (eval("var shipping=" + data), cart.shipping = shipping, cart.temProdutoComEntrega = Boolean(shipping.temProdutoComEntrega), cart.shippingLoadingPlacemnet.hide(), cart.shippingContentPlacement.append(shipping.html).slideDown(400, function() {
					cart.changeValues(), cart.goDownScroll && (cart.scroll($(".subtotal").parent().offset().top), cart.goDownScroll = !1)
				}), cart.mostrarPrazo(), cart.setShipping(), "" != $("#cupomDesconto").val() && $("#botaoCalcularCupomDesconto").click(), cart.shipping.free) {
				if (0 == $(".free-shipping").length)
					if ($(".hdnFegraFreteGratis").length > 0)
						for (i = 0; i < $(".hdnFegraFreteGratis").length; i++) cod = $($(".hdnFegraFreteGratis")[i]).val(), $("#" + cod + " .product div").append('<span class="free-shipping">Frete gr?tis</span>');
					else
						for (i = 0; i < $(".freeshipping").length; i++) cod = $($(".freeshipping")[i]).val(), $("#" + cod + " .product div").append('<span class="free-shipping">Frete gr?tis</span>')
			} else if ($(".free-shipping").remove(), $(".freeshipping").length > 0)
				for (i = 0; i < $(".freeshipping").length; i++) cod = $($(".freeshipping")[i]).val(), $("#" + cod + " .product div").append('<span class="free-shipping">Frete gr?tis</span>');
			var discount = $("#cupomDesconto").val();
			if (discount.length > 0 && (cart.async = !1, cart.specialCall = !0, flag = cart.getDiscount()), $(".areaProdutos .itensCarrinho li .desc .erro").remove(), shipping.indisponiveis)
				for (i = 0; i < shipping.indisponiveis.length; i++) $(".areaProdutos .itensCarrinho li#trCarrinho_" + shipping.indisponiveis[i] + " .desc").append('<div class="erro">Indisponível para entrega no CEP informado</div>')
		};
		cart.getShippingCEP(callbackShow)
	},
	getShippingCEP: function(t) {
		var a = $("#cep"),
			e = a.val().replace(/[^0-9]/gi, "");
		8 == e.length || a.hasClass("input-error") || $("form.cart.validate").submit(), a.hasClass("input-error") || e == a.data("previousValue") || (a.attr("title", "Aguarde...").data("previousValue", e), $(".shipping small").addClass("selected"), $("#shipping-types td").show(), a.focus().blur(), cart.shippingContentPlacement.slideUp(400, function() {
			$("#shipping-types .shippingOptions").remove(), cart.shippingLoadingPlacemnet.show(), cart.shippingContentPlacement.slideDown(), cart.sendDataServer("cmd=consultarFormasEntrega&cepDestino=" + e, function(a) {
				"" != a && (1 == $.browser.msie && parseInt($.browser.version.substr(0, 1)) < 8 ? cart.shippingContentPlacement.show("fast", function() {
					t(a)
				}) : cart.shippingContentPlacement.slideUp(400, function() {
					t(a)
				}))
			})
		}))
	},
	setShipping: function() {
		var radios = $('#shipping-types .shippingOptions input[type="radio"]'),
			labels = $("#shipping-types .shippingOptions label");
		if (radios.length > 1) {
			radios.click(function() {
				var radio = $(this),
					id = parseInt(radio.data("shippingId"));
				id != cart.shipping.id && (labels.attr("title", "Aguarde...").addClass("wait"), cart.sendDataServer("cmd=definirFormaEntrega&id=" + id, function(data) {
					eval("var shipping=cart.shipping.options.$" + id), cart.shipping.cost = shipping.cost, cart.shipping.time = shipping.time, cart.shipping.id = shipping.id, cart.temProdutoComEntrega = Boolean(cart.shipping.temProdutoComEntrega), cart.mostrarPrazo(), cart.changeValues(), labels.attr("title", function() {
						return $(this).text()
					}).removeClass("wait")
				}))
			}).each(function() {
				$(this).data("shippingId", $(this).val())
			}).removeAttr("checked");
			var checked = $('#shipping-types .shippingOptions input[value="' + cart.shipping.id + '"]');
			checked.length > 0 ? checked.attr("checked", "true") : $('#shipping-types .shippingOptions input[type="radio"]:first').click()
		} else radios.attr("checked", "true").attr("disabled", "true")
	},
	calculateSubtotal: function() {
		var tempDiscount = cart.discount;
		cart.subtotal = 0, cart.discount = 0;
		for (var it in cart.itens)
			if (0 == it.indexOf("$")) {
				var li = $("#" + it.replace("$", "trCarrinho_"));
				$("div:last", li).attr("id").indexOf("totalItem") > -1 && ($("div:last", li).html("<p><small>R$ </small>" + cart.formatCurrency(parseFloat(eval("cart.itens." + it + ".total"))).replace("R$", "") + "</p>"), eval("cart.subtotal +=parseFloat(cart.itens." + it + ".total)"))
			}
		0 == cart.discount && (cart.discount = tempDiscount), cart.subtotal = cart.round(cart.subtotal)
	},
	changeValues: function() {
		cart.total = cart.round(cart.subtotal - cart.discount + cart.shipping.cost), cart.total <= 0 && (cart.shipping.free ? cart.total = .01 : cart.total = cart.shipping.cost), cart.subtotalPlacement.html("<p><small>R$ </small>" + cart.formatCurrency(cart.subtotal).replace("R$", "") + "</p>"), cart.shippingPlacement.html("<p><small>R$ </small>" + cart.formatCurrency(cart.shipping.cost).replace("R$", "") + "</p>"), cart.discountPlacement.html("<p><small>R$ </small>" + cart.formatCurrency(cart.discount).replace("R$", "") + "</p>"), cart.totalPlacement.html("<p><small>R$ </small>" + cart.formatCurrency(cart.total).replace("R$", "") + "</p>")
	},
	validate: function(ev) {
		if ("" != $("#cupomDesconto").val().replace(/ /gi, "") && 0 == $("#botaoRemoverDesconto:visible").length) return !1;
		var cep = $("#cep"),
			value = cep.val().replace(/[^0-9]/gi, "");
		if (8 == value.length || cep.hasClass("input-error") || $("form.cart.validate").submit(), !cep.hasClass("input-error")) {
			var data = "cmd=validarCarrinho&id=" + cart.id + "&pickupId=" + $("#retirarLojaLocal").val() + "&itens=" + cart.itens.length + "&subtotal=" + cart.subtotal + "&discount=" + cart.discount + "&shippingId=" + cart.shipping.id + "&shippingCost=" + cart.shipping.cost;
			cart.sendDataServer(data, function(validate) {
				if (eval(validate), validate.success) cart.unloaded = !0, $("*").addClass("wait").unbind("mousedown mouseup click").bind("mousedown mouseup click", function() {
					return !1
				}), $.redirecionarUrl(validate.data);
				else {
					var iFunction = "",
						iFocus = "";
					switch (validate.data.code) {
						case "missingShipping":
							iFunction = "$('#botaoCalcularFrete').click()", iFocus = "#cep", iError = "#cep";
							break;
						case "wrongDiscount":
							iFocus = "#cupomDesconto"
					}
					if (!(iFocus.length > 0 || iFunction.length > 0)) return alert("ERRO! Por favor reinicie seu processo de compra!"), !1;
					iError.length > 0 && $(iError).addClass("input-error"), $("body,html").animate({
						scrollTop: $("form.cart").offset().top
					}, 500, "swing", function() {
						iFunction.length > 0 && eval(iFunction), iFocus.length > 0 && $(iFocus).focus()
					})
				}
			})
		}
	},
	sendDataServer: function(t, a) {
		$.ajax({
			type: "POST",
			url: "index.php",
			data: t,
			dataType: cart.dataType,
			async: cart.async,
			cache: !1,
			timout: 9999,
			success: a,
			beforeSend: cart.beforeAjax,
			complete: cart.completeAjax
		})
	},
	beforeAjax: function() {
		cart.wait = !0, $("form.cart :input, input.btn, a.btn").attr("disabled", !0).addClass("wait").each(function() {
			"cupomDesconto" != $(this).attr("id") ? $(this).data("title", $(this).attr("title")).attr("title", "Aguarde...") : $(this).removeAttr("title")
		})
	},
	completeAjax: function() {
		cart.wait = !1, cart.async = !0, cart.unloaded || $("form.cart :input, input.btn, a.btn").removeAttr("disabled").removeClass("wait").each(function() {
			"" != $(this).data("title") && $(this).data("title") ? $(this).attr("title", $(this).data("title")) : $(this).removeAttr("title")
		})
	},
	getDataItem: function(id) {
		return eval("var data=this.itens.$" + id), data
	},
	scroll: function(t, a) {
		$("body,html").animate({
			scrollTop: t
		}, 500, "swing", a)
	},
	round: function(t) {
		return Math.round(100 * t) / 100
	},
	formatCurrency: function(t) {
		var a = t.toString();
		isNaN(a) && (a = "0"), a = Math.floor(100 * a + .50000000001);
		var e = a == (a = Math.abs(a)),
			i = a % 100;
		a = Math.floor(a / 100).toString(), 10 > i && (i = "0" + i);
		for (var r = 0; r < Math.floor((a.length - (1 + r)) / 3); r++) a = a.substring(0, a.length - (4 * r + 3)) + "." + a.substring(a.length - (4 * r + 3));
		return (e ? "" : "-") + "R$ " + a + "," + i
	}
};
$.validator.addMethod("discount", function(t, a) {
	var e = !$(a).hasClass("input-error");
	return "" != $("#cupomDesconto").val().replace(/ /gi, "") && e && ($(a).hasClass("valid") ? 0 == t.length && $(a).removeClass("valid") : (cart.async = !1, e = cart.getDiscount())), this.optional(a) || e
}, function() {
	return cart.discountMSG
}), $.redirecionarUrl = function(t) {
	var a = document.getElementsByTagName("base");
	a && a[0] && a[0].href && ("/" == a[0].href.substr(a[0].href.length - 1) && "/" == t.charAt(0) && (t = t.substr(1)), t = a[0].href + t), window.location = t
};