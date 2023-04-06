const burgerCheckbox = document.querySelector('.header__burger-checkbox');
const asideNav = document.querySelector('.aside-nav');

burgerCheckbox.addEventListener('change', function() {
  if (this.checked) {
    asideNav.style.left = '0';
  } else {
    asideNav.style.left = '-100%';
  }
});