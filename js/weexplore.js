const buttons = document.querySelectorAll('.weexplore__button');
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const article = button.closest('.weexplore__cards-item');
    const content = article.querySelector('.weexplore__content');
    content.classList.toggle('expanded');
  });
});
