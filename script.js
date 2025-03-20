// Carrusel
let slideIndex = 0;

// Función para mover el carrusel en una dirección específica (siguiente o anterior)
function moveSlide(direction) {
    const slides = document.querySelectorAll(".carousel-slide img");
    const totalSlides = slides.length;
    const slideContainer = document.querySelector(".carousel-slide");

    // Actualizar el índice de la imagen actual
    slideIndex = (slideIndex + direction + totalSlides) % totalSlides;

    // Mover el carrusel utilizando transform
    slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Actualizar los indicadores
    updateDots();
}

// Función para ir directamente a un slide específico
function setSlide(index) {
    const slideContainer = document.querySelector(".carousel-slide");

    // Actualizar el índice
    slideIndex = index;

    // Aplicar la transformación para mover el carrusel
    slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Actualizar los indicadores
    updateDots();
}

// Función para actualizar los puntos indicadores del carrusel
function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === slideIndex);
    });
}

// Configuración automática para avanzar el carrusel cada 5 segundos
setInterval(() => moveSlide(1), 5000);
