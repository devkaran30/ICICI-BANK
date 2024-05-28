document.addEventListener("DOMContentLoaded", function() {
    const placeholderText = "Search for Products, Services";
    const input = document.querySelector('.search-input');
    let index = 0;
  
    function typeEffect() {
      if (index < placeholderText.length) {
        input.setAttribute('placeholder', placeholderText.slice(0, index + 1));
        index++;
        setTimeout(typeEffect, 50);
      }
    }
    typeEffect();
  });
  //slide show pics
  var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
   
   