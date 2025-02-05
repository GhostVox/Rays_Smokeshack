function toggleMenu() {
  let menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
document.addEventListener("click", function(event) {
  let menu = document.getElementById("dropdownMenu");
  let menuIcon = document.getElementById("menu");

  if (event.target !== menu && event.target !== menuIcon) {
      menu.style.display = "none";
  }
});

