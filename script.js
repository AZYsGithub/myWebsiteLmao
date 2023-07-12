// Store the snippets in an array
let snippets = [];

// Check if the user is logged in
function checkLoggedIn() {
  const loggedIn = localStorage.getItem('loggedIn');
  if (loggedIn === 'true') {
    document.getElementById('login').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    displaySnippets();
  }
}

// Login function
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the username and password are correct (dummy values for demonstration)
  if (password === 'coems123') {
    localStorage.setItem('loggedIn', 'true');
    checkLoggedIn();
  } else {
    alert('Invalid username or password.');
  }
}

// Add a snippet to the array and display all snippets
function addSnippet() {
  const snippet = document.getElementById('snippet').value;
  snippets.push(snippet);
  displaySnippets();
}

// Display all snippets
function displaySnippets() {
  const snippetsDiv = document.getElementById('snippets');
  snippetsDiv.innerHTML = '';

  snippets.forEach((snippet, index) => {
    const snippetDiv = document.createElement('div');
    snippetDiv.textContent = `Snippet ${index + 1}: ${snippet}`;
    snippetsDiv.appendChild(snippetDiv);
  });
}

// Check login status on page load
checkLoggedIn();
