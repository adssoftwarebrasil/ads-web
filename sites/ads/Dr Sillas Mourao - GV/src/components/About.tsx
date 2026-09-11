import { CheckCircle, GraduationCap, Stethoscope, Heart } from 'lucide-react';

const credentials = [
  'Especialista em Coloproctologia pelo CFM',
  'Membro da Sociedade Brasileira de Coloproctologia',
  'Treinamento em cirurgias minimamente invasivas',
  'Capacitação em Laser de CO2 para procedimentos anorretais',
  'Atualização contínua em tecnologias de ponta',
];

const highlights = [
  {
    icon: GraduationCap,
    iconClass: 'lucide lucide-graduation-cap text-[#009FC2]',
    title: 'Formação de Excelência',
    text: 'Especialização completa em Coloproctologia com treinamentos nacionais.',
  },
  {
    icon: Stethoscope,
    iconClass: 'lucide lucide-stethoscope text-[#009FC2]',
    title: 'Diagnóstico Preciso',
    text: 'Avaliação detalhada com tecnologia moderna para identificar a melhor conduta terapêutica.',
  },
  {
    icon: Heart,
    iconClass: 'lucide lucide-heart text-[#009FC2]',
    title: 'Atendimento Humanizado',
    text: 'Consultas individualizadas, com escuta ativa e orientação clara para cada paciente.',
  },
];

function SolidStar() {
  return (
    <svg viewBox="0 0 24 24" fill="#f59e0b" className="w-3.5 h-3.5">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
    </svg>
  );
}

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-[#009FC2]/8 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/img/novo-espaco-anuncio-endereco-homem-governador-valadares_1080x1350.webp"
                alt="Clínica Dr. Sillas Mourão — Novo Espaço"
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#144170]/80 to-transparent p-6">
                <p className="text-white font-semibold text-sm">Medical Center — Gov. Valadares</p>
                <p className="text-white/70 text-xs mt-1">R. 7 de Setembro, 2716 — Sala 1404</p>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[#144170] text-white rounded-2xl p-5 shadow-xl w-44">
              <p className="text-3xl font-bold text-[#009FC2]">4.9</p>
              <p className="text-xs text-white/80 mt-1 leading-tight">
                Avaliação média
                <br />
                no Google
              </p>
              <div className="flex gap-0.5 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <SolidStar key={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <div>
              <span className="inline-block text-[#009FC2] text-sm font-semibold tracking-widest uppercase mb-3">
                Sobre o Dr. Sillas Mourão
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#144170] leading-tight">
                Referência em Coloproctologia em
                <span className="text-[#009FC2]"> Governador Valadares</span>
              </h2>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              A clínica Dr. Sillas Mourão é referência em cuidado especializado na área da coloproctologia,
              oferecendo atendimento humanizado, tecnologia de ponta e tratamentos modernos para garantir mais
              saúde, conforto e qualidade de vida aos pacientes.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Com ampla experiência e compromisso com a excelência, o consultório disponibiliza consultas
              coloproctológicas completas, com avaliação detalhada e diagnóstico preciso das doenças do intestino,
              reto e ânus. Cada paciente recebe acompanhamento individualizado, com orientação clara e segura sobre
              prevenção, tratamento e recuperação.
            </p>
            <div className="flex flex-col gap-2.5 mt-2">
              {credentials.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle
                    width={18}
                    height={18}
                    className="lucide lucide-check-circle text-[#009FC2] flex-shrink-0"
                  />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div
                    key={h.title}
                    className="bg-[#f0f7ff] rounded-xl p-4 flex flex-col gap-2 border border-[#009FC2]/10"
                  >
                    <div className="bg-white rounded-lg w-10 h-10 flex items-center justify-center shadow-sm">
                      <Icon width={22} height={22} className={h.iconClass} />
                    </div>
                    <p className="text-[#144170] font-semibold text-sm">{h.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{h.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
