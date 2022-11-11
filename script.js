const menuIcon = document.querySelector("#menuIcon");
const closeIcon = document.querySelector("#closeIcon");
const menu = document.querySelector("#menu");

menuIcon.addEventListener("click", () => {
  menu.classList.replace("hidden", "visible");
});

closeIcon.addEventListener("click", () => {
  menu.classList.replace("visible", "hidden");
});
