const menuBtn = document.getElementById("menubtn");
const menuIcon = document.getElementById("menuicon");
const menuMobile = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  if (menuMobile.classList.contains("hidden")) {
    menuMobile.classList.remove("hidden", "opacity-0");
    menuMobile.classList.add("opacity-100");
  } else {
    menuMobile.classList.add("hidden", "opacity-0");
    menuMobile.classList.remove("opacity-100");
  }
});
