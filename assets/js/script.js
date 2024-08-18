document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('video')

    const playAllVideos = () => {
        videos.forEach(video => {
            video.play().catch(error => {
                console.error('Error al reproducir el video:', error)
            })
        })
    }

    // Espera a que todos los videos estén cargados
    let loadedVideos = 0;
    videos.forEach(video => {
        video.addEventListener('loadeddata', () => {
            loadedVideos++
            if (loadedVideos === videos.length) {
                playAllVideos()
            }
        });
    });
});

document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; // Obtiene la posición del scroll vertical
    const elements = document.querySelectorAll('.posicionScroll');
    
    elements.forEach(element => {
        // Puedes ajustar el factor según tus necesidades
        const translateValue = scrollPosition * 0.5;
        const scaleValue = scrollPosition * 0.1;
        
        // Aplica los estilos CSS calculados a cada elemento
        element.style.transform = `
        translateY(${translateValue}px)
        scale(${scaleValue})
    `;
});
});