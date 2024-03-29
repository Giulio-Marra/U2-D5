window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  const button = document.querySelector(".getStartedButton");
  if (window.scrollY > 400) {
    navbar.classList.add("scroll");
    button.classList.add("scrollButton");
  } else {
    navbar.classList.remove("scroll");
    button.classList.remove("scrollButton");
  }
});
