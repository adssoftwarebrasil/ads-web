import { useEffect, useState } from 'react';
import { scrollToSection, WHATSAPP_URL } from '../lib/scroll';

const backgrounds: string[] = [
  'https://storage.lucasmendes.dev/site-sp/Marco%20Placas/background/justica-federal-atualizada.webp',
  'https://storage.lucasmendes.dev/site-sp/Marco%20Placas/img/placa-somos-coop.webp',
  'https://storage.lucasmendes.dev/site-sp/Marco%20Placas/Placas/invisalign-logo-parede.webp',
  'https://storage.lucasmendes.dev/site-sp/Marco%20Placas/img/placa-trofeus-metalicos-modernos.webp',
  'https://storage.lucasmendes.dev/site-sp/Marco%20Placas/background/background-img-mais-01.webp',
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black"
    >
      {backgrounds.map((bg, i) => (
        <div
          key={bg}
          className={`absolute inset-0 bg-cover bg-center md:bg-fixed bg-no-repeat transition-opacity duration-1000 ease-in-out will-change-opacity ${
            i === active ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{ backgroundImage: `url("${bg}")` }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-20" />
      <div className="relative z-30 max-w-5xl mx-auto px-5 md:px-10 text-center w-full mt-auto mb-20 md:mb-0 md:mt-32 transition-all duration-1000 opacity-100 translate-y-0">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[rgb(167,28,31)] text-white px-8 py-4 rounded-md hover:bg-[rgb(120,20,22)] transition-all hover:scale-105 font-semibold text-lg shadow-xl"
          >
            Solicitar Orçamento Gratuito
          </a>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="border-2 border-white text-white bg-black/20 md:bg-transparent px-8 py-4 rounded-md hover:bg-white hover:text-[rgb(167,28,31)] transition-all hover:scale-105 font-semibold text-lg backdrop-blur-sm md:backdrop-blur-none"
          >
            Ver Nossos Trabalhos
          </button>
        </div>
      </div>
    </section>
  );
}
