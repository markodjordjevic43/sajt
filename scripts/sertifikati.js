var modal = document.getElementById("certificate-modal");
var images = document.getElementsByClassName("sertifikat-slika");
var modalImage = document.getElementById("certificate-modal-image");
var modalClose = document.getElementById("certificate-modal-close");

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