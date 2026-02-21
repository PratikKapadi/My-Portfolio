// AOS Init
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  offset: 100,
});

// Typed.js
if (document.querySelector("#auto-type")) {
  new Typed("#auto-type", {
    strings: [
      "App Developer",
      "React Native Developer",
      "MERN Stack Developer",
      "Frontend Developer",
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
  });
}

// Scroll To Top Button
const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {
  window.addEventListener("scroll", function () {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
