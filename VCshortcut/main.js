document.addEventListener('DOMContentLoaded', () => {
    const $burger = document.querySelector('.burger');
    const $nav = document.querySelector('.nav-links');
    const $navLinks = document.querySelectorAll('.nav-links li');
    const $topBtn = document.querySelector('#top-button');

    window.addEventListener('scroll', function () {
        const scroll = window.scrollY;
        if (scroll > 300) {
            $topBtn.style.display = 'block';
        } else {
            $topBtn.style.display = 'none';
        }
    });

    $topBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0, // ページの最上部までスクロール
            behavior: 'smooth' // スムーズにスクロール
        });
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
});
