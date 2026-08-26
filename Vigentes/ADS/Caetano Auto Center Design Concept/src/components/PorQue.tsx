import type { LucideIcon } from 'lucide-react';
import { Award, Users, Wrench, CheckCircle, Shield, TrendingUp } from 'lucide-react';

type Feature = {
  title: string;
  desc: string;
  Icon: LucideIcon;
  iconClass: string;
};

const features: Feature[] = [
  {
    title: '10 Anos de Experiência',
    desc: 'Uma década servindo Alexânia com excelência e dedicação',
    Icon: Award,
    iconClass: 'lucide lucide-award w-6 h-6 text-white',
  },
  {
    title: 'Equipe Qualificada',
    desc: 'Profissionais certificados e constantemente atualizados',
    Icon: Users,
    iconClass: 'lucide lucide-users w-6 h-6 text-white',
  },
  {
    title: 'Equipamentos Modernos',
    desc: 'Tecnologia de ponta para diagnósticos precisos e reparos eficientes',
    Icon: Wrench,
    iconClass: 'lucide lucide-wrench w-6 h-6 text-white',
  },
  {
    title: 'Atendimento Completo',
    desc: 'Da revisão simples ao reparo mais complexo em um só lugar',
    Icon: CheckCircle,
    iconClass: 'lucide lucide-check-circle w-6 h-6 text-white',
  },
  {
    title: 'Peças de Qualidade',
    desc: 'Garantia e procedência certificada em todos os produtos',
    Icon: Shield,
    iconClass: 'lucide lucide-shield w-6 h-6 text-white',
  },
  {
    title: 'Estrutura Completa',
    desc: 'Tudo que seu carro precisa em um só lugar',
    Icon: TrendingUp,
    iconClass: 'lucide lucide-trending-up w-6 h-6 text-white',
  },
];

export default function PorQue() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent z-10"></div>
                <img
                  src="https://storage.lucasmendes.dev/site-sp/caetano%2Fmecanico-oficina-carros.webp"
                  alt="Mecânico trabalhando"
                  className="w-full h-[600px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-32 h-32 border-4 border-blue-600 rounded-tl-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-red-600 rounded-br-2xl"></div>
              <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-105 transition-transform hidden lg:block">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/caetano%2Fcarro-elevador-oficina.webp"
                  alt="Elevador profissional"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute top-8 -right-6 bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-1">
                    5000+
                  </div>
                  <div className="text-sm text-gray-600 font-semibold">
                    Atendimentos
                  </div>
                  <div className="text-xs text-gray-500">Realizados</div>
                </div>
              </div>
              <div className="absolute bottom-32 -left-6 bg-blue-600 text-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-1">10</div>
                  <div className="text-sm font-semibold">Anos de</div>
                  <div className="text-xs">Excelência</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-block">
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-red-500 mb-4 rounded-full"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  POR QUE ESCOLHER A <span className="text-blue-600">CAETANO?</span>
                </h2>
                <p className="text-gray-600 text-lg">
                  Conheça os diferenciais que fazem de nós a melhor escolha para
                  cuidar do seu veículo
                </p>
              </div>
              <div className="space-y-4 mt-8">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="group flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100 hover:border-blue-500"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <f.Icon className={f.iconClass} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {f.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <CheckCircle className="lucide lucide-check-circle w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/5562992222332"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-bold text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/50"
                  >
                    AGENDAR SERVIÇO
                  </a>
                  <a
                    href="tel:+556233363042"
                    className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-bold text-center transition-all duration-300"
                  >
                    LIGAR AGORA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
