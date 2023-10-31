const hamburger = document.querySelector('#hamburger-btn');
const nav_links = document.querySelector('#nav-links-id');

hamburger.addEventListener("click",()=>{
    nav_links.classList.toggle("nav-links-active")
    nav_links.classList.toggle("hamburger-cross-active")
})