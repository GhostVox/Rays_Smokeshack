import { loopPhotos, nextPhoto, previousPhoto, initGallery } from './gallery.js';

document.addEventListener('DOMContentLoaded', function () {
  // Initialize gallery
  initGallery();
  loopPhotos();
  
  // Set up gallery buttons
  const forwardButton = document.getElementById('fowardButton');
  const backButton = document.getElementById('backButton');
  
  if (forwardButton) {
    forwardButton.addEventListener('click', nextPhoto);
  }
  
  if (backButton) {
    backButton.addEventListener('click', previousPhoto);
  }
  
  // Set up dropdown menu
  const menuIcon = document.getElementById('menu');
  if (menuIcon) {
    // Direct click handler without any complex logic
    menuIcon.addEventListener('click', function(e) {
      e.stopPropagation();
      const dropdownMenu = document.getElementById('dropdownMenu');
      if (dropdownMenu) {
        // Toggle display directly
        if (dropdownMenu.style.display === 'block') {
          dropdownMenu.style.display = 'none';
        } else {
          dropdownMenu.style.display = 'block';
        }
      }
    });
    
    // Close menu when clicking elsewhere
    document.addEventListener('click', function(e) {
      const dropdownMenu = document.getElementById('dropdownMenu');
      if (dropdownMenu && e.target !== menuIcon && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = 'none';
      }
    });
  }
});