const loader = document.getElementById('loader');
const items = document.getElementById('items');

function addCurrency(code, value) {
    const item = document.createElement('div');
    item.classList.add('item');

    const itemCode = document.createElement('div');
    itemCode.classList.add('item__code');
    itemCode.textContent = code;

    const itemValue = document.createElement('div');
    itemValue.classList.add('item__value');
    itemValue.textContent = value;

    const itemCurrency = document.createElement('div');
    itemCurrency.classList.add('item__currency');
    itemCurrency.textContent = 'руб.';

    item.appendChild(itemCode);
    item.appendChild(itemValue);
    item.appendChild(itemCurrency);
    items.appendChild(item);
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        const response = JSON.parse(xhr.responseText);
        const currencies = response.response.Valute;

        for (let currency in currencies) {
            const code = currencies[currency].CharCode;
            const value = currencies[currency].Value;
            addCurrency(code, value);
        }

        loader.classList.remove('loader_active');
    } else {
        console.error('Ошибка загрузки данных. Статус:', xhr.status);
    }
};

xhr.onerror = function () {
    console.error('Ошибка сети');
    loader.classList.remove('loader_active');
};

xhr.send();