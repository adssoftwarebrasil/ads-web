document.addEventListener('DOMContentLoaded', () => {

    // 1. Controle do Menu Mobile (Gaveta Lateral)
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Fechar gaveta ao clicar em qualquer link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // 2. Efeito Sombra no Header ao rolar a página
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 30);
        }
    }, { passive: true });

    // 3. Rolagem Suave (Smooth Scroll) para as âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = header ? header.offsetHeight : 0;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // 4. Efeito Scroll Reveal (Aparição Suave dos elementos)
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // 5. Formulário Inteligente conectando ao WhatsApp do Auto Center
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const inputs = contactForm.querySelectorAll('input, select, textarea');
            const name = inputs[0]?.value || '';
            const car = inputs[1]?.value || '';
            const service = inputs[2]?.value || '';
            const details = inputs[3]?.value || '';

            const textoFormatado = [
                `Olá equipe Damazul! Meu nome é *${name}*.`,
                car ? `Meu veículo é um: *${car}*` : '',
                service ? `Gostaria de agendar: *${service}*` : '',
                details ? `Detalhes do problema: ${details}` : ''
            ].filter(Boolean).join('%0A');

            // Número configurado conforme o briefing
            const urlWhatsApp = `https://wa.me/5565996080712?text=${textoFormatado}`;

            const btnSubmit = contactForm.querySelector('button[type="submit"]');
            if (btnSubmit) {
                btnSubmit.textContent = 'Aguarde...';
                btnSubmit.style.pointerEvents = 'none';
            }

            setTimeout(() => {
                window.open(urlWhatsApp, '_blank');
                contactForm.reset();
                if (btnSubmit) {
                    btnSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Solicitar Agendamento';
                    btnSubmit.style.pointerEvents = 'auto';
                }
            }, 500);
        });
    }
});