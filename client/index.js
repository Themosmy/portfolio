// carrossel.js

let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("carousel-item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
}

function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

// Automatic carousel
setInterval(nextSlide, 3000); // Altera a imagem a cada 3 segundos
