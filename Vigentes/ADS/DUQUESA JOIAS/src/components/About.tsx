import { Award, ShieldCheck, Heart, Users } from 'lucide-react';

const features = [
  {
    Icon: Award,
    iconClass: 'lucide lucide-award text-gold',
    title: 'Alta Qualidade',
    text: 'Cada peça é criteriosamente selecionada para garantir acabamento impecável e durabilidade.',
  },
  {
    Icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check text-gold',
    title: 'Empresa de Confiança',
    text: 'Mais de 6 anos no mercado com relacionamentos sólidos e transparência em cada parceria.',
  },
  {
    Icon: Heart,
    iconClass: 'lucide lucide-heart text-gold',
    title: 'Programa de Recompensas',
    text: 'Clientes e consultoras ganham prêmios exclusivos por fidelidade e performance.',
  },
  {
    Icon: Users,
    iconClass: 'lucide lucide-users text-gold',
    title: 'Comunidade Forte',
    text: 'Uma rede crescente de consultoras independentes em todo o estado do Mato Grosso.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-black overflow-hidden">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="transition-all duration-1000 opacity-100 translate-x-0">
            <span className="inline-block text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              Nossa História
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Nascemos para trazer{' '}
              <span className="italic text-gold-gradient">beleza e oportunidade</span> para o
              coração do Brasil.
            </h2>
            <div className="space-y-4 text-white/65 leading-relaxed text-base">
              <p>
                Fundada em 2019 em Sinop-MT, a{' '}
                <strong className="text-white font-semibold">Duquesa Joias</strong> nasceu com uma
                missão dupla: oferecer semijoias e joias em prata 925 de altíssima qualidade, e criar
                caminhos reais de independência financeira para mulheres em todo o Mato Grosso.
              </p>
              <p>
                Atuamos em varejo, atacado e consignação — atendendo tanto quem busca a peça perfeita
                para usar ou presentear, quanto quem quer transformar sua paixão por joias em uma
                fonte de renda sólida e crescente.
              </p>
              <p>
                Acreditamos que elegância e prosperidade andam juntas. Por isso, além das joias,
                oferecemos suporte completo, programa de recompensas e uma parceria de verdade para
                nossas consultoras.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <img
                src="https://storage.lucasmendes.dev/site-sp/duquesa%20joias/img/logo-letra-areia.webp"
                alt="Duquesa Joias"
                className="h-14 w-auto object-contain opacity-90"
              />
              <div className="h-10 w-px bg-white/20"></div>
              <div>
                <div className="text-white font-semibold text-sm">Desde 2019</div>
                <div className="text-white/50 text-xs">Sinop, Mato Grosso</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 transition-all duration-1000 delay-300 opacity-100 translate-x-0">
            {features.map(({ Icon, iconClass, title, text }) => (
              <div
                key={title}
                className="group bg-white/5 hover:bg-gold/10 border border-white/10 hover:border-gold/30 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center mb-4 group-hover:bg-gold/25 transition-colors">
                  <Icon width={22} height={22} className={iconClass} />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
