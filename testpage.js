var userInformationArray = [];

function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;

    var userInfo = {
        name: name,
        email: email,
        mobile: mobile,
        age: age,
        gender: gender
    };

    userInformationArray.push(userInfo);

    // Optional: Additional actions with the user information

    console.log('User Information:', userInformationArray);
}

function goToNextPage() {
    window.location.href = 'testpage2.html';
}
function redirectToTestPage() {
  window.location.href = 'testpage.html'; // Replace 'test-page.html' with the actual URL of your test page
}
// testpage2.js
// testpage2.js
function redirectToOutcomePage() {
  // Retrieve selected symptoms
  var selectedSymptoms = getSelectedSymptoms();

  // Store selected symptoms in local storage
  localStorage.setItem('selectedSymptoms', JSON.stringify(selectedSymptoms));

  // Redirect to the outcome page
  window.location.href = 'outcomepage.html';
}

function getSelectedSymptoms() {
  var checkboxes = document.querySelectorAll('input[name="symptoms"]:checked');
  var selectedSymptoms = Array.from(checkboxes).map(checkbox => checkbox.value);
  return selectedSymptoms;
}

function redirectToOutcomePage() {
  // Assuming you have an outcome page named 'outcomepage.html'
  window.location.href = 'outcomepage.html';
}

// Function to show diagnostics page
function showDiagnostics() {
  // Assuming you have a diagnostics page named 'diagnosticspage.html'
  window.location.href = 'diagnosticspage.html'; 
}