let current = 0;
const images = document.querySelectorAll('.carousel-image');
const total = images.length;

function showNextImage() {
    images[current].classList.remove('active');
    current = (current + 1) % total;
    images[current].classList.add('active');
}

// Cambia cada 3 segundos (3000 ms)
setInterval(showNextImage, 3000);
