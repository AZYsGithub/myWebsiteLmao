// Store the valid username and password
const validUsername = "admin";
const validPassword = "password";

// DOM elements
const loginForm = document.getElementById("login-form");
const snippetForm = document.getElementById("snippet-form");
const snippetList = document.getElementById("snippets");
const snippetContainer = document.getElementById("snippet-container");

// Add event listener to the login form
loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  // Check if the entered username and password match the valid ones
  if (username === validUsername && password === validPassword) {
    // Show the snippet container and hide the login form
    loginForm.style.display = "none";
    snippetContainer.style.display = "block";
  } else {
    alert("Invalid username or password. Please try again.");
  }
});

// Add event listener to the snippet form
snippetForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const snippetText = document.getElementById("snippet-text").value;
  
  // Create a new list item for the snippet
  const snippetItem = document.createElement("li");
  snippetItem.classList.add("snippet-item");
  snippetItem.textContent = snippetText;
  
  // Append the snippet to the list
  snippetList.appendChild(snippetItem);
  
  // Clear the snippet input field
  document.getElementById("snippet-text").value = "";
});
