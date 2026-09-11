import { WhatsAppGlyph, WHATSAPP_URL } from './icons';

interface Advantage {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const advantages: Advantage[] = [
  {
    number: '01',
    title: 'Excelência em Atendimento',
    description: 'Nosso compromisso é com a sua satisfação total.',
    image: 'https://storage.lucasmendes.dev/site-sp/gabricioguincho%2FExcele%CC%82ncia%20em%20Atendimento.webp',
    alt: 'Excelência em Atendimento',
  },
  {
    number: '02',
    title: 'Disponibilidade 24/7',
    description: 'Sempre prontos para atender, 7h até 23h30.',
    image: 'https://storage.lucasmendes.dev/site-sp/gabricioguincho%2FDisponibilidade%2024%3A7.webp',
    alt: 'Disponibilidade 24/7',
  },
  {
    number: '03',
    title: 'Equipe Treinada',
    description: 'Profissionais qualificados para oferecer o melhor serviço.',
    image: 'https://storage.lucasmendes.dev/site-sp/gabricioguincho%2FEquipe%20Treinada.webp',
    alt: 'Equipe Treinada',
  },
];

export default function Advantages() {
  return (
    <section
      id="vantagens"
      className="py-16 md:py-24 bg-gradient-to-br from-[hsl(211,66%,95%)] to-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(211,66%,41%)] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(211,66%,41%)] opacity-5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-[hsl(211,66%,41%)] font-semibold text-sm md:text-base tracking-wider uppercase bg-[hsl(211,66%,95%)] px-6 py-2 rounded-full">
              Vantagens
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(211,66%,25%)] mb-4 leading-tight">
            Vantagens de Escolher <br className="hidden md:block" />
            <span className="text-[hsl(211,66%,41%)]">Nosso Serviço</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Serviço de reboque com excelência e confiança
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {advantages.map((a, i) => (
            <div key={a.number} className="group relative">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative z-10">
                <div className="flex justify-center pt-8 pb-4 relative">
                  <div className="absolute top-8 left-1/2 -translate-x-1/2">
                    <div className="w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full border-4 border-[hsl(211,66%,90%)] opacity-50"></div>
                  </div>
                  <div className="absolute top-8 left-1/2 -translate-x-1/2">
                    <div className="w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 rounded-full border-2 border-dashed border-[hsl(211,66%,80%)] opacity-30 animate-spin-slow"></div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-500 ring-4 ring-[hsl(211,66%,41%)] ring-opacity-20">
                      <img src={a.image} alt={a.alt} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-3 -right-3 bg-gradient-to-br from-[#F97316] to-[#ea580c] text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-xl md:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                      {a.number}
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-[hsl(211,66%,25%)] mb-3 group-hover:text-[hsl(211,66%,41%)] transition-colors duration-300">
                    {a.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{a.description}</p>
                </div>
                <div className="h-1.5 bg-gradient-to-r from-transparent via-[hsl(211,66%,41%)] to-transparent group-hover:via-[#F97316] transition-colors duration-500"></div>
              </div>
              {i < advantages.length - 1 && (
                <div className="hidden md:block absolute top-24 -right-4 lg:-right-6 z-0">
                  <svg width="60" height="60" viewBox="0 0 60 60" className="text-[hsl(211,66%,80%)] opacity-40">
                    <line x1="0" y1="30" x2="60" y2="30" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                    <circle cx="55" cy="30" r="3" fill="currentColor" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F97316] to-[#ea580c] text-white px-8 md:px-10 py-4 md:py-5 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold text-base md:text-lg group"
          >
            <WhatsAppGlyph className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Enviar WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
