window.onload = function() {
  const restaurantbarTab = [];
  const hamburger = document.querySelector("#hamburger");
  const select_one = document.querySelector("#neighborhoods-select");
  const select_two = document.querySelector("#cuisines-select");
  const navtab = document.querySelector("#myTopper > nav > h1 > a");
  const hamtab = document.querySelector("#hamburger");
  const bartab = document.querySelector("#restaurants-list > a > a");
  const foottab = document.querySelector("#footer > h3 > a");
  restaurantbarTab.push(hamburger, select_one, select_two, navtab, hamtab, bartab, foottab);
  restaurantbarTab.forEach(item => {
    item.tabIndex = 1;
  });
};

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
      select_one.tabIndex = 1;
      select_two.tabIndex = 1;
      document.getElementById("myNav").style.width = "36%";
      document.getElementById("myNav").style.height = "19%";
      hamburger.className = "hamburger hamburger--elastic is-active";
      leafletL.empty();
      L.control.zoom({
        position:'topright'
      }).addTo(newMap);
    } else {
      select_one.removeAttribute("tabIndex");
      select_two.removeAttribute("tabIndex");
      document.getElementById("myNav").style.width = "0%";
      document.getElementById("myNav").style.height = "0%";
      hamburger.className = "hamburger hamburger--elastic";
      leafletR.empty();
      L.control.zoom({
        position:'topleft'
      }).addTo(newMap);
    }
};
