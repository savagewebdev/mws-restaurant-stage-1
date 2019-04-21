var hamburger = document.querySelector("#hamburger"); // Hamburger selector
var panel = document.getElementsByClassName("panel");
// Header Movement Listener
window.onscroll = function() {mySticker()};
var topper = document.getElementById("myTopper");
var sticker = topper.offsetTop;
function mySticker() {
  if (window.pageYOffset > sticker) {
    topper.classList.add("sticker");
    document.getElementById("myNav").style.marginTop = "10vw";
  } else {
    topper.classList.remove("sticker");
    document.getElementById("myNav").style.marginTop = "15vw";
  }
}

function openNav() {
    if (hamburger.className != "hamburger hamburger--elastic is-active") {
      document.getElementById("myNav").style.width = "36%";
      document.getElementById("myNav").style.height = "19%";
      hamburger.className = "hamburger hamburger--elastic is-active";
    } else {
      document.getElementById("myNav").style.width = "0%";
      document.getElementById("myNav").style.height = "0%";
      hamburger.className = "hamburger hamburger--elastic";
    }
};

function myPanel() {
    if ($("div", this).hasClass("panel")) {
    $("div", this).css('display', 'block');
    $("div", this).removeClass("panel");
    $("div", this).addClass("panel-is-open");
  } else {
    $("div", this).css('display', 'none');
    $("div", this).removeClass("panel-is-open");
    $("div", this).addClass("panel");
  }
};
