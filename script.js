document.querySelectorAll('.btn-toggle').forEach(button => {
  const targetId = button.getAttribute('data-target');
  const list = document.getElementById(targetId);
  if (list) {
    // Initialize collapsed
    list.style.maxHeight = '0';
    list.style.overflow = 'hidden';
  }

  button.addEventListener('click', () => {
    if (!list) return;
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
    button.textContent = expanded ? 'Show More' : 'Show Less';

    if (expanded) {
      // Collapse
      list.style.maxHeight = '0';
      list.style.overflow = 'hidden';
    } else {
      // Expand
      list.style.maxHeight = list.scrollHeight + 'px';
      list.style.overflow = 'visible';
    }
  });
});
