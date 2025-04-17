// script.js - Interaktionen
document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling für Apple-Nav
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Förderrechner-Logik
    const calculatorForm = document.querySelector('.calculator-form');
    // Hier kommt deine Rechner-Logik...
});
