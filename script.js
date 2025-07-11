// Lightbox Logic
let slideIndex = 1;

function openLightbox() {
  document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  let slides = document.getElementsByClassName('slide');
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

// Filter Logic
function filterGallery(category) {
  let items = document.getElementsByClassName('gallery-item');
  if (category === 'all') category = '';
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = items[i].className.indexOf(category) > -1 ? 'block' : 'none';
  }
}