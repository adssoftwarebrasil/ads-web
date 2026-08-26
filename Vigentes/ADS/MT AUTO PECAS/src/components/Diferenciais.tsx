import { MessageCircle, CreditCard, Clock, MapPin, Shield, Headphones, type LucideIcon } from 'lucide-react';

const diferenciais: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: MessageCircle,
    title: 'Atendimento WhatsApp',
    description: 'Faça seus pedidos e tire dúvidas pelo WhatsApp com rapidez e praticidade.',
  },
  {
    icon: CreditCard,
    title: 'Aceitamos Cartão',
    description: 'Facilidades de pagamento com aceitação de cartões de crédito e débito.',
  },
  {
    icon: Clock,
    title: 'Horário Estendido',
    description: 'Aberto de segunda a sábado, das 7:30 às 18:00, para melhor atendê-lo.',
  },
  {
    icon: MapPin,
    title: 'Localização Privilegiada',
    description: 'Fácil acesso pela BR-316, atendendo toda a região metropolitana de Belém.',
  },
  {
    icon: Shield,
    title: 'Produtos com Garantia',
    description: 'Trabalhamos apenas com produtos de qualidade e garantia do fabricante.',
  },
  {
    icon: Headphones,
    title: 'Equipe Especializada',
    description: 'Profissionais capacitados para orientar na escolha do produto ideal.',
  },
];

const cidades = ['Marituba', 'Ananindeua', 'Belém', 'Benevides', 'Santa Izabel', 'Barcarena'];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nossos <span className="text-[rgb(4,152,134)]">Diferenciais</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Entenda por que a MT Auto Peças é a melhor escolha para seu veículo
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {diferenciais.map((d, i) => {
              const Icon = d.icon;
              return (
                <div
                  key={i}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[rgb(4,152,134)] to-[rgb(3,122,107)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{d.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{d.description}</p>
                </div>
              );
            })}
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Atendemos Toda a Região Metropolitana
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  Nossa área de cobertura inclui as principais cidades da região, garantindo que você tenha acesso a
                  produtos de qualidade onde quer que esteja.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {cidades.map((c) => (
                    <span
                      key={c}
                      className="px-4 py-2 bg-[rgb(4,152,134)] text-white rounded-full text-sm font-medium"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  <a
                    href="https://wa.me/559191706760?text=Olá! Gostaria de mais informações sobre a Matriz."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[rgb(4,152,134)] text-white px-6 py-4 rounded-full hover:bg-[rgb(3,122,107)] transition-all font-semibold shadow-xl"
                  >
                    <MessageCircle size={20} />
                    WhatsApp Matriz
                  </a>
                  <a
                    href="https://wa.me/559184957830?text=Olá! Gostaria de falar com a filial de Ananindeua."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[rgb(4,152,134)] text-white px-6 py-4 rounded-full hover:bg-[rgb(3,122,107)] transition-all font-semibold shadow-xl"
                  >
                    <MessageCircle size={20} />
                    WhatsApp Ananindeua
                  </a>
                  <a
                    href="#localizacao"
                    className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-4 rounded-full hover:bg-gray-100 transition-all font-semibold"
                  >
                    <MapPin size={20} />
                    Localização
                  </a>
                </div>
              </div>
              <div className="relative min-h-[400px] md:min-h-0">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/mt%20autopecas/img/matriz-e-filial.webp"
                  alt="MT Auto Peças"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent md:bg-gradient-to-r md:from-gray-900 md:to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
