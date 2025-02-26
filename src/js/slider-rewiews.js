document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.reviews_list');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const slides = document.querySelectorAll('.reviews_item');
  let currentIndex = 0;

  const getVisibleSlides = () => {
    if (window.innerWidth >= 1280) {
      return 3;
    } else if (window.innerWidth >= 768) {
      return 2;
    } else {
      return 1;
    }
  };

  const updateSlider = () => {
    const slideWidth = slides[0].offsetWidth + 24;
    const visibleSlides = getVisibleSlides();
    const maxIndex = slides.length - visibleSlides;

    const offset = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${offset}px)`;
    nextButton.style.display = currentIndex >= maxIndex ? 'none' : 'flex';
    prevButton.style.display = currentIndex === 0 ? 'none' : 'flex';
  };

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      updateSlider();
    }
  });

  nextButton.addEventListener('click', () => {
    const maxIndex = slides.length - getVisibleSlides();
    if (currentIndex < maxIndex) {
      currentIndex += 1;
      updateSlider();
    }
  });

  window.addEventListener('resize', updateSlider);

  updateSlider();
});