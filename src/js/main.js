// For Menu Opening And Closing
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

// For Showing All Review
const moreComment = document.querySelector(".more-comment");
const reviewBox = document.querySelector(".review-box");
const reviewOverlay = document.querySelector(".review-overlay");
console.log(reviewBox);
moreComment.addEventListener("click", () => {
  reviewBox.classList.add("h-full");
  reviewBox.classList.remove("h-[900px]");
  reviewOverlay.classList.add("hidden");
});
