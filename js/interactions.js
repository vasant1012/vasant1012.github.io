const dsBtn = document.querySelector(".role-toggle button:nth-child(1)");
const mlopsBtn = document.querySelector(".role-toggle button:nth-child(2)");

dsBtn.onclick = () => {
  document.querySelectorAll(".ds-view").forEach(e => e.classList.remove("hidden"));
  document.querySelectorAll(".mlops-view").forEach(e => e.classList.add("hidden"));
};

mlopsBtn.onclick = () => {
  document.querySelectorAll(".mlops-view").forEach(e => e.classList.remove("hidden"));
  document.querySelectorAll(".ds-view").forEach(e => e.classList.add("hidden"));
};
