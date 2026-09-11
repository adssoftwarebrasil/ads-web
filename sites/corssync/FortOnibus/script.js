const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const filterButtons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.product-card');
const revealItems = document.querySelectorAll('.reveal');
const statusEl = document.querySelector('[data-status]');
const whatsappForm = document.querySelector('[data-whatsapp-form]');

function toggleMenu(forceClose = false) {
  const willOpen = forceClose ? false : !nav.classList.contains('is-open');
  nav.classList.toggle('is-open', willOpen);
  menuToggle.classList.toggle('is-open', willOpen);
  document.body.classList.toggle('menu-open', willOpen);
  menuToggle.setAttribute('aria-expanded', String(willOpen));
}

menuToggle?.addEventListener('click', () => toggleMenu());

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => toggleMenu(true));
});

window.addEventListener('scroll', () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 20);
}, { passive: true });

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });

    cards.forEach((card) => {
      const show = filter === 'todos' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !show);
    });
  });
});

const week = [
  { label: 'Domingo', hours: 'Fechado' },
  { label: 'Segunda', hours: '08:00–12:00 • 13:30–17:30' },
  { label: 'Terça', hours: '08:00–12:00 • 13:30–17:30' },
  { label: 'Quarta', hours: '08:00–12:00 • 13:30–17:30' },
  { label: 'Quinta', hours: '08:00–12:00 • 13:30–17:30' },
  { label: 'Sexta', hours: '08:00–12:00 • 13:30–17:30' },
  { label: 'Sábado', hours: '08:00–12:00' },
];

if (statusEl) {
  const today = week[new Date().getDay()];
  statusEl.textContent = today.hours === 'Fechado'
    ? 'Hoje fechado • fale pelo WhatsApp'
    : `${today.label}: ${today.hours}`;
}

whatsappForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(whatsappForm);
  const name = String(formData.get('name') || '').trim();
  const product = String(formData.get('product') || '').trim();
  const message = String(formData.get('message') || '').trim();
  const text = [
    `Olá! Meu nome é ${name}.`,
    product ? `Peça ou veículo: ${product}.` : '',
    `Mensagem: ${message}`,
  ].filter(Boolean).join('\n');

  const whatsappUrl = `https://wa.me/5585997252104?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
