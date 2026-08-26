import { Car, RefreshCw, Handshake, CreditCard, Calendar, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  gradient: string;
  title: string;
  text: string;
}

const services: Service[] = [
  {
    icon: Car,
    gradient: 'from-red-500 to-red-600',
    title: 'Veículos Novos',
    text: 'Amplo catálogo de carros zero quilômetro das melhores marcas do mercado, com as melhores condições de pagamento.',
  },
  {
    icon: RefreshCw,
    gradient: 'from-gray-700 to-gray-900',
    title: 'Seminovos Selecionados',
    text: 'Veículos seminovos rigorosamente vistoriados, com histórico completo e procedência garantida para sua segurança.',
  },
  {
    icon: Handshake,
    gradient: 'from-red-600 to-red-700',
    title: 'Troca e Consignação',
    text: 'Facilitamos a troca do seu veículo atual ou vendemos em consignação, cuidando de toda a burocracia para você.',
  },
  {
    icon: CreditCard,
    gradient: 'from-gray-800 to-black',
    title: 'Financiamento',
    text: 'Parceria com as melhores instituições financeiras para oferecer as taxas mais competitivas e aprovação facilitada.',
  },
  {
    icon: Calendar,
    gradient: 'from-red-500 to-red-600',
    title: 'Consórcio',
    text: 'Opção inteligente para quem planeja a compra do veículo com parcelas que cabem no seu bolso, sem juros.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Soluções Completas Para Você</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Da compra ao financiamento, cuidamos de cada detalhe para que você tenha a melhor experiência possível
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${s.gradient}`}></div>
              <div className="p-8">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${s.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <s.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{s.text}</p>
                <a
                  href="https://wa.me/5537999236447?text=Olá! Gostaria de saber mais sobre os serviços."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-4 transition-all duration-300"
                >
                  Saiba Mais
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-black rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Pronto Para o Seu Carro Novo?</h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudar você a encontrar o veículo perfeito com as melhores condições do mercado
          </p>
          <a
            href="https://wa.me/5537999236447?text=Olá! Quero saber mais sobre os veículos disponíveis!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Falar com Especialista Agora
          </a>
        </div>
      </div>
    </section>
  );
}
