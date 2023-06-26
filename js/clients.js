let image = document.getElementById("amazon");
let originalSrc = image.src;
let newSrc = "img/clients/activ/amazon-icon.svg";

image.addEventListener("mouseover", function() {
  image.src = newSrc;
});

image.addEventListener("mouseout", function() {
  image.src = originalSrc;
});





