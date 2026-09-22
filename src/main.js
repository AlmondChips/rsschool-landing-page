import "./styles/main.scss";
import "./modules/theme";
import "./modules/menu.js";

const menuBtn = document.querySelector("button.greeting-menu");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    window.location.href = "./src/pages/menu.html";
  });
}
