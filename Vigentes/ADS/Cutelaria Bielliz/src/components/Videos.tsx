import { useEffect, useRef, useState } from 'react';

interface Video {
  id: string;
  title: string;
  text: string;
}

const videos: Video[] = [
  {
    id: 'okjXxhIEHe8',
    title: 'Conheça a Bielliz',
    text: 'Um passeio pela nossa loja e pelas peças que fazem parte da nossa coleção.',
  },
  {
    id: '8Syw0GOHorI',
    title: 'Peças em Detalhe',
    text: 'Veja de perto o acabamento, os cabos e os fios das nossas facas artesanais.',
  },
];

export default function Videos() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="videos"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-[rgb(84,10,1)] to-[rgb(120,30,20)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[rgb(245,241,220)] text-[rgb(84,10,1)] px-4 py-2 rounded-full text-sm font-bold mb-4">
            NOSSOS VÍDEOS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Veja a Bielliz de Perto
          </h2>
          <p className="text-[rgb(245,241,220)] text-lg max-w-3xl mx-auto">
            Assista aos nossos vídeos e conheça os detalhes, o acabamento e a variedade das peças
            que você encontra na nossa loja.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {videos.map(({ id, title, text }) => (
            <div
              key={id}
              className="group bg-gradient-to-br from-[rgb(245,241,220)] to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[rgb(245,241,220)]"
            >
              <div className="relative aspect-[9/16] bg-black overflow-hidden">
                <img
                  src={`https://i.ytimg.com/vi/${id}/oardefault.jpg`}
                  alt={title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {inView && (
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&playsinline=1&controls=0&disablekb=1&fs=0&rel=0&iv_load_policy=3&modestbranding=1`}
                    title={title}
                    allow="autoplay; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    tabIndex={-1}
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                )}
                <div className="absolute inset-0" aria-hidden="true"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[rgb(84,10,1)] mb-2">{title}</h3>
                <p className="text-gray-700 leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://wa.me/5519992079201?text=Olá!%20Vi%20os%20vídeos%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20peças."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[rgb(84,10,1)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(245,241,220)] transition-colors shadow-xl"
          >
            Falar com a Bielliz
          </a>
        </div>
      </div>
    </section>
  );
}
