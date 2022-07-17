window.addEventListener('scroll', function () {
  let header = document.querySelector('nav-ban');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
});