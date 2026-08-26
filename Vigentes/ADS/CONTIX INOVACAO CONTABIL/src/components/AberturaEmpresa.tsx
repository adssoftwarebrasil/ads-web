import { Building2, Shield, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <Shield className="lucide lucide-shield text-white" width={24} height={24} />,
    title: 'Processo 100% Digital',
    text: 'Sem necessidade de deslocamento presencial. Tudo resolvido online com segurança e praticidade.',
    extra: '',
  },
  {
    icon: <Clock className="lucide lucide-clock text-white" width={24} height={24} />,
    title: 'De 5 a 10 Dias Úteis',
    text: 'Agilidade em todo o processo. Trabalhamos de forma digital para acelerar sua abertura de empresa.',
    extra: '',
  },
  {
    icon: (
      <CheckCircle2 className="lucide lucide-check-circle2 text-white" width={24} height={24} />
    ),
    title: 'Apenas Taxas Oficiais',
    text: 'Sem cobranças extras de despachante. Total transparência nos custos e economia garantida.',
    extra: 'sm:col-span-2 lg:col-span-1',
  },
];

const incluso = [
  'Consulta de viabilidade',
  'Contrato social completo',
  'Registro na Junta Comercial',
  'CNPJ ativo',
  'Alvará de funcionamento',
  'Suporte especializado',
];

export default function AberturaEmpresa() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#234783]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5BA3E8]/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-[#234783]/10 text-[#234783] px-4 py-2 rounded-full font-semibold text-sm mb-6">
              <Building2 className="lucide lucide-building2 " width={18} height={18} />
              Abertura de Empresas
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Abra sua Empresa em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#234783] to-[#5BA3E8]">
                Campo Grande - MS
              </span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Ter o próprio negócio é o sonho de muitos brasileiros, mas só em
              pensar nas etapas para abrir uma empresa, já bate aquela dor de
              cabeça. Por isso, a Contix está aqui para te ajudar! Com nossa
              experiência de mais de 8 anos e processo 100% digital,
              transformamos a burocracia em simplicidade.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
            {features.map((f) => (
              <div
                key={f.title}
                className={`bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group ${f.extra}`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#234783] to-[#5BA3E8] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-[#234783]/5 to-[#5BA3E8]/5 p-6 md:p-8 rounded-2xl border-l-4 border-[#234783] mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              O que está incluso:
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {incluso.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2
                    className="lucide lucide-check-circle2 text-green-600 flex-shrink-0"
                    width={20}
                    height={20}
                  />
                  <span className="text-gray-700 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <a
              href="https://wa.me/556733052146?text=Olá! Quero abrir minha empresa com a Contix."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#234783] to-[#5BA3E8] hover:from-[#1a3461] hover:to-[#3B7AC4] text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
            >
              Quero Abrir Minha Empresa
              <ArrowRight
                className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
                width={24}
                height={24}
              />
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Atendimento via WhatsApp • Resposta em minutos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
