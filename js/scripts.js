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
// script.js

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let currentPosition = window.pageYOffset + (window.innerHeight / 2);

  sections.forEach(section => {
    let sectionTop = section.offsetTop;
    let sectionHeight = section.clientHeight;

    if (currentPosition >= sectionTop && currentPosition < (sectionTop + sectionHeight)) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector(`.nav-link[href="#${section.id}"]`).classList.add('active');
    }
  });
});