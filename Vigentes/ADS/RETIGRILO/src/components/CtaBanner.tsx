import { Zap, Shield, Star } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

const badges = [
  { icon: Zap, iconClass: 'lucide lucide-zap text-primary', label: 'Diagnóstico Rápido' },
  { icon: Shield, iconClass: 'lucide lucide-shield text-primary', label: 'Serviço com Garantia' },
  { icon: Star, iconClass: 'lucide lucide-star text-primary', label: 'Avaliação 5 Estrelas' },
];

export default function CtaBanner() {
  return (
    <section
      className="py-16 md:py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgb(3, 20, 41) 0%, rgb(10, 35, 65) 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/retigrilo/img/motor-cinza-pendurado-corrente-oficina-mecanica_1600x1200.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      ></div>
      <div className="animate-on-scroll relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 visible">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-white mb-4">
            Seu motor merece o
            <span
              className="text-transparent bg-clip-text block"
              style={{ backgroundImage: 'linear-gradient(135deg, rgb(145, 200, 68), rgb(76, 181, 73))' }}
            >
              melhor cuidado
            </span>
          </h2>
          <p className="text-brand-slate text-lg max-w-xl mx-auto mb-8">
            Entre em contato agora e receba um orçamento sem compromisso. Atendemos Alta Floresta e toda a
            região do Mato Grosso.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.label} className="flex items-center gap-2 text-brand-white/80">
                  <Icon className={badge.iconClass} width={18} height={18} />
                  <span className="text-sm font-medium">{badge.label}</span>
                </div>
              );
            })}
          </div>
          <a
            href="https://wa.me/5566999585577?text=Olá! Vim pelo site da Retigrilo e gostaria de um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-black text-lg px-10 py-5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-2xl text-brand-dark"
            style={{
              background: 'linear-gradient(135deg, rgb(145, 200, 68), rgb(76, 181, 73))',
              boxShadow: 'rgba(145, 200, 68, 0.3) 0px 0px 30px',
            }}
          >
            <WhatsappIcon className="w-6 h-6 fill-current" />
            Solicitar Orçamento Grátis
          </a>
        </div>
      </div>
    </section>
  );
}
