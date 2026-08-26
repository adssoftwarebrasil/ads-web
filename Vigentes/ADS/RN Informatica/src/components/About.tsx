import { CheckCircle, Clock, Users, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const differentials = [
  'Bom atendimento e suporte dedicado',
  'Confiança conquistada ao longo de 18 anos',
  'Transparência e honestidade com o cliente',
  'Rapidez na execução dos serviços',
  'Equipe qualificada e experiente',
  'Contratos de suporte empresarial',
];

interface Stat {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

const stats: Stat[] = [
  { icon: Clock, title: '18 Anos', subtitle: 'de experiência no mercado' },
  { icon: Users, title: 'Equipe Qualificada', subtitle: 'Técnicos especializados e certificados' },
  { icon: Award, title: 'Atendimento Premium', subtitle: 'Suporte dedicado e personalizado' },
  { icon: CheckCircle, title: 'Garantia', subtitle: 'Em todos os serviços prestados' },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Sobre a <span className="text-[rgb(1,102,52)]">RN Informática</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[rgb(1,102,52)] to-[rgb(152,204,50)] rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              A <strong>RN Informática</strong> é uma empresa especializada na venda e manutenção de computadores,
              notebooks e toda linha de informática. Com mais de <strong>18 anos no mercado</strong>, nos destacamos
              pelo atendimento ao consumidor final e também por sermos especializados em contratos de suporte
              empresarial.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nossa missão é trazer <strong>comodidade, segurança e honestidade</strong> no serviço prestado,
              garantindo que cada cliente receba o melhor atendimento possível e soluções eficientes para seus
              equipamentos.
            </p>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nossos Diferenciais:</h3>
              {differentials.map((item) => (
                <div key={item} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[rgb(152,204,50)] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/5575981914422?text=Olá!%20Gostaria%20de%20conhecer%20melhor%20os%20serviços%20da%20RN%20Informática."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[rgb(1,102,52)] text-white px-8 py-4 rounded-xl hover:bg-[rgb(1,82,42)] transition-all duration-300 shadow-xl hover:shadow-2xl font-semibold hover:scale-105"
            >
              <span>Conheça Nossos Serviços</span>
            </a>
          </div>
          <div className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/rn%20informatica%2Fimg%2Floja-informatica-interior.webp"
                alt="Interior da loja RN Informática"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-2xl font-bold drop-shadow-lg">
                  Visite nossa loja no centro de Feira de Santana
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.title}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[rgb(152,204,50)] hover:-translate-y-1"
                  >
                    <div className="bg-gradient-to-br from-[rgb(1,102,52)] to-[rgb(1,82,42)] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{stat.title}</h4>
                    <p className="text-sm text-gray-600">{stat.subtitle}</p>
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
