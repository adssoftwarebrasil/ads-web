import { ShieldCheck, Star, Zap, HeartHandshake, Wrench, MapPin, LucideIcon } from 'lucide-react';

interface Differential {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
  delay: string;
}

const differentials: Differential[] = [
  {
    icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check text-brand-red group-hover:text-white transition-colors duration-300',
    title: 'Qualidade Garantida',
    description:
      'Usamos apenas peças de procedência comprovada e seguimos os melhores protocolos de serviço.',
    delay: '0ms',
  },
  {
    icon: Star,
    iconClass: 'lucide lucide-star text-brand-red group-hover:text-white transition-colors duration-300',
    title: 'Experiência Comprovada',
    description:
      'Mais de 15 anos atendendo Minaçu e região com excelência e retorno constante de clientes satisfeitos.',
    delay: '80ms',
  },
  {
    icon: Zap,
    iconClass: 'lucide lucide-zap text-brand-red group-hover:text-white transition-colors duration-300',
    title: 'Atendimento Ágil',
    description:
      'Diagnóstico rápido e eficiente. Valorizamos o seu tempo e entregamos o veículo no prazo combinado.',
    delay: '160ms',
  },
  {
    icon: HeartHandshake,
    iconClass: 'lucide lucide-heart-handshake text-brand-red group-hover:text-white transition-colors duration-300',
    title: 'Relação de Confiança',
    description:
      'Construída ao longo de anos, nossa reputação é nosso maior patrimônio. Transparência em cada serviço.',
    delay: '240ms',
  },
  {
    icon: Wrench,
    iconClass: 'lucide lucide-wrench text-brand-red group-hover:text-white transition-colors duration-300',
    title: 'Equipe Especializada',
    description:
      'Técnicos treinados e atualizados para lidar com todas as marcas e modelos, incluindo câmbio automático.',
    delay: '320ms',
  },
  {
    icon: MapPin,
    iconClass: 'lucide lucide-map-pin text-brand-red group-hover:text-white transition-colors duration-300',
    title: 'Atendimento Regional',
    description:
      'Cobrimos Minaçu, Alto Paraíso e toda a região com nosso serviço de guincho e remoção veicular.',
    delay: '400ms',
  },
];

export default function Differentials() {
  return (
    <section className="py-20 md:py-28 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-red text-xs font-semibold uppercase tracking-widest mb-3">
            Por que nos escolher
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-brand-navy leading-tight">
            NOSSOS<span className="text-brand-red"> DIFERENCIAIS</span>
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg border border-gray-100 hover:border-brand-red/20 transition-all duration-300 hover:-translate-y-1 group"
                style={{ animationDelay: item.delay }}
              >
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-red transition-colors duration-300">
                  <Icon width={22} height={22} className={item.iconClass} />
                </div>
                <h3 className="text-brand-navy font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
