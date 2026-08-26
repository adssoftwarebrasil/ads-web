import { Award, Star, CheckCircle, Calendar, Users, Recycle, Handshake, MessageCircle } from 'lucide-react';

const cards = [
  {
    icon: Award,
    slug: 'award',
    title: 'Experiência Comprovada',
    text: 'Mais de uma década de atuação no mercado.',
  },
  {
    icon: Star,
    slug: 'star',
    title: 'Atendimento Excelência',
    text: 'Nosso atendimento é personalizado e focado no cliente.',
  },
  {
    icon: CheckCircle,
    slug: 'check-circle',
    title: 'Processos Certificados',
    text: 'Atendemos a todas as normas de segurança e certificação.',
  },
];

const counters = [
  { icon: Calendar, slug: 'calendar', value: '0+', label: 'anos' },
  { icon: Users, slug: 'users', value: '0+', label: 'clientes atendidos' },
  { icon: Recycle, slug: 'recycle', value: '0+', label: 'toneladas recicladas' },
  { icon: Handshake, slug: 'handshake', value: '0+', label: 'parcerias sustentáveis' },
];

export default function Advantages() {
  return (
    <section
      id="vantagens"
      className="py-16 lg:py-20 bg-white border-t border-[rgba(26,157,39,0.1)]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[rgb(53,64,66)] mb-4">
            Vantagens de Trabalhar Conosco
          </h2>
          <p className="text-base lg:text-xl text-[rgb(64,77,79)] max-w-3xl mx-auto">
            Saiba por que somos a sua melhor escolha em Gestão de Resíduos Eletroeletrônicos.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="bg-gradient-to-br from-[rgba(26,157,39,0.05)] to-[rgba(18,132,27,0.05)] border-2 border-[rgba(26,157,39,0.2)] rounded-xl p-6 lg:p-10 text-center hover:border-[rgba(26,157,39,0.5)] transition-all duration-300"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <Icon
                  className={`lucide lucide-${c.slug} w-16 h-16 text-[rgb(26,157,39)] mx-auto mb-4`}
                />
                <h3 className="text-xl font-bold text-[rgb(53,64,66)] mb-3">{c.title}</h3>
                <p className="text-[rgb(64,77,79)] leading-relaxed">{c.text}</p>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {counters.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={c.label}
                className="bg-white rounded-xl p-6 lg:p-8 shadow-lg text-center transition-all duration-500"
                style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
              >
                <Icon
                  className={`lucide lucide-${c.slug} w-10 h-10 text-[rgb(26,157,39)] mx-auto mb-3`}
                />
                <div className="text-4xl lg:text-5xl font-bold text-[rgb(26,157,39)] mb-2">
                  {c.value}
                </div>
                <div className="text-sm lg:text-base text-[rgb(64,77,79)] uppercase tracking-wider">
                  {c.label}
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <a
            href="https://wa.me/5541999600458"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[rgb(26,157,39)] text-white px-8 py-4 rounded-lg text-base lg:text-lg font-semibold hover:bg-[rgb(18,132,27)] hover:scale-105 transition-all duration-300 shadow-md"
          >
            <MessageCircle className="lucide lucide-message-circle w-5 h-5 mr-2" />
            Enviar WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
