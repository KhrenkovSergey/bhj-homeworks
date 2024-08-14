// function getHole(index) {
//     return document.getElementById(`hole${index}`);
// }

const holes = Array.from(document.getElementsByClassName('hole'));
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

holes.forEach( hole => {
    hole.onclick = function () {
        if (hole.classList.contains('hole_has-mole')) {
            dead.textContent = parseInt(dead.textContent) + 1;
        } else {
            lost.textContent = parseInt(lost.textContent) + 1;
        }

        if (dead.textContent === '10') {
            alert('Вы победили!');
            resetGame();
        }

        if (lost.textContent === '5') {
            alert('Вы проиграли!');
            resetGame();
        }
    }
})

function resetGame () {
    dead.textContent = 0;
    lost.textContent = 0;
}