import "./styles/main.scss";
import "./modules/theme";
import "./modules/menu.js";

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
      console.log(1);
      e.stopImmediatePropagation();
      updateMobileNav();
    },
    false,
  );
}

window.onresize = () => {
  console.log(window.innerWidth, window.outerWidth);

  if (window.innerWidth >= 769) {
    burgerBtn.checked = false;
    updateMobileNav();
  }
};

mobileMenu.addEventListener("click", (e) => {
  const target = e.target;
  console.log(target.classList);
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
  mobileMenu.classList.remove("open");
  body.classList.remove("no-scroll");
  burgerBtn.checked = false;
}

function openMobNav() {
  mobileMenu.classList.add("open");
  body.classList.add("no-scroll");
  burgerBtn.checked = true;
}
