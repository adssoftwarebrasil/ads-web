// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle?.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  const icon = menuToggle.querySelector('i');
  icon.className = mainNav.classList.contains('open') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});
document.querySelectorAll('#mainNav a').forEach(a => a.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.querySelector('i').className = 'fa-solid fa-bars';
}));

// Hero background slideshow
(() => {
  const slides = document.querySelectorAll('#heroBg .hero-slide');
  if (slides.length < 2) return;
  let i = 0;
  setInterval(() => {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
  }, 3500);
})();

// Header shadow on scroll
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 30);
});

// Services data (copy nova premium)
const servicos = [
  {
    title: 'Cortinas em Tecido',
    galeria: 'cortinas',
    fotos: 23,
    img: 'assets/servicos/cortinas.png?v=2',
    desc: 'Do clássico ao contemporâneo: tecidos leves, blackout, translúcidos e texturizados que conferem conforto térmico, controle de luminosidade e sofisticação ao ambiente.'
  },
  {
    title: 'Persianas',
    galeria: 'persianas',
    fotos: 19,
    img: 'assets/servicos/persianas.png?v=2',
    desc: 'Variedade completa de estilos, trabalhamos com modelos de persianas verticais, horizontais de alumínio, rolô e romana, além de uma ampla linha de tecidos blackout, translúcidos e tela solar (1, 3 e 5%), ideais para controle de luminosidade, conforto térmico e sofisticação em qualquer ambiente.'
  },
  {
    title: 'Papel de Parede',
    galeria: 'papel-parede',
    fotos: 16,
    img: 'assets/servicos/papel-parede.png?v=3',
    desc: 'Disponibilizamos uma ampla variedade de texturas, estampas e cores, incluindo florais, listrados, infantis, botânicos, efeitos linho e geométricos, perfeitos para transformar salas, quartos, escritórios e espaços comerciais.'
  },
  {
    title: 'Boiserie',
    galeria: 'boiserie',
    fotos: 9,
    img: 'assets/servicos/boiserie.png?v=2',
    desc: 'O boiserie é um elemento decorativo atemporal que agrega requinte, profundidade e personalidade às paredes. Com molduras aplicadas diretamente na superfície, cria composição arquitetônica elegante, valorizando espaços como salas, quartos, corredores, halls, escritórios e ambientes comerciais.'
  },
  {
    title: 'Vidraçaria',
    galeria: 'vidracaria',
    fotos: 21,
    img: 'assets/servicos/vidracaria.png?v=2',
    desc: 'Soluções em vidro com segurança, design e acabamento de alto padrão, oferecendo projetos sob medida com vidro temperado certificado, garantindo durabilidade, sofisticação e máxima segurança.'
  },
  {
    title: 'Espelhos',
    galeria: 'espelhos',
    fotos: 13,
    img: 'assets/servicos/espelhos.jpg?v=1',
    desc: 'Espelhos sob medida que ampliam, iluminam e valorizam qualquer ambiente. Trabalhamos com modelos orgânicos, redondos, retangulares e com led embutido, com lapidação caprichada e instalação feita pela nossa equipe, para lavabos, banheiros, quartos, salas, closets e espaços comerciais.'
  },
  {
    title: 'Toldos',
    galeria: 'toldos',
    fotos: 14,
    img: 'assets/servicos/toldos.png?v=3',
    desc: 'Proteção, conforto e estética para áreas externas. Oferecemos toldos modernos e resistentes, desenvolvidos para garantir proteção solar, conforto térmico e valorização estética de varandas, fachadas, janelas, áreas gourmet e espaços comerciais. Trabalhamos com materiais de alta qualidade, instalação profissional e acabamento impecável.'
  },
  {
    title: 'Cobertura em Policarbonato',
    galeria: 'cobertura',
    fotos: 9,
    img: 'assets/servicos/cobertura.png?v=3',
    desc: 'Soluções em cobertura de policarbonato que unem proteção, iluminação natural e design moderno. Trabalhamos com instalação profissional, materiais de alta qualidade e acabamento impecável, ideais para garagens, áreas gourmet, corredores, varandas e espaços comerciais.'
  },
  {
    title: 'Forro PVC',
    galeria: 'forro-pvc',
    fotos: 10,
    img: 'assets/servicos/forro-pvc.png?v=2',
    desc: 'O forro de PVC é a solução ideal para quem busca revestimento resistente e com excelente custo-benefício. Indicado para ambientes residenciais, comerciais e industriais, oferece visual sofisticado, conforto térmico e mínima necessidade de manutenção.'
  },
  {
    title: 'Drywall',
    galeria: 'drywall',
    fotos: 5,
    img: 'assets/servicos/drywall.png?v=3',
    desc: 'Versatilidade e eficiência para construção e reformas. Soluções em drywall sob medida para divisórias, forros, sancas e projetos personalizados, oferecendo instalação rápida, excelente acabamento, conforto térmico e acústico, além de praticidade e economia para obras residenciais e comerciais.'
  }
];

const grid = document.getElementById('servicosGrid');
if (grid) {
  grid.innerHTML = servicos.map((s, si) => {
    const wppText = `Olá, vim do seu site e gostaria de solicitar um orçamento para ${s.title}.`;
    const wppLink = `https://wa.me/5562999911485?text=${encodeURIComponent(wppText)}`;
    // capa + fotos reais da categoria, tudo num carrossel dentro do proprio card
    const shots = [s.img];
    for (let i = 1; i <= (s.fotos || 0); i++) {
      shots.push(`assets/servicos/galeria/${s.galeria}/${String(i).padStart(2, '0')}.jpg?v=2`);
    }
    const slides = shots.map((src, i) => `
          <div class="cs-slide${i === 0 ? ' active' : ''}" data-src="${src}">
            <img alt="${s.title} — foto ${i + 1}" ${i === 0 ? `src="${src}"` : ''} loading="lazy" decoding="async">
          </div>`).join('');
    const nav = shots.length > 1 ? `
        <button class="cs-nav cs-prev" type="button" aria-label="Foto anterior de ${s.title}"><i class="fa-solid fa-chevron-left"></i></button>
        <button class="cs-nav cs-next" type="button" aria-label="Próxima foto de ${s.title}"><i class="fa-solid fa-chevron-right"></i></button>
        <span class="cs-count"><b>1</b> / ${shots.length}</span>` : '';
    return `
      <article class="card reveal">
        <div class="card-slider" data-slider="${si}" role="group" aria-roledescription="carrossel" aria-label="Fotos de ${s.title}">
          <div class="cs-slides">${slides}</div>
          ${nav}
        </div>
        <div class="card-body">
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
          <a href="${wppLink}" class="card-cta" target="_blank" rel="noopener">
            Solicitar Orçamento <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </article>
    `;
  }).join('');

  // carrossel de cada card: setas, arrastar no celular e carga sob demanda
  grid.querySelectorAll('.card-slider').forEach(sl => {
    const slides = [...sl.querySelectorAll('.cs-slide')];
    if (slides.length < 2) return;
    const count = sl.querySelector('.cs-count b');
    let i = 0;

    const preload = (n) => {
      [n - 1, n, n + 1].forEach(k => {
        const el = slides[(k + slides.length) % slides.length];
        const img = el.querySelector('img');
        if (!img.getAttribute('src')) img.src = el.dataset.src;
      });
    };
    const go = (n) => {
      i = (n + slides.length) % slides.length;
      preload(i);
      slides.forEach((el, k) => el.classList.toggle('active', k === i));
      if (count) count.textContent = i + 1;
    };

    sl.querySelector('.cs-prev')?.addEventListener('click', () => go(i - 1));
    sl.querySelector('.cs-next')?.addEventListener('click', () => go(i + 1));

    // arrastar com o dedo
    let x0 = null;
    sl.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
    sl.addEventListener('touchend', e => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) go(dx < 0 ? i + 1 : i - 1);
      x0 = null;
    }, { passive: true });

    // so comeca a baixar as fotos quando o card aparece na tela
    new IntersectionObserver((en, obs) => {
      if (en[0].isIntersecting) { preload(0); obs.disconnect(); }
    }, { rootMargin: '200px' }).observe(sl);
  });

  // re-observe new cards
  observeReveal();
}

// Contact form -> WhatsApp
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const text = `Olá! Meu nome é ${data.get('nome')}.\nAssunto: ${data.get('assunto') || 'Orçamento'}\nMensagem: ${data.get('mensagem') || '-'}\nContato: ${data.get('whatsapp')} / ${data.get('email')}`;
  window.open(`https://wa.me/5562999911485?text=${encodeURIComponent(text)}`, '_blank');
});

// Reveal on scroll
function observeReveal() {
  const els = document.querySelectorAll('.reveal:not(.in)');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
}
observeReveal();

// ===== Galeria de Vídeos =====
// Sem titulo por pedido da cliente: os titulos nao correspondiam aos videos.
const videoList = [
  'assets/videos/video-3.mp4',
  'assets/videos/video-4.mp4',
  'assets/videos/video-5.mp4',
  'assets/videos/video-6.mp4',
  'assets/videos/video-7.mp4',
  'assets/videos/video-8.mp4',
  'assets/videos/video-9.mp4',
  'assets/videos/video-10.mp4',
  'assets/videos/video-11.mp4',
  'assets/videos/video-12.mp4',
];

const galTrack = document.getElementById('galTrack');
const galDots = document.getElementById('galDots');
if (galTrack) {
  galTrack.innerHTML = videoList.map((src, i) => `
    <article class="gal-card" data-index="${i}">
      <div class="gal-media">
        <video muted loop playsinline preload="metadata" src="${src}#t=0.5"></video>
        <div class="gal-overlay">
          <button class="gal-play" aria-label="Assistir vídeo ${i + 1}">
            <i class="fa-solid fa-play"></i>
          </button>
        </div>
        <span class="gal-badge"><i class="fa-solid fa-volume-xmark"></i> Sem som</span>
      </div>
    </article>
  `).join('');

  galDots.innerHTML = videoList.map((_, i) => `<button class="gal-dot${i === 0 ? ' active' : ''}" data-i="${i}" aria-label="Ir para vídeo ${i+1}"></button>`).join('');

  // Autoplay only when visible (perf)
  const vids = galTrack.querySelectorAll('video');
  const vio = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      const v = en.target;
      if (en.isIntersecting) { v.play().catch(()=>{}); } else { v.pause(); }
    });
  }, { threshold: 0.25 });
  vids.forEach(v => vio.observe(v));

  // Scroll snap navigation
  const cardWidth = () => {
    const c = galTrack.querySelector('.gal-card');
    return c ? c.getBoundingClientRect().width + 24 : 320;
  };
  document.getElementById('galPrev')?.addEventListener('click', () => {
    galTrack.scrollBy({ left: -cardWidth(), behavior: 'smooth' });
  });
  document.getElementById('galNext')?.addEventListener('click', () => {
    galTrack.scrollBy({ left: cardWidth(), behavior: 'smooth' });
  });

  // Dots
  galDots.addEventListener('click', (e) => {
    const b = e.target.closest('.gal-dot');
    if (!b) return;
    const i = +b.dataset.i;
    const card = galTrack.querySelector(`.gal-card[data-index="${i}"]`);
    if (card) galTrack.scrollTo({ left: card.offsetLeft - galTrack.offsetLeft, behavior: 'smooth' });
  });
  galTrack.addEventListener('scroll', () => {
    const sl = galTrack.scrollLeft;
    let bestI = 0, bestD = Infinity;
    galTrack.querySelectorAll('.gal-card').forEach((c, i) => {
      const d = Math.abs(c.offsetLeft - galTrack.offsetLeft - sl);
      if (d < bestD) { bestD = d; bestI = i; }
    });
    galDots.querySelectorAll('.gal-dot').forEach((d, i) => d.classList.toggle('active', i === bestI));
  }, { passive: true });

  // Modal
  const modal = document.getElementById('videoModal');
  const modalPlayer = document.getElementById('videoModalPlayer');
  const openModal = (src) => {
    modalPlayer.src = src;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalPlayer.play().catch(()=>{});
  };
  const closeModal = () => {
    modalPlayer.pause();
    modalPlayer.removeAttribute('src');
    modalPlayer.load();
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };
  galTrack.addEventListener('click', (e) => {
    const card = e.target.closest('.gal-card');
    if (!card) return;
    openModal(videoList[+card.dataset.index]);
  });
  modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });

  observeReveal();
}
