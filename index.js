const ham = document.querySelector(".ham");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");

ham.addEventListener("click", () => {
  nav.classList.add("open-nav");
});

close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});
