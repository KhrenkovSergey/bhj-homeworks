const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

function renderPoll(data) {
    pollTitle.textContent = data.title;

    pollAnswers.innerHTML = '';

    data.answers.forEach(answer => {
        const button = document.createElement('button');
        button.classList.add('poll__answer');
        button.textContent = answer;

        button.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
        });

        pollAnswers.appendChild(button);
    });
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        const response = JSON.parse(xhr.responseText);
        const pollData = response.data;
        renderPoll(pollData);
    } else {
        console.error('Ошибка загрузки данных опроса. Статус:', xhr.status);
    }
};

xhr.onerror = function () {
    console.error('Ошибка сети');
};

xhr.send();