// Selecciona los botones por su ID
let verDispositivosButton = document.getElementById('verDispositivos');
 agregarDonacionButton = document.getElementById('agregarDonacion');

// Agrega un event listener para redirigir a la página correspondiente
verDispositivosButton.addEventListener('click', function() {
    window.location.href = 'ver-dispositivos.html'; // Cambia esta URL por la página a la que quieres redirigir
});

agregarDonacionButton.addEventListener('click', function() {
    window.location.href = 'agregar-donacion.html'; // Cambia esta URL por la página a la que quieres redirigir
});
