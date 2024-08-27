const rotatorCases = [...document.querySelectorAll('.rotator__case')];
let currentIndex = 0;


// setInterval(() => {
//     rotatorCases[currentIndex].classList.remove('rotator__case_active');
//     currentIndex++;
//     if (currentIndex>=rotatorCases.length) {
//         rotatorCases[currentIndex-1].remove('rotator__case_active');
//         currentIndex = 0;
//     };
//     rotatorCases[currentIndex].classList.add('rotator__case_active');
// }, 1000);

setInterval(() => {
    rotatorCases[currentIndex].classList.remove('rotator__case_active');
    currentIndex = (currentIndex + 1) % rotatorCases.length;
    rotatorCases[currentIndex].style.color = rotatorCases[currentIndex].getAttribute('data-color');
    rotatorCases[currentIndex].classList.add('rotator__case_active');
}, rotatorCases[currentIndex].getAttribute('data-speed')); //не работает как ожидал, интервал одинаковый.


// Правильная реализация с разными интервалами из data-speed

// const rotatorCases = [...document.querySelectorAll('.rotator__case')];
// let currentIndex = 0;

// function rotate() {
//   // Удаляем активный класс у текущего элемента
//   rotatorCases[currentIndex].classList.remove('rotator__case_active');
  
//   // Переходим к следующему элементу
//   currentIndex = (currentIndex + 1) % rotatorCases.length;
  
//   // Устанавливаем цвет текста и добавляем активный класс следующему элементу
//   const nextCase = rotatorCases[currentIndex];
//   nextCase.style.color = nextCase.getAttribute('data-color');
//   nextCase.classList.add('rotator__case_active');
  
//   // Устанавливаем следующий интервал на основе data-speed
//   setTimeout(rotate, nextCase.getAttribute('data-speed'));
// }

// // Запуск первой итерации
// rotate();