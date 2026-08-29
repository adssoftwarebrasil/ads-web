import { UserCog, Users, Eye, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
}

const advantages: Advantage[] = [
  {
    icon: UserCog,
    title: 'Atendimento Personalizado para Cada Cliente',
    description:
      'Analisamos a sua realidade empresarial para oferecer soluções contábeis específicas e estratégicas para o seu segmento.',
  },
  {
    icon: Users,
    title: 'Equipe Especializada e Sempre Atualizada',
    description:
      'Nossos profissionais possuem vasta experiência e estão constantemente capacitados com as últimas atualizações fiscais e tributárias.',
  },
  {
    icon: Eye,
    title: 'Transparência em Todos os Processos',
    description:
      'Você acompanha cada etapa dos nossos serviços com total clareza. Acesso facilitado às informações do seu negócio.',
  },
  {
    icon: Zap,
    title: 'Inovação e Tecnologia',
    description:
      'Utilizamos as mais modernas ferramentas contábeis para garantir agilidade, precisão e segurança na gestão do seu negócio.',
  },
];

export default function Advantages() {
  return (
    <section
      id="vantagens"
      className="py-20 relative"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/exatidao%20contabilidade/img/vantagens.webp")',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="absolute inset-0 bg-[rgba(54,55,58,0.9)]"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm uppercase tracking-widest text-[rgb(204,162,74)] font-semibold mb-4">
            POR QUE NOS ESCOLHER
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nossas Vantagens</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Diferenciais que fazem da Exatidão Contabilidade a escolha certa para o seu negócio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, i) => {
            const Icon = advantage.icon;
            return (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-[rgb(202,162,106)]/30 p-8 rounded-xl transition-all duration-500 hover:border-[rgb(202,162,106)] hover:scale-105 hover:shadow-2xl"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-[rgb(202,162,106)] mb-4">
                  <Icon size={64} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{advantage.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
