const gallery = [
  { url: 'images/truck.JPG', alt: 'Foodtruck' },
  { url: 'images/certs.JPG', alt: 'certification' },
  { url: 'images/window.JPG', alt: 'Ace hardware' },
  { url: 'images/tappay.JPG', alt: 'tap to pay' },
  { url: 'images/fire.JPG', alt: 'Fire' },
  { url: 'images/ribs.JPG', alt: 'ribs' },
  { url: 'images/ribsChicken.jpg', alt: 'Ribs and Chicken' },
  { url: 'images/pork.jpg', alt: 'pork' },
  { url: 'images/soda.JPG', alt: 'soda' },
  { url: 'images/sauce.JPG', alt: 'sauce' },
  { url: 'images/hotsauce.JPG', alt: 'hotsauce' },
  { url: 'images/chips.JPG', alt: 'chips' },
  { url: 'images/lunchbreak.JPG', alt: 'Lunch break' },
  { url: 'images/customer1.JPG', alt: 'customer' },
  { url: 'images/customer2.JPG', alt: 'customer' },
  { url: 'images/customer3.JPG', alt: 'customer' },
  { url: 'images/customer4.JPG', alt: 'customer' },
  { url: 'images/locationspot.jpeg', alt: 'Ace hardware Location' },
];
let loopInterval = null;
let restartTimeout = null;

function setPhoto(imgSrc, imgAlt, index) {
  let currentImage = document.getElementById('gallery-image');
  let gallery = document.getElementById('gallery');
  currentImage.src = imgSrc;
  currentImage.alt = imgAlt;
  currentImage.dataset.index = index;
  gallery.classList.add('fadeIn');
  setTimeout(() => {
    gallery.classList.remove('fadeIn');
  }, 500);
}

function nextPhoto() {
  // Implement forward button functionality
  console.log('forward button clicked');
  stopLoop();
  let currentImage = document.getElementById('gallery-image');
  let currentIndex = parseInt(currentImage.dataset.index);
  let nextIndex = (currentIndex + 1) % gallery.length;
  console.log(currentIndex);
  setPhoto(gallery[nextIndex].url, gallery[nextIndex].alt, nextIndex);
  console.log(currentImage.src);
  restartLoopAfterDelay();
}

function previousPhoto() {
  console.log('back button clicked');
  // Implement back button functionality
  stopLoop();
  let currentImage = document.getElementById('gallery-image');
  let currentIndex = parseInt(currentImage.dataset.index);
  let previousIndex = (currentIndex - 1 + gallery.length) % gallery.length;

  setPhoto(
    gallery[previousIndex].url,
    gallery[previousIndex].alt,
    previousIndex
  );
  restartLoopAfterDelay();
}

function cyclePhotos() {
  // Implement photo cycling functionality
  let currentImage = document.getElementById('gallery-image');
  let currentIndex = parseInt(currentImage.dataset.index);
  let nextIndex = (currentIndex + 1) % gallery.length;

  setPhoto(gallery[nextIndex].url, gallery[nextIndex].alt, nextIndex);
}

function loopPhotos() {
  // Implement photo loop functionality
  let currentImage = document.getElementById('gallery-image');

  if (loopInterval) clearInterval(loopInterval);
  loopInterval = setInterval(cyclePhotos, 6000);
}

function stopLoop() {
  // Implement stopping the photo loop
  clearInterval(loopInterval);
  loopInterval = null;
}

function restartLoopAfterDelay() {
  clearTimeout(restartTimeout);
  restartTimeout = setTimeout(loopPhotos, 10000);
}

export { nextPhoto, previousPhoto, loopPhotos };
