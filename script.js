let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector(".slides");
  const dots = document.querySelectorAll(".dot");

  currentSlide = index - 1;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

showSlide(1);

function changeImage(imageSrc) {
  document.getElementById("main-image").src = imageSrc;
}
