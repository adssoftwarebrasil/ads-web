import { Shirt, Cpu, Paintbrush, Layers, Package, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  Icon: LucideIcon;
  iconName: string;
  image: string;
  title: string;
  text: string;
  tags: string[];
  href: string;
}

const services: Service[] = [
  {
    Icon: Shirt,
    iconName: 'shirt',
    image:
      'https://storage.lucasmendes.dev/site-sp/marize%20uniformes/galeria/camisa-minerva-solucoes-engenharia-cinza-e-preta_1200x1500.webp',
    title: 'Fardamentos Personalizados',
    text: 'Uniformes sob medida para operacionais, administrativos e equipes de campo. Alta durabilidade e identidade visual marcante para sua empresa.',
    tags: ['Uniforme Administrativo', 'Uniforme Operacional', 'Personalizado'],
    href: 'http://wa.me/559881135450?text=Olá!%20Tenho%20interesse%20em%20Fardamentos%20Personalizados.%20Poderia%20me%20passar%20mais%20informações?',
  },
  {
    Icon: Cpu,
    iconName: 'cpu',
    image:
      'https://storage.lucasmendes.dev/site-sp/marize%20uniformes/galeria/mao-segurando-bone-wr-transporte-e-locacoes_640x1136.webp',
    title: 'Bordados Computadorizados',
    text: 'Bordados de alta precisão e qualidade para logos, emblemas e detalhes que elevam o padrão dos seus uniformes e acessórios.',
    tags: ['Logo Bordado', 'Emblemas', 'Alta Precisão'],
    href: 'http://wa.me/559881135450?text=Olá!%20Tenho%20interesse%20em%20Bordados%20Computadorizados.%20Poderia%20me%20passar%20mais%20informações?',
  },
  {
    Icon: Paintbrush,
    iconName: 'paintbrush',
    image:
      'https://storage.lucasmendes.dev/site-sp/marize%20uniformes/galeria/camiseta-vermelha-manequim-futuro-sorriso-hoje_640x1138.webp',
    title: 'Impressão DTF',
    text: 'Tecnologia DTF (Direct to Film) para estampas vibrantes, detalhadas e duráveis em qualquer tipo de tecido, sem limitação de cores.',
    tags: ['Estampa Digital', 'Sem Mínimo', 'Cores Vibrantes'],
    href: 'http://wa.me/559881135450?text=Olá!%20Tenho%20interesse%20em%20Impress%C3%A3o%20DTF.%20Poderia%20me%20passar%20mais%20informações?',
  },
  {
    Icon: Layers,
    iconName: 'layers',
    image:
      'https://storage.lucasmendes.dev/site-sp/marize%20uniformes/galeria/camisa-uniforme-valon-preta-e-laranja_4284x5712.webp',
    title: 'Sublimação Total',
    text: 'Impressão por sublimação em peças totalmente personalizadas com seu design, ideal para uniformes esportivos e corporativos.',
    tags: ['Personalização Total', 'Esporte', 'Corporativo'],
    href: 'http://wa.me/559881135450?text=Olá!%20Tenho%20interesse%20em%20Sublima%C3%A7%C3%A3o%20Total.%20Poderia%20me%20passar%20mais%20informações?',
  },
  {
    Icon: Package,
    iconName: 'package',
    image:
      'https://storage.lucasmendes.dev/site-sp/marize%20uniformes/galeria/bone-preto-logo-jm-solucoes-dedo-vermelho_640x1136.webp',
    title: 'Equipagens Completas',
    text: 'Fornecimento completo de kits para sua equipe: uniformes, bonés, coletes e todos os itens necessários para equipar seus colaboradores.',
    tags: ['Kit Completo', 'Boné', 'Colete'],
    href: 'http://wa.me/559881135450?text=Olá!%20Tenho%20interesse%20em%20Equipagens%20Completas.%20Poderia%20me%20passar%20mais%20informações?',
  },
  {
    Icon: Shirt,
    iconName: 'shirt',
    image:
      'https://storage.lucasmendes.dev/site-sp/marize%20uniformes/galeria/uniforme-seguranca-preto-laranja-manga-longa_1440x1920.webp',
    title: 'Uniformes de Segurança',
    text: 'Fardamentos técnicos para segurança patrimonial com tecidos resistentes, identidade visual sólida e acabamento profissional.',
    tags: ['Segurança', 'Manga Longa', 'Resistente'],
    href: 'http://wa.me/559881135450?text=Olá!%20Tenho%20interesse%20em%20Uniformes%20de%20Seguran%C3%A7a.%20Poderia%20me%20passar%20mais%20informações?',
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-24 overflow-hidden"
      style={{ background: 'linear-gradient(rgb(248, 250, 255) 0%, rgb(255, 255, 255) 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 text-brand-blue border border-brand-blue/20 bg-brand-blue/5">
            O Que Oferecemos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Soluções Completas em
            <br />
            <span className="text-gradient">Uniformes e Fardamentos</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
            De bordados artesanais a equipagens completas, atendemos empresas de todos os segmentos com qualidade e
            prazo garantidos.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-brand-blue/10 hover:-translate-y-1 transition-all duration-400 flex flex-col opacity-100 translate-y-0"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div
                  className="absolute top-4 left-4 w-10 h-10 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgb(1, 12, 222), rgb(0, 187, 254))' }}
                >
                  <service.Icon
                    className={`lucide lucide-${service.iconName} text-white`}
                    width={18}
                    height={18}
                    strokeWidth={2}
                  />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{service.text}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium text-brand-blue bg-brand-blue/8 border border-brand-blue/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-blue font-semibold text-sm group/link hover:gap-3 transition-all duration-200"
                >
                  Solicitar Orçamento
                  <ArrowRight
                    className="lucide lucide-arrow-right transition-transform group-hover/link:translate-x-1"
                    width={14}
                    height={14}
                    strokeWidth={2}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
