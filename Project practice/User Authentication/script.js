document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("This is a mock demo. backend integration is needed");
        });
    });
});