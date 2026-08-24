const button = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
button?.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  button.setAttribute('aria-expanded', String(open));
});
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('is-open');
  button?.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
