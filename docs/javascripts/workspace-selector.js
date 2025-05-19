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