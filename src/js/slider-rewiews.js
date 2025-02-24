document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.reviews_list');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const slides = document.querySelectorAll('.reviews_item');
  let currentIndex = 0;

  const updateSlider = () => {
    const slideWidth = slides[0].offsetWidth + 24;
    const offset = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${offset}px)`;
  };

  prevButton.addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
    updateSlider();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
    updateSlider();
  });

  updateSlider();
});