(() => {
  'use strict';

  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.main-nav');
  const navLinks = [...document.querySelectorAll('.main-nav a')];
  const year = document.querySelector('#current-year');

  if (year) year.textContent = new Date().getFullYear();

  const closeMenu = () => {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
    navigation.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
      navigation.classList.toggle('is-open', !isOpen);
      document.body.classList.toggle('menu-open', !isOpen);
    });

    navLinks.forEach((link) => link.addEventListener('click', closeMenu));

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });

    document.addEventListener('click', (event) => {
      if (!navigation.classList.contains('is-open')) return;
      if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
  }

  const setHeaderState = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  const sectionObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach((link) => link.classList.toggle('is-current', link.getAttribute('href') === `#${id}`));
        });
      }, { rootMargin: '-35% 0px -58% 0px', threshold: 0 })
    : null;

  document.querySelectorAll('main section[id]').forEach((section) => sectionObserver?.observe(section));

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = [...document.querySelectorAll('.reveal')];

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((element) => element.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px' });

    reveals.forEach((element) => revealObserver.observe(element));
  }

  const normalizeText = (value) => value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

  const searchInput = document.querySelector('#catalog-search');
  const filterButtons = [...document.querySelectorAll('.filter-chip')];
  const cards = [...document.querySelectorAll('.product-card')];
  const status = document.querySelector('#catalog-status');
  const emptyState = document.querySelector('#catalog-empty');
  const moreButton = document.querySelector('#catalog-more');
  const initialLimit = 8;
  let activeFilter = 'todos';
  let expanded = false;

  const updateCatalog = () => {
    const query = normalizeText(searchInput?.value || '');
    const matchingCards = cards.filter((card) => {
      const categoryMatches = activeFilter === 'todos' || card.dataset.category === activeFilter;
      const searchable = normalizeText(`${card.dataset.search || ''} ${card.textContent || ''}`);
      return categoryMatches && (!query || searchable.includes(query));
    });

    const filteredView = activeFilter !== 'todos' || Boolean(query);
    const displayLimit = filteredView || expanded ? matchingCards.length : initialLimit;

    cards.forEach((card) => {
      const matchIndex = matchingCards.indexOf(card);
      card.hidden = matchIndex === -1 || matchIndex >= displayLimit;
    });

    if (status) {
      const visibleCount = Math.min(displayLimit, matchingCards.length);
      status.textContent = matchingCards.length
        ? `${visibleCount} de ${matchingCards.length} ${matchingCards.length === 1 ? 'item encontrado' : 'itens encontrados'}`
        : 'Nenhum item encontrado';
    }

    if (emptyState) emptyState.hidden = matchingCards.length > 0;

    if (moreButton) {
      const canExpand = !filteredView && matchingCards.length > initialLimit;
      moreButton.parentElement.hidden = !canExpand;
      moreButton.setAttribute('aria-expanded', String(expanded));
      moreButton.innerHTML = expanded
        ? 'Mostrar menos <span aria-hidden="true">−</span>'
        : 'Ver catálogo completo <span aria-hidden="true">＋</span>';
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter || 'todos';
      expanded = false;
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      updateCatalog();
    });
  });

  searchInput?.addEventListener('input', updateCatalog);

  moreButton?.addEventListener('click', () => {
    expanded = !expanded;
    updateCatalog();
    if (!expanded) document.querySelector('#catalogo')?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });

  document.querySelectorAll('.product-link').forEach((link) => {
    const product = link.dataset.product || 'um produto';
    const message = `Olá! Vim pelo catálogo da Express Recargas e gostaria de consultar: ${product}.`;
    link.href = `https://wa.me/553232155419?text=${encodeURIComponent(message)}`;
    link.target = '_blank';
    link.rel = 'noopener';
  });

  updateCatalog();
})();
