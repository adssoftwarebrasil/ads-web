import { CheckCircle, Download, ArrowRight, MessageCircle } from 'lucide-react';

interface EquipItem {
  emoji: string;
  name: string;
  units: string;
  description: string;
  capacity: string;
  type: string;
  application: string;
  pdf: string;
  buttonLabel: string;
  premium?: boolean;
}

const equipment: EquipItem[] = [
  {
    emoji: '🚛',
    name: 'Caminhão Munck',
    units: '25 unidades',
    description: 'Ideal para cargas leves e médias, mobilidade urbana e acessos restritos',
    capacity: 'Até 10 toneladas',
    type: 'Articulado',
    application: 'Construção civil, entregas, obras urbanas',
    pdf: 'https://storage.lucasmendes.dev/site-sp/force-locacoes/Caminh%C3%A3o%20munk.pdf',
    buttonLabel: 'SOLICITAR ORÇAMENTO',
  },
  {
    emoji: '🏗️',
    name: 'Guindaste 25t',
    units: '5 unidades',
    description: 'Equipamento versátil para cargas médias e grande mobilidade',
    capacity: '25 toneladas',
    type: 'Telescópico',
    application: 'Obras médias, montagens industriais',
    pdf: 'https://storage.lucasmendes.dev/site-sp/force-locacoes/qy20g.5%20-%20Quindaste%2025t.pdf',
    buttonLabel: 'SOLICITAR ORÇAMENTO',
  },
  {
    emoji: '🏗️',
    name: 'Guindaste 70t',
    units: '5 unidades',
    description: 'Para projetos de médio a grande porte com alta capacidade',
    capacity: '70 toneladas',
    type: 'Telescópico',
    application: 'Indústrias, estruturas metálicas',
    pdf: 'https://storage.lucasmendes.dev/site-sp/force-locacoes/qy70k%20-%20Quintaste%2070t.pdf',
    buttonLabel: 'SOLICITAR ORÇAMENTO',
  },
  {
    emoji: '🏗️',
    name: 'Guindaste 70t (QY65K)',
    units: '3 unidades',
    description: 'Alta capacidade para projetos de grande porte',
    capacity: '70 toneladas',
    type: 'Telescópico',
    application: 'Grandes estruturas, equipamentos pesados',
    pdf: 'https://storage.lucasmendes.dev/site-sp/force-locacoes/qy65k%20-%20Quindaste%2070%20t.pdf',
    buttonLabel: 'SOLICITAR ORÇAMENTO',
  },
  {
    emoji: '⚙️',
    name: 'Guindaste 100t (SCC1000C)',
    units: '4 unidades',
    description: 'Alta capacidade para projetos industriais complexos',
    capacity: '100 toneladas',
    type: 'Telescópico',
    application: 'Mineração, indústria pesada, energia',
    pdf: 'https://storage.lucasmendes.dev/site-sp/force-locacoes/SCC1000C%20%20-%20Guindaste%20100t.pdf',
    buttonLabel: 'SOLICITAR ORÇAMENTO',
  },
  {
    emoji: '⚙️',
    name: 'Guindaste 100t (STC1000S)',
    units: '2 unidades',
    description: 'Equipamento robusto para grandes movimentações',
    capacity: '100 toneladas',
    type: 'Telescópico/Treliçado',
    application: 'Projetos especiais, grande porte',
    pdf: 'https://storage.lucasmendes.dev/site-sp/force-locacoes/STC1000S%20-%20Quindaste%20100t.pdf',
    buttonLabel: 'SOLICITAR ORÇAMENTO',
  },
  {
    emoji: '🏆',
    name: 'Guindaste 130t',
    units: '1 unidade',
    description: 'Equipamento premium para projetos de altíssima complexidade',
    capacity: '130 toneladas',
    type: 'All terrain',
    application: 'Megaprojetos, estruturas especiais',
    pdf: 'https://storage.lucasmendes.dev/site-sp/force-locacoes/QY130K%20-%20Quindaste%20130t.pdf',
    buttonLabel: 'SOLICITAR ORÇAMENTO',
  },
  {
    emoji: '🏆',
    name: 'Guindaste 160t',
    units: '2 unidades',
    description: 'Tecnologia de ponta para os maiores desafios',
    capacity: '160 toneladas',
    type: 'All terrain/Treliçado',
    application: 'Indústria pesada, energia, portos',
    pdf: 'https://storage.lucasmendes.dev/site-sp/force-locacoes/STC1600T7%20-%20Quindaste160T.pdf',
    buttonLabel: 'SOLICITAR ORÇAMENTO',
  },
  {
    emoji: '⭐',
    name: 'Guindaste 250t',
    units: '1 unidade',
    description: 'O mais poderoso da nossa frota, para projetos únicos',
    capacity: '250 toneladas',
    type: 'All terrain',
    application: 'Megaprojetos, offshore, energia',
    pdf: 'https://storage.lucasmendes.dev/site-sp/force-locacoes/AC2500T7%20-%20Quindaste%20250t.pdf',
    buttonLabel: 'CONSULTAR',
    premium: true,
  },
];

export default function Equipment() {
  return (
    <section id="equipamentos" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-force-dark-blue mb-4">
            Nossa Frota de Equipamentos
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Equipamentos modernos para qualquer tipo de projeto, do pequeno ao grande porte
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {equipment.map((e, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                e.premium ? 'ring-2 ring-force-yellow' : ''
              }`}
            >
              {e.premium && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                  ⭐ PREMIUM
                </div>
              )}
              <div className="relative bg-gradient-to-br from-force-dark-blue to-force-blue p-6 h-32 flex items-center justify-center">
                <div className="text-6xl">{e.emoji}</div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-1000"></div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-force-dark-blue mb-2 group-hover:text-force-yellow transition-colors">
                    {e.name}
                  </h3>
                  <span className="inline-block bg-force-yellow/20 text-force-dark-blue px-3 py-1 rounded-full text-xs font-bold border border-force-yellow/30">
                    {e.units}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">{e.description}</p>
                <div className="space-y-2 mb-6 pb-6 border-b border-slate-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500 font-medium">Capacidade:</span>
                    <span className="text-force-dark-blue font-bold">{e.capacity}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500 font-medium">Tipo:</span>
                    <span className="text-force-dark-blue font-semibold">{e.type}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-600 leading-relaxed">{e.application}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <a
                    href={e.pdf}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/pdf flex items-center justify-center space-x-2 w-full bg-slate-100 hover:bg-slate-200 text-force-dark-blue py-2.5 rounded-lg font-semibold text-sm transition-all transform hover:scale-105 shadow-sm hover:shadow-md border border-slate-200"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </a>
                  <a
                    href="#orcamento"
                    className="group/btn flex items-center justify-center space-x-2 w-full bg-force-yellow text-force-dark-blue py-3 rounded-xl font-bold text-sm hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <span>{e.buttonLabel}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-force-dark-blue to-force-blue rounded-2xl p-8 sm:p-12 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Não encontrou o equipamento ideal?
            </h3>
            <p className="text-slate-200 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudar você a encontrar a solução perfeita para seu
              projeto
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/5591985785150"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                <span>FALAR NO WHATSAPP</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+5591985785150"
                className="inline-flex items-center space-x-2 bg-white text-force-dark-blue px-8 py-4 rounded-xl font-bold text-base hover:bg-slate-100 transition-all transform hover:scale-105 shadow-lg"
              >
                <span>📞</span>
                <span>(91) 98578-5150</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
