import { BadgeCheck, Clock3, CreditCard, MapPin, Accessibility, FileText } from 'lucide-react';

const reasons = [
  {
    icon: <BadgeCheck size={28} />,
    title: 'Credenciada pelo Detran-GO',
    description: 'Somos autorizados oficialmente pelo Detran-GO, garantindo validade total dos nossos laudos.',
  },
  {
    icon: <Clock3 size={28} />,
    title: 'Atendimento Ágil',
    description: 'Funcionamos de segunda a sábado. Sem filas, sem burocracia desnecessária. Seu tempo vale muito.',
  },
  {
    icon: <CreditCard size={28} />,
    title: 'Diversas Formas de Pagamento',
    description: 'Aceitamos cartão de crédito, débito e pagamento por aproximação (NFC). Facilidade para você.',
  },
  {
    icon: <MapPin size={28} />,
    title: 'Localização Estratégica',
    description: 'Localizados no Conjunto Residencial Storil, em Aparecida de Goiânia, com fácil acesso.',
  },
  {
    icon: <Accessibility size={28} />,
    title: 'Acessibilidade Total',
    description: 'Nossa unidade possui entrada e estacionamento acessíveis para cadeirantes.',
  },
  {
    icon: <FileText size={28} />,
    title: 'Laudo Preciso e Confiável',
    description: 'Avaliação detalhada de itens de segurança e autenticidade de documentos por profissionais experientes.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#efcf05] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="inline-block bg-[#efcf05]/10 text-[#efcf05] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
              Por que nos escolher?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Mais de{' '}
              <span className="text-[#efcf05]">2 anos</span>{' '}
              cuidando do seu veículo
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Fundada em 2022, a Max Vision Vistoria Veicular nasceu com o propósito de simplificar o processo de
              vistoria veicular. Nosso compromisso é com a sua tranquilidade, oferecendo um serviço transparente,
              ágil e de altíssima qualidade.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { value: '+2.000', label: 'Veículos Vistoriados' },
                { value: '100%', label: 'Laudos Válidos' },
                { value: '2022', label: 'Fundada em' },
                { value: '6 dias', label: 'Funcionamento/Semana' },
              ].map((stat, i) => (
                <div key={i} className="border border-gray-800 rounded-xl p-4 text-center">
                  <div className="text-[#efcf05] text-3xl font-black">{stat.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="bg-[#111111] rounded-2xl p-5 border border-gray-800 hover:border-[#efcf05]/40 transition-all duration-300 group"
              >
                <div className="text-[#efcf05] mb-3 group-hover:scale-110 transition-transform duration-200 inline-block">
                  {reason.icon}
                </div>
                <h3 className="text-white font-bold text-base mb-2">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
