const serviceFilters = document.querySelectorAll(".service-filter");
const servicePanels = document.querySelectorAll(".service-panel");

serviceFilters.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.service;

    serviceFilters.forEach((item) => item.classList.toggle("is-active", item === button));
    servicePanels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.panel === target));
  });
});

const thumbCards = document.querySelectorAll(".thumb-card");
const featureVisual = document.getElementById("featureVisual");
const featureTag = document.getElementById("featureTag");
const featureTitle = document.getElementById("featureTitle");
const featureText = document.getElementById("featureText");

const renderFeatureMedia = (card) => {
  const type = card.dataset.type;

  if (type === "video") {
    const video = document.createElement("video");
    video.src = card.dataset.src;
    video.poster = card.dataset.poster || "";
    video.controls = true;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    featureVisual.replaceChildren(video);
    return;
  }

  const image = document.createElement("img");
  image.src = card.dataset.src;
  image.alt = card.dataset.alt || "";
  featureVisual.replaceChildren(image);
};

thumbCards.forEach((card) => {
  const previewVideo = card.querySelector("video");
  if (previewVideo) {
    previewVideo.addEventListener("mouseenter", () => previewVideo.play());
    previewVideo.addEventListener("mouseleave", () => {
      previewVideo.pause();
      previewVideo.currentTime = 0;
    });
  }

  card.addEventListener("click", () => {
    thumbCards.forEach((item) => item.classList.toggle("is-selected", item === card));
    renderFeatureMedia(card);
    featureTag.textContent = card.dataset.tag || "";
    featureTitle.textContent = card.dataset.title || "";
    featureText.textContent = card.dataset.text || "";
  });
});

const contactForm = document.getElementById("contactForm");
const contactStatus = document.getElementById("contactStatus");

if (contactForm && contactStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const nome = String(formData.get("nome") || "").trim();
    const telefone = String(formData.get("telefone") || "").trim();
    const cidade = String(formData.get("cidade") || "").trim();
    const servico = String(formData.get("servico") || "").trim();
    const mensagem = String(formData.get("mensagem") || "").trim();

    const text = [
      "Ola, vim pelo site da Toldos Ipameri e gostaria de um orcamento.",
      "",
      `Nome: ${nome}`,
      `WhatsApp: ${telefone}`,
      `Cidade: ${cidade}`,
      `Interesse: ${servico}`,
      `Detalhes: ${mensagem}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/5564992686774?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank", "noopener");
    contactStatus.textContent = "Mensagem preparada. Se o WhatsApp nao abrir automaticamente, use o botao novamente.";
  });
}
