const accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    const accordionText = button.nextElementSibling;
    if (accordionText.style.maxHeight) {
      accordionText.style.maxHeight = null;
    } else {
      accordionText.style.maxHeight = accordionText.scrollHeight + 'px';
    }
  });
});