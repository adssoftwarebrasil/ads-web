document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Efeito do Header (diminui padding ao rolar)
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '8px 0';
        } else {
            header.style.padding = '15px 0';
        }
    });

    // 2. Animação de entrada dos elementos (Scroll Reveal)
    function reveal() {
        const reveals = document.querySelectorAll(".reveal");
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal(); // Inicia logo ao carregar a página
});