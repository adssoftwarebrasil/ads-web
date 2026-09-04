document.addEventListener('DOMContentLoaded', () => {

    // 1. Menu Mobile (Gaveta)
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const header = document.getElementById('header');
    // 5. Lógica do FAQ (Accordion)
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Fecha todos os outros abertos
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
            });
            
            // Se o clicado não estava ativo, abre ele
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            if(window.scrollY < 20) header.classList.toggle('scrolled');
        });

        // Não precisa fechar menu no clique se for redirecionar de página,
        // mas é útil para âncoras na mesma página (caso existam).
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // 2. Efeito do Header no Scroll
    window.addEventListener('scroll', () => {
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 20);
        }
    }, { passive: true });

    // Forçar scrolled no load se a página não estiver no topo
    if(window.scrollY > 20 && header) {
        header.classList.add('scrolled');
    }

    // 3. Animação de Entrada (Scroll Reveal)
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); // Revela apenas uma vez
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // 4. Lógica do Formulário da Página de Contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const inputs = contactForm.querySelectorAll('input, textarea');
            const nome = inputs[0]?.value || '';
            const veiculo = inputs[1]?.value || '';
            const mensagem = inputs[2]?.value || '';

            const textoFormatado = [
                `Olá, equipe Serigy! Meu nome é *${nome}*.`,
                veiculo ? `Meu veículo é: *${veiculo}*` : '',
                mensagem ? `Mensagem/Dúvida: ${mensagem}` : ''
            ].filter(Boolean).join('%0A');

            // Número configurado no briefing: +5579998506060
            const urlWhatsApp = `https://wa.me/5579998506060?text=${textoFormatado}`;

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
    
    // 6. Destacar o link activo no menu automaticamente
    const navLinks = document.querySelectorAll('.nav-menu a');
    const currentPath = window.location.pathname;
    
    // Extrai apenas o nome do ficheiro (ex: sobre.html). Se estiver na raiz, assume index.html
    const currentPage = currentPath.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        // Remove a classe 'active' que possa ter vindo copiada no HTML
        link.classList.remove('active');
        
        // Verifica se o href do link corresponde à página atual no navegador
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});