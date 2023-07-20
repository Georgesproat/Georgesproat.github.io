function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
  
    // Store the user's dark mode preference in local storage
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("dark-mode", isDarkMode);
  }
  
  function loadDarkModePreference() {
    const isDarkMode = localStorage.getItem("dark-mode") === "true";
  
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    }
  }
  
  // Call the loadDarkModePreference function when the page loads
  loadDarkModePreference();
  
  