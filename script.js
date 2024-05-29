document.addEventListener("DOMContentLoaded", function() {
  const placeholderText = "Search for Products, Services...";
  const input = document.querySelector('.search-input');
  let index = 0;

  function typeEffect() {
      input.setAttribute('placeholder', placeholderText.slice(0, index + 1));
      index++;
      if (index >= placeholderText.length) {
          index = 0;
      }
      setTimeout(typeEffect, 200);
  }

  typeEffect();
});

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
function validateName(input) {
  
  input.value = input.value.replace(/[^A-Za-z]/g, '');
}

    document.addEventListener("DOMContentLoaded", function() {
       
        var optionsSelect = document.getElementById("options");
        var forSelect = document.getElementById("for");
        var categoryText = document.querySelector(".nav-category p");

        
        function updateCategoryText() {
            var selectedOption = optionsSelect.value;
            var selectedFor = forSelect.value;

            var newText = "";
            if (selectedOption === "Cards") {
                newText += "Cards - ";
            } else if (selectedOption === "deposits") {
                newText += "Deposits - ";
            } else if (selectedOption === "insurance") {
                newText += "Insurance - ";
            } else if (selectedOption === "investment") {
                newText += "Investment - ";
            } else if (selectedOption === "loan") {
                newText += "Loan - ";
            } else if (selectedOption === "open") {
                newText += "Opening an Account - ";
            }

            if (selectedFor === "benefit") {
                newText += "Benefits and Rewards";
            } else if (selectedFor === "Travel") {
                newText += "Travel";
            } else if (selectedFor === "shopping") {
                newText += "Shopping";
            } else if (selectedFor === "foreign") {
                newText += "Foreign Currency";
            }

      
           
        }

      
        optionsSelect.addEventListener("change", updateCategoryText);
        forSelect.addEventListener("change", updateCategoryText);

        updateCategoryText();
    });

