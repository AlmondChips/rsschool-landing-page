import "./styles/main.scss";
import "./modules/theme";
import "./modules/menu.js";
import "./modules/slider.js";
import { isModalOpen } from "./modules/menuModal.js";

const menuBtn = document.querySelector("button.greeting-menu");
const burgerBtn = document.querySelector("input#burger");
const mobileMenu = document.querySelector(".mobile-nav");
const body = document.querySelector("body");
const logo = document.querySelector(".logo-box");

updateMobileNav();

// Listeners

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    window.location.href = import.meta.env.BASE_URL + "src/pages/menu.html";
  });
}

if (burgerBtn) {
  burgerBtn.addEventListener(
    "click",
    (e) => {
      e.stopImmediatePropagation();
      updateMobileNav();
    },
    false,
  );
}

window.addEventListener("resize", indexResize);

mobileMenu.addEventListener("click", (e) => {
  const target = e.target;
  if ([...target.classList].includes("link")) {
    updateMobileNav("remove");
  }
});

logo.addEventListener("click", () => {
  updateMobileNav("remove");
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape") updateMobileNav("remove");
});

// functions

function updateMobileNav(action = undefined) {
  if (action) {
    switch (action) {
      case "remove":
        {
          closeMobNav();
        }
        break;
      default:
        break;
    }
    return;
  }
  if (burgerBtn.checked) {
    openMobNav();
  } else {
    closeMobNav();
  }
}

function closeMobNav() {
  if (isModalOpen) return;
  mobileMenu.classList.remove("open");
  body.classList.remove("no-scroll");
  burgerBtn.checked = false;
}

function openMobNav() {
  mobileMenu.classList.add("open");
  body.classList.add("no-scroll");
  burgerBtn.checked = true;
}

function indexResize() {
  if (window.innerWidth >= 769) {
    burgerBtn.checked = false;
    updateMobileNav();
  }
}
