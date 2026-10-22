export default function decorate(block) {
  const rows = [...block.children];

  const section = document.createElement('div');
  section.className = 'pricing-section';

  const heading = document.createElement('h2');
  heading.className = 'pricing-heading';
  heading.textContent = 'Our Best Support Price';

  const description = document.createElement('p');
  description.className = 'pricing-description';
  description.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  const cards = document.createElement('div');
  cards.className = 'pricing-cards';

  rows.forEach((row) => {
    const cells = [...row.children];

    if (cells.length < 4) return;

    const card = document.createElement('article');
    card.className = 'pricing-card';

    const title = document.createElement('h3');
    title.className = 'pricing-title';
    title.textContent = cells[0].textContent.trim();

    const priceCircle = document.createElement('div');
    priceCircle.className = 'pricing-price-circle';

    const price = document.createElement('div');
    price.className = 'pricing-price';
    price.textContent = cells[1].textContent.trim();

    const period = document.createElement('div');
    period.className = 'pricing-period';
    period.textContent = cells[2].textContent.trim();

    priceCircle.append(price, period);

    const features = document.createElement('div');
    features.className = 'pricing-features';

    const featureItems = cells[3].querySelectorAll('li');

    if (featureItems.length) {
      const list = document.createElement('ul');

      featureItems.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item.textContent.trim();
        list.append(li);
      });

      features.append(list);
    } else {
      cells[3].querySelectorAll('p').forEach((paragraph) => {
        const li = document.createElement('p');
        li.textContent = paragraph.textContent.trim();
        features.append(li);
      });
    }

    const button = document.createElement('a');
    button.className = 'pricing-button';
    button.textContent = 'Read More';
    button.href = '/contact';

    card.append(title, priceCircle, features, button);
    cards.append(card);
  });

  section.append(heading, description, cards);
  block.replaceChildren(section);
}