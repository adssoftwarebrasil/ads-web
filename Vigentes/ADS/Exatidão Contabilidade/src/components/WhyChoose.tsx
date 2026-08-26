import { Award, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
  animClass: string;
}

const reasons: Reason[] = [
  {
    icon: Award,
    title: 'Experiência Comprovada e Reconhecida',
    description:
      'Mais de 50 anos de atuação no mercado contábil de Goiânia. Nossa trajetória é marcada por clientes satisfeitos e negócios que cresceram com nosso suporte estratégico.',
    animClass: 'opacity-0 -translate-x-10',
  },
  {
    icon: Target,
    title: 'Consultoria Estratégica',
    description:
      'Não somos apenas contadores, somos parceiros estratégicos do seu negócio. Focamos em estratégias práticas que levam ao crescimento sustentável e ao sucesso empresarial.',
    animClass: 'opacity-0 translate-x-10',
  },
];

export default function WhyChoose() {
  return (
    <section
      className="py-20 relative"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/exatidao%20contabilidade/img/por-que-contratar-paralax-background.webp")',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="absolute inset-0 bg-[rgba(54,55,58,0.9)]"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm uppercase tracking-widest text-[rgb(204,162,74)] font-semibold mb-4">
            NOSSOS DIFERENCIAIS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Por Que Contratar a Exatidão?</h2>
        </div>
        <div className="space-y-12 max-w-5xl mx-auto">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div key={i} className="transition-all duration-1000">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl shadow-2xl">
                  <div className="flex items-start gap-6">
                    <div className="text-[rgb(202,162,106)] flex-shrink-0">
                      <Icon size={48} />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{reason.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://wa.me/556232113304?text=Olá!%20Quero%20conhecer%20os%20diferenciais%20da%20Exatidão%20Contabilidade."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(202,162,106)] hover:bg-[rgb(204,162,74)] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-xl"
          >
            Fale com um Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
