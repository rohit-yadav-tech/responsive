const mobile = document.querySelector(".mobile-navbar-btn");


const navbar = () =>{
const header = document.querySelector(".header");
header.classList.toggle("active");
const show = document.querySelector(".section");
show.classList.toggle("show");
};


mobile.addEventListener("click", navbar);