import Reveal from './Reveal';

const modules = [
  {
    title: 'Avaliação Clínica Inicial',
    text: 'Aprenda a conduzir a anamnese e a avaliação diagnóstica de forma estruturada, desenvolvendo o raciocínio clínico desde o primeiro contato com o paciente.',
  },
  {
    title: 'Da Avaliação à Formulação do Caso',
    text: 'Como transformar os dados da avaliação em uma conceitualização cognitiva clara, organizando o raciocínio clínico de forma prática e estruturada.',
  },
  {
    title: 'Direcionamento do Tratamento',
    text: 'Desenvolvimento do raciocínio clínico para definição de metas terapêuticas e construção de planos de tratamento na TCC e em modelos transdiagnósticos.',
  },
  {
    title: 'Condução das Sessões',
    text: 'Como aplicar o raciocínio clínico na condução das sessões, mantendo um fio condutor claro entre os atendimentos e maior segurança na prática.',
  },
  {
    title: 'Intervenções na Prática',
    text: 'Uso do raciocínio clínico para selecionar e aplicar intervenções como psicoeducação e questionamento socrático de forma eficaz.',
  },
  {
    title: 'Encerramento da Terapia',
    text: 'Aplicação do raciocínio clínico no processo de alta terapêutica, com foco em prevenção de recaídas e consolidação dos resultados.',
  },
  {
    title: 'Fundamentos da Mudança Comportamental',
    text: 'Compreensão dos princípios da modificação de comportamento que sustentam o raciocínio clínico e as intervenções na prática.',
  },
  {
    title: 'Engajamento e Manejo de Resistência',
    text: 'Desenvolvimento do raciocínio clínico para aumentar o engajamento do paciente, utilizando entrevista motivacional e estratégias de manejo de resistência.',
  },
  {
    title: 'Processos Emocionais',
    text: 'Como utilizar o raciocínio clínico para compreender e trabalhar emoções em terapia, incluindo intervenções em situações como luto.',
  },
  {
    title: 'Aplicações Comportamentais',
    text: 'Aplicação do raciocínio clínico no uso de estratégias como ativação comportamental e treinamento de habilidades sociais.',
  },
  {
    title: 'Exposição',
    text: 'Desenvolvimento do raciocínio clínico para estruturar e aplicar técnicas de exposição de forma segura, gradual e eficaz.',
  },
  {
    title: 'Demandas Clínicas Comuns na Prática',
    text: 'Aplicação do raciocínio clínico em demandas frequentes, como autoestima, perfeccionismo e intolerância à incerteza.',
  },
];

export default function Modules() {
  return (
    <section id="modulos" className="bg-brand-beige py-20 md:py-28 relative overflow-hidden grain">
      <Reveal className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl lg:text-[3.25rem] text-brand-brown font-bold leading-[1.1]">
            Como o curso é<span className="italic font-normal text-brand-brown/70"> estruturado</span>
          </h2>
          <p className="text-base md:text-lg text-brand-gray mt-5 leading-relaxed">
            12 módulos, do primeiro contato ao encerramento da terapia.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-5 mt-14">
          {modules.map((m, i) => {
            const num = String(i + 1).padStart(2, '0');
            return (
              <div
                key={m.title}
                className="group relative bg-white rounded-2xl p-6 md:p-7 border border-brand-brown/5 overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-brown/40 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <div className="flex gap-5 items-start">
                  <div className="relative flex-shrink-0">
                    <span className="font-display text-5xl md:text-6xl text-brand-brown/10 leading-none font-bold group-hover:text-brand-brown/25 transition-colors">
                      {num}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-brand-accent font-semibold mb-1.5">
                      Módulo {i + 1}
                    </p>
                    <h3 className="font-display text-lg md:text-xl text-brand-brown font-semibold mb-2 leading-snug">
                      {m.title}
                    </h3>
                    <p className="text-sm md:text-[15px] text-brand-gray leading-relaxed">{m.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
