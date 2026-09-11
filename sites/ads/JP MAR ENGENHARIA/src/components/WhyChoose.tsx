import { CheckCircle } from 'lucide-react';

const reasons = [
  {
    title: 'Expertise no Mercado',
    text: 'Mais de 15 anos de atuação em Engenharia Ambiental e SST no Nordeste.',
  },
  {
    title: 'Resultados Comprovados',
    text: 'Portfólio com mais de 200 projetos bem-sucedidos em diversos setores.',
  },
  {
    title: 'Relatórios Detalhados',
    text: 'Documentação técnica clara, precisa e dentro dos prazos acordados.',
  },
  {
    title: 'Acompanhamento Contínuo',
    text: 'Suporte em todas as etapas do projeto, do planejamento à conclusão.',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-slide-left ">
            <span className="text-[#2d7a3a] text-xs font-medium uppercase tracking-widest mb-3 block">Por Que Contratar?</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#013413] mb-5 leading-snug">
              Por Que Escolher a JPMAR?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Optar pela JPMAR Ambiental é garantir serviços de qualidade e segurança para seu projeto. Nossa abordagem
              técnica e personalizada assegura resultados que excedem as expectativas dos nossos clientes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reasons.map((reason) => (
                <div key={reason.title} className="animate-fade-up  flex gap-3" style={{ transitionDelay: '0s' }}>
                  <CheckCircle
                    width={18}
                    height={18}
                    className="lucide lucide-circle-check text-[#2d7a3a] flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-[#013413] text-sm">{reason.title}</p>
                    <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{reason.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#contato"
              className="inline-block mt-8 px-8 py-3.5 bg-[#013413] text-[#f8f1e1] font-medium rounded-full text-sm tracking-wide hover:bg-[#2d7a3a] transition-all duration-300 hover:-translate-y-0.5"
            >
              Solicitar Orçamento
            </a>
          </div>
          <div className="animate-slide-right  relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                alt="Análise ambiental JPMAR"
                className="w-full h-[480px] object-cover object-top"
                src="https://storage.lucasmendes.dev/site-sp/jpmarambiental/mapa-btex-total-contaminacao-concentracao-pontos-vermelhos_890x1003.webp"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#013413]/20 rounded-3xl"></div>
            </div>
            <div className="absolute -top-6 -right-6 w-36 h-36 bg-[#f8f1e1] rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#013413]/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
