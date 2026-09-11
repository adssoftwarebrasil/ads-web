import {
  CalendarCheck,
  Users,
  Megaphone,
  Volume2,
  Truck,
  Star,
  Monitor,
  Tv,
  Wind,
  Projector,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  Icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  dark: boolean;
  delay: number;
}

const services: Service[] = [
  {
    Icon: CalendarCheck,
    title: 'Organização de Eventos',
    description:
      'Planejamos, gerenciamos e executamos feiras, congressos, cerimoniais e eventos corporativos com excelência em cada detalhe.',
    image:
      'https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/mesa-de-som-palco-festa-ao-ar-livre_1280x963.webp',
    dark: true,
    delay: 0,
  },
  {
    Icon: Users,
    title: 'Promotoras & Receptivo',
    description:
      'Casting completo de promotoras treinadas para abordagem, degustação, positivação, recepção e ações de ponto de venda.',
    image:
      'https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/promotoras-degustacao-produtos-supermercado-comper-fort_720x1280.webp',
    dark: false,
    delay: 80,
  },
  {
    Icon: Megaphone,
    title: 'Panfletagem & Blitz',
    description:
      'Ações de rua estratégicas com equipes uniformizadas para máxima visibilidade da sua marca no ponto certo da cidade.',
    image:
      'https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/equipe-comper-promocao-rua-agua-panfletos_960x1280.webp',
    dark: false,
    delay: 160,
  },
  {
    Icon: Volume2,
    title: 'Locação de Sonorização',
    description:
      'Equipamentos de última geração: caixas de som, amplificadores, mesas de som, palcos e estrutura completa para eventos de todos os portes.',
    image:
      'https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/palco-preparado-show-noturno-equipamentos-som_1280x963.webp',
    dark: true,
    delay: 240,
  },
  {
    Icon: Truck,
    title: 'Logística & Merchandising',
    description:
      'Armazenamento, manuseio e distribuição de material de merchandising com controle total da cadeia logística.',
    image:
      'https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/colagem-festival-das-cucas-padaria-supermercado_720x894.webp',
    dark: false,
    delay: 320,
  },
  {
    Icon: Star,
    title: 'Marketing Promocional',
    description:
      'Estratégias personalizadas de tráfego pago, SEO, CRM e funil de aquisição para conectar sua marca ao cliente certo.',
    image:
      'https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/festival-inverno-pessoas-marca-solar-schweppes_720x891.webp',
    dark: false,
    delay: 400,
  },
];

interface Equipment {
  Icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const equipment: Equipment[] = [
  { Icon: Monitor, title: 'Locação de TV 75"', description: '4K de alta definição para stands.', delay: 0 },
  { Icon: Tv, title: 'Locação de TV 50"', description: 'Ideal para recepções e sinalização.', delay: 100 },
  { Icon: Wind, title: 'Locação de Climatizador', description: 'Conforto térmico para seu ambiente.', delay: 200 },
  { Icon: Projector, title: 'Projetor Multimídia', description: 'Alta luminosidade para palestras.', delay: 300 },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 sm:py-28 bg-[rgb(248,248,248)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[rgb(234,50,56)] mb-3">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[rgb(53,53,53)] mb-4">
            Soluções Completas em
            <br />
            <span className="text-[rgb(234,50,56)]">Marketing &amp; Eventos</span>
          </h2>
          <p className="text-[rgb(53,53,53)]/60 max-w-2xl mx-auto text-base sm:text-lg">
            Da concepção à execução, entregamos resultados que elevam sua marca e maximizam seu ROI.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map(({ Icon, title, description, image, dark, delay }) => (
            <div
              key={title}
              className={`reveal group rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                dark ? 'bg-[rgb(53,53,53)]' : 'bg-white'
              }`}
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    dark ? 'from-[rgb(53,53,53)]' : 'from-black/40'
                  } to-transparent`}
                ></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-4 ${
                    dark ? 'bg-[rgb(255,241,18)]/20' : 'bg-[rgb(253,208,162)]'
                  }`}
                >
                  <Icon
                    width={22}
                    height={22}
                    className={dark ? 'text-[rgb(255,241,18)]' : 'text-[rgb(53,53,53)]'}
                  />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${dark ? 'text-white' : 'text-[rgb(53,53,53)]'}`}>
                  {title}
                </h3>
                <p
                  className={`text-sm leading-relaxed flex-1 ${
                    dark ? 'text-white/70' : 'text-[rgb(53,53,53)]/65'
                  }`}
                >
                  {description}
                </p>
                <a
                  href="http://wa.me/5565996292448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-5 inline-flex items-center text-sm font-semibold transition-colors ${
                    dark
                      ? 'text-[rgb(255,241,18)] hover:text-[rgb(249,171,118)]'
                      : 'text-[rgb(234,50,56)] hover:text-[rgb(249,171,118)]'
                  }`}
                >
                  Solicitar orçamento →
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 reveal">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-[rgb(53,53,53)]">
                Locação de <span className="text-[rgb(234,50,56)]">Equipamentos</span>
              </h3>
              <p className="text-[rgb(53,53,53)]/60 mt-2">
                Tecnologia de ponta para complementar seu projeto.
              </p>
            </div>
            <div className="h-1 flex-1 bg-gray-200 mb-2 mx-8 hidden md:block rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map(({ Icon, title, description, delay }) => (
              <div
                key={title}
                className="reveal bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group"
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-[rgb(248,248,248)] flex items-center justify-center mb-4 group-hover:bg-[rgb(234,50,56)] transition-colors">
                  <Icon
                    width={20}
                    height={20}
                    className="text-[rgb(234,50,56)] group-hover:text-white transition-colors"
                  />
                </div>
                <h4 className="font-bold text-[rgb(53,53,53)] mb-1">{title}</h4>
                <p className="text-xs text-[rgb(53,53,53)]/60">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
