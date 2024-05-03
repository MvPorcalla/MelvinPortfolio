/* ================================== Color light and Dark Mode  ================================== */
const dayNight = document.querySelector(".day-night-theme");

function toggleDarkMode() {
    const isLight = document.body.classList.toggle("light");
    dayNight.querySelector("i").classList.toggle("fa-sun", isLight);
    dayNight.querySelector("i").classList.toggle("fa-moon", !isLight);
    localStorage.setItem('darkMode', isLight ? 'light' : 'dark');
}

dayNight.addEventListener("click", toggleDarkMode);

function setInitialMode() {
    const isLight = localStorage.getItem('darkMode') !== 'dark';
    document.body.classList.toggle('light', isLight);
    dayNight.querySelector("i").classList.toggle("fa-sun", isLight);
    dayNight.querySelector("i").classList.toggle("fa-moon", !isLight);
}

window.addEventListener("load", setInitialMode);

/* ================================== ===========================  ================================== */

