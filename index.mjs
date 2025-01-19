const button = document.getElementById("menu");
const menu = document.getElementById("nav-menu");
function toggleActive() {
  button.classList.toggle('active');
  menu.classList.toggle('active');
  
}
button.addEventListener('click', toggleActive);

