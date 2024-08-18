document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('video')

    const playAllVideos = () => {
        videos.forEach(video => {
            video.play().catch(error => {
                console.error('Error al reproducir el video:', error)
            })
        })
    }

    // Esperar a que todos los videos estén cargados
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