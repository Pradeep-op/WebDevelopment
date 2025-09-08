// Validate form submission
function validateForm() {
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const formMessage = document.getElementById("form-message");

  formMessage.style.color = "red";

  if (password.length < 6) {
    formMessage.textContent = "Password must be at least 6 characters.";
    return false;
  }

  if (password !== confirmPassword) {
    formMessage.textContent = "Passwords do not match.";
    return false;
  }

  formMessage.style.color = "green";
  formMessage.textContent = "Registration successful!";
  return true;
}

// Generate a random pastel background color
function getRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 90%)`;
}

// Change background every 5 seconds
setInterval(() => {
  document.body.style.backgroundColor = getRandomColor();
}, 5000);

// Set initial background color
document.body.style.backgroundColor = getRandomColor();
