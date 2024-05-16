// Menu animatie
const menuButton = document.querySelector('.menu-btn');

let isMenuOpen = false;

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!isMenuOpen) {
    menuButton.classList.add('open');
    isMenuOpen = true;
  } else {
    menuButton.classList.remove('open');
    isMenuOpen = false;
  }
}
