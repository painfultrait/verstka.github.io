import "./styles.css";

const button = document.getElementById("menu");
const menu = document.getElementById("nav-menu");

// Add listeners to all of the them

button.addEventListener('click', toggleActive);


// When a button is clicked toggle "show" class
// using the classList on the button's next element
// sibling (which is the text div)
function toggleActive() {
  button.classList.toggle('active');
  menu.classList.toggle('active');
  
}