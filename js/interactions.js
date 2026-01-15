// Role toggle logic
const dsBtn = document.querySelector(".role-toggle button:nth-child(1)");
const mlopsBtn = document.querySelector(".role-toggle button:nth-child(2)");

dsBtn.onclick = () => {
  document.querySelectorAll(".ds-view").forEach(e => e.classList.remove("hidden"));
  document.querySelectorAll(".mlops-view").forEach(e => e.classList.add("hidden"));

  dsBtn.classList.add("active");
  mlopsBtn.classList.remove("active");
};

mlopsBtn.onclick = () => {
  document.querySelectorAll(".mlops-view").forEach(e => e.classList.remove("hidden"));
  document.querySelectorAll(".ds-view").forEach(e => e.classList.add("hidden"));

  mlopsBtn.classList.add("active");
  dsBtn.classList.remove("active");
};

// Section highlight on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-highlight");
      }
    });
  },
  { threshold: 0.3 }
);

sections.forEach(section => observer.observe(section));
