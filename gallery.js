const gallery = [
  { url: 'images/truck.jpeg', alt: 'Foodtruck', description: 'Our food truck ready to serve!' },
  { url: 'images/certs.JPG', alt: 'certification', description: 'Fully licensed and certified' },
  { url: 'images/window.JPG', alt: 'Ace hardware', description: 'Our service window where the magic happens' },
  { url: 'images/tappay.JPG', alt: 'tap to pay', description: 'We accept contactless payments' },
  { url: 'images/fire.JPG', alt: 'Fire', description: 'The perfect fire for smoking meats' },
  { url: 'images/ribs.JPG', alt: 'ribs', description: 'Our signature fall-off-the-bone ribs' },
  { url: 'images/ribsChicken.jpg', alt: 'Ribs and Chicken', description: 'Combo plate with ribs and chicken' },
  { url: 'images/pork.jpg', alt: 'pork', description: 'Slow-smoked pulled pork' },
  { url: 'images/soda.JPG', alt: 'soda', description: 'Ice cold drinks to complement your meal' },
  { url: 'images/sauce.JPG', alt: 'sauce', description: 'Our homemade BBQ sauce' },
  { url: 'images/hotsauce.JPG', alt: 'hotsauce', description: 'Spice up your meal with our hot sauce' },
  { url: 'images/chips.JPG', alt: 'chips', description: 'Crispy chips - the perfect side' },
  { url: 'images/ordering.jpeg', alt: 'ordering', description: 'Happy customers ordering their BBQ' },
  { url: 'images/customer1.JPG', alt: 'customer', description: 'Enjoying Ray\'s BBQ' },
  { url: 'images/customer2.JPG', alt: 'customer', description: 'Another satisfied customer' },
  { url: 'images/customer3.JPG', alt: 'customer', description: 'Our BBQ makes people smile' },
  { url: 'images/customer4.JPG', alt: 'customer', description: 'Creating happy memories with great food' },
  { url: 'images/locationspot.jpeg', alt: 'Ace hardware Location', description: 'Find us at Ace Hardware in Cartersville' },
];

let loopInterval = null;
let restartTimeout = null;

function setPhoto(imgSrc, imgAlt, description, index) {
  // Get the elements
  const currentImage = document.getElementById('gallery-image');
  const gallery = document.getElementById('gallery');
  const descriptionEl = document.getElementById('gallery-description');
  
  // Debug log to check what's happening
  console.log('Setting photo:', imgSrc, index);
  
  // Update the image if it exists
  if (currentImage) {
    currentImage.src = imgSrc;
    currentImage.alt = imgAlt || '';
    currentImage.dataset.index = index;
    
    // Force a refresh of the image
    currentImage.style.opacity = '0.99';
    setTimeout(() => {
      currentImage.style.opacity = '1';
    }, 10);
  }
  
  // Update the description if it exists
  if (descriptionEl && description) {
    descriptionEl.textContent = description;
  }
  
  // Add fadeIn animation
  if (gallery) {
    gallery.classList.add('fadeIn');
    setTimeout(() => {
      gallery.classList.remove('fadeIn');
    }, 500);
  }
}

function nextPhoto() {
  console.log('forward button clicked');
  stopLoop();
  let currentImage = document.getElementById('gallery-image');
  if (!currentImage) return;
  
  let currentIndex = parseInt(currentImage.dataset.index);
  let nextIndex = (currentIndex + 1) % gallery.length;
  
  setPhoto(gallery[nextIndex].url, gallery[nextIndex].alt, gallery[nextIndex].description, nextIndex);
  
  restartLoopAfterDelay();
}

function previousPhoto() {
  console.log('back button clicked');
  stopLoop();
  let currentImage = document.getElementById('gallery-image');
  if (!currentImage) return;
  
  let currentIndex = parseInt(currentImage.dataset.index);
  let previousIndex = (currentIndex - 1 + gallery.length) % gallery.length;

  setPhoto(
    gallery[previousIndex].url,
    gallery[previousIndex].alt,
    gallery[previousIndex].description,
    previousIndex
  );
  restartLoopAfterDelay();
}

function cyclePhotos() {
  let currentImage = document.getElementById('gallery-image');
  if (!currentImage) return;
  
  let currentIndex = parseInt(currentImage.dataset.index || 0);
  let nextIndex = (currentIndex + 1) % gallery.length;

  setPhoto(
    gallery[nextIndex].url, 
    gallery[nextIndex].alt,
    gallery[nextIndex].description,
    nextIndex
  );
}

function loopPhotos() {
  let currentImage = document.getElementById('gallery-image');
  if (currentImage === null || currentImage === undefined) {
    return;
  }

  if (loopInterval) clearInterval(loopInterval);
  loopInterval = setInterval(cyclePhotos, 6000);
}

function stopLoop() {
  clearInterval(loopInterval);
  loopInterval = null;
}

function restartLoopAfterDelay() {
  clearTimeout(restartTimeout);
  restartTimeout = setTimeout(loopPhotos, 10000);
}

function initGallery() {
  const galleryElement = document.getElementById('gallery');
  if (!galleryElement) return;
  
  // Create description element if it doesn't exist
  const descriptionEl = document.getElementById('gallery-description');
  if (!descriptionEl) {
    const newDescriptionEl = document.createElement('p');
    newDescriptionEl.id = 'gallery-description';
    newDescriptionEl.className = 'gallery-description';
    galleryElement.appendChild(newDescriptionEl);
  }
  
  // Initialize with first image
  const currentImage = document.getElementById('gallery-image');
  if (currentImage) {
    setPhoto(gallery[0].url, gallery[0].alt, gallery[0].description, 0);
  }
}

export { nextPhoto, previousPhoto, loopPhotos, initGallery };