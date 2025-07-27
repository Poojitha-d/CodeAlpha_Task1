const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const galleryItems = document.querySelectorAll(".gallery-item");
let currentIndex = 0;

galleryItems.forEach((img, index) => {
  img.addEventListener("click", () => {
    openLightbox(index);
  });
});

function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "flex";
  lightboxImg.src = galleryItems[currentIndex].src;
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = galleryItems.length - 1;
  if (currentIndex >= galleryItems.length) currentIndex = 0;
  lightboxImg.src = galleryItems[currentIndex].src;
}

function filterImages(category) {
  document.querySelectorAll('.filter-buttons button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  galleryItems.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = "block";
      item.classList.add("fade-in");
    } else {
      item.style.display = "none";
    }
  });
}
