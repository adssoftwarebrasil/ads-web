document.addEventListener('DOMContentLoaded', () => {

    // 1. Controle do Menu Mobile
    const navToggle = document.getElementById('navToggle');
    const navMain = document.querySelector('.nav-main');

    if (navToggle && navMain) {
        navToggle.addEventListener('click', () => {
            navMain.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMain.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // 2. Efeito Sombra no Header ao rolar a página
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });

    // 3. Smooth Scroll Nativo para Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 80; // Compensação da altura do menu fixo
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // 4. Efeito de Revelação (Scroll Reveal)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); // Impede que a animação repita
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // Revela imediatamente itens que já nascem visíveis na tela
    revealElements.forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('active');
        }
    });

});