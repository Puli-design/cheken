export default function decorate(block) {
  const rows = [...block.children];

  const statsContainer = document.createElement('div');
  statsContainer.className = 'stats-container';

  rows.forEach((row) => {
    const columns = [...row.children];

    if (columns.length < 3) return;

    const card = document.createElement('div');
    card.className = 'stats-card';

    const icon = columns[0].querySelector('img');

    const value = document.createElement('h2');
    value.className = 'stats-value';
    value.textContent = columns[1].textContent.trim();

    const label = document.createElement('p');
    label.className = 'stats-label';
    label.textContent = columns[2].textContent.trim();

    if (icon) {
      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'stats-icon';
      iconWrapper.append(icon);
      card.append(iconWrapper);
    }

    card.append(value, label);
    statsContainer.append(card);
  });

  block.replaceChildren(statsContainer);
}