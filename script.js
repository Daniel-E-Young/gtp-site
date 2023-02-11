const form = document.querySelector("form");
form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    let errorMessage = "";

    if (!name) {
        errorMessage += "Name is required. ";
      }

    if (!email) {
        errorMessage += "Email is required. ";
      } else if (!isValidEmail(email)) {
        errorMessage += "Email is invalid. ";
      }
    
    if (!message) {
        errorMessage += "Message is required. ";
      }

      if (errorMessage) {
        alert(errorMessage);
      } else {
        alert("Form submitted successfully!");
      }
    }
    
    function isValidEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }