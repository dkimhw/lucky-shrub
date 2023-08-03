
const navbar = document.querySelector('.navbar');
const navBtn = document.querySelector('.nav-btn');
const closeNav = document.querySelector('.close-icon');
const sidebar = document.querySelector("#sidebar");
const body = document.querySelector('body');

navBtn.addEventListener('click', () => {
  sidebar.classList.add("show-sidebar");
  body.classList.add("modal-open");
});

closeNav.addEventListener('click', () => {
  sidebar.classList.remove("show-sidebar");
  body.classList.remove("modal-open");
})

// add fixed class to navbar
// window.addEventListener("scroll", function () {
//   if (window.scrollY > 30) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// });
