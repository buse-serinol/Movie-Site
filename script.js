const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".section-container,.movie-list-tittle,.navbar,.sidebar,.sidebar i,.toggle, .toggle-ball,.movie-categories select"
);

ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});
