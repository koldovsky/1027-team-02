const accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const accordionText = button.nextElementSibling;
    accordionButtons.forEach(otherButton => {
      if (otherButton !== button) {
        otherButton.classList.remove('active');
        const otherAccordionText = otherButton.nextElementSibling;
        otherAccordionText.style.maxHeight = null;
      }
    });
    button.classList.toggle('active');
    if (accordionText.style.maxHeight) {
      accordionText.style.maxHeight = null;
    } else {
      accordionText.style.maxHeight = accordionText.scrollHeight + 'px';
    }
  });
});