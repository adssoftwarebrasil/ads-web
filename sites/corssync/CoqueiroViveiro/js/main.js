document.addEventListener("DOMContentLoaded", () => {
    
    const header = document.getElementById('header');
    
    // Efeito do Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '5px 0';
            header.style.background = 'rgba(39, 76, 55, 0.98)'; // Verde escuro com leve transparência
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.padding = '10px 0';
            header.style.background = 'var(--primary-color)';
        }
    });

    // Scroll Reveal (Revelar elementos ao rolar)
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
    reveal();
});