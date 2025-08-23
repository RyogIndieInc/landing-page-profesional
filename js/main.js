console.log("¡Hola, mundo! JavaScript funcionando.");

const titulo = document.querySelector('.titulo-principal');
titulo.addEventListener('click', () => {
    titulo.style.color = '#d11241'; // Cambia el color a rojo
});