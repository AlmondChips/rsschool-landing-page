const root = document.documentElement;

const currentTheme = localStorage.getItem("theme");
changeThemeTo(`${currentTheme}`);

const [lightBtn, darkBtn] = [
  document.querySelector(".light-button"),
  document.querySelector(".dark-button"),
];

lightBtn.addEventListener("click", () => {
  const isDark = root.classList.contains("dark");

  if (isDark) {
    changeThemeTo("light");
    localStorage.setItem("theme", "light");
  }
});

darkBtn.addEventListener("click", () => {
  const isDark = root.classList.contains("dark");

  if (!isDark) {
    changeThemeTo("dark");
    localStorage.setItem("theme", "dark");
  }
});

function changeThemeTo(theme) {
  theme === "dark" ? root.classList.add("dark") : root.classList.remove("dark");
}
