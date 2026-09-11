(function(){
  // Reveal on scroll
  var items = document.querySelectorAll('.reveal');
  if (items.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function(el){ io.observe(el); });
  } else {
    items.forEach(function(el){ el.classList.add('is-in'); });
  }

  // Mobile menu
  var toggle = document.querySelector('.nav__toggle');
  var drawer = document.querySelector('.nav__drawer');
  if (toggle && drawer) {
    var open = false;
    var setOpen = function(v){
      open = v;
      drawer.classList.toggle('is-open', v);
      drawer.setAttribute('aria-hidden', v ? 'false' : 'true');
      toggle.setAttribute('aria-expanded', v ? 'true' : 'false');
      toggle.setAttribute('aria-label', v ? 'Fechar menu' : 'Abrir menu');
      document.body.style.overflow = v ? 'hidden' : '';
    };
    toggle.addEventListener('click', function(){ setOpen(!open); });
    drawer.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ setOpen(false); });
    });
  }

  // Slideshow (.about__slider)
  var slides = document.querySelectorAll('.about__slide');
  var dots = document.querySelectorAll('.about__dot');
  if (slides.length > 1) {
    var idx = 0;
    var go = function(i){
      idx = (i + slides.length) % slides.length;
      slides.forEach(function(s, k){ s.classList.toggle('is-active', k === idx); });
      dots.forEach(function(d, k){
        d.classList.toggle('is-active', k === idx);
        d.setAttribute('aria-selected', k === idx ? 'true' : 'false');
      });
    };
    dots.forEach(function(d, k){ d.addEventListener('click', function(){ go(k); }); });
    setInterval(function(){ go(idx + 1); }, 4000);
  }

  // Garantir marquee rodando (já é via CSS keyframes; sem ação necessária)
})();