function checkStrength(event) {
  event.preventDefault(); 

  const password = document.getElementById("password").value;
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  let strength = "";
  let color = "";

  if (score <= 2) {
    strength = "Weak";
    color = "red";
    
  } else if (score <= 4) {
    strength = "Medium";
    color = "orange";
  } else {
    strength = "Strong";
    color = "green";
  }

  const result = document.getElementById("result");
  result.textContent = "Password Strength: " + strength;
  result.style.color = color;
}
