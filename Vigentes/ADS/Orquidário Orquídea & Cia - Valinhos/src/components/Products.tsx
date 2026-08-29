import { Flower2, Gift, Calendar, CheckCircle2, Store, Truck } from 'lucide-react';

const services = [
  {
    title: 'Locação de Arranjos',
    text: 'Locação de arranjos para eventos.',
    image:
      'https://storage.lucasmendes.dev/site-sp/orquidario%20orquidea%2Fimg%2Flocacao-de-arranjos.webp',
    icon: Flower2,
    color: 'rgb(22, 126, 79)',
  },
  {
    title: 'Arranjos Personalizados',
    text: 'Personalizamos a seu gosto e preferência.',
    image:
      'https://storage.lucasmendes.dev/site-sp/orquidario%20orquidea%2Fatualizadas%2Farranjos%20personalizados.webp',
    icon: Gift,
    color: 'rgb(227, 97, 222)',
  },
  {
    title: 'Assinatura Mensal',
    text: 'Planos mensais de orquídeas para sua casa ou escritório.',
    image:
      'https://storage.lucasmendes.dev/site-sp/orquidario%20orquidea%2Fservicos%2Fassinatura-mensal-de-orquideas.webp',
    icon: Calendar,
    color: 'rgb(163, 206, 15)',
  },
];

const specialProducts = [
  'Vasos',
  'Vasos de vidro',
  'Substratos',
  'Adubos',
  'Cachepôs de madeira',
  'Cachepôs de louça',
  'Hastes para pendurar',
];

const channels = [
  {
    icon: Store,
    title: 'Loja Física',
    text: 'Visite nossa loja e escolha pessoalmente suas plantas',
  },
  {
    icon: Truck,
    title: 'Entrega Rápida',
    text: 'Compre online com entrega segura na região',
  },
  {
    icon: Gift,
    title: 'Eventos',
    text: 'Participamos de feiras e exposições regionais',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[rgb(22,126,79)] font-semibold text-sm uppercase tracking-wider mb-3 block">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Soluções em Orquídeas</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Do aluguel para eventos à assinatura mensal, trazemos vida para o seu ambiente.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div
                    className="absolute bottom-4 left-4 w-12 h-12 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: service.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 flex-grow">{service.text}</p>
                  <a
                    href="http://wa.me/551941171827"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold hover:underline transition-colors mt-auto"
                    style={{ color: service.color }}
                  >
                    Saiba Mais →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mb-24">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-stretch">
              <div className="relative h-72 md:h-full min-h-[400px]">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/orquidario%20orquidea%2Fprodutos%20especiais%2Fprodutos-especiais.webp"
                  alt="Produtos Especiais e Insumos"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent md:hidden"></div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center bg-gray-50/50">
                <span className="text-[rgb(22,126,79)] font-bold text-sm uppercase tracking-wider mb-2">
                  Linha Completa
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Produtos Especiais</h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Além de nossas flores, oferecemos tudo o que você precisa para cuidar do seu jardim e
                  manter suas plantas saudáveis e bonitas.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {specialProducts.map((product) => (
                    <div key={product} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgb(22,126,79)]/10 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-[rgb(22,126,79)]" />
                      </div>
                      <span className="text-gray-700 font-medium">{product}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500 italic">
                    Venha conferir nossa prateleira completa de insumos na loja física.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Múltiplos Canais de Atendimento
            </h3>
            <p className="text-gray-600 text-lg">Escolha a forma mais conveniente para você</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <div key={channel.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[rgb(22,126,79)] text-white rounded-2xl mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{channel.title}</h4>
                  <p className="text-gray-600">{channel.text}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <a
              href="http://wa.me/551941171827"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[rgb(22,126,79)] text-white px-8 py-4 rounded-full hover:bg-[rgb(22,126,79)]/90 transition-all shadow-lg hover:shadow-xl font-semibold text-lg"
            >
              Faça seu Pedido Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
