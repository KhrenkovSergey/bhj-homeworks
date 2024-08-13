const timer = document.getElementById('timer');
let timeRemaining = parseInt(timer.textContent, 10);

function formatTime (secs) {
    const hours = Math.floor(secs / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((secs % 3600) / 60).toString().padStart(2, '0');
    const seconds = Math.floor(secs % 60).toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

const countdown = setInterval(()=>{
    timeRemaining--;
    timer.textContent = formatTime(timeRemaining);

    if (timeRemaining <= 0) {
        clearInterval(countdown);
        alert('Вы победили в конкурсе');
    }
}, 1000);