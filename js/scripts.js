/* ================================== Color light and Dark Mode  ================================== */
const dayNight = document.querySelector(".day-night-theme");

function toggleLightMode() {
    const isLight = document.body.classList.toggle("light");
    dayNight.querySelector("i").classList.toggle("fa-sun", isLight);
    dayNight.querySelector("i").classList.toggle("fa-moon", !isLight);
    localStorage.setItem('lightMode', isLight ? 'light' : 'dark');
}

dayNight.addEventListener("click", toggleLightMode);

function setInitialMode() {
    const isLight = localStorage.getItem('lightMode') == 'light';
    document.body.classList.toggle('light', isLight);
    dayNight.querySelector("i").classList.toggle("fa-sun", isLight);
    dayNight.querySelector("i").classList.toggle("fa-moon", !isLight);
}

window.addEventListener("load", setInitialMode);

/* ================================== ===========================  ================================== */
