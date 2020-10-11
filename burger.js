const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".links");
  const links = document.querySelectorAll(".links li");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    links.forEach((link) => {
      link.style.opacity = 1;
    });
  });
};
navSlide();
