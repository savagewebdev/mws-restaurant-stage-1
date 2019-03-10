// Header Movement Listener
window.onscroll = function() {
  moveHeader();
}
const nav = $("nav");
let ref = nav.offsetTop;
function moveHeader() {
  if (window.pageYOffset > ref) {
    nav.addClass("stay");
  } else {
    nav.removeClass("stay");
  }
}

//
