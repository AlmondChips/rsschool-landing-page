window.addEventListener("resize", menuResize);

const showBtn = document.querySelector(".show-btn");

try {
  showBtn.addEventListener("click", showItems);
} catch (error) {}

let userAllowVisibility = false;

export function menuResize() {
  const menuList = document.querySelector(".menu-list");

  if (!menuList) return;

  const menuItems = document.querySelectorAll(".menu-card:nth-child(n + 5)");

  if (window.innerWidth < 1090 && !userAllowVisibility) {
    menuItems.forEach((item) => {
      item.classList.add("hidden");
    });
    if (!userAllowVisibility) showBtn.classList.remove("hidden");
  } else {
    menuItems.forEach((item) => {
      item.classList.remove("hidden");
    });
    showBtn.classList.add("hidden");
  }
  if (!menuItems.length > 0) showBtn.classList.add("hidden");
}

function showItems(e) {
  const menuItems = document.querySelectorAll(".menu-card:nth-child(n + 5)");
  userAllowVisibility = true;
  e.currentTarget.classList.add("hidden");
  menuItems.forEach((item) => {
    item.classList.remove("hidden");
  });
}

export function resetShowBtn() {
  userAllowVisibility = false;
}
