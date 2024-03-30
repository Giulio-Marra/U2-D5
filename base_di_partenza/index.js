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

const getRandomPath = () => {
  const svg = document.getElementById("animatedSVG");
  const pathElements = svg.querySelectorAll("path");

  for (let i = 0; i < pathElements.length; i++) {
    const randomPath = Math.floor(Math.random() * pathElements.length);
    const path = pathElements[i];

    if (i === randomPath) {
      if (path.style.display !== "none") {
        path.style.display = "none";
      } else {
        path.style.display = "inline";
      }
    }
  }
};

setInterval(getRandomPath, 100);
