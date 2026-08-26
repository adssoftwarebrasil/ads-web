import { Users, Laptop, Calendar, Shield, TrendingUp, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Diferencial = {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
};

const diferenciais: Diferencial[] = [
  {
    icon: Users,
    iconClass: 'lucide lucide-users',
    title: 'Atendimento Personalizado',
    description:
      'Aqui, cada cliente é único. Nossa equipe está sempre atualizada para oferecer as melhores soluções.',
  },
  {
    icon: Laptop,
    iconClass: 'lucide lucide-laptop',
    title: 'Tecnologia de Ponta',
    description:
      'Utilizamos tecnologia de ponta para oferecer serviços contábeis de excelência e com foco em resultados reais.',
  },
  {
    icon: Calendar,
    iconClass: 'lucide lucide-calendar',
    title: '+30 Anos de Experiência',
    description:
      'Há mais de três décadas ajudando pequenas e médias empresas a crescer com segurança e eficiência.',
  },
  {
    icon: Shield,
    iconClass: 'lucide lucide-shield',
    title: 'Segurança e Conformidade',
    description:
      'Garantimos que sua empresa esteja sempre em dia com todas as obrigações fiscais e tributárias.',
  },
  {
    icon: TrendingUp,
    iconClass: 'lucide lucide-trending-up',
    title: 'Foco em Resultados',
    description:
      'Trabalhamos para maximizar seus resultados e minimizar seus custos tributários de forma legal.',
  },
  {
    icon: Award,
    iconClass: 'lucide lucide-award',
    title: 'Excelência Comprovada',
    description:
      'Reconhecidos pela qualidade dos nossos serviços e compromisso com o sucesso dos clientes.',
  },
];

function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[rgb(0,0,87)] via-[rgb(211,0,0)] to-[rgb(0,0,87)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-[rgb(0,0,87)] text-white px-4 py-2 rounded-full text-sm font-semibold">
              Nossos Diferenciais
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[rgb(0,0,87)] mb-4">
            Mais que um Contador, um Parceiro Estratégico
          </h2>
          <div className="h-1 w-20 bg-[rgb(211,0,0)] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Descubra por que centenas de empresas confiam na NetCon para cuidar de sua contabilidade
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[rgb(0,0,87)] group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[rgb(0,0,87)] rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  <Icon className={`${item.iconClass} text-white`} size={32} />
                </div>
                <h3 className="text-xl font-bold text-[rgb(0,0,87)] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/5595991548154?text=Olá! Quero saber mais sobre os diferenciais da NetCon."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(0,0,87)] text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-[rgb(0,0,107)] transition-all shadow-lg hover:shadow-xl"
          >
            QUERO SER CLIENTE
          </a>
        </div>
      </div>
    </section>
  );
}

export default Diferenciais;
