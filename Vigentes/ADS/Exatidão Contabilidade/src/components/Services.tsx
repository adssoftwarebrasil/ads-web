import { HeartPulse, Building2, PenTool, TrendingUp, UserCheck, FileCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    icon: HeartPulse,
    title: 'Contabilidade na Área da Saúde',
    description:
      'Especialização em contabilidade para clínicas, consultórios e profissionais de saúde. Conhecemos as particularidades do setor.',
    image:
      'https://storage.lucasmendes.dev/site-sp/exatidao%20contabilidade/img/nossos-servicos-contabilidade-na-area-da-saude.webp',
  },
  {
    icon: Building2,
    title: 'Contabilidade Empresarial',
    description:
      'Gestão completa da contabilidade, impostos e obrigações fiscais para empresas de todos os portes. Garantimos conformidade legal.',
    image:
      'https://storage.lucasmendes.dev/site-sp/exatidao%20contabilidade/img/nossos-servicos-contabilidade-empresarial.webp',
  },
  {
    icon: PenTool,
    title: 'Contabilidade para Arquitetos e Designers',
    description:
      'Soluções contábeis especializadas para profissionais criativos. Entendemos as necessidades específicas do seu segmento.',
    image:
      'https://storage.lucasmendes.dev/site-sp/exatidao%20contabilidade/img/nossos-servicos-contabilidade-para-arquitetos-e-designers.webp',
  },
  {
    icon: TrendingUp,
    title: 'Planejamento Tributário',
    description:
      'Maximize seus resultados financeiros com estratégias tributárias inteligentes e totalmente legais. Pague menos impostos de forma segura.',
    image:
      'https://storage.lucasmendes.dev/site-sp/exatidao%20contabilidade/img/nossos-servicos-planejamento-tributario.webp',
  },
  {
    icon: UserCheck,
    title: 'Legalização e Gestão de MEI',
    description:
      'Regularização eficiente e completa para microempreendedores individuais. Cuidamos de toda burocracia para você focar no seu negócio.',
    image:
      'https://storage.lucasmendes.dev/site-sp/exatidao%20contabilidade/img/nossos-servicos-legalizacao-e-gestao-de-mei.webp',
  },
  {
    icon: FileCheck,
    title: 'Legalização Empresarial',
    description:
      'Agilizamos todo o processo de abertura, alteração ou encerramento da sua empresa. Burocracia zero para você.',
    image:
      'https://storage.lucasmendes.dev/site-sp/exatidao%20contabilidade/img/nossos-servicos-abertura-e-encerramento-de-empresas.webp',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm uppercase tracking-widest text-[rgb(204,162,74)] font-semibold mb-4">
            O QUE FAZEMOS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nossos Serviços</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluções completas em contabilidade para empresas e profissionais que buscam excelência e resultados.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={i} className="relative overflow-hidden rounded-xl group cursor-pointer h-full">
                <div className="aspect-[4/3] relative h-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-all duration-300 bg-gradient-to-t from-[rgb(30,30,35)] via-[rgba(30,30,35,0.6)] to-transparent"></div>
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="mb-3 text-[rgb(202,162,106)] transition-transform duration-300 ">
                    <Icon size={32} />
                  </div>
                  <div className="min-h-[3.5rem] flex items-end">
                    <h3 className="text-xl font-semibold text-white mb-2 leading-tight line-clamp-2">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 transition-all duration-300 overflow-hidden opacity-0 max-h-0 mt-0 group-hover:opacity-100 group-hover:max-h-40 group-hover:mt-0">
                    {service.description}
                  </p>
                  <a
                    href="https://wa.me/556232113304?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Exatidão%20Contabilidade."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[rgb(202,162,106)] hover:bg-[rgb(204,162,74)] text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 w-full md:w-auto opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
