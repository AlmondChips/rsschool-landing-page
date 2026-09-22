import { menu } from "./menuList";

let menuList;

function initPage() {
  if (!window.location.href.includes("menu")) return false;
  const [btnCoffee, btnTea, btnDessert] = document.querySelectorAll(".m-btn");
  menuList = document.querySelector(".menu-list");

  [btnCoffee, btnTea, btnDessert].forEach((btn) => {
    const text = btn.childNodes[3].textContent.toLowerCase();

    btn.addEventListener("click", () => {
      [btnCoffee, btnTea, btnDessert].forEach((btn2) => {
        btn2.classList.remove("selected");
      });
      btn.classList.add("selected");
      menuList.textContent = "";
      drawMenu(text);
    });
  });
  return true;
}

function drawCard(item) {
  const card = document.createElement("div");
  card.classList.add("menu-card");

  const image = document.createElement("img");
  image.src = item.image;

  const imgWrapper = document.createElement("div");
  imgWrapper.classList.add("img-wrapper");

  imgWrapper.appendChild(image);

  const title = document.createElement("h3");
  title.textContent = item.title;
  title.classList.add("title");

  const desc = document.createElement("p");
  desc.classList.add("medium");
  desc.textContent = item.desc;

  const price = document.createElement("h3");
  price.classList.add("price");
  price.textContent = item.price;

  const descWrapper = document.createElement("div");
  descWrapper.classList.add("desc-wrapper");

  descWrapper.appendChild(title);
  descWrapper.appendChild(desc);
  descWrapper.appendChild(price);

  card.appendChild(imgWrapper);
  card.appendChild(descWrapper);

  menuList.appendChild(card);
}

function drawMenu(type = "coffee") {
  const selectedType = menu[type];

  selectedType.forEach((item) => {
    drawCard(item);
  });
}

initPage() && drawMenu();
