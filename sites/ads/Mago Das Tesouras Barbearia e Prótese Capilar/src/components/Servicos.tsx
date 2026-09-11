import { Shield, Scissors, Sparkles, Zap, Droplets, GraduationCap, LucideIcon } from 'lucide-react';

interface Servico {
  icon: LucideIcon;
  iconName: string;
  title: string;
  desc: string;
  href: string;
  badge?: string;
  featured?: boolean;
}

const servicos: Servico[] = [
  {
    icon: Shield,
    iconName: 'shield',
    title: 'Prótese Capilar',
    desc: 'Recupere seus cabelos com naturalidade total. Utilizamos fios naturais de alta qualidade, com fixação segura e resultado imperceptível. Trate a calvície com estilo e confiança.',
    href: 'http://wa.me/553488238723?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Pr%C3%B3tese%20Capilar.',
    badge: 'Especialidade',
    featured: true,
  },
  {
    icon: Scissors,
    iconName: 'scissors',
    title: 'Corte de Cabelo',
    desc: 'Cortes modernos e personalizados para todos os estilos. Da navalha ao degradê, nossos barbeiros dominam as técnicas mais atuais do mercado.',
    href: 'http://wa.me/553488238723?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20corte%20de%20cabelo.',
  },
  {
    icon: Sparkles,
    iconName: 'sparkles',
    title: 'Barba Completa',
    desc: 'Modelagem precisa, hidratação e acabamento impecável. Uma barba bem cuidada é o detalhe que transforma o visual.',
    href: 'http://wa.me/553488238723?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o%20de%20barba.',
  },
  {
    icon: Zap,
    iconName: 'zap',
    title: 'Barba Pigmentada',
    desc: 'Micropigmentação de barba para preencher falhas e dar uniformidade. Resultado natural e duradouro para uma barba perfeita todos os dias.',
    href: 'http://wa.me/553488238723?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20barba%20pigmentada%2Fmicropigmenta%C3%A7%C3%A3o.',
  },
  {
    icon: Droplets,
    iconName: 'droplets',
    title: 'Progressiva & Selagem',
    desc: 'Cabelos lisos, sedosos e sem frizz. Tratamentos profissionais para alinhar e hidratar profundamente, com efeito duradouro.',
    href: 'http://wa.me/553488238723?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20progressiva%20ou%20selagem.',
  },
  {
    icon: GraduationCap,
    iconName: 'graduation-cap',
    title: 'Curso de Prótese Capilar',
    desc: 'Torne-se um especialista. Nosso curso ensina técnicas completas de prótese capilar para você atender com excelência e se destacar no mercado.',
    href: 'http://wa.me/553488238723?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Curso%20de%20Pr%C3%B3tese%20Capilar.',
    badge: 'Novidade',
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-24 bg-[rgb(247,246,247)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[rgb(245,133,79)] font-semibold uppercase tracking-widest text-sm mb-3">
            O que oferecemos
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[rgb(32,29,30)] leading-tight mb-4">
            Serviços que Transformam
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Do corte à prótese capilar, cuidamos de cada detalhe para que você saia daqui com
            confiança e estilo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`relative group rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer ${
                  s.featured
                    ? 'bg-[rgb(32,29,30)] text-white shadow-xl shadow-black/20'
                    : 'bg-white text-[rgb(32,29,30)] shadow-md shadow-black/8 hover:shadow-black/15'
                }`}
              >
                {s.badge && (
                  <span className="absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full bg-[rgb(254,197,52)] text-[rgb(32,29,30)]">
                    {s.badge}
                  </span>
                )}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl transition-colors duration-300 ${
                    s.featured
                      ? 'bg-[rgb(254,197,52)] text-[rgb(32,29,30)]'
                      : 'bg-[rgb(254,197,52)]/15 text-[rgb(245,133,79)] group-hover:bg-[rgb(254,197,52)] group-hover:text-[rgb(32,29,30)]'
                  }`}
                >
                  <Icon
                    className={`lucide lucide-${s.iconName}`}
                    width={28}
                    height={28}
                  />
                </div>
                <div className="flex-1">
                  <h3
                    className={`font-display text-xl font-bold mb-2 ${
                      s.featured ? 'text-[rgb(254,197,52)]' : 'text-[rgb(32,29,30)]'
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      s.featured ? 'text-white/70' : 'text-gray-500'
                    }`}
                  >
                    {s.desc}
                  </p>
                </div>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-semibold mt-1 transition-colors duration-200 ${
                    s.featured
                      ? 'text-[rgb(254,197,52)] hover:text-[rgb(245,133,79)]'
                      : 'text-[rgb(245,133,79)] hover:text-[rgb(32,29,30)]'
                  }`}
                >
                  Agendar agora →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
