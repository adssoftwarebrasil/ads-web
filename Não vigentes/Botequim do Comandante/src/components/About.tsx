import { useInView } from '../hooks/useInView';
import { Award, Users, Clock, Heart } from 'lucide-react';

const stats = [
  { icon: <Clock size={20} />, value: '+3', label: 'Anos de história' },
  { icon: <Users size={20} />, value: '4.7★', label: 'Avaliação Google' },
  { icon: <Award size={20} />, value: '100%', label: 'Ambiente familiar' },
  { icon: <Heart size={20} />, value: 'Pet', label: 'Friendly' },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-brand-black overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <p className="section-label mb-4">Nossa história</p>
            <h2 className="section-title text-4xl sm:text-5xl mb-6 leading-tight">
              Uma paixão que
              <br />
              <span className="text-brand-gold">virou tradição</span>
            </h2>

            <p className="text-brand-gray-light leading-relaxed mb-6 text-lg">
              Fundado por <strong className="text-brand-white">Valter Caobianco Junior</strong> e{' '}
              <strong className="text-brand-white">Danyelle Cantanhede Caobianco</strong>, o Botequim do
              Comandante nasceu do sonho de criar um espaço onde boa comida, amizade e histórias se
              encontram.
            </p>

            <p className="text-brand-gray leading-relaxed mb-8">
              Inspirado na rica tradição dos botequins brasileiros e decorado com elementos da aviação —
              hélices, fotos históricas e memorabilia — o espaço é uma homenagem aos grandes aventureiros
              dos céus. Cada detalhe foi pensado para criar um ambiente acolhedor, onde você se sente em
              casa desde a primeira visita.
            </p>

            <div className="border-l-2 border-brand-gold pl-6 mb-10">
              <p className="text-brand-white italic text-lg font-serif">
                "Um espaço de amizade e descontração, onde cada visita se torna memorável."
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 p-4 text-center hover:border-brand-gold/40 transition-colors duration-300"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="text-brand-gold mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-brand-white font-bold text-xl font-serif">{stat.value}</div>
                  <div className="text-brand-gray text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="grid grid-cols-2 gap-3 h-[550px]">
              <div className="row-span-2 relative overflow-hidden group">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/botequim%20do%20comandante/img/parede-decorada-avioes-fotos-e-helice-relogio_1200x1600.webp"
                  alt="Decoração temática de aviação"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="relative overflow-hidden group">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/botequim%20do%20comandante/img/tres-homens-helice-restaurante-tema-aviacao_1024x1280.webp"
                  alt="Ambiente do bar"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="relative overflow-hidden group">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/botequim%20do%20comandante/img/carro-azul-boteco-do-comandante-rua_900x1600.webp"
                  alt="Fachada do Botequim do Comandante"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="text-brand-white text-xs font-semibold">Av. São João, 249 - Goiânia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
