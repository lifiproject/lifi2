// const nav_btn = document.querySelector("#mobilenav");
// const header = document.querySelector(".header")

// const toggleNavbar = () => {
//   header.classList.toggle('active');
// };

// nav_btn.addEventListener('click', () => toggleNavbar());

const nav_btn = document.querySelector("#mobilenav");
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll('.navlist');

const toggleNavbar = () => {
  header.classList.toggle('active');
};

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    toggleNavbar();
  });
});

nav_btn.addEventListener('click', () => toggleNavbar());



var links = document.getElementsByClassName('changeable');

function changeColor(e) {
  // links[0].style.color = '#1F2833';
  // Set all elements to blue
    for (var i = 0; i < links.length; i++) {
      // links[i].classList.remove('hover');
        links[i].style.color = '#3E4248';
    }
    // Set the clicked element to red
    e.target.style.color = '#66FCF1';
}

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', changeColor);
}
