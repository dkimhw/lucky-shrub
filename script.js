
const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav-btn');
const closeNav = document.querySelector('.close-icon');
const sidebar = document.querySelector("#sidebar");

navBtn.addEventListener('click', () => {
  sidebar.classList.add("show-sidebar");
});

closeNav.addEventListener('click', () => {
  sidebar.classList.remove("show-sidebar");
})

// add fixed class to navbar
// window.addEventListener("scroll", function () {
//   if (window.scrollY > 80) {
//     navbar.classList.add("navbar-fixed");
//   } else {
//     navbar.classList.remove("navbar-fixed");
//   }
// });
