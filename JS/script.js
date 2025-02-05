document.addEventListener("DOMContentLoaded", function () {
  const subscribeForm = document.getElementById("subscribeForm");
  const emailInput = document.getElementById("email");
  const formResponse = document.getElementById("formResponse");

  subscribeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const email = emailInput.value.trim();
    if (validateEmail(email)) {
      formResponse.innerHTML = `<p class="text-success">Thank you for subscribing! Check your inbox for updates.</p>`;
      emailInput.value = "";
    } else {
      formResponse.innerHTML = `<p class="text-danger">Please enter a valid email address.</p>`;
    }
  });

  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const formResponse = document.getElementById("formResponse");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      formResponse.innerHTML = `<p class="text-danger">All fields are required.</p>`;
      return;
    }

    if (!validateEmail(email)) {
      formResponse.innerHTML = `<p class="text-danger">Please enter a valid email address.</p>`;
      return;
    }

    formResponse.innerHTML = `<p class="text-success">Thank you, ${name}! Your message has been sent.</p>`;
    contactForm.reset();
  });

  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});

