console.log("¡Hola, mundo! JavaScript funcionando.");

const titulo = document.querySelector('.titulo-principal');
titulo.addEventListener('click', () => {
    titulo.style.color = '#d11241'; // Cambia el color a rojo
});

// 1. Selecciona el botón
const scrollToTopBtn = document.getElementById('scroll-to-top');

// 2. Muestra/oculta el botón al hacer scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 260) { // Si el usuario ha bajado más de 300px
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// 3. Al hacer clic, vuelve al inicio de la página
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
});