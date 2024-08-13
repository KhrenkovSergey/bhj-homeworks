const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let count = 0;

let lastClick = Date.now();
const clickSpeedText = document.createElement('div');
clickSpeedText.className = 'clicker__status';
clickSpeedText.innerText = 'Скорость клика: 0 кликов в секунду';
counter.parentElement.appendChild(clickSpeedText);

cookie.onclick = function () {
    count++;
    counter.textContent = count;

    if (cookie.width === 200) {
        cookie.style.width = "250px";
        cookie.style.height = "250px";
    } else {
        cookie.style.width = "200px";
        cookie.style.height = "200px";
    }

    let currentClick = Date.now();
    let clickInterval = (currentClick - lastClick) / 1000;
    let clickSpeed = 1 / clickInterval;
    clickSpeedText.innerText = `Скорость клика: ${clickSpeed} кликов в секунду`;
    lastClick = currentClick;
    
}