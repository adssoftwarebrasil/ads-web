import { CheckCircle } from 'lucide-react';

const items = [
  {
    title: 'Soluções Personalizadas',
    text: 'Cada projeto recebe uma abordagem única, desenvolvida especificamente para suas necessidades e desafios.',
  },
  {
    title: 'Compromisso com a Sustentabilidade',
    text: 'Todas as soluções são desenvolvidas com foco na preservação ambiental e no desenvolvimento sustentável.',
  },
  {
    title: 'Atendimento Especializado',
    text: 'Profissionais qualificados e experientes para atender suas necessidades com excelência técnica.',
  },
  {
    title: 'Inovação Contínua',
    text: 'Estamos sempre atualizados com as melhores práticas, tecnologias e legislações ambientais vigentes.',
  },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="py-20 md:py-28 bg-[#f8f1e1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-slide-left  relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                alt="Área de atuação JPMAR"
                className="w-full h-80 md:h-96 object-cover"
                src="https://storage.lucasmendes.dev/site-sp/jpmarambiental/vista-aerea-rodovia-construcao-verde-azul_1280x712.webp"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#013413]/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2.5 text-center">
                  <p className="text-white text-sm font-semibold">+15 Anos</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2.5 text-center">
                  <p className="text-white text-sm font-semibold">+200 Projetos</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#013413]/8 rounded-full blur-2xl"></div>
          </div>
          <div className="animate-slide-right  order-1 lg:order-2">
            <span className="text-[#2d7a3a] text-xs font-medium uppercase tracking-widest mb-3 block">Vantagens</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#013413] mb-8 leading-snug">
              Vantagens de Escolher a JPMAR
            </h2>
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <div key={item.title} className="animate-slide-right  flex gap-4" style={{ transitionDelay: '0s' }}>
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle
                      width={20}
                      height={20}
                      className="lucide lucide-circle-check text-[#2d7a3a]"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#013413] mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
