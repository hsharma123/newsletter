document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#newsletter");
    const emailInput = form.querySelector('input[name="email"]');
    const errorElement = form.querySelector('.error');

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue === "" || !emailRegex.test(emailValue)) {
            errorElement.style.display = "block";
        } else {
            errorElement.style.display = "none";
            window.location.href = `${form.getAttribute("action")}?email=${encodeURIComponent(emailValue)}`;
        }
    });
});