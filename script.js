const toggleBtn = document.getElementById("themeToggle");

function applyTheme(isDark) {
  if (isDark) {
    document.body.classList.add("dark");
    if (toggleBtn) {
      toggleBtn.textContent = '☀️';
      toggleBtn.setAttribute('aria-pressed', 'true');
      toggleBtn.setAttribute('aria-label', 'Switch to light theme');
    }
  } else {
    document.body.classList.remove("dark");
    if (toggleBtn) {
      toggleBtn.textContent = '🌙';
      toggleBtn.setAttribute('aria-pressed', 'false');
      toggleBtn.setAttribute('aria-label', 'Switch to dark theme');
    }
  }
}

const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const initDark = saved ? saved === 'dark' : prefersDark;
applyTheme(initDark);

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const nowDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', nowDark ? 'dark' : 'light');
    applyTheme(nowDark);
  });
}