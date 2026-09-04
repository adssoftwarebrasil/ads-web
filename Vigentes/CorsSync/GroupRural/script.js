const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];

/* ===== MOBILE MENU ===== */
const hamburger = $('#hamburger');
const navMenu = $('#navMenu');
const navOverlay = $('#navOverlay');

function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
    const open = navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    navOverlay.classList.toggle('active');
    document.body.style.overflow = open ? 'hidden' : '';
});

navOverlay.addEventListener('click', closeMenu);
$$('.nav-link').forEach(l => l.addEventListener('click', closeMenu));

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) closeMenu();
});

/* ===== SMOOTH SCROLL ===== */
$$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = $(href);
        if (!target) return;
        const offset = $('#header').offsetHeight + 16;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    });
});

$('#heroScroll')?.addEventListener('click', () => {
    const next = $('#empresas');
    if (next) {
        const offset = $('#header').offsetHeight + 16;
        window.scrollTo({ top: next.offsetTop - offset, behavior: 'smooth' });
    }
});

/* ===== HEADER SCROLL ===== */
const header = $('#header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 60);
    if (y > lastScroll && y > 300) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScroll = y;
}, { passive: true });

/* ===== ACTIVE NAV LINK ===== */
const sections = $$('section[id]');
const navLinks = $$('.nav-link');

function updateActiveLink() {
    const y = window.scrollY + 200;
    let current = '';
    sections.forEach(s => {
        if (s.offsetTop <= y) current = s.id;
    });
    navLinks.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
    });
}
window.addEventListener('scroll', updateActiveLink, { passive: true });

/* ===== PRODUCT TABS ===== */
$$('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        $$('.tab-btn').forEach(b => b.classList.remove('active'));
        $$('.tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const panel = $(`#${btn.dataset.tab}`);
        if (panel) panel.classList.add('active');
    });
});

/* ===== SCROLL ANIMATIONS ===== */
const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            animObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

$$('[data-animate]').forEach((el, i) => {
    el.style.transitionDelay = `${i % 4 * 80}ms`;
    animObserver.observe(el);
});

/* ===== COUNTER ANIMATION ===== */
let countersDone = false;
const countersSection = $('.sobre-counters');

function animateCounters() {
    if (countersDone) return;
    countersDone = true;
    $$('.counter-number').forEach(el => {
        const target = +el.dataset.count;
        const dur = 1600;
        const step = target / (dur / 16);
        let cur = 0;
        const tick = () => {
            cur = Math.min(cur + step, target);
            el.textContent = Math.round(cur);
            if (cur < target) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    });
}

if (countersSection) {
    const cObs = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            animateCounters();
            cObs.disconnect();
        }
    }, { threshold: 0.4 });
    cObs.observe(countersSection);
}

/* ===== CONTACT FORM ===== */
const contactForm = $('#contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();

        const btn = contactForm.querySelector('.btn');
        const original = btn.innerHTML;

        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Redirecionando...';
        btn.disabled = true;

        // PEGANDO DADOS
        const nome = $('#nome').value;
        const telefone = $('#telefone').value;
        const email = $('#email').value;

        const select = $('#empresa');
        const empresa = select.options[select.selectedIndex].text;

        const mensagem = $('#mensagem').value;

        // MONTANDO TEXTO
        const texto = 
`Olá! Gostaria de entrar em contato.

👤 Nome: ${nome}
📞 Telefone: ${telefone}
📧 Email: ${email}
🏢 Interesse: ${empresa}

📝 Mensagem:
${mensagem}`;

        const numero = "5534999262397";

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

        // ABRE WHATSAPP
        window.open(url, '_blank');

        // RESET VISUAL
        setTimeout(() => {
            btn.innerHTML = original;
            btn.disabled = false;
            contactForm.reset();
        }, 1500);
    });
}
