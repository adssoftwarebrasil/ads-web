document.documentElement.classList.add('js');

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Cabeçalho e navegação móvel
const header = document.getElementById('header');
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.getElementById('menu-mobile');

function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 24);
}

function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Abrir menu');
  mobileMenu?.classList.remove('open');
  document.body.classList.remove('menu-open');
}

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

menuButton?.addEventListener('click', () => {
  const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(willOpen));
  menuButton.setAttribute('aria-label', willOpen ? 'Fechar menu' : 'Abrir menu');
  mobileMenu.classList.toggle('open', willOpen);
  document.body.classList.toggle('menu-open', willOpen);
});

mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

// Vitrine fotográfica do topo
const hero = document.querySelector('.hero');
const heroSlides = [...document.querySelectorAll('.hero-slide')];
const heroDots = [...document.querySelectorAll('[data-goto-slide]')];
const heroPrevious = document.querySelector('.hero-prev');
const heroNext = document.querySelector('.hero-next');
let currentHeroSlide = 0;
let heroTimer = null;

function showHeroSlide(index) {
  currentHeroSlide = (index + heroSlides.length) % heroSlides.length;

  heroSlides.forEach((slide, slideIndex) => {
    const active = slideIndex === currentHeroSlide;
    slide.classList.toggle('is-active', active);
    slide.setAttribute('aria-hidden', String(!active));
  });

  heroDots.forEach((dot, dotIndex) => {
    const active = dotIndex === currentHeroSlide;
    dot.classList.toggle('is-active', active);
    dot.setAttribute('aria-selected', String(active));
  });
}

function stopHeroTimer() {
  window.clearInterval(heroTimer);
  heroTimer = null;
}

function startHeroTimer() {
  if (reducedMotion || heroSlides.length < 2 || document.hidden) return;
  stopHeroTimer();
  heroTimer = window.setInterval(() => showHeroSlide(currentHeroSlide + 1), 6500);
}

heroDots.forEach((dot) => dot.addEventListener('click', () => {
  showHeroSlide(Number(dot.dataset.gotoSlide));
  startHeroTimer();
}));

heroPrevious?.addEventListener('click', () => {
  showHeroSlide(currentHeroSlide - 1);
  startHeroTimer();
});

heroNext?.addEventListener('click', () => {
  showHeroSlide(currentHeroSlide + 1);
  startHeroTimer();
});

hero?.addEventListener('mouseenter', stopHeroTimer);
hero?.addEventListener('mouseleave', startHeroTimer);
document.addEventListener('visibilitychange', () => document.hidden ? stopHeroTimer() : startHeroTimer());
showHeroSlide(0);
startHeroTimer();

// Entradas discretas de conteúdo
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

// Catálogo: filtros e pesquisa
const filters = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('.product-card')];
const searchInput = document.getElementById('catalog-search');
const resultsCount = document.getElementById('results-count');
const noResults = document.getElementById('no-results');
const clearSearchButton = document.getElementById('clear-search');
let activeFilter = 'todos';

function normalizeText(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function applyCatalogFilters() {
  const term = normalizeText(searchInput.value);
  let visible = 0;

  cards.forEach((card) => {
    const matchesCategory = activeFilter === 'todos' || card.dataset.category === activeFilter;
    const matchesSearch = !term || normalizeText(card.dataset.search).includes(term);
    const show = matchesCategory && matchesSearch;
    card.hidden = !show;
    if (show) visible += 1;
  });

  resultsCount.textContent = `${visible} ${visible === 1 ? 'seguro encontrado' : 'seguros encontrados'}`;
  noResults.hidden = visible !== 0;
}

function setCatalogFilter(filterName) {
  activeFilter = filterName;
  filters.forEach((button) => {
    const active = button.dataset.filter === filterName;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  applyCatalogFilters();
}

filters.forEach((button) => {
  button.addEventListener('click', () => setCatalogFilter(button.dataset.filter));
});

searchInput?.addEventListener('input', applyCatalogFilters);

clearSearchButton?.addEventListener('click', () => {
  searchInput.value = '';
  setCatalogFilter('todos');
  searchInput.focus();
});

document.querySelectorAll('[data-quick-filter]').forEach((link) => {
  link.addEventListener('click', () => {
    searchInput.value = '';
    setCatalogFilter(link.dataset.quickFilter);
  });
});

// Dados exibidos no painel de detalhes
const productDetails = {
  auto: {
    category: 'PATRIMÔNIO',
    title: 'Seguro Auto',
    intro: 'Uma solução configurada para o seu perfil, seu veículo e a forma como você o utiliza.',
    quote: 'Meu veículo',
    coverages: ['Colisão, incêndio e roubo ou furto', 'Danos a terceiros', 'Assistência 24 horas', 'Vidros, faróis e retrovisores', 'Carro reserva, conforme o plano']
  },
  vida: {
    category: 'PARA VOCÊ',
    title: 'Seguro de Vida',
    intro: 'Proteção financeira para você e para as pessoas que dependem das suas escolhas.',
    quote: 'Minha vida ou família',
    coverages: ['Morte natural ou acidental', 'Invalidez por acidente', 'Doenças graves, conforme o plano', 'Assistência funeral', 'Coberturas adicionais personalizadas']
  },
  saude: {
    category: 'PARA VOCÊ',
    title: 'Plano de Saúde',
    intro: 'Planos para diferentes perfis, idades e necessidades, tanto para pessoas quanto para empresas.',
    quote: 'Minha saúde',
    coverages: ['Opções individuais, familiares e empresariais', 'Diferentes redes de atendimento', 'Planos regionais ou nacionais', 'Coparticipação ou mensalidade fixa', 'Orientação para comparar operadoras']
  },
  residencial: {
    category: 'PATRIMÔNIO',
    title: 'Seguro Residencial',
    intro: 'Proteção para a estrutura, os bens e os imprevistos que podem interromper a rotina da sua casa.',
    quote: 'Minha casa',
    coverages: ['Incêndio, raio e explosão', 'Danos elétricos', 'Roubo ou furto qualificado', 'Responsabilidade civil familiar', 'Serviços de assistência residencial']
  },
  empresarial: {
    category: 'EMPRESAS',
    title: 'Seguro Empresarial',
    intro: 'Coberturas ajustadas ao porte, à atividade e aos principais riscos da sua operação.',
    quote: 'Minha empresa',
    coverages: ['Incêndio, raio e explosão', 'Danos elétricos e equipamentos', 'Roubo de bens e mercadorias', 'Responsabilidade civil', 'Lucros cessantes e coberturas adicionais']
  },
  transporte: {
    category: 'EMPRESAS',
    title: 'Seguro Transporte',
    intro: 'Proteção para mercadorias durante o percurso, com alternativas para embarcadores e transportadores.',
    quote: 'Uma carga ou transporte',
    coverages: ['Cobertura nacional e internacional', 'Acidentes, avarias e roubo de carga', 'Averbação eletrônica', 'Planos para embarcadores e transportadores', 'Consultoria em gerenciamento de risco']
  },
  condominial: {
    category: 'EMPRESAS',
    title: 'Seguro Condominial',
    intro: 'Proteção obrigatória e coberturas complementares para a edificação e a rotina do condomínio.',
    quote: 'Meu condomínio',
    coverages: ['Incêndio, raio e explosão', 'Danos elétricos', 'Responsabilidade civil do condomínio', 'Portões, equipamentos e áreas comuns', 'Coberturas para síndico e funcionários']
  },
  pet: {
    category: 'PARA VOCÊ',
    title: 'Seguro Pet',
    intro: 'Serviços e assistências para apoiar o cuidado com cães e gatos em diferentes situações.',
    quote: 'Meu pet',
    coverages: ['Orientação veterinária', 'Consultas e exames, conforme o plano', 'Vacinas e procedimentos', 'Assistência emergencial', 'Serviços de cuidado e bem-estar']
  },
  'vida-grupo': {
    category: 'EMPRESAS',
    title: 'Seguro de Vida em Grupo',
    intro: 'Proteção coletiva para colaboradores e um benefício relevante para a estratégia de pessoas.',
    quote: 'Minha empresa',
    coverages: ['Morte natural ou acidental', 'Invalidez por acidente', 'Assistência funeral', 'Coberturas para cônjuge e filhos', 'Capital segurado conforme o grupo']
  },
  fianca: {
    category: 'EMPRESAS',
    title: 'Fiança e Capitalização',
    intro: 'Alternativas para garantir contratos de locação e apoiar diferentes necessidades de planejamento.',
    quote: 'Outro',
    coverages: ['Garantia de aluguel', 'Encargos e danos ao imóvel', 'Análise de perfil para locação', 'Títulos de capitalização', 'Soluções para pessoas e empresas']
  }
};

const modal = document.getElementById('product-modal');
const modalCategory = document.getElementById('modal-category');
const modalTitle = document.getElementById('modal-title');
const modalIntro = document.getElementById('modal-intro');
const modalList = document.getElementById('modal-list');
const modalQuote = document.getElementById('modal-quote');
const modalClose = document.querySelector('.modal-close');
const insuranceSelect = document.getElementById('insurance');
let lastFocusedElement = null;
let activeProduct = null;

function openProductModal(productKey, trigger) {
  const product = productDetails[productKey];
  if (!product) return;
  activeProduct = product;
  lastFocusedElement = trigger;
  modalCategory.textContent = product.category;
  modalTitle.textContent = product.title;
  modalIntro.textContent = product.intro;
  modalList.innerHTML = product.coverages.map((coverage) => `<li>${coverage}</li>`).join('');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  window.setTimeout(() => modalClose.focus(), reducedMotion ? 0 : 250);
}

function closeProductModal(restoreFocus = true) {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  if (restoreFocus && lastFocusedElement) lastFocusedElement.focus();
}

document.querySelectorAll('.product-action').forEach((button) => {
  button.addEventListener('click', () => openProductModal(button.dataset.product, button));
});

document.querySelectorAll('[data-close-modal]').forEach((element) => {
  element.addEventListener('click', () => closeProductModal());
});

modalQuote?.addEventListener('click', () => {
  if (activeProduct) insuranceSelect.value = activeProduct.quote;
  closeProductModal(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('open')) closeProductModal();
});

// Cotação pelo WhatsApp
const quoteForm = document.getElementById('quote-form');

quoteForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!quoteForm.reportValidity()) return;
  const formData = new FormData(quoteForm);
  const name = formData.get('name');
  const insurance = formData.get('insurance');
  const profile = formData.get('profile');
  const message = `Olá! Meu nome é ${name}. Gostaria de uma cotação para ${insurance}, como ${profile.toLowerCase()}.`;
  window.open(`https://wa.me/5538210188888?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

// Perguntas frequentes
document.querySelectorAll('.faq-item button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const open = button.getAttribute('aria-expanded') === 'true';

    document.querySelectorAll('.faq-item').forEach((otherItem) => {
      otherItem.classList.remove('open');
      otherItem.querySelector('button').setAttribute('aria-expanded', 'false');
    });

    if (!open) {
      item.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});

// Rolagem de links internos
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const selector = link.getAttribute('href');
    const target = selector && selector !== '#' ? document.querySelector(selector) : null;
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
applyCatalogFilters();
