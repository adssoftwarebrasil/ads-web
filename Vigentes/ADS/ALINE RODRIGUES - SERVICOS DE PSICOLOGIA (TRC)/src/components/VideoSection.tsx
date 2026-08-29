import { Play } from 'lucide-react';
import CTAButton from './CTAButton';
import Reveal from './Reveal';

export default function VideoSection() {
  return (
    <section className="bg-brand-beigeDeep py-20 md:py-28 relative overflow-hidden grain">
      <Reveal className="max-w-6xl mx-auto px-4 md:px-8 text-center relative">
        <h2 className="font-display text-3xl md:text-5xl lg:text-[3.25rem] text-brand-brown font-bold leading-[1.1] max-w-4xl mx-auto">
          Entenda como desenvolver
          <br />
          <span className="italic font-normal text-brand-brown/70">raciocínio clínico na prática</span>
        </h2>
        <p className="text-base md:text-lg text-brand-gray mt-5 max-w-2xl mx-auto leading-relaxed">
          Neste vídeo, você vai entender por que muitos psicólogos travam na sessão mesmo tendo conhecimento
          teórico — e como desenvolver segurança na prática clínica.
        </p>
        <div className="mt-12 max-w-4xl mx-auto relative">
          <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-br from-brand-brown/25 via-brand-brown/15 to-brand-brown/30 rounded-3xl blur-xl opacity-60" />
          <div className="relative aspect-video rounded-2xl shadow-2xl overflow-hidden bg-brand-brown ring-1 ring-brand-brown/20">
            <button className="absolute inset-0 z-10 group" aria-label="Reproduzir vídeo">
              <img
                src="https://storage.lucasmendes.dev/caroba/curso-aline-rodrigues/alteracoes/AlineComprimido2.jpeg"
                alt="Thumbnail do vídeo"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/70 via-brand-brown/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-black rounded-full blur-2xl opacity-40 scale-150" />
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play
                      size={34}
                      fill="currentColor"
                      strokeWidth={0}
                      className="lucide lucide-play text-brand-brown ml-1.5"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7 text-left text-white">
                <p className="text-xs md:text-sm uppercase tracking-widest text-white/80 mb-1">Aline Rodrigues</p>
                <p className="font-display text-base md:text-xl font-semibold">Raciocínio clínico na prática</p>
              </div>
            </button>
          </div>
        </div>
        <div className="mt-12">
          <CTAButton label="Quero começar agora" />
        </div>
      </Reveal>
    </section>
  );
}
