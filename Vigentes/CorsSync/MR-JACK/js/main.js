// Sticky navigation
const nav = document.querySelector('.nav');

function updateNav() {
  if (window.scrollY > 40) {
    nav?.classList.add('scrolled');
  } else {
    nav?.classList.remove('scrolled');
  }
}

if (nav) {
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
}

// Mobile menu
const hamburger = document.querySelector('.nav-hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileClose = document.querySelector('.mobile-nav-close');

hamburger?.addEventListener('click', () => {
  mobileNav?.classList.add('open');
  document.body.style.overflow = 'hidden';
});

mobileClose?.addEventListener('click', closeMobileNav);
mobileNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileNav));

function closeMobileNav() {
  mobileNav?.classList.remove('open');
  document.body.style.overflow = '';
}

// Hero image animation
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  requestAnimationFrame(() => setTimeout(() => heroBg.classList.add('loaded'), 80));
}

// Scroll fade-up animations
const fadeEls = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.12 }
);
fadeEls.forEach(el => observer.observe(el));

// Active nav link
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href') || '';
  if (href === page || (page === 'index.html' && href === 'index.html') || href === `./${page}`) {
    link.classList.add('active');
  }
});
