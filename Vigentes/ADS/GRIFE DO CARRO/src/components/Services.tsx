import {
  Truck,
  RefreshCw,
  Wallet,
  Search,
  Tag,
  ShieldCheck,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';
import { IMG, WHATSAPP_URL } from '../data';

interface Service {
  icon: LucideIcon;
  image: string;
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    icon: Truck,
    image: IMG.svcVenda,
    title: 'Venda de Seminovos',
    description:
      'Seleção criteriosa de carros seminovos com procedência garantida.',
  },
  {
    icon: RefreshCw,
    image: IMG.svcTroca,
    title: 'Troca de Veículos',
    description: 'Facilitamos a troca do seu carro por outro de seu interesse.',
  },
  {
    icon: Wallet,
    image: IMG.svcFinanciamento,
    title: 'Financiamento',
    description: 'Condições especiais que cabem no seu bolso e no seu perfil.',
  },
  {
    icon: Search,
    image: IMG.svcAvaliacao,
    title: 'Avaliação Justa',
    description: 'Avaliamos seu veículo de forma transparente e rápida.',
  },
  {
    icon: Tag,
    image: IMG.svcCompra,
    title: 'Compra de Usados',
    description:
      'Compramos seu veículo usado com a melhor avaliação do mercado.',
  },
  {
    icon: ShieldCheck,
    image: IMG.svcGarantia,
    title: 'Garantia de Procedência',
    description: 'Todos os carros vendidos passam por rigorosa inspeção.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gold">
            NOSSOS SERVIÇOS
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase leading-tight text-white">
            Tudo o que você precisa para{' '}
            <span className="text-gold">comprar, vender ou trocar</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-ink-card"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold">
                    <Icon className="h-5 w-5 text-black" />
                  </div>
                  <h3 className="absolute bottom-4 left-4 right-4 font-heading text-lg font-bold uppercase text-white">
                    {service.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-white/70">
                    {service.description}
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener"
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-gold hover:gap-2.5 transition-all"
                  >
                    SAIBA MAIS
                    <ArrowUpRight className="h-4 w-4" />
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
