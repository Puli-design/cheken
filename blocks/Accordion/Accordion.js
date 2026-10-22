export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row) => {
    const cells = [...row.children];

    if (cells.length < 2) return;

    const question = cells[0];
    const answer = cells[1];

    const item = document.createElement('div');
    item.className = 'accordion-item';

    const button = document.createElement('button');
    button.className = 'accordion-question';
    button.type = 'button';
    button.setAttribute('aria-expanded', 'false');

    button.innerHTML = `
      <span>${question.innerHTML}</span>
      <span class="accordion-icon" aria-hidden="true"></span>
    `;

    const panel = document.createElement('div');
    panel.className = 'accordion-answer';
    panel.hidden = true;
    panel.innerHTML = answer.innerHTML;

    button.addEventListener('click', () => {
      const isOpen = button.getAttribute('aria-expanded') === 'true';

      button.setAttribute('aria-expanded', String(!isOpen));
      panel.hidden = isOpen;
    });

    item.append(button, panel);
    row.replaceWith(item);
  });
}