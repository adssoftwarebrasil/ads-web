import { Heart, Shield, Zap, Scale, Sparkles, Users, LucideIcon } from 'lucide-react';

interface Valor {
  Icon: LucideIcon;
  iconClass: string;
  label: string;
  delay: string;
}

const valores: Valor[] = [
  { Icon: Heart, iconClass: 'lucide lucide-heart', label: 'Lealdade', delay: '100ms' },
  { Icon: Shield, iconClass: 'lucide lucide-shield', label: 'Ética', delay: '200ms' },
  { Icon: Zap, iconClass: 'lucide lucide-zap', label: 'Garra', delay: '300ms' },
  { Icon: Scale, iconClass: 'lucide lucide-scale', label: 'Honestidade', delay: '400ms' },
  { Icon: Sparkles, iconClass: 'lucide lucide-sparkles', label: 'Humildade', delay: '500ms' },
  { Icon: Users, iconClass: 'lucide lucide-users', label: 'Respeito', delay: '600ms' },
];

export default function Historia() {
  return (
    <div id="sobre">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="transform transition-all duration-1000 translate-x-0 opacity-100">
              <img
                src="https://storage.lucasmendes.dev/site-sp/La%20Toka%20Espetaria%2Fimgi_28_518538213_17931072141063868_3818792793764754985_n.jpg"
                alt="La Toka Espetaria"
                className="rounded-2xl shadow-2xl w-full"
                loading="lazy"
                style={{ boxShadow: 'rgba(249, 49, 49, 0.3) 0px 20px 60px' }}
              />
            </div>
            <div className="transform transition-all duration-1000 delay-300 translate-x-0 opacity-100">
              <p className="text-[#F93131] font-semibold uppercase tracking-wide mb-4">NOSSA HISTÓRIA</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
                Construindo Relações Baseadas na Confiança
              </h2>
              <div className="space-y-4 text-[#2D2D2D] leading-relaxed mb-8">
                <p>
                  Desde abril de 2024, a La Toka Espetaria nasceu de uma oportunidade transformada em paixão. Reabriu
                  suas portas com um propósito claro: entregar não apenas comida de qualidade, mas criar experiências
                  memoráveis baseadas em valores sólidos.
                </p>
                <p>
                  Nosso compromisso é com você: lealdade, ética, honestidade e respeito em cada espetinho servido.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {valores.map(({ Icon, iconClass, label, delay }) => (
                  <div
                    key={label}
                    className="bg-[#2D2D2D] rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:bg-[#F93131] transition-all duration-300 transform hover:scale-105 opacity-100"
                    style={{ transitionDelay: delay }}
                  >
                    <Icon className={`${iconClass} w-8 h-8 text-[#FFD700]`} />
                    <p className="text-white font-semibold text-sm text-center">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
