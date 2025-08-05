// When the form is submitted, run this function
document.getElementById("form").addEventListener("submit", function(e) {
  // Stop the form from refreshing the page
  e.preventDefault();

  // Get the values the user typed in
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();

  // Get the message areas
  const errors = document.getElementById("errors");
  const successMessage = document.getElementById("successMessage");

  // Clear old messages
  errors.innerHTML = "";
  successMessage.textContent = "";

  // Keep track of problems
  let hasErrors = false;

  // ✅ Check 1: Name must be at least 3 letters
  if (name.length < 3) {
    errors.innerHTML += "🔴 Name must have at least 3 letters.<br>";
    hasErrors = true;
  }

  // ✅ Check 2: Email must include @ and . and end in .com or .es
  if (
    !email.includes("@") || 
    !email.includes(".") || 
    (!email.endsWith(".com") && !email.endsWith(".es"))
  ) {
    errors.innerHTML += "🔴 Email must be valid (.com or .es).<br>";
    hasErrors = true;
  }

  // ✅ Check 3: Age must be a number and at least 18
  const ageNumber = parseInt(age); // Turn age into a number
  if (isNaN(ageNumber) || ageNumber < 18) {
    errors.innerHTML += "🔴 Age must be 18 or older.<br>";
    hasErrors = true;
  }

  // ✅ If no errors, show success message
  if (!hasErrors) {
    successMessage.textContent = "✅ All good! Form submitted successfully.";
  }
});
