import { Zap, Package, Users, Award, ThumbsUp, MapPin } from 'lucide-react';

const items = [
  {
    Icon: Zap,
    iconClass: 'lucide lucide-zap text-white',
    gradient: 'from-[rgb(237,23,21)] to-red-700',
    title: 'Entrega com Agilidade',
    text: 'Entrega rápida em Medianeira e toda região Oeste do Paraná. Minimizamos o tempo do seu caminhão parado.',
  },
  {
    Icon: Package,
    iconClass: 'lucide lucide-package text-white',
    gradient: 'from-red-600 to-red-800',
    title: 'Peças a Pronta Entrega',
    text: 'Estoque completo e abrangente com as peças que você precisa disponíveis imediatamente.',
  },
  {
    Icon: Users,
    iconClass: 'lucide lucide-users text-white',
    gradient: 'from-gray-800 to-black',
    title: 'Vendedores Especialistas',
    text: 'Atendimento por profissionais capacitados com conhecimento técnico profundo em autopeças para caminhões.',
  },
  {
    Icon: Award,
    iconClass: 'lucide lucide-award text-white',
    gradient: 'from-[rgb(237,23,21)] to-red-700',
    title: '34 Anos de Tradição',
    text: 'Mais de três décadas de experiência, confiança e integridade no mercado de autopeças.',
  },
  {
    Icon: ThumbsUp,
    iconClass: 'lucide lucide-thumbs-up text-white',
    gradient: 'from-red-600 to-red-800',
    title: 'Qualidade Garantida',
    text: 'Trabalhamos apenas com peças de qualidade comprovada, garantindo durabilidade e performance.',
  },
  {
    Icon: MapPin,
    iconClass: 'lucide lucide-map-pin text-white',
    gradient: 'from-gray-800 to-black',
    title: 'Cobertura Regional',
    text: 'Atendimento especializado para toda região Oeste do Paraná com logística eficiente.',
  },
];

const patternBg =
  "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNMCA1NGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMC0zNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')";

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(237,23,21)]/5 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl -z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[rgb(237,23,21)] font-semibold text-sm uppercase tracking-wider">
              Por Que Escolher
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-[rgb(237,23,21)]">Diferenciais</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O que nos torna a escolha certa para suas necessidades em autopeças
            para caminhões.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
              <div className="relative z-10">
                <div
                  className={`bg-gradient-to-br ${item.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <item.Icon className={item.iconClass} width={32} height={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-white/90 transition-colors">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0 bg-repeat"
              style={{ backgroundImage: patternBg }}
            ></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experiência que Você Pode Confiar
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Mais de 34 anos no mercado nos deram o conhecimento necessário para
              entender exatamente o que você precisa. Nossa equipe está pronta
              para oferecer as melhores soluções em autopeças para caminhões.
            </p>
            <div className="inline-flex items-center gap-2 bg-[rgb(237,23,21)] px-6 py-3 rounded-lg text-white font-semibold">
              <Award className="lucide lucide-award" width={24} height={24} />
              <span>Compromisso com a Excelência</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
