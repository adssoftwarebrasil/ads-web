document.addEventListener('DOMContentLoaded', () => {

    // 1. Menu Mobile Toggle
    const navToggle = document.getElementById('navToggle');
    const navMain = document.querySelector('.nav-main');

    if (navToggle && navMain) {
        navToggle.addEventListener('click', () => {
            navMain.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Fecha o menu ao clicar num link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMain.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // 2. Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });

    // 3. Smooth Scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 80; // altura do header fixo
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // 4. Scroll Reveal (Animações de entrada)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // Força revelação caso já estejam na tela ao carregar
    revealElements.forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('active');
        }
    });

    // 5. Envio do Formulário para o WhatsApp
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const inputs = contactForm.querySelectorAll('input, select, textarea');
            const nome = inputs[0]?.value || '';
            const servico = inputs[1]?.value || '';
            const mensagem = inputs[2]?.value || '';

            const textoFormatado = [
                `Olá, equipe do Laboratório Exame! Meu nome é *${nome}*.`,
                servico ? `Desejo falar sobre: *${servico}*` : '',
                mensagem ? `\nMensagem/Exames:\n${mensagem}` : ''
            ].filter(Boolean).join('%0A');

            // Número fornecido: +5566999776916
            const urlWhatsApp = `https://wa.me/5566999776916?text=${textoFormatado}`;

            const btnSubmit = contactForm.querySelector('button[type="submit"]');
            const btnOriginalText = btnSubmit.innerHTML;

            if (btnSubmit) {
                btnSubmit.textContent = 'Redirecionando...';
                btnSubmit.style.pointerEvents = 'none';
            }

            setTimeout(() => {
                window.open(urlWhatsApp, '_blank');
                contactForm.reset();
                if (btnSubmit) {
                    btnSubmit.innerHTML = btnOriginalText;
                    btnSubmit.style.pointerEvents = 'auto';
                }
            }, 600);
        });
    }
});