import { Clock, DollarSign, Package, Headphones, ThumbsUp, MapPin, LucideIcon } from 'lucide-react';

interface Diff {
  icon: LucideIcon;
  iconClass: string;
  color: string;
  title: string;
  text: string;
}

const differentials: Diff[] = [
  { icon: Clock, iconClass: 'lucide lucide-clock w-6 h-6 text-white', color: 'rgb(231, 195, 37)', title: 'Atendimento Rápido', text: 'Resposta ágil via WhatsApp e atendimento presencial eficiente para agilizar seu projeto.' },
  { icon: DollarSign, iconClass: 'lucide lucide-dollar-sign w-6 h-6 text-white', color: 'rgb(187, 133, 19)', title: 'Preços Competitivos', text: 'Os melhores preços da região metropolitana de Recife sem comprometer a qualidade.' },
  { icon: Package, iconClass: 'lucide lucide-package w-6 h-6 text-white', color: 'rgb(231, 195, 37)', title: 'Variedade Completa', text: 'Amplo catálogo de produtos: fechaduras, dobradiças, roldanas, ferrolhos e muito mais.' },
  { icon: Headphones, iconClass: 'lucide lucide-headphones w-6 h-6 text-white', color: 'rgb(187, 133, 19)', title: 'Atendimento Personalizado', text: 'Equipe dedicada para orientar na escolha dos produtos ideais para sua necessidade.' },
  { icon: ThumbsUp, iconClass: 'lucide lucide-thumbs-up w-6 h-6 text-white', color: 'rgb(231, 195, 37)', title: 'Qualidade Garantida', text: 'Produtos selecionados de fornecedores confiáveis com excelente durabilidade.' },
  { icon: MapPin, iconClass: 'lucide lucide-map-pin w-6 h-6 text-white', color: 'rgb(187, 133, 19)', title: 'Localização Privilegiada', text: 'Fácil acesso em Imbiribeira, atendendo toda a região metropolitana de Recife.' },
];

export default function Differentials() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[rgb(231,195,37)] uppercase tracking-wide mb-2">Diferenciais</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[rgb(12,27,76)] mb-4">Por Que Escolher a Recife Componentes?</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Mais de 4 anos oferecendo excelência em produtos e atendimento para a região metropolitana de Recife</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[rgb(231,195,37)]"
              >
                <div className="absolute -top-6 left-8">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: d.color }}
                  >
                    <Icon className={d.iconClass} />
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-xl font-bold text-[rgb(12,27,76)] mb-3">{d.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{d.text}</p>
                </div>
                <div
                  className="absolute bottom-0 left-0 w-full h-1 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ backgroundColor: d.color }}
                ></div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 bg-gradient-to-r from-[rgb(12,27,76)] to-[rgb(12,27,76)]/90 rounded-2xl p-8 md:p-12 text-white text-center">
          <h4 className="text-3xl md:text-4xl font-bold mb-4">Pronto para Encontrar o Que Precisa?</h4>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">Nossa equipe está pronta para atendê-lo de segunda a sexta das 8h às 17h e aos sábados das 8h às 12h</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://wa.me/558199266617"
              className="inline-flex items-center justify-center gap-2 bg-[rgb(231,195,37)] text-[rgb(12,27,76)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(187,133,19)] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Fale no WhatsApp
            </a>
            <a
              href="https://www.instagram.com/recifecomponentes/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Siga no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
