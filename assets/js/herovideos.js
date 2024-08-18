document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const videos = document.querySelectorAll('.posicionScroll');
    const videosArray = Array.from(videos);
    console.log(scrollPosition) 
    videosArray.forEach((element, index) => {
        let x = scrollPosition
        let y = scrollPosition
        let z = 0
        let s = scrollPosition

        switch (index) {
            case 0:
                x = scrollPosition * 0.769 
                y = scrollPosition
                break;
            case 1:
                x = scrollPosition *-0.0064
                y = scrollPosition 
                break;
            case 2:
                x = scrollPosition * -0.769 
                y = scrollPosition 
                break;
            case 3:
                x = scrollPosition * 0.769 
                y = scrollPosition * 0.0032
                break;
            case 4:
                x = scrollPosition * -0.0064
                y = scrollPosition * 0.0032
                break;
            case 5:
                x = scrollPosition * -0.769 
                y = scrollPosition *  0.0032
                break;
            case 6:
                x = scrollPosition * 0.769 
                y = scrollPosition * -1
                break;
            case 7:
                x = scrollPosition * -0.0064
                y = scrollPosition * -1
                break;
            case 8:
                x = scrollPosition * -0.769
                y = scrollPosition *-1
                break;
            default:
                x = scrollPosition;
                y = scrollPosition;
                break;
        }

        element.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale (${s})`
    });
});

