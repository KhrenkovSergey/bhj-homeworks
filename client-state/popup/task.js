function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookiesArray = decodedCookie.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
        const cookie = cookiesArray[i].trim();
        if (cookie.indexOf(name + "=") === 0) {
            return cookie.substring(name.length + 1, cookie.length);
        }
    }
    return "";
}

function checkModalDisplay() {
    const modal = document.getElementById('subscribe-modal');
    const isModalClosed = getCookie("modalClosed");

    if (!isModalClosed) {
        modal.classList.add('modal_active');
    }

    document.querySelector('.modal__close').addEventListener('click', function () {
        modal.classList.remove('modal_active');
        setCookie("modalClosed", "true", 365);
    });
}

checkModalDisplay();