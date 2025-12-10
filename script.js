// Открытие/закрытие меню на мобильных
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Закрывать меню при клике по пункту
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

// Фильтр проектов
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.dataset.filter;

        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        projectCards.forEach(card => {
            const cardCategory = card.dataset.category;

            if (category === "all" || category === cardCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// Год в подвале
document.getElementById("year").textContent = new Date().getFullYear();

// Имитация отправки формы (без сервера)
function handleForm(event) {
    event.preventDefault();

    const status = document.getElementById("form-status");
    const name = document.getElementById("name").value.trim();

    status.textContent = `Спасибо, ${name || "друг"}! Сообщение пока не отправляется на сервер, 
но эта форма готова к подключению.`;
}
