document.addEventListener('DOMContentLoaded', function() {
    // Animaciones de entrada
    const contactoSection = document.querySelector('.contacto-section');
    const mapaSection = document.querySelector('.mapa-section');
    
    contactoSection.style.opacity = '0';
    contactoSection.style.transform = 'translateY(20px)';
    contactoSection.style.transition = 'all 0.6s ease-out';
    
    mapaSection.style.opacity = '0';
    mapaSection.style.transform = 'translateY(20px)';
    mapaSection.style.transition = 'all 0.6s ease-out 0.2s';
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    observer.observe(contactoSection);
    observer.observe(mapaSection);
    
    // Validación del formulario
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validación básica
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        
        if (nombre === '' || email === '' || mensaje === '') {
            alert('Por favor complete todos los campos obligatorios');
            return;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Por favor ingrese un correo electrónico válido');
            return;
        }
        
        // Simulación de envío
        const btnEnviar = document.querySelector('.btn-enviar');
        btnEnviar.textContent = 'Enviando...';
        btnEnviar.disabled = true;
        
        setTimeout(() => {
            btnEnviar.textContent = 'Mensaje Enviado!';
            btnEnviar.style.background = '#4CAF50';
            contactForm.reset();
            
            setTimeout(() => {
                btnEnviar.textContent = 'Enviar Mensaje';
                btnEnviar.style.background = 'linear-gradient(135deg, var(--naranja-suave), var(--naranja-fuerte))';
                btnEnviar.disabled = false;
            }, 3000);
        }, 1500);
    });
});