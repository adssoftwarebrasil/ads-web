/*
 * O site virou estatico, entao o formulario de contato nao tem mais como
 * enviar e-mail sozinho. Aqui o botao "Enviar mensagem" monta a mensagem com
 * o que a pessoa preencheu e abre o WhatsApp da loja com o texto pronto.
 */
(function () {
  "use strict";

  var TELEFONE = "5562994359946";

  function rotulo(campo, form) {
    var lbl = campo.id ? form.querySelector('label[for="' + campo.id + '"]') : null;
    var texto = lbl ? lbl.textContent.trim() : "";
    return texto || campo.getAttribute("placeholder") || campo.name || "Campo";
  }

  function montaTexto(form) {
    var campos = form.querySelectorAll("input, textarea, select");
    var linhas = ["Ola! Vim pelo site."];
    for (var i = 0; i < campos.length; i++) {
      var c = campos[i];
      if (c.type === "hidden" || c.type === "submit" || c.type === "button") {
        continue;
      }
      var valor = (c.value || "").trim();
      if (!valor) {
        continue;
      }
      linhas.push(rotulo(c, form) + ": " + valor);
    }
    return linhas.join("\n");
  }

  function avisa(form) {
    var caixa = form.querySelector(".js-aviso-whatsapp");
    if (!caixa) {
      caixa = document.createElement("div");
      caixa.className = "elementor-message elementor-message-success js-aviso-whatsapp";
      form.appendChild(caixa);
    }
    caixa.textContent = "Abrimos o WhatsApp com a sua mensagem pronta. " +
      "Se a janela nao abrir, chame no (62) 99435-9946.";
  }

  document.addEventListener("submit", function (e) {
    var form = e.target;
    if (!form || !form.classList || !form.classList.contains("elementor-form")) {
      return;
    }
    // impede o envio do Elementor, que dependia do WordPress
    e.preventDefault();
    e.stopPropagation();
    if (typeof form.reportValidity === "function" && !form.reportValidity()) {
      return;
    }
    var url = "https://api.whatsapp.com/send?phone=" + TELEFONE +
      "&text=" + encodeURIComponent(montaTexto(form));
    window.open(url, "_blank", "noopener");
    avisa(form);
  }, true);
})();
