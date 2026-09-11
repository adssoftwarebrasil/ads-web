import { Shield, Clock, Users, Wrench, type LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/scroll';

interface Feature {
  icon: LucideIcon;
  name: string;
  title: string;
  text: string;
}

const features: Feature[] = [
  {
    icon: Shield,
    name: 'shield',
    title: 'Qualidade Garantida',
    text: 'Trabalhamos apenas com marcas reconhecidas e produtos que passam pelo nosso rigoroso controle de qualidade.',
  },
  {
    icon: Clock,
    name: 'clock',
    title: 'Pronta Entrega',
    text: 'Estoque amplo para atender sua demanda sem atrasos. Entregamos no prazo para sua obra não parar.',
  },
  {
    icon: Users,
    name: 'users',
    title: 'Atendimento Personalizado',
    text: 'Nossa equipe técnica especializada entende o seu problema e indica a melhor solução para cada situação.',
  },
  {
    icon: Wrench,
    name: 'wrench',
    title: 'Suporte Técnico',
    text: 'Oferecemos assistência técnica e manutenção para que seus equipamentos operem com máxima eficiência.',
  },
];

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-[rgb(16,109,71)] font-semibold text-sm uppercase tracking-widest mb-3">
              Quem Somos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Mais de 15 anos fornecendo <span className="text-[rgb(16,109,71)]">soluções para soldagem</span> em Piracicaba
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A <strong>EPISOLDA</strong> atua no mercado de equipamentos para solda desde 2010 com o objetivo de fornecer soluções completas para o soldador. Nascemos da necessidade que o mercado tinha em obter produtos de qualidade com agilidade e confiança.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Fornecedor de soldagem em Piracicaba SP para quem precisa produzir com qualidade. Abrangemos todo o segmento de Máquinas de Solda, Linha de Soldagem, abrasivos, consumíveis, suporte técnico, manutenção, Ferramentas Manuais e Ferramentas Pneumáticas.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[rgb(16,109,71)] hover:bg-[rgb(13,90,58)] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Solicitar Orçamento
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group bg-gray-50 hover:bg-[rgb(16,109,71)] rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-[rgb(16,109,71)]/10 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors">
                    <Icon
                      className={`lucide lucide-${f.name} text-[rgb(16,109,71)] group-hover:text-white transition-colors`}
                      width={24}
                      height={24}
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">{f.title}</h3>
                  <p className="text-sm text-gray-500 group-hover:text-white/80 leading-relaxed transition-colors">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
