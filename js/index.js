const toggleMenu = document.querySelector(".toggle-menu");
const navTop = document.querySelector(".nav-top");
 
toggleMenu.addEventListener("click", () => {
  navTop.classList.toggle("is-active");
});