import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useIsMobile, useReducedMotion } from '../hooks/useMediaQuery';
import WhatsAppLink from './ui/WhatsAppLink';

const trustItems = ['Uma história desde 1979', 'Scanner intraoral e raio-X digital', 'Planejamento individual'];

/** Respeita o modo de economia de dados do navegador antes de baixar o vídeo. */
function useSaveData(): boolean {
  const [saveData, setSaveData] = useState(false);
  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    setSaveData(Boolean(connection?.saveData));
  }, []);
  return saveData;
}

export default function Hero() {
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();
  const saveData = useSaveData();
  const [mounted, setMounted] = useState(false);

  // O vídeo só entra depois do primeiro paint, para não competir com o LCP.
  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 250);
    return () => window.clearTimeout(timer);
  }, []);

  const showVideo = mounted && !isMobile && !reducedMotion && !saveData;

  return (
    <section id="inicio" className="pt-4 max-md:pt-[10px]">
      <div className="blueprint blueprint-hero relative mx-auto grid min-h-[clamp(640px,calc(100svh-100px),800px)] w-[min(1480px,calc(100%-48px))] place-items-center overflow-hidden rounded-hero px-8 pb-[clamp(4.4rem,6.5vw,5rem)] pt-[clamp(7rem,9vw,10rem)] text-white max-md:min-h-0 max-md:w-[calc(100%-20px)] max-md:rounded-[22px] max-md:px-6 max-md:pb-[4.1rem] max-md:pt-[7.1rem]">
        <div className="absolute inset-0 -z-[3] overflow-hidden" aria-hidden="true">
          <img
            src="/media/hero-poster.webp"
            alt=""
            width={1600}
            height={900}
            {...{ fetchpriority: 'high' }}
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {showVideo && (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster="/media/hero-poster.webp"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/media/hero.mp4" type="video/mp4" />
            </video>
          )}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,17,31,.72)_0%,rgba(7,27,50,.5)_45%,rgba(4,17,31,.82)_100%)]" />
        </div>

        <svg
          viewBox="0 0 180 220"
          aria-hidden="true"
          className="absolute -bottom-[4%] left-[4%] -z-[1] w-[clamp(155px,19vw,280px)] rotate-[-11deg] fill-none stroke-[rgba(90,216,237,.14)] stroke-[1.2] max-md:-bottom-7 max-md:-left-9 max-md:w-[138px]"
        >
          <path d="M45 22C15 42 16 91 37 122c18 26 25 74 47 76 18 1 17-43 32-43s14 44 32 43c22-2 29-50 47-76 21-31 22-80-8-100-27-18-55-8-71 5-16-13-44-23-71-5Z" />
          <path d="M33 81c37 20 76 20 116 0M40 112c32 17 67 17 101 0" />
        </svg>
        <svg
          viewBox="0 0 180 180"
          aria-hidden="true"
          className="absolute right-[4%] top-[17%] -z-[1] w-[clamp(130px,15vw,220px)] rotate-[12deg] fill-none stroke-[rgba(90,216,237,.14)] stroke-[1.2] max-md:-right-[22px] max-md:top-[24%] max-md:w-24 max-[390px]:hidden"
        >
          <path d="M90 21v138M62 39h56M66 64h48M69 89h42M73 114h34M77 139h26M78 18h24l-5 22H83l-5-22ZM75 159h30" />
          <circle cx="90" cy="18" r="11" />
        </svg>

        <div className="relative z-[2] mx-auto max-w-[900px] text-center">
          <p className="eyebrow !text-cyan-soft text-[clamp(.68rem,.74vw,.78rem)] tracking-[.17em] max-md:text-[.64rem] max-md:tracking-[.135em]">
            REZENDE ODONTOLOGIA <span className="px-[.45rem] text-cyan-brand">•</span> UMA HISTÓRIA DESDE 1979{' '}
            <span className="px-[.45rem] text-cyan-brand">•</span> IPATINGA/MG
          </p>
          <h1 className="mx-auto mb-[1.2rem] mt-4 max-w-[880px] font-display text-[clamp(3.4rem,5.4vw,5.9rem)] font-light leading-[.98] tracking-[-.055em] [text-wrap:balance] max-md:max-w-[350px] max-md:text-[clamp(2.65rem,11.5vw,3.5rem)]">
            Seu sorriso merece um cuidado à altura da sua história.
          </h1>
          <p className="mx-auto max-w-[700px] text-[clamp(1.03rem,1.22vw,1.17rem)] leading-[1.6] text-[rgba(238,250,252,.86)] max-md:max-w-[345px] max-md:text-base">
            Implantes, próteses, facetas e reabilitação oral com tecnologia, planejamento e atendimento próximo em
            Ipatinga.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-[.72rem] max-md:mx-auto max-md:grid max-md:w-[min(100%,326px)]">
            <WhatsAppLink section="hero" position="primary" className="btn btn-cyan min-h-[50px] px-[1.2rem] max-md:w-full">
              Agendar minha avaliação
              <ArrowUpRight size={16} aria-hidden="true" />
            </WhatsAppLink>
            <a href="#tratamentos" className="btn btn-ghost min-h-[50px] px-[1.2rem] max-md:w-full">
              Conhecer tratamentos
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>

          <ul className="mx-auto mt-9 flex max-w-[720px] flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[.72rem] font-bold uppercase tracking-[.1em] text-[rgba(226,247,252,.62)] max-md:mt-7 max-md:gap-x-4 max-md:text-[.62rem]">
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden="true" className="h-[5px] w-[5px] rounded-full bg-cyan-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <a
          href="#posicionamento"
          className="absolute bottom-[22px] left-1/2 grid -translate-x-1/2 justify-items-center gap-[.18rem] text-[.55rem] font-extrabold tracking-[.18em] text-[rgba(236,253,255,.56)] max-md:bottom-[17px]"
        >
          <span>EXPLORE</span>
          <ArrowDown size={16} aria-hidden="true" className="animate-cue" />
        </a>
      </div>
    </section>
  );
}
