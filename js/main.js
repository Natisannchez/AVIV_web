document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
    // Animación de números en estadísticas
function animateNumbers() {
    const counters = document.querySelectorAll('.numero');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateNumbers, 1);
        } else {
            counter.innerText = target + (counter.getAttribute('data-count').includes('%') ? '%' : '');
        }
    });
}
function toggleDescription(button) {
    const item = button.closest('.item-servicio');
    const descCompleta = item.querySelector('.descripcion-completa');
    
    if (descCompleta.style.display === 'none') {
        descCompleta.style.display = 'block';
        button.textContent = 'Menos info';
    } else {
        descCompleta.style.display = 'none';
        button.textContent = 'Más info';
    }
}
// Activar cuando la sección sea visible
window.addEventListener('scroll', () => {
    const presentacion = document.querySelector('.presentacion');
    const position = presentacion.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (position < screenPosition) {
        animateNumbers();
    }
});
// JavaScript para pausar animación al hacer hover (opcional)
document.addEventListener('DOMContentLoaded', () => {
    const carruselTrack = document.querySelector('.carrusel-track');
    
    carruselTrack.addEventListener('mouseenter', () => {
        carruselTrack.style.animationPlayState = 'paused';
    });
    
    carruselTrack.addEventListener('mouseleave', () => {
        carruselTrack.style.animationPlayState = 'running';
    });
});
// JavaScript para el menú hamburguesa
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
});
});