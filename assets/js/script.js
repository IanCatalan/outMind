document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos de video en el documento
    const videos = document.querySelectorAll('video');

    // Función para reproducir todos los videos
    const playAllVideos = () => {
        videos.forEach(video => {
            // Intenta reproducir el video y maneja cualquier error que ocurra
            video.play().catch(error => {
                console.error('Error al reproducir el video:', error);
            });
        });
    };

    let readyVideos = 0;

    // Agrega un event listener a cada video para el evento 'canplaythrough'
    videos.forEach(video => {
        video.addEventListener('canplaythrough', () => {
            readyVideos++;
            
            // Si todos los videos están listos para reproducirse
            if (readyVideos === videos.length) {
                playAllVideos();
            }
        });
    });

    // Manejar el caso donde los videos podrían no disparar 'canplaythrough'
    videos.forEach(video => {
        // Asegurarse de que el video esté preparado para reproducirse
        if (video.readyState >= 3) {
            // Si el video está suficientemente cargado, contar como listo
            readyVideos++;
        }
    });

    // Si hay videos con estado de carga avanzado, pero no se disparó 'canplaythrough'
    if (readyVideos === videos.length) {
        playAllVideos();
    }
});
