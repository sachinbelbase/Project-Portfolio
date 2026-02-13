// Cache DOM element at the top for performance
const navLinks = document.querySelectorAll("nav a");
const projectBtn = document.querySelector(".btn-project");
const projectSection = document.querySelector("#project");
const form = document.querySelector("form");
const sections = document.querySelectorAll("section");

// Smooth Navbar Scroll
navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// View Project Button
projectBtn.addEventListener("click", function () {
  projectSection.style.display = "block";
  projectSection.scrollIntoView({ behavior: "smooth" });
});

// Contact Form Validation
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields.");
    return;
  }
  alert("Your message has been sent.");
  form.reset();
});

// Scroll Animation
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

sections.forEach(function (section) {
  observer.observe(section);
});
