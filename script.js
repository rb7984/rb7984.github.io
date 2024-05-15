function showImage(src, modalId) {
  var modal = document.getElementById(modalId);
  var modalImg = modal.querySelector('.modal-content');
  modal.style.display = "block";
  modalImg.src = src;
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target.classList.contains('modal')) {
      event.target.style.display = "none";
  }
};