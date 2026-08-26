import {
  Award,
  TrendingUp,
  Shield,
  Users,
  HeartHandshake,
  Zap,
  LucideIcon,
} from 'lucide-react';

interface Item {
  Icon: LucideIcon;
  title: string;
  text: string;
}

const items: Item[] = [
  {
    Icon: Award,
    title: 'Especialização Comprovada',
    text: 'Mais de 12 anos de experiência com foco em Lucro Real e gestão tributária complexa.',
  },
  {
    Icon: TrendingUp,
    title: 'Resultados Mensuráveis',
    text: 'Redução média de 40% na carga tributária dos nossos clientes através de planejamento estratégico.',
  },
  {
    Icon: Shield,
    title: 'Segurança e Compliance',
    text: 'Todas as estratégias 100% dentro da lei, garantindo tranquilidade e proteção fiscal.',
  },
  {
    Icon: Users,
    title: 'Atendimento Personalizado',
    text: 'Cada empresa é única. Desenvolvemos soluções sob medida para seu negócio.',
  },
  {
    Icon: HeartHandshake,
    title: 'Parceria de Longo Prazo',
    text: 'Não somos apenas contadores, somos parceiros estratégicos do seu crescimento.',
  },
  {
    Icon: Zap,
    title: 'Agilidade e Eficiência',
    text: 'Processos otimizados e tecnologia para entregas rápidas e precisas.',
  },
];

export default function Differentials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-[rgb(245,134,52)]/10 rounded-full">
              <span className="text-[rgb(245,134,52)] font-semibold text-sm">
                NOSSOS DIFERENCIAIS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(47,55,56)] mb-6">
              Por Que Escolher a Soluções Contábeis?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Somos reconhecidos como o melhor escritório de contabilidade do
              Mato Grosso por entregar resultados concretos e construir relações
              de confiança.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {items.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="group bg-gray-50 rounded-xl p-8 hover:bg-gradient-to-br hover:from-[rgb(245,134,52)] hover:to-[rgb(225,114,32)] transition-all transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon size={28} className="text-[rgb(245,134,52)]" />
                </div>
                <h3 className="text-xl font-bold text-[rgb(47,55,56)] mb-3 group-hover:text-white transition-colors">
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-white/90 transition-colors">
                  {text}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-[rgb(47,55,56)] rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(245,134,52)]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[rgb(245,134,52)]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Foco Total em Supermercados e Açougues
              </h3>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Nossa especialização no setor varejista nos torna referência em
                Rondonópolis e região. Conhecemos profundamente os desafios do
                seu segmento e temos as soluções certas para empresas que estão
                sufocadas com impostos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contato"
                  className="bg-[rgb(245,134,52)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[rgb(225,114,32)] transition-all transform hover:scale-105"
                >
                  Quero Economizar Agora
                </a>
                <a
                  href="https://wa.me/5566999215475?text=Olá! Tenho um supermercado/açougue e gostaria de reduzir impostos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[rgb(47,55,56)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
