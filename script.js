const headBtn = document.getElementById("headBtn");
const stage = document.querySelector(".stage");

headBtn.addEventListener("click", () => {
  headBtn.classList.toggle("open");
  stage.classList.toggle("is-open");
});