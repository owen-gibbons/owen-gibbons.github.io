// Check for saved theme preference or default to light mode
document.addEventListener('DOMContentLoaded', function() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  if (!themeToggle || !themeIcon) {
    console.error('Theme toggle elements not found');
    return;
  }
  
  // Set initial theme
  document.documentElement.setAttribute('data-theme', currentTheme);
  themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  
  // Toggle theme function
  themeToggle.addEventListener('click', function() {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      themeIcon.textContent = '🌙';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      themeIcon.textContent = '☀️';
    }
  });
});
