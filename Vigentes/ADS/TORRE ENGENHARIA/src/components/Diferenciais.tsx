import { Award, Shield, TrendingUp, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Diferencial {
  icon: LucideIcon;
  title: string;
  description: string;
}

const diferenciais: Diferencial[] = [
  {
    icon: Award,
    title: 'Desde 2013',
    description:
      'Mais de uma década de experiência no mercado imobiliário e de construção civil de Rondonópolis e região do Mato Grosso.',
  },
  {
    icon: Shield,
    title: 'Processo Completo',
    description:
      'Do projeto arquitetônico à documentação final para venda. Cuidamos de cada etapa sem você precisar buscar outros profissionais.',
  },
  {
    icon: TrendingUp,
    title: 'Visão Real de Mercado',
    description:
      'Também construímos casas para venda — isso nos dá visão concreta de custo, prazo, valorização e resultado financeiro.',
  },
  {
    icon: Users,
    title: 'Empresa Familiar',
    description:
      'Atendimento próximo, transparente e comprometido. Valores sólidos construídos ao longo de anos de trabalho dedicado.',
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-sky font-semibold uppercase tracking-widest text-xs mb-3">
            Nossos Diferenciais
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Por que escolher a Torre?
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
            Entregamos muito mais do que serviços técnicos. Cuidamos do seu patrimônio como se
            fosse nosso.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {diferenciais.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/12 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-sky/20 mb-5">
                  <Icon size={22} className="text-brand-sky" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-14 bg-white/8 border border-white/10 rounded-2xl px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Pronto para resolver a situação do seu imóvel?
            </h3>
            <p className="text-white/60 text-sm">
              Fale com um especialista agora e receba orientação personalizada.
            </p>
          </div>
          <a
            href="https://wa.me/5566996194229?text=Ol%C3%A1%21+Quero+resolver+a+situa%C3%A7%C3%A3o+do+meu+im%C3%B3vel+com+a+Torre+Engenharia."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-brand-sky text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#00A3E4] transition-all duration-200 hover:shadow-lg hover:shadow-brand-sky/30 whitespace-nowrap"
          >
            Falar agora no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
