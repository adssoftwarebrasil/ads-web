import { Award, Clock, Users, ThumbsUp } from 'lucide-react';

const STATS = [
  { icon: Award, value: '16+', label: 'Anos de Experiência' },
  { icon: Clock, value: '2024', label: 'Sob nova gestão' },
  { icon: Users, value: '100%', label: 'Satisfação Garantida' },
  { icon: ThumbsUp, value: '5.0', label: 'Avaliação Google' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-brand-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://storage.lucasmendes.dev/site-sp/lord%20car%20auto%20center/img/fachada-auto-center-lordcar-pecas-servicos_3840x2160.webp"
                alt="Fachada Lord Car Auto Center"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-brand-yellow rounded-2xl p-5 shadow-xl shadow-brand-dark/20">
              <p className="text-brand-dark font-black text-3xl leading-none">16+</p>
              <p className="text-brand-dark/70 text-xs font-semibold mt-1">Anos no<br />mercado</p>
            </div>

            <div className="absolute -top-4 -left-4 sm:-left-6 bg-brand-dark rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-3.5 h-3.5 text-brand-yellow fill-brand-yellow" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white text-xs font-bold">Avaliação 5.0</p>
              <p className="text-white/50 text-xs">Google Reviews</p>
            </div>
          </div>

          <div>
            <span className="inline-block bg-brand-yellow/15 text-brand-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-5 tracking-wide">
              Nossa história
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark leading-tight mb-6">
              Dedicação e Qualidade{' '}
              <span className="relative inline-block">
                em Cada Serviço
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-brand-yellow/60 rounded-full" />
              </span>
            </h2>

            <p className="text-brand-midgray text-base leading-relaxed mb-4">
              A <strong className="text-brand-dark font-semibold">Lord Car Auto Center</strong> foi adquirida e iniciou suas atividades em{' '}
              <strong className="text-brand-dark font-semibold">10 de outubro de 2024</strong>. À frente do negócio estão os sócios{' '}
              <strong className="text-brand-dark font-semibold">Emerson e Cleiton</strong>, profissionais com{' '}
              <strong className="text-brand-dark font-semibold">mais de 16 anos de experiência</strong> no ramo automotivo.
            </p>

            <p className="text-brand-midgray text-base leading-relaxed mb-8">
              Nosso diferencial vai além da técnica: trabalhamos com <strong className="text-brand-dark">comprometimento, transparência
              e respeito total aos prazos</strong>. Sem enrolação, sem surpresas — apenas um serviço eficiente que coloca
              seu carro de volta na estrada com segurança e confiança.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="bg-brand-softgray rounded-xl p-4 text-center group hover:bg-brand-yellow/10 transition-colors duration-200"
                >
                  <Icon size={20} className="text-brand-dark mx-auto mb-2 group-hover:text-brand-dark/70" />
                  <p className="text-brand-dark font-black text-xl leading-none mb-1">{value}</p>
                  <p className="text-brand-midgray text-xs leading-tight">{label}</p>
                </div>
              ))}
            </div>

            <a
              href="http://wa.me/556692327182?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Lord%20Car."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-dark text-white font-semibold px-7 py-3.5 rounded-full hover:bg-brand-midgray transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Fale com nossa equipe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
