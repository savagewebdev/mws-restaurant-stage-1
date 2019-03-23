var hamburger = document.querySelector("#hamburger"); // Hamburger selector
// Header Movement Listener
window.onscroll = function() {mySticker()};
var topper = document.getElementById("myTopper");
var sticker = topper.offsetTop;
function mySticker() {
  if (window.pageYOffset > sticker) {
    topper.classList.add("sticker");
  } else {
    topper.classList.remove("sticker");
  }
}
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "25%";
  hamburger.addEventListener("click", function() {
  hamburger.className = "hamburger hamburger--elastic is-active";
  })
};

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
hamburger.className = "hamburger hamburger--elastic";
}
