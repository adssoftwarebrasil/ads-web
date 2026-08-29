import { Star, CheckCircle, ThumbsUp, Zap, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const IMG = 'https://storage.lucasmendes.dev/site-sp/taquaral%20veiculos%2Fimg%2Fconcessionaria-fachada-carros.webp';

interface Diferencial {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const diferenciais: Diferencial[] = [
  {
    icon: Star,
    title: 'Atendimento Personalizado e Direto',
    desc: 'Cada cliente é único. Oferecemos atendimento sob medida, ouvindo suas necessidades e encontrando a melhor solução para você.',
  },
  {
    icon: CheckCircle,
    title: 'Transparência em Todas as Negociações',
    desc: 'Sem taxas ocultas ou surpresas. Você sabe exatamente o que está comprando ou vendendo, com total clareza e honestidade.',
  },
  {
    icon: ThumbsUp,
    title: 'Veículos Revisados e de Procedência',
    desc: 'Todos os nossos veículos passam por rigorosa inspeção e consulta completa, garantindo qualidade e segurança.',
  },
  {
    icon: Zap,
    title: 'Facilidade no Financiamento',
    desc: 'Trabalhamos com as melhores condições do mercado. Aprovação facilitada, mesmo para quem tem restrições de crédito.',
  },
  {
    icon: TrendingUp,
    title: 'Agilidade no Processo de Compra e Venda',
    desc: 'Valorizamos seu tempo. Nosso processo é otimizado para que você tenha uma experiência rápida e sem burocracia.',
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-[rgb(254,240,115)] text-[rgb(16,16,16)] rounded-full text-sm font-semibold">
                Nossos Diferenciais
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(16,16,16)] mb-6 leading-tight">
              Por Que Escolher a <span className="text-[rgb(193,148,35)]">Taquaral Veículos?</span>
            </h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Somos muito mais do que uma simples revenda. Nossa missão é transformar a experiência de compra e venda de veículos, oferecendo um serviço completo, transparente e focado em você.
            </p>
            <div className="space-y-6">
              {diferenciais.map((d) => (
                <div
                  key={d.title}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[rgb(193,148,35)] to-[rgb(254,240,115)] rounded-lg flex items-center justify-center">
                    <d.icon className="w-6 h-6 text-[rgb(16,16,16)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[rgb(16,16,16)] mb-2">{d.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[rgb(193,148,35)]/20 to-[rgb(254,240,115)]/20 rounded-2xl transform -rotate-3"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={IMG} alt="Fachada da Taquaral Veículos" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[rgb(193,148,35)] text-white p-8 rounded-2xl shadow-xl max-w-xs">
              <div className="text-4xl font-bold mb-2">+1 Ano</div>
              <div className="text-sm opacity-90">De experiência transformando sonhos em realidade</div>
            </div>
          </div>
        </div>
        <div className="mt-20 bg-gradient-to-r from-[rgb(16,16,16)] to-[rgb(16,16,16)] rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Clientes que Conseguiram Realizar Seus Sonhos
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Centenas de clientes conseguiram aprovação de financiamento mesmo com crédito limitado, e vendemos veículos em consignação com agilidade e retorno justo para os proprietários.
          </p>
          <a
            href="https://wa.me/5562992489166?text=Olá! Quero realizar meu sonho também!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[rgb(193,148,35)] hover:bg-[rgb(254,240,115)] text-[rgb(16,16,16)] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
          >
            <span>Quero Realizar Meu Sonho</span>
          </a>
        </div>
      </div>
    </section>
  );
}
