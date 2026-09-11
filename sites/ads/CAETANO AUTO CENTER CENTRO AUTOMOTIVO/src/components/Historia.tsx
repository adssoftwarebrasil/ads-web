import { Award, TrendingUp, Users, Wrench } from 'lucide-react';

const timeline = [
  {
    year: '2015',
    title: 'Fundação',
    text: 'Início das atividades com foco em mecânica geral, trazendo expertise e dedicação para Alexânia.',
    Icon: Award,
    iconClass: 'lucide lucide-award w-6 h-6 text-blue-600',
    dotClass:
      'absolute -left-10 top-0 w-5 h-5 bg-red-600 rounded-full border-4 border-white shadow-lg animate-pulse',
  },
  {
    year: '2017-2020',
    title: 'Expansão',
    text: 'Ampliação dos serviços incluindo injeção eletrônica, alinhamento, balanceamento e diagnóstico computadorizado.',
    Icon: TrendingUp,
    iconClass: 'lucide lucide-trending-up w-6 h-6 text-blue-600',
    dotClass:
      'absolute -left-10 top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg',
  },
  {
    year: '2025',
    title: 'Consolidação',
    text: 'Referência em centro automotivo completo, com mais de 5.000 atendimentos e equipe altamente qualificada.',
    Icon: Users,
    iconClass: 'lucide lucide-users w-6 h-6 text-blue-600',
    dotClass:
      'absolute -left-10 top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg',
  },
];

export default function Historia() {
  return (
    <div id="historia">
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-gray-500 text-lg font-semibold uppercase tracking-wider">
                  Uma década de
                </p>
                <h2 className="text-5xl md:text-6xl font-bold text-blue-600">
                  EXCELÊNCIA
                </h2>
              </div>
              <div className="relative pl-8 space-y-8 mt-12">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-red-500"></div>
                {timeline.map((item) => (
                  <div key={item.year} className="relative">
                    <div className={item.dotClass}></div>
                    <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg border-l-4 border-blue-600 shadow-md hover:shadow-xl transition-shadow">
                      <div className="flex items-center space-x-3 mb-2">
                        <item.Icon className={item.iconClass} />
                        <span className="text-2xl font-bold text-blue-600">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-blue-600 text-white p-6 rounded-xl text-center transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold mb-2">10</div>
                  <div className="text-sm uppercase tracking-wider">
                    Anos de História
                  </div>
                </div>
                <div className="bg-red-600 text-white p-6 rounded-xl text-center transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold mb-2">5000+</div>
                  <div className="text-sm uppercase tracking-wider">
                    Atendimentos
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/caetano%2Foficina-automotiva-fachada.webp"
                  alt="Fachada Caetano Auto Center"
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-2xl font-bold">Nossa Fachada</p>
                  <p className="text-sm text-gray-200">
                    10 anos de tradição em Alexânia
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border border-blue-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wrench className="lucide lucide-wrench w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Nossa História
                    </h3>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p>
                        Fundada em{' '}
                        <span className="font-bold text-blue-600">2015</span>, a
                        Caetano Auto Center nasceu do sonho de oferecer serviços
                        automotivos de excelência em Alexânia, combinando
                        técnica, tecnologia e atendimento humanizado.
                      </p>
                      <p>
                        Ao longo de uma década, crescemos e nos especializamos,
                        sempre investindo em equipamentos de ponta e capacitação
                        profissional. Hoje, somos referência regional em mecânica
                        completa, atendendo desde carros populares até veículos
                        de maior complexidade.
                      </p>
                      <p>
                        Nossa missão permanece a mesma desde o primeiro dia:
                        cuidar do seu veículo com a dedicação que ele merece,
                        garantindo sua segurança, economia e tranquilidade nas
                        estradas.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-blue-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">100%</div>
                    <div className="text-xs text-gray-600 mt-1">Dedicação</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">24h</div>
                    <div className="text-xs text-gray-600 mt-1">Garantia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">5★</div>
                    <div className="text-xs text-gray-600 mt-1">Avaliação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
