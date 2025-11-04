/* === V0.4 - Lógica do Menu Mobile === */
document.addEventListener('DOMContentLoaded', () => {
    const btnMobile = document.getElementById('btn-mobile');
    const nav = document.getElementById('nav');

    function toggleMenu(event) {
        // Previne múltiplos cliques se for um toque
        if (event.type === 'touchstart') event.preventDefault();

        const isActive = nav.classList.toggle('active');
        
        // Atualiza atributos de acessibilidade
        btnMobile.setAttribute('aria-expanded', isActive);
        if (isActive) {
            btnMobile.setAttribute('aria-label', 'Fechar Menu');
        } else {
            btnMobile.setAttribute('aria-label', 'Abrir Menu');
        }
    }

    if (btnMobile && nav) {
        btnMobile.addEventListener('click', toggleMenu);
        btnMobile.addEventListener('touchstart', toggleMenu); // Adiciona suporte a toque
    }
});