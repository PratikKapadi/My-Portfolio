let typed = new Typed("#auto-type", {
  strings: [
    "App Devloper",
    "React Native Devloper",
    "MERN Stack Developer",
    "Frontend Developer",
  ],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

// Scroll To Top Button
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
