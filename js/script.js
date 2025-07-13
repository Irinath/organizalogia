let current = 0;
const images = document.querySelectorAll('.carrousel-image');
const total = images.length;

function showNextImage() {
    images[current].classList.remove('active');
    current = (current + 1) % total;
    images[current].classList.add('active');
}

// Cambia cada 5 segundos (5000 ms)
setInterval(showNextImage, 5000);
