// * Html load and web scroll effect

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0");
    }
  });
});

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("translate-y-24")) {
          entry.target.classList.remove("translate-y-24", "opacity-0");
        }

        if (entry.target.classList.contains("-rotate-0")) {
          entry.target.classList.remove("-rotate-0");
          entry.target.classList.add("-rotate-6");
        }
      }
    });
  },
  {
    threshold: 0.7,
  }
);

const hiddenElements = document.querySelectorAll(".effect");
const body = document.querySelector("body");

observer1.observe(body);

hiddenElements.forEach((el) => {
  console.log(el);
  observer2.observe(el);
});

// * For Menu Opening And Closing
const menuBtn = document.getElementById("menubtn");
const menuBtnIcon = document.querySelector(".menu-btn-icon");
const menuIcon = document.getElementById("darkbtn");
const menuMobile = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  if (menuMobile.classList.contains("hidden")) {
    menuMobile.classList.remove("hidden", "opacity-0");
    menuMobile.classList.add("opacity-100");

    menuBtnIcon.classList.remove("fa-bars");
    menuBtnIcon.classList.add("fa-times");
  } else {
    menuMobile.classList.add("hidden", "opacity-0");
    menuMobile.classList.remove("opacity-100");

    menuBtnIcon.classList.add("fa-bars");
    menuBtnIcon.classList.remove("fa-times");
  }
});

// * For Showing Courses Details on Navbar

let courseDetails = document.querySelectorAll(".course-details");
let menuCourseBtn = document.querySelectorAll(".menu-course-btn");

function hideAllMenu() {
  courseDetails.forEach((deatails) => {
    deatails.classList.add("scale-0");
  });
}

menuCourseBtn.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    let thisMenu = courseDetails[index];
    hideAllMenu();

    thisMenu.classList.toggle("scale-0");
  });
});

document.addEventListener("click", (e) => {
  let clickedInsideAnyMenu = false;

  courseDetails.forEach((deatail) => {
    if (deatail.contains(e.target)) {
      clickedInsideAnyMenu = true;
    }
  });

  if (!clickedInsideAnyMenu) {
    hideAllMenu();
  }
});
//  ON Small Devices
let mobileCourseDetails = document.querySelectorAll(".mobile-course-deatails");
let mobileMenuCourseBtn = document.querySelectorAll(".mobile-menu-course-btn");

mobileMenuCourseBtn.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    let thisMenu = mobileCourseDetails[index];

    mobileCourseDetails.forEach((deatail) => {
      if (deatail.classList.contains("h-fit")) {
        deatail.classList.remove("h-fit", "p-3", "opacity-0");
        deatail.classList.add("h-0", "p-0");
      }
    });

    if (thisMenu.classList.contains("h-0")) {
      thisMenu.classList.remove("h-0", "p-0", "opacity-0");
      thisMenu.classList.add("h-fit", "p-3");
    } else {
      thisMenu.classList.remove("h-fit", "p-3");
      thisMenu.classList.add("h-0", "p-0", "opacity-0");
    }
  });
});

// * For Showing All Review in Review Section
const moreComment = document.querySelector(".more-comment");
const reviewBox = document.querySelector(".review-box");
const reviewOverlay = document.querySelector(".review-overlay");

moreComment.addEventListener("click", () => {
  reviewBox.classList.add("h-full");
  reviewBox.classList.remove("h-[900px]");
  reviewOverlay.classList.add("hidden");
});
