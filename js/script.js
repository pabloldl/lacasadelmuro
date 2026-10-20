'use strict';

document.documentElement.classList.add('js');

// The navigation remains visible when JavaScript is unavailable.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 700px)');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuButton.hidden = false;
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(expanded));
  navigation.classList.toggle('is-open', expanded);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header')) closeMenu();
});
mobile.addEventListener('change', closeMenu);

const items = [...document.querySelectorAll('.gallery-item')];
const gallery = document.querySelector('.gallery');
const filters = [...document.querySelectorAll('[data-filter]')];
document.querySelector('.gallery-tools').hidden = false;
filters.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filters.forEach(filterButton => filterButton.setAttribute('aria-pressed', String(filterButton === button)));
  gallery.classList.toggle('filtered', filter !== 'all');
  items.forEach(item => {
    item.hidden = filter !== 'all' && item.dataset.category !== filter;
    item.classList.remove('is-waiting');
  });
}));

const lightbox = document.querySelector('.lightbox');
const largeImage = lightbox.querySelector('.lightbox-image');
let current = 0;
let selection = items;
let trigger;
function showImage(index) {
  current = (index + selection.length) % selection.length;
  const item = selection[current];
  largeImage.src = item.href;
  largeImage.alt = item.querySelector('img').alt;
  document.querySelector('#lightbox-title').textContent = item.dataset.title;
  document.querySelector('#lightbox-caption').textContent = `Imagen ilustrativa; no pertenece al alojamiento. ${item.dataset.credit}.`;
  document.querySelector('.lightbox-count').textContent = `${current + 1} / ${selection.length}`;
  lightbox.querySelector('.lightbox-prev').disabled = selection.length === 1;
  lightbox.querySelector('.lightbox-next').disabled = selection.length === 1;
}
items.forEach(item => item.addEventListener('click', event => {
  if (typeof lightbox.showModal !== 'function') return;
  event.preventDefault();
  trigger = item;
  selection = items.filter(photo => !photo.hidden);
  showImage(selection.indexOf(item));
  lightbox.showModal();
  document.body.classList.add('modal-open');
  lightbox.querySelector('.lightbox-close').focus();
}));
lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.querySelector('.lightbox-prev').addEventListener('click', () => showImage(current - 1));
lightbox.querySelector('.lightbox-next').addEventListener('click', () => showImage(current + 1));
lightbox.addEventListener('keydown', event => {
  if (event.key === 'Tab') {
    const controls = [...lightbox.querySelectorAll('button:not(:disabled)')];
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    showImage(current + (event.key === 'ArrowRight' ? 1 : -1));
  }
});
lightbox.addEventListener('click', event => {
  if (event.target === lightbox) {
    const bounds = lightbox.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) lightbox.close();
  }
});
lightbox.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  largeImage.removeAttribute('src');
  trigger?.focus({ preventScroll: true });
});

// Only hide content after an observer is ready; reduced motion keeps it visible.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('is-waiting');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => {
    element.classList.add('is-waiting');
    observer.observe(element);
  });
  reducedMotion.addEventListener('change', event => {
    if (event.matches) {
      document.querySelectorAll('.is-waiting').forEach(element => element.classList.remove('is-waiting'));
      observer.disconnect();
    }
  });
}
