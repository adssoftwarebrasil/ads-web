import { ArrowRight } from 'lucide-react';

const items = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/tatiane-terapeuta-capilar/img/cabelo-ralo-grisalho-vista-de-cima_640x1138.webp',
    tag: 'Tricoscopia',
    title: 'Análise de Rarefação',
    desc: 'Avaliação tricoscópica detalhada do couro cabeludo',
    delay: '0ms',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/tatiane-terapeuta-capilar/img/dermatologista-fazendo-exame-tricologico-em-paciente_900x1600.webp',
    tag: 'Avaliação',
    title: 'Exame Tricológico',
    desc: 'Análise completa para uma avaliação precisa',
    delay: '100ms',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/tatiane-terapeuta-capilar/img/mulher-aparelho-estetico-tkn-mesojectgun-dra-tatiane_1080x1920.webp',
    tag: 'Tratamento',
    title: 'Mesojectgun Capilar',
    desc: 'Aplicação de bioestimuladores com tecnologia TKN',
    delay: '200ms',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/tatiane-terapeuta-capilar/img/rosto-antes-depois-tratamento-pele-manchas_1206x2144.webp',
    tag: 'Resultados',
    title: 'Regeneração da Pele',
    desc: 'Resultados visíveis em tratamento de manchas e rejuvenescimento',
    delay: '300ms',
  },
];

export default function Gallery() {
  return (
    <section id="resultados" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div className="animate-on-scroll">
            <span className="text-[#A6A6A6] text-sm font-medium tracking-widest uppercase">
              Galeria
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#404040] mt-3 leading-snug">
              Tecnologia e <span className="italic text-[#737373]">precisão</span> em cada consulta
            </h2>
          </div>
          <a
            href="http://wa.me/553588973804?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação."
            target="_blank"
            rel="noopener noreferrer"
            className="animate-on-scroll flex items-center gap-2 text-[#737373] hover:text-[#404040] font-medium text-sm transition-colors group whitespace-nowrap"
          >
            Agendar Avaliação
            <ArrowRight
              width={16}
              height={16}
              className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="animate-on-scroll group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
              style={{ animationDelay: item.delay }}
            >
              <div className="overflow-hidden h-[400px]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block bg-[#F8E5E4] text-[#737373] text-[10px] font-semibold px-2 py-0.5 rounded-full mb-1.5">
                  {item.tag}
                </span>
                <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                <p className="text-white/80 text-xs mt-0.5">{item.desc}</p>
              </div>
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 backdrop-blur-sm text-[#737373] text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
