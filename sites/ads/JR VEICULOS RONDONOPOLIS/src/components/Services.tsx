import { Car, RefreshCw, TrendingUp, Key } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Venda de Seminovos',
    description:
      'Veículos seminovos de procedência confiável, selecionados com rigorosa inspeção de qualidade para sua total segurança.',
    image:
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600',
    cta: 'Ver estoque',
    ctaHref: 'https://wa.me/5566999755005?text=Quero ver os veículos disponíveis no estoque.',
  },
  {
    icon: RefreshCw,
    title: 'Compra, Troca & Consignação',
    description:
      'Seu veículo tem valor aqui. Compramos, aceitamos troca ou consignamos seu carro com as melhores condições do mercado.',
    image:
      'https://images.pexels.com/photos/3984340/pexels-photo-3984340.jpeg?auto=compress&cs=tinysrgb&w=600',
    cta: 'Avaliar meu veículo',
    ctaHref: 'https://wa.me/5566999755005?text=Quero avaliar meu veículo para troca ou venda.',
  },
  {
    icon: TrendingUp,
    title: 'Consórcio YAMAHA',
    description:
      'Realize o sonho da sua moto ou veículo com o consórcio YAMAHA. Planos flexíveis e taxas competitivas.',
    image:
      'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=600',
    cta: 'Simular consórcio',
    ctaHref: 'https://wa.me/5566999755005?text=Quero simular um consórcio YAMAHA.',
  },
  {
    icon: Key,
    title: 'Locação de Veículos',
    description:
      'Alugue um veículo com praticidade e segurança. Frota selecionada para atender suas necessidades pessoais ou empresariais.',
    image:
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600',
    cta: 'Solicitar locação',
    ctaHref: 'https://wa.me/5566999755005?text=Quero solicitar uma locação de veículo.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-red text-sm font-bold tracking-[0.2em] uppercase">
            O que fazemos
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white leading-tight">
            Nossos <span className="text-brand-red">Serviços</span>
          </h2>
          <p className="mt-4 text-[#C0C0C0] max-w-xl mx-auto text-lg leading-relaxed">
            Soluções completas em mobilidade para você e sua família.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl bg-brand-black-soft border border-white/10 hover:border-brand-red/40 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-red/10"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black-soft via-brand-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 p-3 bg-brand-red/90 rounded-2xl">
                    <Icon size={22} className="text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <a
                    href={service.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-red hover:text-white font-semibold text-sm transition-colors group/link"
                  >
                    {service.cta}
                    <span className="transform translate-x-0 group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
