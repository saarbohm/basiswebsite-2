var hamburgerMenu = document.querySelector(".hamburger-menu");
var menu = document.querySelector(".menu");

hamburgerMenu.onclick = openMenu;

function openMenu() {
  menu.classList.add("showMenu");
  console.log("hij werkt");
}

var closeButton = document.querySelector(".close-button");

closeButton.onclick = closeMenu;

function closeMenu() {
  menu.classList.remove("showMenu");
  console.log("hij werkt");
}