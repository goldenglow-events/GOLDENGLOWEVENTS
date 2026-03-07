const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
  const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

const phone = "919113935344";

const whatsappMessage =
`Hello GoldenGlow Events,%0A
Name: ${name}%0A
Email: ${email}%0A
Message: ${message}`;

const url = `https://wa.me/${phone}?text=${whatsappMessage}`;

window.open(url, "_blank");

});

}
const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let currentIndex = 0;

galleryImages.forEach((img, index) => {

img.addEventListener("click", () => {

lightbox.classList.add("active");
lightboxImg.src = img.src;
currentIndex = index;

});

});

next.addEventListener("click", () => {

currentIndex++;

if(currentIndex >= galleryImages.length){
currentIndex = 0;
}

lightboxImg.src = galleryImages[currentIndex].src;

});

prev.addEventListener("click", () => {

currentIndex--;

if(currentIndex < 0){
currentIndex = galleryImages.length - 1;
}

lightboxImg.src = galleryImages[currentIndex].src;

});

lightbox.addEventListener("click", (e) => {

if(e.target === lightbox){
lightbox.classList.remove("active");
}

});
document.addEventListener("keydown", function(e){

if(!lightbox.classList.contains("active")) return;

if(e.key === "ArrowRight"){
next.click();
}

if(e.key === "ArrowLeft"){
prev.click();
}

if(e.key === "Escape"){
lightbox.classList.remove("active");
}

});
ScrollReveal().reveal('.hero-title', {
    distance: '60px',
    duration: 1200,
    origin: 'bottom',
    reset: false
});

ScrollReveal().reveal('.hero-text', {
    distance: '50px',
    duration: 1200,
    delay: 200,
    origin: 'bottom'
});

ScrollReveal().reveal('.service-card', {
    distance: '50px',
    duration: 1200,
    interval: 200,
    origin: 'bottom'
});

ScrollReveal().reveal('.gallery-grid img', {
    distance: '40px',
    duration: 1000,
    interval: 150,
    origin: 'bottom'
});

ScrollReveal().reveal('.about-text', {
    distance: '60px',
    duration: 1200,
    origin: 'left'
});

ScrollReveal().reveal('.about-image', {
    distance: '60px',
    duration: 1200,
    origin: 'right'

});
