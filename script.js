const form = document.querySelector("form");
form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    let errorMessage = "";