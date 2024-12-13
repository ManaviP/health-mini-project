// JavaScript (script.js)
document.addEventListener('DOMContentLoaded', function () {
    var loginContainer = document.getElementById('login-container');
    var signupContainer = document.getElementById('signup-container');
  
    // Add the 'loaded' class to the containers after the page has loaded
    loginContainer.classList.add('loaded');
    signupContainer.classList.add('loaded');
  });
  document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
  });
  var userDatabase = JSON.parse(localStorage.getItem('userDatabase')) || [];
  
  function showSignup() {
    var loginContainer = document.getElementById('login-container');
    var signupContainer = document.getElementById('signup-container');
  
    loginContainer.classList.remove('active');
    signupContainer.classList.add('active');
    setTimeout(function () {
      loginContainer.style.display = 'none';
      signupContainer.style.display = 'block';
    }, 500);
  }
  
  function showLogin() {
    var loginContainer = document.getElementById('login-container');
    var signupContainer = document.getElementById('signup-container');
  
    signupContainer.classList.remove('active');
    loginContainer.classList.add('active');
    setTimeout(function () {
      signupContainer.style.display = 'none';
      loginContainer.style.display = 'block';
    }, 1000);
  }
  
  function saveUserDatabase() {
    localStorage.setItem('userDatabase', JSON.stringify(userDatabase));
  }
  
  function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    var user = userDatabase.find(function (u) {
      return u.username === username && u.password === password;
    });
  
    if (user) {
      // Redirect to the main page after successful login
      window.location.href = 'mainpage.html'; // Replace 'main-page.html' with the actual URL of your main page
    } else {
      document.getElementById('login-error').innerText = 'Invalid username or password';
    }
  }
  
  function signup() {
    var newUsername = document.getElementById('new-username').value;
    var newPassword = document.getElementById('new-password').value;
  
    var existingUser = userDatabase.find(function (u) {
      return u.username === newUsername;
    });
  
    if (existingUser) {
      document.getElementById('signup-error').innerText = 'Username already exists';
    } else {
      userDatabase.push({
        username: newUsername,
        password: newPassword
      });
  
      saveUserDatabase(); // Save userDatabase to localStorage
  
      // Show the login page after successful signup
      showLogin();
    }
  }
  function redirectToTestPage() {
    window.location.href = 'testpage.html'; // Replace 'test-page.html' with the actual URL of your test page
  }
  