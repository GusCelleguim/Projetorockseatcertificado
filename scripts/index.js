const themeSwitch = document.getElementById("switch");
const html = document.documentElement;
console.log(html);

const localTheme = localStorage.getItem("@jos3sLinktree/Theme");
console.log(localTheme);
if (localTheme) {
  if (localTheme === "dark") {
    html.classList.add("dark");
    themeSwitch.checked = true;
  } else {
    html.classList.remove("dark");
    themeSwitch.checked = false;
  }
} else {
  localStorage.setItem("@jos3sLinktree/Theme", "light");
}

themeSwitch.addEventListener("change", ({ target: { checked } }) => {
  if (checked) {
    html.classList.add("dark");
    localStorage.setItem("@jos3sLinktree/Theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("@jos3sLinktree/Theme", "light");
  }
});
