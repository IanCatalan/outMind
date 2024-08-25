function suavizado(scrollPosition) {
    return {
        x: scrollPosition * 0.1, 
        y: scrollPosition * 0.1,
        scale: 1 + (scrollPosition * 0.0001)
    };
}
let estado = false
function onScroll() {
    if (!estado) {
        window.requestAnimationFrame(() => {
            const scrollPosition = window.scrollY
            const videos = document.querySelectorAll('.posicionScroll')

            videos.forEach((element, index) => {
                let { x, y, scale } = suavizado(scrollPosition)
                switch (index) {
                    case 0:
                        x = scrollPosition * -0.0080
                        y = scrollPosition * 0.08
                        break;
                    case 1:
                        x = scrollPosition * 0
                        y = scrollPosition * 0.08
                        break;
                    case 2:
                        x = scrollPosition * -0.010
                        y = scrollPosition * 0.08
                        break;
                    case 3:
                        x = scrollPosition * 0.0010
                        y = scrollPosition * -0.08
                        break;
                    case 4:
                        x = scrollPosition * 0
                        y = scrollPosition * -0.08
                        break;
                    case 5:
                        x = scrollPosition * -0.0010
                        y = scrollPosition * -0.08
                        break;
                    case 6:
                        x = scrollPosition * 0.0010
                        y = scrollPosition * -0.2
                        break;
                    case 7:
                        x = scrollPosition * 0
                        y = scrollPosition * -0.2
                        break;
                    case 8:
                        x = scrollPosition * -0.0010
                        y = scrollPosition * -0.2
                        break;
                    default:
                        x = scrollPosition
                        y = scrollPosition
                        break;
                }
                element.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
            });

            ticking = false
        });

        ticking = true
    }
}
document.addEventListener('scroll', onScroll);
