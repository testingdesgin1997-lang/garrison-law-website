document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.querySelector('.mobile-menu');
  var close = document.querySelector('.mobile-menu-close');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.add('open');
    });
  }
  if (close && menu) {
    close.addEventListener('click', function () {
      menu.classList.remove('open');
    });
  }

  var form = document.querySelector('.connect-form form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thanks for reaching out. This form is a placeholder — connect it to an email service or backend to go live.');
      form.reset();
    });
  }
});
