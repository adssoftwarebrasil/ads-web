import { Zap, ShieldCheck, Banknote, HeartHandshake, Clock, Star, type LucideIcon } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

interface Benefit {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    Icon: Zap,
    iconClass: 'lucide lucide-zap ',
    title: 'Entrega Ultrarrápida',
    description:
      'Pediu, chegou! Atendemos toda Primavera do Leste com agilidade para que sua casa nunca fique sem gás.',
  },
  {
    Icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check ',
    title: 'Segurança Garantida',
    description:
      'Todos os nossos botijões e cilindros são lacrados, certificados e entregues com as verificações de segurança em dia.',
  },
  {
    Icon: Banknote,
    iconClass: 'lucide lucide-banknote ',
    title: 'Preço Justo',
    description:
      'Oferecemos o melhor preço da cidade sem abrir mão da qualidade. Transparência em cada entrega.',
  },
  {
    Icon: HeartHandshake,
    iconClass: 'lucide lucide-heart-handshake ',
    title: 'Atendimento Humanizado',
    description:
      'Nosso time está pronto para te atender com cuidado, simpatia e toda atenção que você merece.',
  },
  {
    Icon: Clock,
    iconClass: 'lucide lucide-clock ',
    title: 'Abertos Todo Dia',
    description:
      'Funcionamos das 7h às 22h, todos os dias da semana. Quando você precisar, estaremos aqui.',
  },
  {
    Icon: Star,
    iconClass: 'lucide lucide-star ',
    title: 'Qualidade Reconhecida',
    description:
      'Clientes satisfeitos com nota 4.5★. O melhor atendimento da cidade é o que nossos clientes dizem sobre nós.',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-accent/20 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Por que nos escolher?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary leading-tight mb-4">
            Diferenciais que fazem{' '}
            <span className="relative inline-block">
              <span className="relative z-10">a diferença</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-accent/40 -skew-x-2 -z-0 rounded"></span>
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Mais do que vender gás e água, entregamos tranquilidade e confiança para a sua família.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map(({ Icon, iconClass, title, description }) => (
            <div
              key={title}
              className="group bg-surface hover:bg-primary rounded-3xl p-8 card-hover border border-primary-light/20 transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-primary group-hover:bg-accent rounded-2xl flex items-center justify-center text-accent group-hover:text-primary mb-6 transition-all duration-300 shadow-md">
                <Icon size={28} className={iconClass} />
              </div>
              <h3 className="text-xl font-bold text-primary group-hover:text-white mb-3 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-500 group-hover:text-white/80 text-sm leading-relaxed transition-colors duration-300">
                {description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-primary to-primary-dark rounded-3xl overflow-hidden shadow-2xl p-8 md:p-12">
          <div>
            <h3 className="text-3xl font-black text-white mb-4 leading-tight">
              Sua família merece o <span className="text-accent">melhor</span>
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Entregamos segurança e qualidade direto na sua porta. Botijões lacrados, agua pura e o atendimento mais
              atencioso de Primavera do Leste.
            </p>
            <a
              href="http://wa.me/556696555500"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent-bright text-primary font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 active:scale-95"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>
          <div className="flex justify-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/central%20gas/imagens/cliente-recebendo-entregador-de-gas-sorrindo_720x631.webp"
              alt="Cliente satisfeito recebendo entrega Central Gás"
              className="rounded-2xl shadow-2xl w-full max-w-sm object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
