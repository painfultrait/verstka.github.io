const button = document.getElementById("menu");
const menu = document.getElementById("nav-menu");
button.addEventListener('touch', toggleActive);
function toggleActive() {
  button.classList.toggle('active');
  menu.classList.toggle('active');
  
}
