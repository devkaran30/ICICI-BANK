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
  