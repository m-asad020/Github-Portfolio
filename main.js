// Animate on scroll
AOS.init({
  once: false // animation runs every time section enters view
});

// Typed.js effect in hero section
const typed = new Typed("#typed", {
  strings: [
    "Data Analyst",
    "Power BI Developer",
    "Data Storyteller"
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

// Contact form submit handler
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks! Your message has been sent.");
  this.reset();
});