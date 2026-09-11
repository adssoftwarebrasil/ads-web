import { CheckCircle2, Calendar, MapPin, Clock } from 'lucide-react';

const BASE = 'https://storage.lucasmendes.dev/site-sp/casa%20das%20embalagens';

const highlights = [
  { icon: Calendar, text: 'Mais de 7 anos no mercado de embalagens' },
  { icon: MapPin, text: 'Atendemos Trindade e toda região de Goiânia' },
  { icon: CheckCircle2, text: 'Maior variedade em embalagens da região' },
  { icon: Clock, text: 'Seg. a Sex. 08h–19h | Sáb. até 18h' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-yellow/30 rounded-3xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-brand-red/10 rounded-3xl -z-10" />
            <img
              src={`${BASE}/quem-somos-casa-das-embalagens.jpg`}
              alt="Quem Somos - Casa das Embalagens"
              className="w-full rounded-3xl shadow-2xl object-cover aspect-[4/3]"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-brand-yellow rounded-xl p-2.5">
                  <Calendar size={20} className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-brand-blue font-black text-xl">+7 Anos</p>
                  <p className="text-gray-500 text-xs">de experiência no mercado</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block bg-brand-blue/10 text-brand-blue font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Quem Somos
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-blue leading-tight mb-5">
              Sua loja especializada em{' '}
              <span className="text-brand-red">embalagens</span> em Trindade-GO
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A Casa das Embalagens está no ramo de embalagens há mais de 7 anos, oferecendo a maior variedade em embalagens da região. Somos referência em Trindade e Goiânia, atendendo desde pequenos empreendedores até grandes estabelecimentos.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Nosso compromisso é oferecer produtos de qualidade, com o melhor atendimento, tanto para compra presencial em nossa loja quanto com entregas em toda a região.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item.text} className="flex items-start gap-3 bg-gray-50 rounded-xl p-3.5">
                  <div className="bg-brand-yellow rounded-lg p-1.5 mt-0.5 flex-shrink-0">
                    <item.icon size={15} className="text-brand-blue" />
                  </div>
                  <p className="text-gray-700 text-sm font-medium leading-snug">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href="https://wa.me/5562984075879"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-blue text-white font-bold text-sm px-6 py-3.5 rounded-full hover:bg-brand-blue-dark transition-all duration-300 hover:scale-105 shadow-md"
              >
                Fale Conosco
              </a>
              <a
                href="https://www.instagram.com/casadasembalagensr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-brand-blue text-brand-blue font-bold text-sm px-6 py-3.5 rounded-full hover:bg-brand-blue hover:text-white transition-all duration-300"
              >
                @casadasembalagensr
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
