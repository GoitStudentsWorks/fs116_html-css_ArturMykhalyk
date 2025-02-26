// Находим элементы
const promoText = document.querySelector('.promo-text');
const discountText = document.querySelector('.discount-text');

// Создаём наблюдатель
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Добавляем класс visible при появлении элемента в области видимости
    entry.target.classList.add('visible');
    }
});
});

// Наблюдаем за promo-text и discount-text
observer.observe(promoText);
observer.observe(discountText);
