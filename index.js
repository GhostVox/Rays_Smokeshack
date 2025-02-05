import { loopPhotos, nextPhoto, previousPhoto } from './gallery.js';

document.addEventListener('DOMContentLoaded', function () {
  loopPhotos();
});

const galleryContainer = document.getElementById('gallery');
const forwardButton = document.getElementById('fowardButton');
const backButton = document.getElementById('backButton');

forwardButton.addEventListener('click', nextPhoto);
backButton.addEventListener('click', previousPhoto);
function toggleMenu() {
  let menu = document.getElementById('dropdownMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
document.addEventListener('click', function (event) {
  let menu = document.getElementById('dropdownMenu');
  let menuIcon = document.getElementById('menu');

  if (event.target !== menu && event.target !== menuIcon) {
    menu.style.display = 'none';
  }
});
