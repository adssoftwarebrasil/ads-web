import { Users, ShoppingBag, Phone, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Method {
  icon: LucideIcon;
  image: string;
  alt: string;
  badge: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  delay: number;
}

const methods: Method[] = [
  {
    icon: Users,
    image:
      'https://storage.lucasmendes.dev/site-sp/pizza%20na%20pedra/img2/restaurante-interior-mesas-preparadas-cadeiras-vistas-externas_1600x1201.webp',
    alt: 'Rodízio no Salão',
    badge: 'A partir das 18h',
    title: 'Rodízio no Salão',
    text: 'Venha com família e amigos para nosso rodízio especial. Pizzas saindo do forno direto para a sua mesa, com variedade de sabores e recheios generosos.',
    cta: 'Reservar Mesa',
    href: 'http://wa.me/556292358068?text=Olá!%20Gostaria%20de%20reservar%20uma%20mesa%20para%20o%20rodízio',
    delay: 0,
  },
  {
    icon: ShoppingBag,
    image:
      'https://storage.lucasmendes.dev/site-sp/pizza%20na%20pedra/img2/caixa-de-pizza-preta-pizza-na-pedra_3024x4032.webp',
    alt: 'Delivery',
    badge: '10h às 23h',
    title: 'Delivery',
    text: 'Peça pelo WhatsApp e receba a melhor pizza de Goiânia quentinha na sua porta. Atendemos em até 12 km de raio do restaurante.',
    cta: 'Pedir Delivery',
    href: 'http://wa.me/556292358068?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20para%20delivery',
    delay: 150,
  },
  {
    icon: Phone,
    image:
      'https://storage.lucasmendes.dev/site-sp/pizza%20na%20pedra/img2/pizza-dois-sabores-caixa-hexagonal-promo-o_3024x4032.webp',
    alt: 'Pedido por Ligação',
    badge: '(62) 3278-5151',
    title: 'Pedido por Ligação',
    text: 'Prefere ligar? Nossa equipe está pronta para te atender e anotar seu pedido com toda atenção e carinho.',
    cta: 'Ligar Agora',
    href: 'tel:6232785151',
    delay: 300,
  },
];

export default function OrderMethods() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="text-brand-red text-sm font-semibold tracking-[0.25em] uppercase">
            Formas de atendimento
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-black mt-3">
            Como Você Prefere Pedir?
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methods.map((method) => {
            const Icon = method.icon;
            const external = method.href.startsWith('http');
            return (
              <div
                key={method.title}
                className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border border-gray-100 opacity-100 translate-y-0"
                style={{ transitionDelay: `${method.delay}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={method.image}
                    alt={method.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center">
                    <Icon className="text-white" width={20} height={20} />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-brand-cream text-brand-black text-xs font-bold px-3 py-1 rounded-full">
                      {method.badge}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-bold text-xl text-brand-black mb-3">{method.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{method.text}</p>
                  <a
                    href={method.href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex items-center gap-2 text-brand-red font-semibold text-sm hover:gap-3 transition-all duration-300 group/link"
                  >
                    {method.cta}
                    <ChevronRight
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                      width={16}
                      height={16}
                    />
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
