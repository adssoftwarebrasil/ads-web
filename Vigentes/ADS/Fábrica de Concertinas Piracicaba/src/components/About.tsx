import { Award, CheckCircle2, Truck, Clock, LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
}

const features: Feature[] = [
  {
    icon: Award,
    iconClass: 'lucide-award',
    title: '7 Anos de Experiência',
    text: 'Uma década protegendo residências, comércios e indústrias da região.',
  },
  {
    icon: CheckCircle2,
    iconClass: 'lucide-check-circle2',
    title: 'Materiais de Alta Qualidade',
    text: 'Concertinas fabricadas com aço de primeira linha para máxima durabilidade.',
  },
  {
    icon: Truck,
    iconClass: 'lucide-truck',
    title: 'Entrega Imediata',
    text: 'Estoque completo para atender você sem espera — pediu, enviamos.',
  },
  {
    icon: Clock,
    iconClass: 'lucide-clock',
    title: 'Atendimento Ágil',
    text: 'Do orçamento à instalação, agilidade e respeito ao seu tempo.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative transition-all duration-700 opacity-100 translate-x-0">
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/fabrica-de-concertinas-piracicaba/atualizacao/telhado-ceramico-laranja-com-cerca-concertina_1204x1600.webp"
                alt="Concertina instalada em muro de casa"
                className="rounded-2xl w-full h-80 lg:h-[480px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-[rgb(240,27,38)] text-white rounded-2xl p-5 shadow-2xl">
                <div className="text-4xl font-bold leading-none">7+</div>
                <div className="text-xs font-semibold mt-1 uppercase tracking-wide opacity-90">
                  Anos no
                  <br />
                  Mercado
                </div>
              </div>
              <div className="absolute -top-4 -left-4 lg:-left-8 w-32 h-32 lg:w-40 lg:h-40 rounded-xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/fabrica-de-concertinas-piracicaba/galeria/roelos-de-arame-empilhados-em-armazem_4284x5712.webp"
                  alt="Estoque de Concertinas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <span className="inline-block text-[rgb(240,27,38)] text-xs font-bold uppercase tracking-widest mb-3 border-b-2 border-[rgb(240,27,38)] pb-1">
              Sobre a Empresa
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[rgb(37,34,35)] leading-tight mb-5">
              Referência em Segurança Perimetral na Região de Piracicaba
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              A{' '}
              <strong className="text-[rgb(37,34,35)]">
                Fábrica de Concertinas Piracicaba
              </strong>{' '}
              atua no segmento de segurança há 7 anos, consolidando-se como
              referência em soluções de proteção perimetral para residências,
              comércios e indústrias. Localizados em Piracicaba - SP, atendemos
              mais de 15 municípios da região com materiais de altíssima
              qualidade e entrega imediata do estoque.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Nossa missão é proteger o que você mais valoriza — com eficiência,
              preço justo e o atendimento personalizado que só quem é
              especialista no que faz consegue oferecer.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="flex gap-3 p-4 rounded-xl border border-gray-100 hover:border-[rgb(240,27,38)]/30 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-[rgb(240,27,38)]/10 group-hover:bg-[rgb(240,27,38)] rounded-lg flex items-center justify-center transition-colors duration-300">
                      <Icon
                        width={20}
                        height={20}
                        strokeWidth={2}
                        className={`lucide ${f.iconClass} text-[rgb(240,27,38)] group-hover:text-white transition-colors duration-300`}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-[rgb(37,34,35)] text-sm mb-1">
                        {f.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {f.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
