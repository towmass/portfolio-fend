// Open the drawer when the menu ison is clicked.
function listen() {
  var menu = document.querySelector("#menu-button");
  var main = document.querySelector("#drawer");
  var drawer = document.querySelector("nav");

  menu.addEventListener("click", function (e) {
    drawer.classList.toggle("open");
    e.stopPropagation();
  });
  main.addEventListener("click", function () {
    drawer.classList.remove("open");
  });
}
