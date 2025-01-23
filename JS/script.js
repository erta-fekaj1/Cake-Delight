
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const responseDiv = document.getElementById('formResponse');
  
    if (!name || !email || !message) {
      responseDiv.innerHTML = '<div class="alert alert-danger">Please fill out all fields.</div>';
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      responseDiv.innerHTML = '<div class="alert alert-danger">Please enter a valid email address.</div>';
      return;
    }
  
    responseDiv.innerHTML = '<div class="alert alert-success">Thank you, ' + name + '! Your message has been sent successfully.</div>';
  
    document.getElementById('contactForm').reset();
  });

function toggleValues() {
    const valuesList = document.getElementById("values-list");
    const button = document.getElementById("toggle-values-btn");
  
    if (valuesList.style.display === "none") {
      valuesList.style.display = "block";
      button.textContent = "Show Less"; 
    } else {
      valuesList.style.display = "none";
      button.textContent = "Show More";
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("values-list").style.display = "none";
  });
  