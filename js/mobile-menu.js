// MOBILE MENU

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".mobile-nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".mobile-nav-link").forEach(
    n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
