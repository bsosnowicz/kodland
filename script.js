const closeButton = document.querySelector(".mobile__button--close");
const modal = document.querySelector(".mobile__modal");
const openButton = document.querySelector(".mobile__button");

closeButton.addEventListener("click", () => {
  modal.classList.remove("visible");
  modal.classList.add("hidden");
});

openButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
});
