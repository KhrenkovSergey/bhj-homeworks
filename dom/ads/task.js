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
