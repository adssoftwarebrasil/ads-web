import { MessageCircle, ChevronRight, Sparkles, TrendingUp, X } from 'lucide-react';
import { useState } from 'react';

const products = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/imperiodasbombas%2Falteracoes%2FBOMBA%20PARA%20ESGOTO%20MARCA%20THEBE%20TSBT.png',
    title: 'Bomba para Esgoto THEBE TSBT',
    desc: 'Bomba trituradora projetada para triturar materiais macios como panos, tecidos, fraldas e plásticos leves.',
    badge: 'Destaque',
    fullDesc: 'Projetada para triturar materiais macios e não abrasivos, como panos, tecidos, fraldas, preservativos e plásticos leves. Não indicado para materiais de elevada dureza, rígidos ou abrasivos, como madeira, pedra, metais, vidro ou plásticos duros.'
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/imperiodasbombas%2Falteracoes%2FBC-92%20Motobombas%20Centr%C3%ADfugas%20Monoest%C3%A1gio.png',
    title: 'BC-92 Motobombas Centrífugas',
    desc: 'Motobombas centrífugas monoestágio para aplicações gerais em residências, chácaras e sistemas de refrigeração.',
    badge: 'Popular',
    fullDesc: 'Motobombas Centrífugas Monoestágio versáteis com aplicações em residências, chácaras, abastecimento predial, agricultura, indústrias e sistemas de refrigeração. Motor monofásico ou trifásico em II Polos, 60Hz, 3500rpm.'
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/imperiodasbombas%2Falteracoes%2FMOTOBOMBA%20CENTRIFUGA%20THI%20MARCA%20THEBE.png',
    title: 'Motobomba Centrífuga THI THEBE',
    desc: 'Centrífuga monoestágio para água limpa. Vazão de 13,9-55m³/h com pressão máxima de 60mca.',
    badge: 'Em Estoque',
    fullDesc: 'Motobomba Centrífuga Monoestágio - Monobloco ou Mancalizada - Motor Monofásico ou Trifásico em II Polos, 60Hz, 3500rpm - Bocais com rosca BSP, Sucção 2" x Recalque 1.1/2". Utilizada para água limpa. Vazão Máxima: 55,0m³/h - Vazão Mínima: 13,9m³/h; Pressão Máxima: 60,0mca - Pressão Mínima: 16,0mca.'
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/imperiodasbombas%2Falteracoes%2FSCHNEIDER%20BC-92%20Motobombas%20Centr%C3%ADfugas%20Monoest%C3%A1gio.png',
    title: 'SCHNEIDER BC-92 Centrífugas',
    desc: 'Motobombas centrífugas monoestágio com excelente performance para múltiplas aplicações industriais.',
    badge: 'Popular',
    fullDesc: 'Motobombas Centrífugas Monoestágio SCHNEIDER BC-92 com aplicações em residências, chácaras, abastecimento predial, agricultura, indústrias e sistemas de refrigeração.'
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/imperiodasbombas%2Falteracoes%2Fcontrolador%20de%20press%C3%A3o%20DSK-4%20da%20LPN.png',
    title: 'Controlador de Pressão DSK-4 LPN',
    desc: 'Automatiza o acionamento de motobombas com proteção contra funcionamento a seco e pressão constante.',
    badge: 'Em Estoque',
    fullDesc: 'O controlador de pressão DSK-4 da LPN é utilizado para automatizar o acionamento de motobombas, protegendo o sistema contra funcionamento a seco e mantendo pressão constante na rede hidráulica. Com conexão de 1", grau de proteção IP65 e pressão de acionamento de 1,0 bar (127 V) ou 1,5 bar (220 V), é ideal para aplicações residenciais e comerciais com vazão de 30 a 60 l/h. Disponível nas voltagens 127V ou 220V, suporta até 10 bar de pressão máxima.'
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/imperiodasbombas%2Falteracoes%2Fmotobomba%20LSPA%20da%20Lepono.png',
    title: 'Motobomba LSPA Lepono',
    desc: 'Desenvolvida para banheiras de hidromassagem com corpo em ABS e eixo em aço carbono SAE 1045.',
    badge: 'Em Estoque',
    fullDesc: 'A motobomba LSPA da Lepono foi desenvolvida especialmente para banheiras de hidromassagem, oferecendo desempenho confiável e instalação prática em sistemas residenciais. Com corpo em ABS, eixo em aço carbono SAE 1045 e motor com protetor térmico, proporciona durabilidade e segurança, mesmo em ambientes com umidade e calor constantes. Sua sucção deslocada abaixo da câmara do rotor evita acúmulo de água parada.'
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/imperiodasbombas%2Falteracoes%2Fmotobomba%20XKP%20da%20Lepono.png',
    title: 'Motobomba XKP Lepono',
    desc: 'Ideal para sistemas de circulação e filtragem de piscinas com instalação simples e desempenho silencioso.',
    badge: 'Destaque',
    fullDesc: 'A motobomba XKP da Lepono é indicada para sistemas de circulação e filtragem de piscinas, com instalação simples e desempenho silencioso em ambientes residenciais. Com corpo em plástico leve e resistente, eixo em aço carbono SAE 1045 e motor com protetor térmico, garante durabilidade e segurança mesmo em áreas com umidade constante. Disponível em versões monofásicas e trifásicas.'
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/imperiodasbombas%2Falteracoes%2Fmotobomba%20autoaspirante%20AJmS%20da%20Lepono.png',
    title: 'Motobomba Autoaspirante AJmS Lepono',
    desc: 'Para pressurização e irrigação leve com corpo e eixo em aço inox AISI 304 resistente à corrosão.',
    badge: 'Em Estoque',
    fullDesc: 'A motobomba autoaspirante AJmS da Lepono é indicada para pressurização e irrigação leve, especialmente em regiões litorâneas, onde a resistência à corrosão é essencial. Com corpo e eixo em aço inox AISI 304, difusor e tubo venturi em noryl, retira o ar da tubulação automaticamente e mantém o desempenho estável. Disponível em 127V ou 220V, garante eficiência em instalações residenciais e comerciais.'
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/imperiodasbombas%2Falteracoes%2Fmotobomba%20centr%C3%ADfuga%20AC%20da%20Lepono.png',
    title: 'Motobomba Centrífuga AC Lepono',
    desc: 'Para sistemas com maior vazão, irrigação, pressurização e abastecimento em residências e prédios.',
    badge: 'Popular',
    fullDesc: 'A motobomba centrífuga AC da Lepono é recomendada para sistemas que exigem maior vazão, como irrigação leve, pressurização de baixa pressão e abastecimento em residências e prédios. Seu corpo em ferro fundido com tratamento antiferrugem e eixo em aço inox AISI 304 garantem resistência e durabilidade mesmo em uso contínuo. Disponível em versões monofásicas e trifásicas.'
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/imperiodasbombas%2Falteracoes%2Fmotobomba%20perif%C3%A9rica%20autoaspirante%20LKSm%20da%20Lepono.png',
    title: 'Motobomba Periférica LKSm Lepono',
    desc: 'Para pressurização doméstica com acionamento automático e pressostato integrado. 220V.',
    badge: 'Em Estoque',
    fullDesc: 'A motobomba periférica autoaspirante LKSm da Lepono é indicada para pressurização doméstica, acionando automaticamente com a queda de pressão na rede hidráulica. Equipada com pressostato, tanque de pressão de 2L e eixo em aço inox AISI 304, garante maior proteção ao motor, que conta com enrolamento em cobre e protetor térmico. Disponível na voltagem 220V.'
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/imperiodasbombas%2Falteracoes%2Fmotobomba%20perif%C3%A9rica%20autoescorvante%E2%80%AFWHB%20da%20LPN.png',
    title: 'Motobomba Periférica WHB LPN',
    desc: 'Para abastecimento doméstico e pressurização com motor de ímã permanente e controle ajustável.',
    badge: 'Em Estoque',
    fullDesc: 'A motobomba periférica autoescorvante WHB da LPN é ideal para abastecimento doméstico, pressurização e sistemas de refrigeração que exigem pressão estável e alto fluxo. Equipada com motor de ímã permanente, controle de pressão ajustável e função anticongelante, opera de forma silenciosa e eficiente mesmo em condições extremas. Disponível nas voltagens 127V ou 220V.'
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/imperiodasbombas%2Falteracoes%2Fmotobomba%20perif%C3%A9rica%20autoaspirante%20WZB%20da%20Ekazza.png',
    title: 'Motobomba Periférica WZB Ekazza',
    desc: 'Para residências e irrigação com corpo em ferro fundido. Até 32 L/min com pressão máxima de 30m.',
    badge: 'Em Estoque',
    fullDesc: 'A motobomba periférica autoaspirante WZB da Ekazza é ideal para residências, pequenos prédios e sistemas de irrigação que exigem versatilidade e pressão constante. Com corpo em ferro fundido e motor com isolamento classe B, opera com água limpa a até 60 °C, oferecendo até 32 litros por minuto e pressão máxima de 30 metros. Disponível nas voltagens 127V ou 220V.'
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/imperiodasbombas%2Falteracoes%2Fsistema%20de%20combate%20a%20inc%C3%AAndio%20com%20bomba%20Thebe.jpg',
    title: 'Sistema de Combate a Incêndio THEBE',
    desc: 'Bombas centrífugas de alta pressão e fluxo constante para hidrantes e sprinklers de segurança.',
    badge: 'Destaque',
    fullDesc: 'Um sistema de combate a incêndio com bomba Thebe usa bombas centrífugas (elétricas ou a diesel) da marca Thebe, projetadas para alta pressão e fluxo constante, acionadas por painéis de controle em caso de queda de pressão (via sensor/pressostato) para alimentar redes de hidrantes e sprinklers, garantindo a segurança em edifícios, indústrias e outros locais, com bombas jockey para manter a pressão e bombas principais para o combate efetivo.'
  },
];

const getBadgeColor = (badge: string) => {
  switch (badge) {
    case 'Destaque':
      return 'bg-gradient-to-r from-orange-500 to-orange-600';
    case 'Popular':
      return 'bg-gradient-to-r from-blue-500 to-blue-600';
    case 'Novidade':
      return 'bg-gradient-to-r from-rose-500 to-rose-600';
    default:
      return 'bg-gradient-to-r from-green-500 to-green-600';
  }
};

const ProductModal = ({ product, onClose }: { product: typeof products[0]; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 flex items-center justify-between p-6">
          <h3 className="text-2xl font-bold text-imperio-dark">{product.title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6 bg-gray-50 rounded-xl p-6 flex items-center justify-center">
            <img
              src={product.img}
              alt={product.title}
              className="max-h-64 object-contain"
            />
          </div>

          <div className="mb-4">
            <span className={`inline-block ${getBadgeColor(product.badge)} text-white text-xs font-bold px-3 py-1 rounded-full`}>
              {product.badge}
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            {product.fullDesc}
          </p>

          <a
            href={`https://wa.me/5591980252240?text=Tenho interesse em ${product.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-bold hover:from-green-600 hover:to-green-700 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Entrar em Contato via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <section id="produtos" className="bg-gradient-to-b from-white via-gray-50 to-white py-12 md:py-16 lg:py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-imperio-light-blue text-xs md:text-sm font-semibold uppercase tracking-wider mb-2 bg-imperio-light-blue/10 px-4 py-1.5 rounded-full">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            Nossos Produtos
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-imperio-dark mb-3 md:mb-4">
            Soluções Completas em Bombeamento
          </h2>
          <p className="text-sm md:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto mb-3 md:mb-4">
            Conheça nossa linha de produtos de qualidade, desenvolvidos para atender desde pequenos reparos até grandes projetos industriais.
          </p>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-imperio-light-blue to-imperio-blue rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl md:rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-imperio-light-blue/30 hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-48 md:h-56 lg:h-64 bg-gradient-to-br from-gray-50 to-gray-100 p-3 md:p-4 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />

                <span className={`absolute top-2 md:top-4 right-2 md:right-4 ${getBadgeColor(product.badge)} text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded-full shadow-lg flex items-center gap-1`}>
                  {product.badge === 'Popular' && <TrendingUp className="w-3 h-3" />}
                  {product.badge === 'Novidade' && <Sparkles className="w-3 h-3" />}
                  {product.badge}
                </span>

                <div className="absolute inset-0 bg-gradient-to-t from-imperio-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-4 md:p-5 lg:p-6">
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-imperio-dark mb-1.5 md:mb-2 group-hover:text-imperio-light-blue transition-colors duration-300 line-clamp-1">
                  {product.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 line-clamp-2 md:line-clamp-3 leading-relaxed">
                  {product.desc}
                </p>

                <div className="flex gap-2 md:gap-3">
                  <a
                    href={`https://wa.me/5591980252240?text=Tenho interesse em ${product.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 md:gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 md:py-3 rounded-lg text-xs md:text-sm font-bold hover:from-green-600 hover:to-green-700 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
                    Comprar
                  </a>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="px-3 md:px-4 py-2.5 md:py-3 bg-gray-100 text-imperio-dark rounded-lg text-xs md:text-sm font-bold hover:bg-imperio-blue hover:text-white transition-all duration-300 flex items-center gap-1"
                  >
                    Ver +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/5591980252240?text=Gostaria de ver todos os produtos disponíveis"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-imperio-blue to-imperio-mid-blue text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-sm md:text-base font-bold hover:from-imperio-light-blue hover:to-imperio-blue hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Ver Todos os Produtos
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  );
};

export default Products;
