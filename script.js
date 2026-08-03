const popup = document.querySelector('#offer-popup');
const closePopup = () => popup.classList.remove('open');
window.setTimeout(() => popup.classList.add('open'), 550);
document.querySelector('.close-popup').addEventListener('click', closePopup);
document.querySelector('.later').addEventListener('click', closePopup);
popup.addEventListener('click', (event) => { if (event.target === popup) closePopup(); });

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('open')));
