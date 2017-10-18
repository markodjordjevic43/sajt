var galerySlideshow = (function () {
    
        var slideIndex = 1;
        var slideCount = document.getElementsByClassName("galerija-item").length;
    
        showSlides(slideIndex);
    
        function nextSlide() {
            if (slideIndex < slideCount-2) {
                slideIndex++;
            }
            showSlides();
        }
    
        function previousSlide() {
            if (slideIndex > 1) {
                slideIndex--;
            }
            showSlides();
        }
    
        //private
        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("galerija-item");
            for (i = 0; i < slides.length; i++) {
                if (i === slideIndex - 1 || i === slideIndex || i === slideIndex + 1) {
                    slides[i].style.display = "block";
                }
                else {
                    slides[i].style.display = "none";
                }
            }
            
            var arrowPrev = document.getElementById("galerija-slideshow-prev");
            var arrowNext = document.getElementById("galerija-slideshow-next");
            if (slideIndex === 1) {
                arrowPrev.style.color = "#ccc";
            }
            else {
                arrowPrev.style.color = "#fff";
            }
            if (slideIndex === slideCount-2) {
                arrowNext.style.color = "#ccc";
            }
            else {
                arrowNext.style.color = "#fff";
            }
        }
    
        return {
            nextSlide: nextSlide,
            previousSlide: previousSlide
        };
    
    })();