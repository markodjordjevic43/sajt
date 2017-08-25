var actionSlideshow = (function () {

    var slideIndex = 1;
    var slideCount = document.getElementsByClassName("akcija-proizvod").length;

    showSlides(slideIndex);

    function nextSlide() {
        if (slideIndex === slideCount) {
            slideIndex = 1
        }
        else {
            slideIndex++;
        } 
        showSlides();
    }

    function previousSlide() {
        if (slideIndex === 1) {
            slideIndex = slideCount
        }
        else {
            slideIndex--;
        } 
        showSlides();
    }

    //private
    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("akcija-proizvod");
        for (i = 0; i < slides.length; i++) {
            if (i === slideIndex - 1) {
                slides[i].style.display = "block";
            }
            else {
                slides[i].style.display = "none";
            }
        }
    }

    return {
        nextSlide: nextSlide,
        previousSlide: previousSlide
    };

})();