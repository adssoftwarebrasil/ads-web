import { Layers, Building2, Home, Wrench, Package, ArrowRight, type LucideIcon } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  iconClass: string;
  features: string[];
  waHref: string;
}

const services: Service[] = [
  {
    title: 'Drywall',
    description:
      'Paredes, divisórias e forros em gesso acartonado com acabamento impecável. Solução rápida, limpa e moderna para construções residenciais e comerciais.',
    image: 'https://storage.lucasmendes.dev/site-sp/sorrimac/img/sala-em-reforma-com-teto-de-gesso_287x510.webp',
    icon: Layers,
    iconClass: 'lucide lucide-layers',
    features: ['Paredes e divisórias', 'Forros e sancas', 'Shafts e dutos', 'Revestimentos'],
    waHref: 'https://wa.me/5566992474531?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20Drywall.',
  },
  {
    title: 'Steel Frame',
    description:
      'Sistema construtivo em estrutura de aço leve. Obras mais rápidas, sustentáveis e com maior controle de qualidade do que a construção convencional.',
    image: 'https://storage.lucasmendes.dev/site-sp/sorrimac/img/estrutura-metalica-casa-construcao-dois-andares_297x510.webp',
    icon: Building2,
    iconClass: 'lucide lucide-building2',
    features: ['Estrutura metálica leve', 'Residências completas', 'Construção sustentável', 'Alta precisão'],
    waHref: 'https://wa.me/5566992474531?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20Steel%20Frame.',
  },
  {
    title: 'Gesso',
    description:
      'Serviços completos de gesso: reboco, molduras, forros, sancas e acabamentos decorativos. Textura perfeita e acabamento de alto padrão.',
    image: 'https://storage.lucasmendes.dev/site-sp/sorrimac/img/casa-branca-moderna-em-construcao-ceu-azul_382x510.webp',
    icon: Home,
    iconClass: 'lucide lucide-home',
    features: ['Forro de gesso', 'Sancas e molduras', 'Reboco de gesso', 'Decoração em gesso'],
    waHref: 'https://wa.me/5566992474531?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20Gesso.',
  },
  {
    title: 'Mão de Obra Especializada',
    description:
      'Equipe técnica com mais de 10 anos de experiência no mercado. Profissionais treinados e certificados para executar projetos com excelência.',
    image: 'https://storage.lucasmendes.dev/site-sp/sorrimac/img/fachada-predio-sorrimac-construcao-seco_680x382.webp',
    icon: Wrench,
    iconClass: 'lucide lucide-wrench',
    features: ['Equipe qualificada', 'Prazo garantido', 'Orçamento detalhado', 'Acompanhamento total'],
    waHref: 'https://wa.me/5566992474531?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20M%C3%A3o%20de%20Obra%20Especializada.',
  },
  {
    title: 'Materiais para Drywall',
    description:
      'Venda de materiais para gesso acartonado: placas, perfis, parafusos, massas e acessórios. Produtos de marcas líderes com garantia de qualidade.',
    image: 'https://storage.lucasmendes.dev/site-sp/sorrimac/img/construcao-metalica-estrutura-predio-em-andamento_382x510.webp',
    icon: Package,
    iconClass: 'lucide lucide-package',
    features: ['Placas de gesso', 'Perfis metálicos', 'Parafusos e acessórios', 'Massas e tintas'],
    waHref: 'https://wa.me/5566992474531?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20Materiais%20para%20Drywall.',
  },
  {
    title: 'Materiais para Steel Frame',
    description:
      'Fornecimento de perfis, chapas, conectores e demais componentes para estruturas em steel frame. Materiais certificados e de alta durabilidade.',
    image: 'https://storage.lucasmendes.dev/site-sp/sorrimac/img/sala-reuniao-mesa-computadores-plantas-sorrimac_680x453.webp',
    icon: Building2,
    iconClass: 'lucide lucide-building2',
    features: ['Perfis de aço', 'Chapas OSB e cimentícias', 'Conectores e fixações', 'Isolamentos'],
    waHref: 'https://wa.me/5566992474531?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20Materiais%20para%20Steel%20Frame.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 px-4 py-2 rounded-full mb-4">
            <span className="text-brand-orange text-sm font-semibold uppercase tracking-wider">Nossos Serviços</span>
          </div>
          <h2 className="section-title mb-4">
            Soluções Completas em <span className="text-brand-orange">Construção a Seco</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Da estrutura ao acabamento final, oferecemos materiais premium e mão de obra especializada para transformar qualquer espaço.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={s.title} className="service-card card group animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="relative overflow-hidden h-48">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-brand-orange rounded-xl p-2.5 text-white">
                  <s.icon className={s.iconClass} width={28} height={28} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-dark mb-2">{s.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed mb-4">{s.description}</p>
                <ul className="grid grid-cols-2 gap-1 mb-5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5 text-xs text-brand-gray">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={s.waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-orange font-semibold text-sm hover:gap-3 transition-all duration-200"
                >
                  Solicitar orçamento
                  <ArrowRight className="lucide lucide-arrow-right" width={15} height={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5566992474531?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20completo."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-10 py-4 shadow-lg shadow-brand-orange/20"
          >
            Solicitar Orçamento Gratuito
            <ArrowRight className="lucide lucide-arrow-right" width={18} height={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
