// outcomepage.js
// outcomepage.js
document.addEventListener('DOMContentLoaded', function() {
  // Retrieve selected symptoms from localStorage
  var selectedSymptoms = JSON.parse(localStorage.getItem('selectedSymptoms')) || [];

  // Determine the disease outcome based on selected symptoms
  var diseaseOutcome = determineDiseaseOutcome(selectedSymptoms);

  // Store the disease outcome in local storage
  localStorage.setItem('diseaseOutcome', diseaseOutcome);

  // Display the disease outcome on the page
  document.getElementById('diseaseOutcome').textContent = diseaseOutcome;
});

function determineDiseaseOutcome(selectedSymptoms) {
  // Replace this with your actual logic for determining diseases based on symptoms
  // This is just a simplified example

  // Placeholder logic - You can replace this with more accurate diagnosis
  if (selectedSymptoms.includes('headache') && selectedSymptoms.includes('fever')) {
      return 'Migraine';
  } else if (selectedSymptoms.includes('cough') && selectedSymptoms.includes('shortnessOfBreath')) {
      return 'Respiratory Infection';
  }

  // Add more conditions based on your actual logic

  // If none of the specific combinations match, return 'Unknown Disease'
  return 'influenza';
}

  function showDiagnostics() {
    // Assuming you have a diagnostics page named 'diagnosticspage.html'
    window.location.href = 'diagnosticspage.html';  
  }