// When the form is submitted, run this function
document.getElementById("form").addEventListener("submit", function(e) {
  // Stop the form from refreshing the page
  e.preventDefault();

  // Get the values the user typed in
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  // Get the places where messages will be shown
  const errors = document.getElementById("errors");
  const successMessage = document.getElementById("successMessage");

  // Clear old messages
  errors.textContent = "";
  successMessage.textContent = "";

  // This keeps track of whether there are any problems
  let hasErrors = false;

  // Check if name is empty
  if (name === "") {
    errors.innerHTML += "🔴 Hey! Your name’s missing.<br>";
    hasErrors = true;
  }

  // Check if email is empty
  if (email === "") {
    errors.innerHTML += "🔴 Don’t forget your email!<br>";
    hasErrors = true;
  }
  // Check if email looks valid
  else if (!email.includes("@") || !email.includes(".")) {
    errors.innerHTML += "🔴 Hmm... that doesn’t look like a real email.<br>";
    hasErrors = true;
  }

  // If everything is okay, show a happy message
  if (!hasErrors) {
    successMessage.textContent = "✅ Form submitted successfully. Thank you! 🎉";
  }
});
