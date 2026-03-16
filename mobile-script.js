// FAQ toggle
function tFaq(el) {
  var item = el.parentElement;
  var isOpen = item.classList.contains('open');
  document.querySelectorAll('.fitem').forEach(function(i) {
    i.classList.remove('open');
  });
  if (!isOpen) {
    item.classList.add('open');
  }
}

// Nav background on scroll
window.addEventListener('scroll', function() {
  var nav = document.getElementById('nav');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(30, 14, 56, 0.99)';
  } else {
    nav.style.background = 'rgba(45, 21, 80, 0.97)';
  }
}, { passive: true });