import "./styles/main.scss";
import "./modules/theme";

const menuBtn = document.querySelector("button.greeting-menu");

menuBtn.addEventListener("click", () => {
  window.location.href = "./src/pages/menu.html";
});
