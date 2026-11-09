const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

toggle.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";

  toggle.setAttribute("aria-expanded", !isOpen);
  nav.classList.toggle("is-open", !isOpen);
});