const form = document.getElementById('form');
const fileInput = document.getElementById('file');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const file = fileInput.files[0];
    if (!file) {
        alert('Пожалуйста, выберите файл!');
        return;
    }

    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append('file', file);

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    xhr.upload.onprogress = function (event) {
        if (event.lengthComputable) {
            const percentComplete = event.loaded / event.total;
            progress.value = percentComplete;
        }
    };

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            alert('Файл успешно загружен!');
            progress.value = 0;
        } else {
            alert('Ошибка загрузки файла!');
        }
    };

    xhr.onerror = function () {
        alert('Произошла ошибка при загрузке файла.');
    };

    xhr.send(formData);
});