const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
    const isOpen = navMenu.classList.contains("show");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.innerHTML = isOpen
      ? '<i class="fas fa-xmark"></i>'
      : '<i class="fas fa-bars"></i>';
  });
}

if (navMenu) {
  navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("show");
      if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  });
}
