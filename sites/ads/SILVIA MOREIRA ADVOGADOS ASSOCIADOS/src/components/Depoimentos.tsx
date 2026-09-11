import { Quote, Star } from 'lucide-react';

interface Depoimento {
  text: string;
  initial: string;
  name: string;
  when: string;
  delay: string;
}

const depoimentos: Depoimento[] = [
  {
    text: '"Fui muito bem recebida no escritório da Dra. Silvia Moreira, onde o atendimento se destacou pela cordialidade e profissionalismo. A Dra. Silvia demonstra notável sensibilidade humana, oferecendo uma escuta atenta e orientações precisas. Recomendo seus serviços pela excelência e comprometimento no exercício da advocacia."',
    initial: 'F',
    name: 'Filo ACP',
    when: '3 meses atrás',
    delay: '0s',
  },
  {
    text: '"Gostaria de agradecer a Dra. Silvia Moreira, e toda a sua equipe, numa causa de ano de permanência do Governo do Estado do Amapá, na qual a Dra. Silvia e toda sua equipe foram brilhantes. Já recebi o valor. E agora é só comemorar e agradecer a grande Advogada. Obrigado!"',
    initial: 'E',
    name: 'Edvan Passivo',
    when: '3 meses atrás',
    delay: '0.15s',
  },
  {
    text: '"Foi muito importante contar com a parceria e os trabalhos da associação. Experiência, trabalho e conhecimentos jurídicos valiosos. Obrigado!"',
    initial: 'J',
    name: 'Jose Menezes',
    when: '2 meses atrás',
    delay: '0.3s',
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] gold-gradient"></div>
            <span className="text-brand-gold-dark text-sm font-semibold tracking-[0.15em] uppercase">
              Depoimentos
            </span>
            <div className="w-10 h-[2px] gold-gradient"></div>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            O Que Nossos Clientes <span className="text-brand-red">Dizem</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex -space-x-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 text-brand-gold fill-brand-gold" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0</span>
            <span className="text-gray-500">no Google</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {depoimentos.map((d) => (
            <div key={d.name} className="animate-fade-up" style={{ transitionDelay: d.delay }}>
              <div className="h-full bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-gold/20 transition-all duration-500 flex flex-col">
                <Quote className="w-8 h-8 text-brand-gold/30 mb-4 flex-shrink-0" />
                <p className="text-gray-600 leading-relaxed mb-6 flex-1 text-sm">{d.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-white font-bold text-sm">
                    {d.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{d.name}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-brand-gold fill-brand-gold" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">{d.when}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
