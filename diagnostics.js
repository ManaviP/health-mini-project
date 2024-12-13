// diagnostics.js

document.addEventListener('DOMContentLoaded', function() {
    displayDiagnostics();
  });
  
  function displayDiagnostics() {
    var diagnosticsContent = document.getElementById('diagnosticsContent');
    var selectedDisease = localStorage.getItem('selectedDisease');
  
    // Assuming you have diagnostics information for each disease
    var diagnosticsMap = {
      'diabetes': 'Diagnostics for Diabetes...',
      'cancer': 'Diagnostics for Cancer...',
      'asthma': 'Diagnostics for Asthma...',
      'hiv': 'Diagnostics for HIV...'
    };
  
    if (diagnosticsMap[selectedDisease]) {
      diagnosticsContent.innerText = diagnosticsMap[selectedDisease];
    } else {
      diagnosticsContent.innerText = 'No diagnostics available for the selected disease.';
    }
  }
  function goBack() {
    // Redirect to the Symptoms page (testpage_symptoms.html)
    window.location.href = 'testpage_symptoms.html';
  }  