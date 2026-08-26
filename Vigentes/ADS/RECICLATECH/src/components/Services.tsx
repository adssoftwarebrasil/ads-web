import { Sparkles, MessageCircle, Mail, ArrowRight } from 'lucide-react';

type Service = {
  img: string;
  alt: string;
  badge: string;
  overlayIcon: 'message-circle' | 'mail';
  title: string;
  text: string;
  cta: {
    kind: 'whatsapp' | 'email';
    href: string;
    label: string;
    icon: 'message-circle' | 'mail';
  };
  delay: string;
};

const services: Service[] = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/reciclatechbrasil%2FConsultoria%20Ambiental.jpg',
    alt: 'Compra e Venda de Lotes de Eletrônicos para Reuso - Reciclatech',
    badge: 'Reuso',
    overlayIcon: 'message-circle',
    title: 'Compra e Venda de Lotes de Eletrônicos para Reuso',
    text: 'Comercializamos lotes de equipamentos eletrônicos para reuso, contribuindo para a economia circular.',
    cta: {
      kind: 'whatsapp',
      href: 'https://wa.me/5541999600458',
      label: 'Falar no WhatsApp',
      icon: 'message-circle',
    },
    delay: '0s',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/reciclatechbrasil%2FLoja%20de%20salvados.webp',
    alt: 'Loja de Salvados - Reciclatech',
    badge: 'Comércio',
    overlayIcon: 'mail',
    title: 'Loja de Salvados',
    text: 'Comércio de peças e equipamentos eletrônicos recuperados com qualidade garantida.',
    cta: {
      kind: 'email',
      href: 'mailto:atendimento@reciclatech.com.br',
      label: 'Enviar E-mail',
      icon: 'mail',
    },
    delay: '0.15s',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/reciclatechbrasil%2FDestinac%CC%A7a%CC%83o%20Certificada.webp',
    alt: 'Destinação Certificada - Reciclatech',
    badge: 'Certificado',
    overlayIcon: 'message-circle',
    title: 'Destinação Certificada',
    text: 'Destinação responsável e certificada de materiais recicláveis seguindo normas ambientais.',
    cta: {
      kind: 'whatsapp',
      href: 'https://wa.me/5541999600458',
      label: 'Falar no WhatsApp',
      icon: 'message-circle',
    },
    delay: '0.3s',
  },
];

function OverlayIcon({ name }: { name: 'message-circle' | 'mail' }) {
  if (name === 'mail') return <Mail className="lucide lucide-mail w-8 h-8 text-[rgb(26,157,39)]" />;
  return <MessageCircle className="lucide lucide-message-circle w-8 h-8 text-[rgb(26,157,39)]" />;
}

function CtaIcon({ name }: { name: 'message-circle' | 'mail' }) {
  if (name === 'mail')
    return (
      <Mail className="lucide lucide-mail w-5 h-5 transition-transform group-hover/btn:rotate-12 relative z-10" />
    );
  return (
    <MessageCircle className="lucide lucide-message-circle w-5 h-5 transition-transform group-hover/btn:rotate-12 relative z-10" />
  );
}

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      <div className="absolute top-20 left-0 w-96 h-96 bg-[rgb(26,157,39)]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[rgb(18,132,27)]/5 rounded-full blur-3xl -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 lg:mb-20 transition-all duration-1000 opacity-100 translate-y-0">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[rgb(26,157,39)]/10 text-[rgb(18,132,27)] text-sm font-semibold rounded-full mb-4">
            <Sparkles className="lucide lucide-sparkles w-4 h-4" />
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(53,64,66)] mb-6">
            Conheça nossos serviços
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[rgb(64,77,79)] max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma ampla gama de serviços para atender suas necessidades em gestão de
            resíduos e manutenção de Eletroeletrônicos.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[rgb(26,157,39)] to-[rgb(18,132,27)] mx-auto rounded-full mt-6"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-24">
          {services.map((s) => {
            const btnBase =
              s.cta.kind === 'email'
                ? 'bg-[rgb(53,64,66)] hover:bg-[rgb(64,77,79)]'
                : 'bg-[rgb(26,157,39)] hover:bg-[rgb(18,132,27)]';
            return (
              <div
                key={s.title}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{ transitionDelay: s.delay }}
              >
                <div className="relative overflow-hidden h-64 sm:h-72">
                  <img
                    src={s.img}
                    alt={s.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/95 backdrop-blur-sm text-[rgb(18,132,27)] text-xs font-semibold rounded-full shadow-lg">
                      {s.badge}
                    </span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 opacity-0 scale-75">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                      <OverlayIcon name={s.overlayIcon} />
                    </div>
                  </div>
                </div>
                <div className="p-6 lg:p-8 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[rgb(53,64,66)] group-hover:text-[rgb(26,157,39)] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-[rgb(64,77,79)] leading-relaxed text-sm sm:text-base min-h-[3rem]">
                    {s.text}
                  </p>
                  <a
                    href={s.cta.href}
                    {...(s.cta.kind === 'whatsapp'
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className={`group/btn relative inline-flex items-center justify-center gap-2 ${btnBase} text-white px-6 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 w-full overflow-hidden`}
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    <CtaIcon name={s.cta.icon} />
                    <span className="relative z-10">{s.cta.label}</span>
                    <ArrowRight className="lucide lucide-arrow-right w-5 h-5 transition-transform group-hover/btn:translate-x-1 relative z-10" />
                  </a>
                </div>
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[rgb(26,157,39)]/20 transition-colors duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 opacity-100 scale-100"
          style={{ transitionDelay: '0.6s' }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://storage.lucasmendes.dev/site-sp/reciclatechbrasil%2FVenha%20conhecer%20nossos%20servic%CC%A7os%20de%20perto.jpg")',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(26,157,39)]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[rgb(18,132,27)]/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 text-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded-full">
                <Sparkles className="lucide lucide-sparkles w-4 h-4" />
                Visite-nos
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Visite Nossa Loja
              </h3>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                Venha conhecer nossos serviços de perto e descubra como podemos ajudar sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href="https://wa.me/5541999600458"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-[rgb(26,157,39)] hover:bg-[rgb(18,132,27)] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 shadow-xl shadow-[rgb(26,157,39)]/30 hover:shadow-2xl hover:shadow-[rgb(26,157,39)]/50 hover:scale-105 w-full sm:w-auto"
                >
                  <MessageCircle className="lucide lucide-message-circle w-6 h-6 transition-transform group-hover:rotate-12" />
                  <span>Fale Conosco</span>
                  <ArrowRight className="lucide lucide-arrow-right w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:border-white/50 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  <span>Ver Localização</span>
                  <ArrowRight className="lucide lucide-arrow-right w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
