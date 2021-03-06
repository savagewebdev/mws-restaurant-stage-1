// Tab Index Placement
window.onload = function() {
  const restaurantbarTab = [];
  const hamburger = document.querySelector("#hamburger");
  const navtab = document.querySelector("#myTopper > nav > h1 > a");
  const bartab = document.querySelectorAll("#restaurants-list > a > a");
  const foottab = document.querySelector("#footer > a");
  restaurantbarTab.push(hamburger, navtab, foottab);
  restaurantbarTab.forEach(snack => {
    snack.tabIndex = 1;
  });
  bartab.forEach(drink => {
    drink.tabIndex = 1;
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

// Hamburger Functionality
  function openNav() {
  const select_one = document.querySelector("#neighborhoods-select");
  const select_two = document.querySelector("#cuisines-select");
  const navtab = document.querySelector("#myTopper > nav > h1 > a");
    if (hamburger.className != "hamburger hamburger--elastic is-active") { // If it isn't active, then activate it.
      select_one.tabIndex = 1;
      select_two.tabIndex = 1;
      navtab.tabIndex = 2;
      document.getElementById("myNav").style.width = "36%";
      document.getElementById("myNav").style.height = "19%";
      hamburger.className = "hamburger hamburger--elastic is-active";
    } else { // Otherwise don't ativate it and return to normal.
      select_one.removeAttribute("tabIndex");
      select_two.removeAttribute("tabIndex");
      navtab.tabIndex = 1;
      document.getElementById("myNav").style.width = "0%";
      document.getElementById("myNav").style.height = "0%";
      hamburger.className = "hamburger hamburger--elastic";
    }
};
