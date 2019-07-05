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
  var leafletL = $("#map > div.leaflet-control-container > div.leaflet-top.leaflet-left");
  var leafletR = $("#map > div.leaflet-control-container > div.leaflet-top.leaflet-right")
  var leaflet = '<div class="leaflet-control-zoom leaflet-bar leaflet-control"><a class="leaflet-control-zoom-in" href="#" title="Zoom in" role="button" aria-label="Zoom in">+</a><a class="leaflet-control-zoom-out" href="#" title="Zoom out" role="button" aria-label="Zoom out">−</a></div>';
    if (hamburger.className != "hamburger hamburger--elastic is-active") {
      document.getElementById("myNav").style.width = "36%";
      document.getElementById("myNav").style.height = "19%";
      hamburger.className = "hamburger hamburger--elastic is-active";
      leafletL.empty();
      leafletR.html(leaflet);
    } else {
      document.getElementById("myNav").style.width = "0%";
      document.getElementById("myNav").style.height = "0%";
      hamburger.className = "hamburger hamburger--elastic";
      leafletR.empty();
      leafletL.html(leaflet);
    }
};
