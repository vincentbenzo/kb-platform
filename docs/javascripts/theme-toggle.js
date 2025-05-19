
// Theme toggle functionality
document.addEventListener("DOMContentLoaded", function() {
  // Get all theme toggle buttons
  const toggleButtons = document.querySelectorAll("[data-md-color-scheme]");
  
  // Set up click handlers for each button
  toggleButtons.forEach(button => {
    button.addEventListener("click", e => {
      const scheme = button.getAttribute("data-md-color-scheme");
      const primary = button.getAttribute("data-md-color-primary");
      const accent = button.getAttribute("data-md-color-accent");
      
      // Apply theme
      document.body.setAttribute("data-md-color-scheme", scheme);
      document.body.setAttribute("data-md-color-primary", primary);
      document.body.setAttribute("data-md-color-accent", accent);
      
      // Save preference in localStorage
      localStorage.setItem("data-md-color-scheme", scheme);
      localStorage.setItem("data-md-color-primary", primary);
      localStorage.setItem("data-md-color-accent", accent);
    });
  });
  
  // Apply saved theme on page load
  const savedScheme = localStorage.getItem("data-md-color-scheme");
  const savedPrimary = localStorage.getItem("data-md-color-primary");
  const savedAccent = localStorage.getItem("data-md-color-accent");
  
  if (savedScheme) {
    document.body.setAttribute("data-md-color-scheme", savedScheme);
  }
  
  if (savedPrimary) {
    document.body.setAttribute("data-md-color-primary", savedPrimary);
  }
  
  if (savedAccent) {
    document.body.setAttribute("data-md-color-accent", savedAccent);
  }
});