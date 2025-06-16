// navbar.js
document.addEventListener('DOMContentLoaded', function() {
    // Carrega a navbar
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            
            // Adiciona funcionalidade ao toggle do menu mobile
            const toggle = document.querySelector('.navbar-toggle');
            const menu = document.querySelector('.navbar-menu');
            
            toggle.addEventListener('click', function() {
                menu.classList.toggle('active');
                
                // Anima os ícones do toggle
                this.querySelectorAll('span').forEach((span, index) => {
                    if (menu.classList.contains('active')) {
                        if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                        if (index === 1) span.style.opacity = '0';
                        if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                    } else {
                        span.style.transform = '';
                        span.style.opacity = '';
                    }
                });
            });
        });
});