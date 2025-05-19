// Function to handle workspace selection change
function changeWorkspace(workspacePath) {
  if (workspacePath) {
    // Construct the full URL with the workspace path
    const baseUrl = window.location.origin;
    const newUrl = baseUrl + workspacePath;
    
    // Navigate to the selected workspace
    window.location.href = newUrl;
  }
}

// Function to set the current workspace in the dropdown
document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.getElementById('workspace-dropdown');
  if (dropdown) {
    // Extract the repository name from the URL
    const pathSegments = window.location.pathname.split('/');
    let repoName = '';
    
    // GitHub Pages URLs follow the pattern: username.github.io/repo-name/
    if (pathSegments.length >= 2) {
      repoName = '/' + pathSegments[1] + '/';
    }
    
    // Set the dropdown value to match the current repo
    for (let i = 0; i < dropdown.options.length; i++) {
      if (dropdown.options[i].value === repoName) {
        dropdown.selectedIndex = i;
        break;
      }
    }
  }
});

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