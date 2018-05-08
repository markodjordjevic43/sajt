var createActionButton = function(direction) {
    var actionEl = document.createElement("div");
    actionEl.id = "akcija-slideshow-prev";
    actionEl.className = "akcija-slideshow-arrow";
    var actionPrevText;
    if (direction === "prev") {
        actionPrevText = document.createTextNode("<");
    }
    else {
        actionPrevText = document.createTextNode(">");
    }
    actionEl.appendChild(actionPrevText);
    return actionEl;
}

var createActionItem = function(actionProduct) {
    var actionItemEl = document.createElement("div");
    actionItemEl.className = "akcija-proizvod";

    var actionItemLinkEl = document.createElement("a");
    actionItemLinkEl.href = actionProduct.url;

    actionItemImageEl = document.createElement("img");
    actionItemImageEl.className = "akcija-thumbnail";
    actionItemImageEl.src = actionProduct.img;

    actionItemTextWrapperEl = document.createElement("div");
    actionItemTextEl = document.createTextNode(actionProduct.text);

    actionItemTextWrapperEl.appendChild(actionItemTextEl);
    actionItemLinkEl.appendChild(actionItemImageEl);
    actionItemLinkEl.appendChild(actionItemTextWrapperEl);
    actionItemEl.appendChild(actionItemLinkEl);

    return actionItemEl;
}

var nextSlide = function() {
    if (slideIndex === slideCount) {
        slideIndex = 1;
    }
    else {
        slideIndex++;
    } 
    showSlides();
}

var previousSlide = function() {
    if (slideIndex === 1) {
        slideIndex = slideCount;
    }
    else {
        slideIndex--;
    } 
    showSlides();
}

var showSlides = function() {
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

var actionSlideShowEl = document.getElementById("akcija-ss");
var actionPrevButton = createActionButton("prev");
var actionNextButton = createActionButton("next");

actionSlideShowEl.appendChild(actionPrevButton);
for (var i = 0; i < proizvodiAkcija.length; i++) {
    actionItem = createActionItem(proizvodiAkcija[i]);
    actionSlideShowEl.appendChild(actionItem);
}
actionSlideShowEl.appendChild(actionNextButton);

var slideIndex = 1;
var slideCount = document.getElementsByClassName("akcija-proizvod").length;

actionPrevButton.addEventListener("click", previousSlide);
actionNextButton.addEventListener("click", nextSlide);
showSlides(slideIndex);

document.getElementById("galerija-slideshow-next").addEventListener("click", galerySlideshow.nextSlide);
document.getElementById("galerija-slideshow-prev").addEventListener("click", galerySlideshow.previousSlide);