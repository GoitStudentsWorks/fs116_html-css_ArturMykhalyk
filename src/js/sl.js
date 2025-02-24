// document.addEventListener('DOMContentLoaded', function () {
//   const list = document.querySelector('.reviews_list');
//   const prevBtn = document.getElementById('prevSlide');
//   const nextBtn = document.getElementById('nextSlide');
//   const slideWidth = document.querySelector('.reviews_item').offsetWidth + 20;

//   nextBtn.addEventListener('click', function () {
//     list.scrollBy({ left: slideWidth, behavior: 'smooth' });
//   });

//   prevBtn.addEventListener('click', function () {
//     list.scrollBy({ left: -slideWidth, behavior: 'smooth' });
//   });
// });









// document.addEventListener('DOMContentLoaded', () => {
//   const slider = document.querySelector('.reviews_list');
//   const prevButton = document.querySelector('.prev-button');



//   const nextButton = document.querySelector('.next-button');
//   const indicators = document.querySelectorAll('.indicator');
//   const slides = document.querySelectorAll('.reviews_item');
//   let currentIndex = 0;

//   const updateSlider = () => {
//     const slideWidth = slides[0].offsetWidth + 20; // Ширина слайда + отступ
//     const offset = -currentIndex * slideWidth;
//     slider.style.transform = `translateX(${offset}px)`; // Используем px вместо %
//   };

//   prevButton.addEventListener('click', () => {
//     currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
//     updateSlider();
//   });

//   nextButton.addEventListener('click', () => {
//     currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
//     updateSlider();
//   });

//   indicators.forEach((indicator, index) => {
//     indicator.addEventListener('click', () => {
//       currentIndex = index;
//       updateSlider();
//     });
//   });

//   updateSlider();
// });




//







// document.addEventListener('DOMContentLoaded', () => {
//   const slider = document.querySelector('.reviews_list');
//   const prevButton = document.querySelector('.prev-button');
//   const nextButton = document.querySelector('.next-button');
//   const indicators = document.querySelectorAll('.indicator');
//   const slides = document.querySelectorAll('.reviews_item');
//   let currentIndex = 0;

//   const updateSlider = () => {
//     const slideWidth = slides[0].offsetWidth + 20; // Ширина слайда + отступ
//     const offset = -currentIndex * slideWidth;
//     slider.style.transform = `translateX(${offset}px)`; // Используем px вместо %
//   };

//   prevButton.addEventListener('click', () => {
//     currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
//     updateSlider();
//   });

//   nextButton.addEventListener('click', () => {
//     currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
//     updateSlider();
//   });

//   indicators.forEach((indicator, index) => {
//     indicator.addEventListener('click', () => {
//       currentIndex = index;
//       updateSlider();
//     });
//   });

//   updateSlider();
// });












document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.reviews_list');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const slides = document.querySelectorAll('.reviews_item');
  let currentIndex = 0;

  // Функция для обновления слайдера
  const updateSlider = () => {
    const slideWidth = slides[0].offsetWidth + 24; // Ширина слайда + отступ
    const offset = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${offset}px)`;
  };

  // Кнопка "Назад"
  prevButton.addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
    updateSlider();
  });

  // Кнопка "Вперёд"
  nextButton.addEventListener('click', () => {
    currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
    updateSlider();
  });

  // Инициализация слайдера
  updateSlider();
});












// document.addEventListener('DOMContentLoaded', () => {
//   const slider = document.querySelector('.reviews_list');
//   const prevButton = document.querySelector('.prev-button');
//   const nextButton = document.querySelector('.next-button');
//   const indicatorsContainer = document.querySelector('.slider-indicators');
//   const slides = document.querySelectorAll('.reviews_item');
//   let currentIndex = 0;

//   // Создаем индикаторы
//   slides.forEach((_, index) => {
//     const indicator = document.createElement('div');
//     indicator.classList.add('indicator');
//     if (index === 0) indicator.classList.add('active');
//     indicator.addEventListener('click', () => {
//       currentIndex = index;
//       updateSlider();
//     });
//     indicatorsContainer.appendChild(indicator);
//   });

//   const indicators = document.querySelectorAll('.indicator');

//   // Функция для обновления слайдера
//   const updateSlider = () => {
//     const slideWidth = slides[0].offsetWidth + 24; // Ширина слайда + отступ
//     const offset = -currentIndex * slideWidth;
//     slider.style.transform = `translateX(${offset}px)`;

//     // Обновление индикаторов
//     indicators.forEach((indicator, index) => {
//       indicator.classList.toggle('active', index === currentIndex);
//     });
//   };

//   // Кнопка "Назад"
//   prevButton.addEventListener('click', () => {
//     currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
//     updateSlider();
//   });

//   // Кнопка "Вперёд"
//   nextButton.addEventListener('click', () => {
//     currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
//     updateSlider();
//   });

//   // Инициализация слайдера
//   updateSlider();
// });