document.addEventListener('DOMContentLoaded', function() {
    // Animación para los elementos de servicios
    const servicioSections = document.querySelectorAll('.servicio-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    servicioSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
    
    // Animación para las tarjetas de características
    const caracteristicasItems = document.querySelectorAll('.caracteristica-item');
    
    caracteristicasItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.4s ease-out ${index * 0.1}s`;
    });
    
    const caracteristicasObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                caracteristicasItems.forEach(item => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                });
            }
        });
    }, { threshold: 0.1 });
    
    caracteristicasObserver.observe(document.querySelector('.servicio-caracteristicas'));
    
    // Animación para la sección CTA
    const ctaSection = document.querySelector('.cta-section');
    ctaSection.style.opacity = '0';
    ctaSection.style.transform = 'translateY(20px)';
    ctaSection.style.transition = 'all 0.6s ease-out';
    
    const ctaObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    ctaObserver.observe(ctaSection);
});