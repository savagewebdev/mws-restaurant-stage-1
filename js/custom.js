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
    if (hamburger.className != "hamburger hamburger--elastic is-active") {
      document.getElementById("myNav").style.width = "25%";
      hamburger.className = "hamburger hamburger--elastic is-active";
    } else {
      document.getElementById("myNav").style.width = "0%";
      hamburger.className = "hamburger hamburger--elastic";
    }
};
