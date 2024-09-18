const welcomeBlock = document.getElementById("welcome");
const userIdSpan = document.getElementById("user_id");
const signinBlock = document.getElementById("signin");

const savedUserId = localStorage.getItem("user_id");
if (savedUserId) {
    userIdSpan.textContent = savedUserId;
    signinBlock.classList.remove("signin_active");
    welcomeBlock.classList.add("welcome_active");
}

document.getElementById("signin__form").addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                const response = JSON.parse(xhr.responseText);

                if (response.success) {
                    localStorage.setItem("user_id", response.user_id);
                    userIdSpan.textContent = response.user_id;

                    signinBlock.classList.remove("signin_active");
                    welcomeBlock.classList.add("welcome_active");
                } else {
                    alert("Неверный логин/пароль");
                }
            } else {
                console.error("Ошибка при отправке формы:", xhr.statusText);
            }
        }
    };

    xhr.send(formData);
});