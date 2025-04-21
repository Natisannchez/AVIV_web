// Animación de números en logros
document.addEventListener('DOMContentLoaded', function() {
    // Animación de contadores
    const contadores = document.querySelectorAll('.logro-numero');
    const velocidad = 200;
    
    function animarContadores() {
        contadores.forEach(contador => {
            const objetivo = +contador.getAttribute('data-count');
            const conteo = +contador.innerText;
            const incremento = objetivo / velocidad;
            
            if (conteo < objetivo) {
                contador.innerText = Math.ceil(conteo + incremento);
                setTimeout(animarContadores, 1);
            } else {
                contador.innerText = objetivo + (contador.getAttribute('data-count').includes('/') ? '' : '+');
            }
        });
    }
    
    // Activar animación cuando la sección es visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animarContadores();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const historiaSection = document.querySelector('.historia-section');
    if (historiaSection) {
        observer.observe(historiaSection);
    }
});