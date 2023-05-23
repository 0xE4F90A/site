// alert('move');

const anchorLinks = document.querySelectorAll('a[href^="#"]')
const anchorLinksArr = Array.prototype.slice.call(anchorLinks);
const gap = -5;

const $burger = document.querySelector('.burger');
const $nav = document.querySelector('.nav-links');
const $navLinks = document.querySelectorAll('.nav-links li');

anchorLinksArr.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.hash;
    const targetElement = document.querySelector(targetId);
    const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top - gap;

    scrollTo({
      top: targetOffsetTop,
      behavior: 'smooth'
    });
  });
});

addEventListener('scroll', function () {
  const $topBtn = document.querySelector('#top-button');
  const scroll = window.pageYOffset;
  if (scroll > 300) {
    $topBtn.style.display = 'block';
  } else {
    $topBtn.style.display = 'none';
  }
});

$burger.addEventListener('click', () => {
  $nav.classList.toggle('active');

  $navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinksFade 0.2s ease forwards ${index / 7}s`;
    }
  });
  $burger.classList.toggle('toggle');
});

