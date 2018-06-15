var modal = document.getElementById("servis-modal");
var images = document.getElementsByClassName("servis-slika");
var modalImage = document.getElementById("servis-modal-image");
var modalClose = document.getElementById("servis-modal-close");

var displayImage = function(e) {
    modal.style.display = "block";
    modalImage.src = e.target.src;
}

var closeModal = function() {
    modal.style.display = "none";
}

for (var i = 0; i < images.length; i++) {
    var currentImage = images[i];
    currentImage.addEventListener("click", displayImage);
}

modalClose.addEventListener("click", closeModal);