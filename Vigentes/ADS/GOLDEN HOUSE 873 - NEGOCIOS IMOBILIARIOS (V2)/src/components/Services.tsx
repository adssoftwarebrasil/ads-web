import { Building2, Key, FileCheck, ScrollText, Search, Check, ArrowRight, type LucideIcon } from 'lucide-react';

interface Service {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
  items: string[];
  cta: string;
  href: string;
}

const services: Service[] = [
  {
    Icon: Building2,
    iconClass: 'lucide lucide-building2 w-7 h-7 text-white',
    title: 'Intermediação Imobiliária',
    text: 'Conectamos compradores e vendedores com inteligência de mercado, negociação estratégica e acompanhamento completo até o fechamento.',
    items: [
      'Avaliação precisa de mercado',
      'Marketing profissional do imóvel',
      'Negociação especializada',
      'Vistorias acompanhadas',
    ],
    cta: 'Vender ou Comprar Imóvel',
    href: 'https://wa.me/557193469993?text=Olá! Tenho interesse em: Vender ou Comprar Imóvel',
  },
  {
    Icon: Key,
    iconClass: 'lucide lucide-key w-7 h-7 text-white',
    title: 'Administração de Aluguéis',
    text: 'Gestão completa do seu patrimônio locado. Cuide da sua renda passiva enquanto cuidamos de tudo para você.',
    items: [
      'Seleção criteriosa de inquilinos',
      'Gestão de contratos e reajustes',
      'Cobrança e repasse pontual',
      'Manutenção e vistorias periódicas',
    ],
    cta: 'Gerenciar Meus Imóveis',
    href: 'https://wa.me/557193469993?text=Olá! Tenho interesse em: Gerenciar Meus Imóveis',
  },
  {
    Icon: FileCheck,
    iconClass: 'lucide lucide-file-check w-7 h-7 text-white',
    title: 'Regularização Imobiliária',
    text: 'Regularize seu imóvel e tenha tranquilidade jurídica. Resolvemos pendências documentais e burocráticas.',
    items: [
      'Análise documental completa',
      'Resolução de pendências cartoriais',
      'Assessoria jurídica especializada',
      'Registro atualizado',
    ],
    cta: 'Regularizar Meu Imóvel',
    href: 'https://wa.me/557193469993?text=Olá! Tenho interesse em: Regularizar Meu Imóvel',
  },
  {
    Icon: ScrollText,
    iconClass: 'lucide lucide-scroll-text w-7 h-7 text-white',
    title: 'Documentação Imobiliária',
    text: 'Cuidamos de toda documentação necessária para sua transação ser segura, rápida e livre de problemas futuros.',
    items: [
      'Certidões e documentos atualizados',
      'Verificação de autenticidade',
      'Organização documental completa',
      'Agilidade nos processos',
    ],
    cta: 'Organizar Documentação',
    href: 'https://wa.me/557193469993?text=Olá! Tenho interesse em: Organizar Documentação',
  },
  {
    Icon: Search,
    iconClass: 'lucide lucide-search w-7 h-7 text-white',
    title: 'Análise Contratual Imobiliária',
    text: 'Análise minuciosa de contratos imobiliários. Identifique riscos e garanta cláusulas que protejam seus interesses.',
    items: [
      'Revisão jurídica especializada',
      'Identificação de cláusulas abusivas',
      'Sugestões de melhorias',
      'Assessoria na negociação de termos',
    ],
    cta: 'Analisar Meu Contrato',
    href: 'https://wa.me/557193469993?text=Olá! Tenho interesse em: Analisar Meu Contrato',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-gradient-to-b from-white to-gray-50 py-20 md:py-28 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 opacity-5">
        <img
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Documentos"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nossos Serviços Especializados
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            Soluções completas para todas as suas necessidades imobiliárias
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-102 ${
                index % 2 === 0
                  ? 'bg-white border-l-4 border-[#cfa165]'
                  : 'bg-gradient-to-br from-[#cfa165]/5 to-[#b88a4d]/5'
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#cfa165] flex items-center justify-center flex-shrink-0">
                  <service.Icon className={service.iconClass} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{service.text}</p>
              <ul className="space-y-3 mb-6">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="lucide lucide-check w-5 h-5 text-[#cfa165] flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cfa165] hover:text-[#b88a4d] font-semibold flex items-center gap-2 transition-colors"
              >
                {service.cta}
                <ArrowRight className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
