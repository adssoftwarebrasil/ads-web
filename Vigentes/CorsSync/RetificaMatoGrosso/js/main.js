document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Efeito do Header ao dar scroll (Fica levemente menor e com sombra)
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '8px 0';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = 'none';
        }
    });

    // 2. Scroll Reveal Animation (Suavidade na entrada dos elementos)
    function reveal() {
        const reveals = document.querySelectorAll(".reveal");
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // Quando 100px do elemento aparecerem na tela, ativa.

        reveals.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add("active");
            }
        });
    }

    // Escutar evento de scroll
    window.addEventListener("scroll", reveal);
    
    // Executar uma vez no carregamento inicial da página para exibir os itens do topo
    reveal();

});