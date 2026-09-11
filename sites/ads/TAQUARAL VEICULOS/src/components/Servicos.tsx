import { ShoppingCart, DollarSign, RefreshCw, Handshake, CreditCard, FileCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const BG = 'https://storage.lucasmendes.dev/site-sp/taquaral%20veiculos%2Fimg%2Ftres-carros-garagem.webp';

interface Servico {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const servicos: Servico[] = [
  {
    icon: ShoppingCart,
    title: 'Venda de Veículos Seminovos',
    desc: 'Amplo estoque de veículos seminovos revisados, com procedência garantida e prontos para você.',
  },
  {
    icon: DollarSign,
    title: 'Compra de Veículos',
    desc: 'Compramos seu veículo de forma rápida, justa e transparente. Avaliação gratuita e pagamento à vista.',
  },
  {
    icon: RefreshCw,
    title: 'Troca',
    desc: 'Facilite a troca do seu veículo atual por um novo. Processo descomplicado com toda assessoria necessária.',
  },
  {
    icon: Handshake,
    title: 'Consignação',
    desc: 'Deixe seu veículo conosco para venda. Sem burocracia, com retorno justo e vendas rápidas.',
  },
  {
    icon: CreditCard,
    title: 'Financiamento',
    desc: 'Condições especiais de financiamento, mesmo para quem tem crédito limitado. Aprovação facilitada.',
  },
  {
    icon: FileCheck,
    title: 'Assessoria Completa',
    desc: 'Acompanhamento em todas as etapas da negociação, desde a escolha até a documentação final.',
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-20 lg:py-32 bg-[rgb(16,16,16)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${BG}")` }}></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[rgb(193,148,35)]/20 border border-[rgb(193,148,35)] text-[rgb(254,240,115)] rounded-full text-sm font-semibold">
              Nossos Serviços
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Soluções Completas Para Você
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Oferecemos tudo o que você precisa para comprar, vender ou trocar seu veículo com segurança e praticidade.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((s) => (
            <div
              key={s.title}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[rgb(193,148,35)]/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[rgb(193,148,35)] to-[rgb(254,240,115)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <s.icon className="w-8 h-8 text-[rgb(16,16,16)]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
              <p className="text-gray-300 leading-relaxed">{s.desc}</p>
              <a
                href="https://wa.me/5562992489166"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-6 text-[rgb(254,240,115)] hover:text-[rgb(193,148,35)] font-semibold transition-colors duration-200"
              >
                Saiba mais
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/5562992489166?text=Olá! Gostaria de conhecer melhor os serviços da Taquaral Veículos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[rgb(193,148,35)] hover:bg-[rgb(254,240,115)] text-[rgb(16,16,16)] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>Fale Conosco no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
