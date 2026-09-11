const businessStatus = document.getElementById("business-status");
const currentYear = document.getElementById("current-year");
const quoteForm = document.getElementById("quote-form");

const updateBusinessStatus = () => {
  const now = new Date();
  const currentHour = now.getHours();
  const isOpen = currentHour >= 7 && currentHour < 22;

  if (businessStatus) {
    businessStatus.textContent = isOpen
      ? "Aberto agora para pedidos e atendimento"
      : "Fora do horário, mas você já pode deixar seu pedido no WhatsApp";
  }
};

const buildWhatsAppMessage = () => {
  const name = document.getElementById("customer-name")?.value.trim() || "Cliente";
  const product = document.getElementById("product-type")?.value || "Gás de cozinha";
  const location = document.getElementById("customer-location")?.value.trim() || "Não informado";
  const service = document.getElementById("service-type")?.value || "Residencial";
  const note = document.getElementById("customer-note")?.value.trim() || "Sem observações adicionais";

  return [
    "Olá, quero fazer um pedido com a Primagaz Primavera.",
    "",
    `Nome: ${name}`,
    `Produto: ${product}`,
    `Tipo de atendimento: ${service}`,
    `Bairro ou referência: ${location}`,
    `Observações: ${note}`
  ].join("\n");
};

if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const message = encodeURIComponent(buildWhatsAppMessage());
    const whatsappUrl = `https://wa.me/5566996629494?text=${message}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

updateBusinessStatus();
