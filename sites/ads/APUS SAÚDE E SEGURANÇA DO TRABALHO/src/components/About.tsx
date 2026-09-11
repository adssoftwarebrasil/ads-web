import { Award, Clock, Target, Users, type LucideIcon } from 'lucide-react';

interface Value {
  icon: LucideIcon;
  iconClass: string;
  label: string;
}

const values: Value[] = [
  { icon: Award, iconClass: 'lucide lucide-award', label: 'Excelência' },
  { icon: Clock, iconClass: 'lucide lucide-clock', label: 'Agilidade' },
  { icon: Target, iconClass: 'lucide lucide-target', label: 'Confiança' },
  { icon: Users, iconClass: 'lucide lucide-users', label: 'Qualidade' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(78,20,104)] to-[rgb(253,144,41)] rounded-2xl transform -rotate-3"></div>
              <div className="relative bg-gradient-to-br from-[rgb(78,20,104)] to-[rgb(253,144,41)] rounded-2xl p-12 flex items-center justify-center">
                <Award size={200} strokeWidth={1} className="lucide lucide-award text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white px-6 py-3 rounded-full shadow-xl border-4 border-[rgb(253,144,41)]">
                <span className="text-sm font-bold text-[rgb(28,9,31)]">
                  Compromisso com a Excelência
                </span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(28,9,31)] mb-6">Sobre a APUS</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg mb-8">
              <p>
                A APUS - Saúde e Segurança do Trabalho oferece soluções completas para empresas que
                buscam garantir um ambiente seguro, prevenir riscos e cumprir todas as normas
                regulamentadoras. Com atendimento ágil e eficiente, ajudamos sua empresa a evitar
                multas, proteger seus colaboradores e manter a excelência em documentação.
              </p>
              <p>
                Nossa equipe multidisciplinar está preparada para atender empresas de todos os
                portes, oferecendo desde exames ocupacionais até elaboração de laudos técnicos
                complexos. Atuamos com foco na prevenção, garantindo que sua empresa esteja sempre em
                conformidade com as legislações vigentes.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.label}
                    className="text-center p-4 bg-gradient-to-br from-[rgb(78,20,104)]/10 to-[rgb(253,144,41)]/10 rounded-xl"
                  >
                    <Icon
                      size={32}
                      className={`${value.iconClass} text-[rgb(78,20,104)] mx-auto mb-2`}
                    />
                    <span className="text-sm font-semibold text-[rgb(28,9,31)]">{value.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
