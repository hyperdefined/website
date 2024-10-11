function switchMode() {
    const lightModeCss = document.getElementById('light-mode-syntax');
    const darkModeCss = document.getElementById('dark-mode-syntax');

    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDarkMode) {
        lightModeCss.disabled = true;
        darkModeCss.disabled = false;
    } else {
        lightModeCss.disabled = false;
        darkModeCss.disabled = true;
    }
}

document.addEventListener('DOMContentLoaded', switchMode);
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', switchMode);