const button = document.getElementById("menu");
const menu = document.getElementById("nav-menu");

function toggleActive() {
  button.classList.toggle('active');
  menu.classList.toggle('active');
}

let debounceTimeout;

function handleEvent(event) {
  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }
}

button.addEventListener('click', handleEvent);
button.addEventListener('touchend', handleEvent);
