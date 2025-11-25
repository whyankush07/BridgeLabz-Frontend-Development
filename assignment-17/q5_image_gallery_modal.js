const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.getElementById("closeBtn");

gallery.addEventListener("click", (e) => {
  const galleryItem = e.target.closest(".gallery-item");
  if (!galleryItem) return;

  const img = galleryItem.querySelector("img");
  const imgSrc = img.src;
  const imgAlt = img.alt;

  modalImage.src = imgSrc;
  modalImage.alt = imgAlt;
  modal.classList.add("show");
});

function closeModal() {
  modal.classList.remove("show");
  modalImage.src = "";
}

closeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  closeModal();
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.querySelector(".modal-content").addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("show")) {
    closeModal();
  }
});
