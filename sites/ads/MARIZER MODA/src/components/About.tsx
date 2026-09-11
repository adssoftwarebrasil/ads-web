import { CheckCircle, Star, Shield, Zap } from 'lucide-react';

const features = [
  'Fardamentos para todos os segmentos',
  'Bordados computadorizados de alta precisão',
  'Impressão DTF e sublimação total',
  'Equipagens completas para empresas',
  'Confecção sob medida',
  'Atendimento personalizado',
];

const cards = [
  { Icon: Star, name: 'star', title: 'Qualidade Premium', text: 'Materiais selecionados e acabamento impecável em cada peça.' },
  { Icon: Shield, name: 'shield', title: 'Prazo Garantido', text: 'Comprometimento com a entrega dentro do prazo combinado.' },
  { Icon: Zap, name: 'zap', title: 'Atendimento Ágil', text: 'Orçamento rápido e suporte direto com a equipe especializada.' },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="transition-all duration-700 opacity-100 translate-x-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 text-brand-blue border border-brand-blue/20 bg-brand-blue/5">
              Nossa História
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
              Referência em Uniformes
              <br />
              <span className="text-gradient">em São Luís – MA</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5 text-base sm:text-lg">
              A <strong className="text-gray-900">Marizé Uniformes</strong> nasceu do sonho de empreender com
              propósito: oferecer uniformes de qualidade que representassem profissionalismo, identidade e
              organização para empresas de todos os portes.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-base sm:text-lg">
              Fundada para atender o mercado local com excelência, a empresa cresceu de forma sólida, construindo
              uma trajetória baseada em <strong className="text-gray-900">confiança, compromisso e dedicação</strong>.
              Hoje, a Marizé é referência em uniformes personalizados na capital maranhense.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-gray-700 text-sm font-medium">
                  <CheckCircle
                    className="lucide lucide-check-circle text-brand-cyan flex-shrink-0"
                    width={16}
                    height={16}
                    strokeWidth={2}
                  />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="http://wa.me/559881135450?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Marizé%20Uniformes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-blue/30"
              style={{ background: 'linear-gradient(135deg, rgb(1, 12, 222) 0%, rgb(0, 187, 254) 100%)' }}
            >
              Fale Conosco
            </a>
          </div>
          <div className="transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl opacity-20"
                style={{ background: 'linear-gradient(135deg, rgb(1, 12, 222), rgb(0, 187, 254))' }}
              ></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/marize%20uniformes/galeria/fardamentos-azul-laranja-marize-uniformes-valen_1440x1440.webp"
                alt="Fardamentos Marizé Uniformes"
                className="relative rounded-3xl w-full h-80 sm:h-96 object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgb(1, 12, 222), rgb(0, 187, 254))' }}
                  >
                    <Star className="lucide lucide-star text-white" width={18} height={18} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-xl font-black text-gray-900">4.7</p>
                    <p className="text-xs text-gray-500">Avaliação Google</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {cards.map(({ Icon, name, title, text }) => (
                <div
                  key={title}
                  className="group p-4 rounded-2xl border border-gray-100 hover:border-brand-cyan/40 hover:shadow-lg hover:shadow-brand-cyan/10 transition-all duration-300 bg-gray-50/50"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-colors group-hover:bg-brand-blue/10"
                    style={{ background: 'linear-gradient(135deg, rgba(1, 12, 222, 0.1), rgba(0, 187, 254, 0.1))' }}
                  >
                    <Icon className={`lucide lucide-${name} text-brand-blue`} width={17} height={17} strokeWidth={2} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xs mb-1">{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
