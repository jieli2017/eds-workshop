export default function decorate(block) {
  const rows = [...block.children];

  const imageRow = rows[0];
  const titleRow = rows[1];
  const descriptionRow = rows[2];
  const ctaRow = rows[3];

  imageRow.classList.add('teaser-image');
  titleRow.classList.add('teaser-title');
  descriptionRow.classList.add('teaser-description');
  ctaRow.classList.add('teaser-cta');
}