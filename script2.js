// Find the button on the page using its ID
document.getElementById("greetButton").addEventListener("click", () => {
  
  // When the button is clicked, change the text of the paragraph
  document.getElementById("responseText").textContent = "Nice to meet you! 😊";
});
