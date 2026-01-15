// Carousel slideshow
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-img');

function showNextImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000); // change image every 3 seconds

// Scroll animations
const slideElements = document.querySelectorAll('.slide-in');
window.addEventListener('scroll', () => {
  slideElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50) el.style.animationPlayState = 'running';
  });
});

// Particles.js configuration
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80 },
    "size": { "value": 3 },
    "move": { "speed": 1 },
    "line_linked": { "enable": true }
  }
});
