// Year
document.getElementById('yr').textContent = new Date().getFullYear();

// YouTube hero loop 12s->60s
(function(){
  const iframe = document.getElementById('yt-bg');
  if(!iframe) return;
  setInterval(function(){
    try{
      iframe.contentWindow.postMessage(JSON.stringify({event:'command',func:'seekTo',args:[12,true]}),'*');
    }catch(e){}
  }, 48000);
})();

// Carousel
(function(){
  const car = document.getElementById('gallery');
  if(!car) return;
  const track = car.querySelector('.carousel-track');
  const slides = car.querySelectorAll('.slide');
  const prev = car.querySelector('.prev');
  const next = car.querySelector('.next');
  let idx = 0;
  function perView(){
    if(window.innerWidth>=1024) return 3;
    if(window.innerWidth>=768) return 2;
    return 1;
  }
  function max(){ return Math.max(0, slides.length - perView()); }
  function go(i){
    idx = Math.max(0, Math.min(i, max()));
    track.style.transform = 'translateX(-' + (idx * (100/perView())) + '%)';
  }
  prev.addEventListener('click', ()=>go(idx-1));
  next.addEventListener('click', ()=>go(idx+1));
  // Autoplay
  let timer = setInterval(()=>{ idx = idx>=max() ? 0 : idx+1; go(idx); }, 4500);
  car.addEventListener('mouseenter', ()=>clearInterval(timer));
  // Touch
  let startX=0;
  track.addEventListener('touchstart', e=>{ startX = e.touches[0].clientX; }, {passive:true});
  track.addEventListener('touchend', e=>{
    const dx = e.changedTouches[0].clientX - startX;
    if(Math.abs(dx)>40) go(idx + (dx<0?1:-1));
  });
  window.addEventListener('resize', ()=>go(idx));
})();
