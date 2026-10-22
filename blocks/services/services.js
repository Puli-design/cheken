export default function decorate(block) {
  const rows = [...block.children];

  if (!rows.length) return;

  const heading = document.createElement('h2');
  heading.className = 'services-heading';
  heading.textContent = 'Our Best IT Solution';

  const description = document.createElement('p');
  description.className = 'services-description';
  description.textContent =
    'Explore our reliable IT solutions designed to help your business grow.';

  const container = document.createElement('div');
  container.className = 'services-container';

  rows.forEach((row) => {
    const columns = [...row.children];

    if (columns.length < 3) return;

    const card = document.createElement('article');
    card.className = 'service-card';

    const icon = columns[0].querySelector('img');

    if (icon) {
      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'service-icon';
      iconWrapper.append(icon);
      card.append(iconWrapper);
    }

    const title = document.createElement('h3');
    title.textContent = columns[1].textContent.trim();

    const text = document.createElement('p');
    text.textContent = columns[2].textContent.trim();

    card.append(title, text);
    container.append(card);
  });

  block.replaceChildren(heading, description, container);
}