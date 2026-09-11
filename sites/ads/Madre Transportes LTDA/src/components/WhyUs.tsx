import { useEffect, useRef } from 'react';
import { Handshake as HandshakeIcon, Clock, BadgeDollarSign, Star } from 'lucide-react';

const reasons = [
  {
    icon: <HandshakeIcon size={28} />,
    title: 'Comprometimento Total',
    description:
      'Assumimos cada entrega como responsabilidade própria. Cumprimos prazos e tratamos cada carga com o máximo cuidado, do carregamento à descarga.',
    color: 'from-blue-600 to-brand-blue',
  },
  {
    icon: <Star size={28} />,
    title: 'Qualidade no Atendimento',
    description:
      'Nossa equipe está sempre disponível para responder dúvidas, acompanhar o andamento das entregas e oferecer suporte personalizado a cada cliente.',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: <Clock size={28} />,
    title: 'Agilidade e Pontualidade',
    description:
      'Processos otimizados que garantem coletas rápidas e entregas no prazo. Sabemos que tempo é dinheiro para o seu negócio.',
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    icon: <BadgeDollarSign size={28} />,
    title: 'Preços Competitivos',
    description:
      'Tarifas justas e formas de pagamento flexíveis que se adaptam à realidade do seu negócio, sem abrir mão da excelência no serviço.',
    color: 'from-rose-500 to-rose-700',
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const el = sectionRef.current;
    if (el) {
      el.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-28 bg-gray-50 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          <div className="animate-on-scroll">
            <span className="inline-block text-brand-blue font-semibold text-sm uppercase tracking-widest mb-3">
              Por Que Nos Escolher
            </span>
            <h2 className="section-title mb-5">
              O que nos torna{' '}
              <span className="text-brand-blue">diferentes</span>
            </h2>
            <p className="section-subtitle mb-8">
              Nascemos da experiência de quem viveu o setor de dentro. Conhecemos os desafios
              e sabemos exatamente o que o mercado precisa. Por isso, entregamos mais do que
              transporte — entregamos confiança.
            </p>

            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/madre%20transportes%20ltda/img/outdoor-caminhao-vermelho-qualidade-eficiencia_1080x1080.webp"
                alt="Qualidade e Eficiência - Madre Transportes"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/70 to-transparent flex items-center p-8">
                <div>
                  <p className="text-white/80 text-sm font-medium mb-1">Nossa missão</p>
                  <p className="text-white text-xl font-bold leading-tight max-w-xs">
                    Qualidade, Eficiência e Confiança em cada entrega
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="animate-on-scroll bg-white rounded-2xl p-6 card-hover border border-gray-100 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {reason.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
