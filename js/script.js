'use strict';

document.documentElement.classList.add('js');

// La misma navegación se adapta al móvil. El fondo acompaña al desplazamiento.
const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navegacion');
const mobile = window.matchMedia('(max-width: 900px)');
menuButton.hidden = false;

function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 35);
}

function closeMenu(restoreFocus = false) {
  navigation.classList.remove('open');
  header.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('.menu-label').textContent = 'Menú';
  if (restoreFocus) menuButton.focus();
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.querySelector('.menu-label').textContent = open ? 'Cerrar' : 'Menú';
  navigation.classList.toggle('open', open);
  header.classList.toggle('menu-open', open);
});

navigation.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link) return;
  const destination = link.getAttribute('href');
  const focusDestination = mobile.matches && destination.startsWith('#');
  closeMenu();
  if (focusDestination) {
    const section = document.querySelector(destination);
    section.setAttribute('tabindex', '-1');
    section.focus({ preventScroll: true });
    section.addEventListener('blur', () => section.removeAttribute('tabindex'), { once: true });
  }
});

document.addEventListener('click', event => {
  if (!header.contains(event.target)) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
mobile.addEventListener('change', () => closeMenu());
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
document.querySelector('#year').textContent = new Date().getFullYear();

// Apariciones discretas; todo permanece visible sin JS o con movimiento reducido.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  document.documentElement.classList.add('motion');
  reducedMotion.addEventListener('change', event => {
    if (event.matches) document.documentElement.classList.remove('motion');
  });
}

// Lightbox de fotografías disponibles; sin acciones para las fotos ausentes.
const gallery = [...document.querySelectorAll('[data-gallery]')];
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const caption = document.querySelector('#lightbox-caption');
let currentImage = 0;
let trigger = null;

function showImage(index) {
  currentImage = (index + gallery.length) % gallery.length;
  const item = gallery[currentImage];
  lightboxImage.src = item.dataset.image;
  lightboxImage.alt = item.dataset.alt;
  caption.textContent = item.dataset.caption;
  lightbox.querySelector('.lightbox-count').textContent = `${currentImage + 1} / ${gallery.length}`;
}

gallery.forEach((item, index) => item.addEventListener('click', () => {
  trigger = item;
  showImage(index);
  lightbox.showModal();
  document.body.classList.add('locked');
}));

lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.querySelector('.lightbox-prev').addEventListener('click', () => showImage(currentImage - 1));
lightbox.querySelector('.lightbox-next').addEventListener('click', () => showImage(currentImage + 1));
lightbox.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); showImage(currentImage - 1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); showImage(currentImage + 1); }
});
lightbox.addEventListener('click', event => {
  if (event.target !== lightbox) return;
  const rect = lightbox.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) lightbox.close();
});
lightbox.addEventListener('close', () => {
  document.body.classList.remove('locked');
  if (trigger) trigger.focus();
});
