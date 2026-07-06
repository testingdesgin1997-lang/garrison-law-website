document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.querySelector('.mobile-menu');
  var close = document.querySelector('.mobile-menu-close');
  var overlay = document.querySelector('.page-transition');

  // Reveal the page we just arrived on by fading the cover overlay out.
  if (overlay) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        overlay.classList.add('is-hidden');
      });
    });
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.add('open');
    });
  }
  if (close && menu) {
    close.addEventListener('click', function () {
      // Just reverses the open transition (fades + drops back down);
      // no page transition involved since we're staying put.
      menu.classList.remove('open');
    });
  }

  // Menu links get a "next page fades in" transition instead of an
  // instant jump: cover the screen first, then navigate once the
  // cover has finished animating in.
  var transitionLinks = document.querySelectorAll(
    '.mobile-menu nav a, .mobile-menu .sub-section a'
  );
  transitionLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      if (!href || href.charAt(0) === '#' || link.target === '_blank') return;

      e.preventDefault();
      if (overlay) {
        overlay.classList.remove('is-hidden');
      }
      setTimeout(function () {
        window.location.href = href;
      }, 500);
    });
  });

  var form = document.querySelector('.connect-form form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thanks for reaching out. This form is a placeholder — connect it to an email service or backend to go live.');
      form.reset();
    });
  }
});
