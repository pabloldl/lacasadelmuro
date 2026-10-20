'use strict';

document.documentElement.classList.add('js');

// Un único menú: horizontal en escritorio y desplegable en móvil.
const masthead = document.querySelector('.masthead');
const menuButton = document.querySelector('.nav-toggle');
const navigation = document.querySelector('#navegacion');
const mobileQuery = window.matchMedia('(max-width: 700px)');
menuButton.hidden = false;

function closeMenu(restoreFocus = false) {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('.nav-label').textContent = 'MENÚ';
  if (restoreFocus) menuButton.focus();
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.querySelector('.nav-label').textContent = open ? 'CERRAR' : 'MENÚ';
});

navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('click', event => {
  if (!masthead.contains(event.target)) closeMenu();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
});

mobileQuery.addEventListener('change', () => closeMenu());
window.addEventListener('scroll', () => {
  masthead.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

document.querySelector('#year').textContent = new Date().getFullYear();

// Máscaras de titulares, revelado vertical de imágenes y expansión de líneas.
// Todo es visible por defecto; el observador se activa solo si está disponible.
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

  document.querySelectorAll('.reveal, .rule-reveal').forEach(element => observer.observe(element));
  document.documentElement.classList.add('motion');
  reducedMotion.addEventListener('change', event => {
    if (event.matches) document.documentElement.classList.remove('motion');
  });
}

// Fotografías reales del entorno. Los espacios sin fotografías no tienen
// botones vacíos. Las imágenes autorizadas de la casa se añadirán a este archivo.
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

function openImage(index, origin) {
  trigger = origin;
  showImage(index);
  lightbox.showModal();
  document.body.classList.add('locked');
}

gallery.forEach((item, index) => {
  item.addEventListener('click', () => openImage(index, item));
});

lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.querySelector('.lightbox-prev').addEventListener('click', () => showImage(currentImage - 1));
lightbox.querySelector('.lightbox-next').addEventListener('click', () => showImage(currentImage + 1));

lightbox.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    showImage(currentImage - 1);
  }
  if (event.key === 'ArrowRight') {
    event.preventDefault();
    showImage(currentImage + 1);
  }
});

lightbox.addEventListener('click', event => {
  if (event.target !== lightbox) return;
  const box = lightbox.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) lightbox.close();
});

lightbox.addEventListener('close', () => {
  document.body.classList.remove('locked');
  if (trigger) trigger.focus();
});
