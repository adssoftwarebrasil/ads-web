(() => {
  'use strict';

  const WHATSAPP_NUMBER = '5579999581199';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const whatsappUrl = (message) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  document.querySelectorAll('.js-whatsapp').forEach((link) => {
    link.href = whatsappUrl(link.dataset.waMessage || 'Olá! Gostaria de pedir gás com a Point Gás.');
  });

  document.getElementById('currentYear').textContent = new Date().getFullYear();

  window.addEventListener('load', () => {
    document.body.classList.add('is-loaded');
  });

  const header = document.getElementById('siteHeader');
  const menuToggle = document.getElementById('menuToggle');
  const primaryNav = document.getElementById('primaryNav');

  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    primaryNav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    primaryNav.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  primaryNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  const setOperationStatus = () => {
    const statusCard = document.getElementById('operationStatus');
    const statusLabel = document.getElementById('statusLabel');
    const statusHours = document.getElementById('statusHours');

    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Sao_Paulo',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23'
    }).formatToParts(new Date());

    const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
    const dayIndex = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(values.weekday);
    const currentMinutes = Number(values.hour) * 60 + Number(values.minute);
    const openingMinutes = 7 * 60 + 30;
    const closingMinutes = dayIndex === 0 ? 14 * 60 : 19 * 60;
    const isOpen = currentMinutes >= openingMinutes && currentMinutes < closingMinutes;

    statusCard.classList.toggle('is-closed', !isOpen);

    if (isOpen) {
      statusLabel.textContent = 'Aberto agora';
      statusHours.textContent = `Atendimento até ${dayIndex === 0 ? '14:00' : '19:00'}`;
      return;
    }

    statusLabel.textContent = 'Fechado agora';
    statusHours.textContent = currentMinutes < openingMinutes
      ? 'Abre hoje às 07:30'
      : 'Abre amanhã às 07:30';
  };

  setOperationStatus();
  window.setInterval(setOperationStatus, 60000);

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });

  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

  const metricCounter = document.querySelector('.metric-counter');
  if (metricCounter) {
    const metricObserver = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) return;

      if (reducedMotion) {
        metricCounter.textContent = String(metricCounter.dataset.target).padStart(2, '0');
      } else {
        let value = 0;
        const target = Number(metricCounter.dataset.target);
        const tick = () => {
          metricCounter.textContent = String(value).padStart(2, '0');
          if (value < target) {
            value += 1;
            window.setTimeout(tick, 95);
          }
        };
        tick();
      }

      observer.disconnect();
    }, { threshold: 0.7 });

    metricObserver.observe(metricCounter);
  }

  const wordReveal = document.querySelector('[data-word-reveal]');
  if (wordReveal) {
    const words = wordReveal.textContent.trim().split(/\s+/);
    wordReveal.textContent = '';

    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.className = 'word';
      span.textContent = word;
      if (word.toLowerCase().startsWith('tranquilidade')) span.classList.add('word-highlight');
      wordReveal.append(span);
      if (index < words.length - 1) wordReveal.append(document.createTextNode(' '));
    });
  }

  const products = {
    p13: {
      sequence: '01',
      category: 'Residencial',
      name: 'P13',
      weight: '13 kg',
      description: 'O botijão que acompanha a rotina da casa, com entrega ágil e todo o cuidado que sua família merece.',
      tags: ['Cozinhas residenciais', 'Uso cotidiano', 'Entrega rápida'],
      cta: 'Pedir P13',
      message: 'Olá! Gostaria de solicitar um botijão P13 de 13 kg com a Point Gás.'
    },
    p20: {
      sequence: '02',
      category: 'Empresarial',
      name: 'P20',
      weight: '20 kg',
      description: 'GLP desenvolvido para empilhadeiras, com desempenho e segurança para operações logísticas e industriais.',
      tags: ['Empilhadeiras', 'Logística', 'Operação industrial'],
      cta: 'Pedir P20',
      message: 'Olá! Gostaria de informações e pedido do botijão P20 de 20 kg para empilhadeira.'
    },
    p45: {
      sequence: '03',
      category: 'Alto consumo',
      name: 'P45',
      weight: '45 kg',
      description: 'Mais autonomia para estabelecimentos e operações com consumo intenso e contínuo de GLP.',
      tags: ['Restaurantes e padarias', 'Condomínios e hotéis', 'Indústrias'],
      cta: 'Pedir P45',
      message: 'Olá! Gostaria de solicitar informações sobre o cilindro P45 de 45 kg para alto consumo.'
    }
  };

  const productTabs = [...document.querySelectorAll('.product-tab')];
  const productPanel = document.getElementById('productPanel');
  const productStage = document.getElementById('productStage');
  let activeProduct = 'p13';
  let switchTimer;

  const productFields = {
    sequence: document.getElementById('productSequence'),
    category: document.getElementById('productCategory'),
    name: document.getElementById('productName'),
    weight: document.getElementById('productWeight'),
    description: document.getElementById('productDescription'),
    tags: document.getElementById('productTags'),
    cta: document.getElementById('productCta'),
    ctaLabel: document.getElementById('productCtaLabel'),
    watermark: document.getElementById('productWatermark'),
    stageLabel: document.getElementById('stageLabel')
  };

  const renderProduct = (key, focusTab = false) => {
    if (!products[key] || key === activeProduct) {
      if (focusTab) productTabs.find((tab) => tab.dataset.product === key)?.focus();
      return;
    }

    activeProduct = key;
    const product = products[key];

    productTabs.forEach((tab) => {
      const selected = tab.dataset.product === key;
      tab.classList.toggle('is-active', selected);
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected) productPanel.setAttribute('aria-labelledby', tab.id);
    });

    productPanel.classList.add('is-switching');
    productStage.dataset.active = key;
    window.clearTimeout(switchTimer);

    switchTimer = window.setTimeout(() => {
      productFields.sequence.textContent = product.sequence;
      productFields.category.textContent = product.category;
      productFields.name.textContent = product.name;
      productFields.weight.textContent = product.weight;
      productFields.description.textContent = product.description;
      productFields.tags.replaceChildren(...product.tags.map((tag) => {
        const span = document.createElement('span');
        span.textContent = tag;
        return span;
      }));
      productFields.ctaLabel.textContent = product.cta;
      productFields.cta.href = whatsappUrl(product.message);
      productFields.watermark.textContent = product.name;
      productFields.stageLabel.textContent = `${product.name} / ${product.weight}`;
      productPanel.classList.remove('is-switching');
    }, reducedMotion ? 0 : 180);

    if (focusTab) productTabs.find((tab) => tab.dataset.product === key)?.focus();
  };

  productFields.cta.href = whatsappUrl(products.p13.message);

  productTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => renderProduct(tab.dataset.product));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();

      let nextIndex = index;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + productTabs.length) % productTabs.length;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % productTabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = productTabs.length - 1;
      renderProduct(productTabs[nextIndex].dataset.product, true);
    });
  });

  const deliveryRoute = document.getElementById('deliveryRoute');
  let ticking = false;

  const clamp = (number, min, max) => Math.min(Math.max(number, min), max);

  const updateOnScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 80);

    if (wordReveal) {
      const rect = wordReveal.getBoundingClientRect();
      const progress = clamp((window.innerHeight * .78 - rect.top) / (window.innerHeight * .72), 0, 1);
      const wordElements = [...wordReveal.querySelectorAll('.word')];
      const litWords = Math.ceil(progress * wordElements.length);
      wordElements.forEach((word, index) => word.classList.toggle('is-lit', index < litWords));
    }

    if (deliveryRoute) {
      const rect = deliveryRoute.getBoundingClientRect();
      const progress = clamp((window.innerHeight * .68 - rect.top) / (rect.height * .72), 0, 1);
      deliveryRoute.style.setProperty('--route-progress', progress.toFixed(3));
    }

    ticking = false;
  };

  const requestScrollUpdate = () => {
    if (ticking) return;
    window.requestAnimationFrame(updateOnScroll);
    ticking = true;
  };

  window.addEventListener('scroll', requestScrollUpdate, { passive: true });
  window.addEventListener('resize', requestScrollUpdate);
  updateOnScroll();

  const cursorRing = document.querySelector('.cursor-ring');
  const finePointer = window.matchMedia('(pointer: fine)').matches;

  if (cursorRing && finePointer && !reducedMotion) {
    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;

    document.addEventListener('mousemove', (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursorRing.classList.add('is-visible');
    }, { passive: true });

    document.addEventListener('mouseleave', () => cursorRing.classList.remove('is-visible'));

    document.querySelectorAll('a, button').forEach((element) => {
      element.addEventListener('mouseenter', () => cursorRing.classList.add('is-active'));
      element.addEventListener('mouseleave', () => cursorRing.classList.remove('is-active'));
    });

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * .14;
      cursorY += (mouseY - cursorY) * .14;
      cursorRing.style.transform = `translate(${cursorX - 18}px, ${cursorY - 18}px)`;
      window.requestAnimationFrame(animateCursor);
    };

    animateCursor();
  }
})();
