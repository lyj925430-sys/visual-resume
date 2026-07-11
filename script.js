const buttons = document.querySelectorAll('.filters button');
const cards = document.querySelectorAll('.project-card');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    buttons.forEach((item) => {
      item.classList.toggle('active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    cards.forEach((card) => {
      card.hidden = filter !== '全部' && card.dataset.type !== filter;
    });
  });
});
