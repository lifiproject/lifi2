const nav_btn = document.querySelector("#mobilenav");
const header = document.querySelector(".header")

const toggleNavbar = () => {
  header.classList.toggle('active');
};

nav_btn.addEventListener('click', () => toggleNavbar());

