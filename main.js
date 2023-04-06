
/* ---------- MOBILE HAMBURGER MENU ---------- */
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




/* ---------- CHANGE OTHER NAV LINKS TO INACTIVE WHEN OTHER LINK IS ACTIVE ---------- */
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

setTimeout(function() {
  document.querySelector('h1').style.opacity = 1;
}, 500);






/* ---------- KEEP NAVBAR LINKS UPDATED WITH THE SECTIONS ---------- */
// create an intersection observer instance
const observer = new IntersectionObserver((entries, observer) => {
  // loop through each entry
  entries.forEach(entry => {
    // check if entry is intersecting
    if (entry.isIntersecting) {
      // set corresponding link as active
      const link = document.querySelector(`.navlist a[href="#${entry.target.id}"]`);
      link.id = 'active';
      // remove id from other links
      const otherLinks = document.querySelectorAll('.navlist a:not([href="#'+entry.target.id+'"])');
      otherLinks.forEach(link => link.id = '');
    }
  });
}, {
  threshold: 0.5 // trigger when section is at least 50% visible
});

// observe each section element
const sections = document.querySelectorAll('section');
sections.forEach(section => {
  observer.observe(section);
});





