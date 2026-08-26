import { Award, Shield, Lightbulb, Users, Globe, Recycle, LucideIcon } from 'lucide-react';

interface Advantage {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
  delay: number;
}

const ADVANTAGES: Advantage[] = [
  { Icon: Shield, iconClass: 'lucide-shield', title: 'Segurança Total', description: 'Operações com rigoroso cumprimento de normas ambientais.', delay: 0 },
  { Icon: Lightbulb, iconClass: 'lucide-lightbulb', title: 'Inovação', description: 'Tecnologia de ponta no tratamento e destinação de resíduos.', delay: 100 },
  { Icon: Award, iconClass: 'lucide-award', title: 'Sustentabilidade', description: 'Foco absoluto na preservação e futuro do meio ambiente.', delay: 200 },
  { Icon: Users, iconClass: 'lucide-users', title: 'Personalização', description: 'Soluções adaptadas às necessidades do seu negócio.', delay: 300 },
  { Icon: Globe, iconClass: 'lucide-globe', title: 'Cobertura Nacional', description: 'Atendimento em todo território brasileiro com excelência.', delay: 400 },
  { Icon: Recycle, iconClass: 'lucide-recycle', title: 'Economia Circular', description: 'Gestão completa com foco no reaproveitamento de recursos.', delay: 500 },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="bg-[rgb(40,120,80)] py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700 opacity-0 -translate-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[rgb(130,196,92)]/90 text-[rgb(20,80,50)] rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Award className="lucide lucide-award w-3 h-3" /> Diferenciais
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Por que escolher o <span className="text-[rgb(130,196,92)]">Grupo Indcom</span>?
          </h2>
          <p className="text-base md:text-lg text-white/80 leading-relaxed">
            Expertise técnica, segurança jurídica e compromisso ambiental para transformar a gestão de resíduos da sua empresa.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="relative order-2 lg:order-1 transition-all duration-700 delay-200 opacity-0 -translate-x-8">
            <div className="sticky top-24">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[rgb(130,196,92)] to-teal-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <img
                  src="https://storage.lucasmendes.dev/site-sp/indcom/img/por-que-contratar.webp"
                  alt="Instalações do Grupo Indcom"
                  className="relative w-full h-[300px] lg:h-[500px] object-cover rounded-2xl shadow-2xl border border-white/10"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 md:right-auto bg-white/95 backdrop-blur text-[rgb(20,80,50)] p-4 rounded-xl shadow-lg border-l-4 border-[rgb(130,196,92)] flex items-center gap-3">
                  <div className="p-2 bg-[rgb(40,120,80)]/10 rounded-full">
                    <Award className="lucide lucide-award w-6 h-6 text-[rgb(40,120,80)]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-gray-500">Garantia</p>
                    <p className="text-sm font-bold">Sistema de Qualidade Integrado &amp; Licenciamento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {ADVANTAGES.map((adv) => (
              <div
                key={adv.title}
                className="group p-5 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 opacity-0 translate-y-8"
                style={{ transitionDelay: `${adv.delay}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 bg-[rgb(130,196,92)] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <adv.Icon className={`lucide ${adv.iconClass} w-5 h-5 text-[rgb(20,80,50)]`} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1 leading-tight">{adv.title}</h3>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">{adv.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
