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
  
  // Simplified dropdown menu handling
  const menuIcon = document.getElementById('menu');
  if (menuIcon) {
    menuIcon.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const dropdown = document.getElementById('dropdownMenu');
      if (dropdown) {
        // Toggle visibility directly
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
      }
    });
  }
  
  // Close dropdown when clicking elsewhere
  document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('dropdownMenu');
    const menuIcon = document.getElementById('menu');
    
    if (dropdown && e.target !== menuIcon && !dropdown.contains(e.target)) {
      dropdown.style.display = 'none';
    }
  });
});