const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.classList.toggle("active");
  navigation.classList.toggle("open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  document.body.style.overflow = isOpen ? "hidden" : "";
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.classList.remove("active");
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
