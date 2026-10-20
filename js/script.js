'use strict';

document.documentElement.classList.add('js');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Un único menú, con presentación adaptada al ancho de pantalla.
const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navegacion');
const mobile = window.matchMedia('(max-width: 900px)');
menuButton.hidden = false;

function closeMenu(restoreFocus = false) {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('.menu-label').textContent = 'Menú';
  if (restoreFocus) menuButton.focus();
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.querySelector('.menu-label').textContent = open ? 'Cerrar' : 'Menú';
  navigation.classList.toggle('open', open);
});
navigation.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link) return;
  const destination = link.getAttribute('href');
  closeMenu();
  if (mobile.matches && destination.startsWith('#')) {
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
function updateHeader() { header.classList.toggle('scrolled', window.scrollY > 20); }
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
document.querySelector('#year').textContent = new Date().getFullYear();

// Revelados suaves, sin ocultar contenido si no se admite el observador.
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

// Carrusel: controles, teclado, arrastre con ratón y scroll táctil nativo.
const carousel = document.querySelector('.carousel');
const slides = [...carousel.querySelectorAll('.space-slide')];
const previous = document.querySelector('.carousel-prev');
const next = document.querySelector('.carousel-next');
const status = document.querySelector('.carousel-status');
document.querySelector('.carousel-controls').hidden = false;

function stride() { return slides[1].offsetLeft - slides[0].offsetLeft; }
function updateCarousel() {
  const maximum = carousel.scrollWidth - carousel.clientWidth;
  const atEnd = carousel.scrollLeft >= maximum - 3;
  previous.disabled = carousel.scrollLeft <= 3;
  next.disabled = atEnd;
  const index = atEnd ? slides.length - 1 : Math.round(carousel.scrollLeft / stride());
  status.textContent = `${String(index + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
}
function scrollCarousel(left) {
  carousel.scrollTo({ left, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
}
previous.addEventListener('click', () => scrollCarousel(carousel.scrollLeft - stride()));
next.addEventListener('click', () => scrollCarousel(carousel.scrollLeft + stride()));
carousel.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); scrollCarousel(carousel.scrollLeft - stride()); }
  if (event.key === 'ArrowRight') { event.preventDefault(); scrollCarousel(carousel.scrollLeft + stride()); }
  if (event.key === 'Home') { event.preventDefault(); scrollCarousel(0); }
  if (event.key === 'End') { event.preventDefault(); scrollCarousel(carousel.scrollWidth); }
});
carousel.addEventListener('scroll', updateCarousel, { passive: true });
window.addEventListener('resize', updateCarousel, { passive: true });
updateCarousel();

let drag = null;
let dragEndedAt = -1000;
carousel.querySelectorAll('img').forEach(img => { img.draggable = false; });
carousel.addEventListener('dragstart', event => event.preventDefault());
carousel.addEventListener('pointerdown', event => {
  if (event.pointerType !== 'mouse' || event.button !== 0) return;
  drag = { x: event.clientX, left: carousel.scrollLeft, id: event.pointerId, moved: false };
});
carousel.addEventListener('pointermove', event => {
  if (!drag) return;
  const delta = event.clientX - drag.x;
  if (!drag.moved && Math.abs(delta) > 6) {
    drag.moved = true;
    carousel.classList.add('dragging');
    carousel.setPointerCapture(drag.id);
  }
  if (drag.moved) {
    event.preventDefault();
    carousel.scrollLeft = drag.left - delta;
  }
});
function finishDrag() {
  if (!drag) return;
  if (drag.moved) {
    dragEndedAt = performance.now();
    if (carousel.hasPointerCapture(drag.id)) carousel.releasePointerCapture(drag.id);
  }
  drag = null;
  carousel.classList.remove('dragging');
  updateCarousel();
}
carousel.addEventListener('pointerup', finishDrag);
carousel.addEventListener('pointercancel', finishDrag);
carousel.addEventListener('pointerleave', () => { if (drag && !drag.moved) finishDrag(); });
carousel.addEventListener('click', event => {
  if (performance.now() - dragEndedAt < 300) { event.preventDefault(); event.stopPropagation(); }
}, true);

// Lightbox: fotografías completas, distinción de ambiente/entorno y foco nativo.
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
