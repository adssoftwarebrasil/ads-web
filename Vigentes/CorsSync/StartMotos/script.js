const models = [
  {
    name: "Pop",
    copy: "Ideal para quem quer agilidade no dia a dia, economia e facilidade para circular por Luís Eduardo Magalhães.",
    whatsapp: "https://wa.me/5577999927374?text=Ol%C3%A1%2C%20quero%20saber%20se%20voc%C3%AAs%20t%C3%AAm%20Pop."
  },
  {
    name: "Start",
    copy: "Uma busca comum para quem procura uma Honda prática, confiável e pronta para encarar a rotina com mais conforto.",
    whatsapp: "https://wa.me/5577999927374?text=Ol%C3%A1%2C%20quero%20saber%20sobre%20motos%20Start."
  },
  {
    name: "Fan",
    copy: "Muito procurada por quem quer uma moto versátil para trabalho, deslocamento diário e boa presença no asfalto.",
    whatsapp: "https://wa.me/5577999927374?text=Ol%C3%A1%2C%20quero%20saber%20sobre%20motos%20Fan."
  },
  {
    name: "Titan",
    copy: "Uma das favoritas de quem deseja mais porte, visual marcante e equilíbrio entre uso urbano e estrada.",
    whatsapp: "https://wa.me/5577999927374?text=Ol%C3%A1%2C%20quero%20saber%20sobre%20motos%20Titan."
  },
  {
    name: "Bros",
    copy: "Para quem gosta de uma pegada mais aventureira e quer enfrentar diferentes trajetos com mais segurança.",
    whatsapp: "https://wa.me/5577999927374?text=Ol%C3%A1%2C%20quero%20saber%20sobre%20motos%20Bros."
  },
  {
    name: "XRE",
    copy: "Lembra força, altura e presença. É um nome forte entre clientes que buscam robustez na categoria.",
    whatsapp: "https://wa.me/5577999927374?text=Ol%C3%A1%2C%20quero%20saber%20sobre%20motos%20XRE."
  },
  {
    name: "CB",
    copy: "Escolha de quem busca estilo mais esportivo, visual imponente e a experiência de uma Honda com mais personalidade.",
    whatsapp: "https://wa.me/5577999927374?text=Ol%C3%A1%2C%20quero%20saber%20sobre%20motos%20CB."
  }
];

const photos = [
  "1et3rb.jpeg",
  "7tj0br.jpeg",
  "85al8a.jpeg",
  "909nej.jpeg",
  "9bvhmf.jpeg",
  "9nrje.jpeg",
  "bxk2q.jpeg",
  "cekouc.jpeg",
  "cerimq.jpeg",
  "d1norh.jpeg",
  "dti2g.jpeg",
  "epcni6.jpeg",
  "erz09e.jpeg",
  "f98jqp.jpeg",
  "h97q7.jpeg",
  "ijtimc.jpeg",
  "IMG_BB6C27D6-BF6E-42CE-AB0C-C0CD2DC0E4C9 (1).jpeg",
  "IMG_BB6C27D6-BF6E-42CE-AB0C-C0CD2DC0E4C9.jpeg",
  "jcuntq.jpeg",
  "jwcr9i.jpeg",
  "kmpwaq.jpeg",
  "meg7pf.jpeg",
  "mkubkt.jpeg",
  "nlge1r.jpeg",
  "o5k4xc.jpeg",
  "p0wpjb.jpeg",
  "pd4sl.jpeg",
  "pdecv.jpeg",
  "pl6f3.jpeg",
  "qaaf7.jpeg",
  "ryumwn.jpeg",
  "sbzzo9.jpeg",
  "tsvh59.jpeg",
  "u86zo.jpeg",
  "u90xyd.jpeg",
  "uiunli.jpeg",
  "vorphg.jpeg",
  "xzww9l.jpeg",
  "y1cp18.jpeg",
  "ynlb5h.jpeg",
  "yrd409.jpeg",
  "zcp2uq.jpeg"
];

const videos = [
  "2cep1m.mp4",
  "2j2jg5.mp4",
  "b7llod.mp4",
  "sdjjzb.mp4",
  "tn2vys.mp4",
  "vt7nzn.mp4"
];

const photoLabels = [
  "Vitrine",
  "Pátio",
  "Fachada",
  "Detalhe",
  "Showroom",
  "Loja",
  "Estoque"
];

const photoAltTemplates = [
  "Moto exposta na Start Motos em Luís Eduardo Magalhães",
  "Vitrine de motos da Start Motos",
  "Fachada e motos da revendedora Start Motos",
  "Detalhe do pátio da Start Motos",
  "Showroom da Start Motos com motos em destaque"
];

const modelTabs = document.querySelector(".model-tabs");
const modelTitle = document.querySelector("[data-model-title]");
const modelCopy = document.querySelector("[data-model-copy]");
const modelLink = document.querySelector("[data-model-link]");
const galleryRoot = document.querySelector("[data-gallery]");
const galleryCount = document.querySelector("[data-gallery-count]");
const videosRoot = document.querySelector("[data-videos]");
const rail = document.querySelector(".search-rail__marquee");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");
const lightboxClose = document.querySelector(".lightbox__close");
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const revealItems = document.querySelectorAll(".reveal");

function setActiveModel(index) {
  const model = models[index];
  modelTitle.textContent = model.name;
  modelCopy.textContent = model.copy;
  modelLink.textContent = `Perguntar sobre ${model.name}`;
  modelLink.href = model.whatsapp;

  [...modelTabs.children].forEach((button, buttonIndex) => {
    button.classList.toggle("is-active", buttonIndex === index);
    button.setAttribute("aria-selected", String(buttonIndex === index));
  });
}

models.forEach((model, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "model-tab";
  button.role = "tab";
  button.textContent = model.name;
  button.setAttribute("aria-selected", "false");
  button.addEventListener("click", () => setActiveModel(index));
  modelTabs.append(button);
});

setActiveModel(0);

photos.forEach((fileName, index) => {
  const src = `assets/img/${fileName}`;
  const alt = photoAltTemplates[index % photoAltTemplates.length];
  const label = photoLabels[index % photoLabels.length];
  const card = document.createElement("article");
  card.className = "gallery-card";
  const whatsappMessage = encodeURIComponent(`Olá, quero consultar a disponibilidade desta moto da Start Motos.`);
  card.innerHTML = `
    <button type="button" class="gallery-card__media" data-label="${label}" aria-label="Ampliar imagem ${label}">
      <img src="${src}" alt="${alt}" loading="lazy" decoding="async">
    </button>
    <div class="gallery-card__availability">
      <p>Consulte a disponibilidade. Algumas motos das fotos podem já ter sido vendidas.</p>
      <a class="gallery-card__link" href="https://wa.me/5577999927374?text=${whatsappMessage}" target="_blank" rel="noreferrer">
        Consultar disponibilidade
      </a>
    </div>
  `;
  card.querySelector(".gallery-card__media").addEventListener("click", () => {
    lightbox.hidden = false;
    lightboxImage.src = src;
    lightboxImage.alt = alt;
    lightboxCaption.textContent = `${label} Start Motos`;
    document.body.style.overflow = "hidden";
  });
  galleryRoot.append(card);
});

galleryCount.textContent = `${photos.length} fotos reais da loja, do pátio e da vitrine.`;

videos.forEach((fileName, index) => {
  const card = document.createElement("article");
  card.className = "video-card";
  card.innerHTML = `
    <video autoplay muted loop playsinline controls preload="metadata">
      <source src="assets/videos/${fileName}" type="video/mp4">
      Seu navegador não suporta vídeo em HTML5.
    </video>
    <span class="video-card__label">Vídeo ${String(index + 1).padStart(2, "0")} da Start Motos</span>
  `;
  videosRoot.append(card);
});

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = "";
  lightboxImage.alt = "";
  lightboxCaption.textContent = "";
  document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) {
    closeLightbox();
  }
});

menuToggle?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

if (rail) {
  const railTracks = [...rail.querySelectorAll(".search-rail__track")];
  const railTemplates = railTracks.map((track) => track.innerHTML);
  const railState = {
    frame: null,
    lastTime: 0,
    positions: [],
    trackWidth: 0,
    speed: 92
  };

  function fillRailTrack(track, template, minWidth) {
    track.innerHTML = template;

    while (track.scrollWidth < minWidth) {
      track.insertAdjacentHTML("beforeend", template);
    }
  }

  function positionRailTracks() {
    const viewportWidth = rail.clientWidth;
    const minWidth = Math.max(viewportWidth * 1.2, 900);

    railTracks.forEach((track, index) => {
      fillRailTrack(track, railTemplates[index], minWidth);
    });

    railState.trackWidth = Math.max(...railTracks.map((track) => track.scrollWidth));
    railState.positions = [viewportWidth, viewportWidth + railState.trackWidth];
    railState.lastTime = 0;

    railTracks.forEach((track, index) => {
      track.style.transform = `translateX(${railState.positions[index]}px)`;
    });
  }

  function animateRail(time) {
    if (!railState.lastTime) {
      railState.lastTime = time;
    }

    const delta = (time - railState.lastTime) / 1000;
    railState.lastTime = time;

    railState.positions = railState.positions.map((position) => position - railState.speed * delta);

    const [firstPosition, secondPosition] = railState.positions;

    if (firstPosition <= -railState.trackWidth) {
      railState.positions[0] = secondPosition + railState.trackWidth;
    }

    if (secondPosition <= -railState.trackWidth) {
      railState.positions[1] = railState.positions[0] + railState.trackWidth;
    }

    railTracks.forEach((track, index) => {
      track.style.transform = `translateX(${railState.positions[index]}px)`;
    });

    railState.frame = requestAnimationFrame(animateRail);
  }

  let resizeTimeout;

  function restartRail() {
    if (railState.frame) {
      cancelAnimationFrame(railState.frame);
    }

    positionRailTracks();
    railState.frame = requestAnimationFrame(animateRail);
  }

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(restartRail, 120);
  });

  restartRail();
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));
