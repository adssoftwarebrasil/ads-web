import { Calendar, Users, MapPin, Award } from 'lucide-react';

const stats = [
  { icon: Calendar, iconClass: 'lucide lucide-calendar mx-auto text-brand-blue mb-2', value: '+24', label: 'Anos de Mercado' },
  { icon: Users, iconClass: 'lucide lucide-users mx-auto text-brand-blue mb-2', value: '10K+', label: 'Clientes Atendidos' },
  { icon: MapPin, iconClass: 'lucide lucide-map-pin mx-auto text-brand-blue mb-2', value: '225m²', label: 'de Showroom' },
  { icon: Award, iconClass: 'lucide lucide-award mx-auto text-brand-blue mb-2', value: '4.7', label: 'Estrelas Google' },
];

export default function About() {
  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative transition-all duration-700 opacity-100 translate-x-0">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/giralflex/img/about-img.webp"
                  alt="Showroom Giralflex"
                  className="w-full h-72 sm:h-80 lg:h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-right-6 w-40 sm:w-48 rounded-xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/giralflex/img/about-img-menor.webp"
                  alt="Cadeiras executivas"
                  className="w-full h-28 sm:h-32 object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-brand-blue text-white rounded-xl px-5 py-3 shadow-lg">
                <p className="text-2xl font-extrabold">2000</p>
                <p className="text-xs opacity-80">Fundação</p>
              </div>
            </div>
          </div>
          <div className="space-y-6 transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <div>
              <p className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2">Sobre Nós</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy leading-tight">
                A Qualidade Faz a <span className="text-brand-blue">Diferença</span>
              </h2>
            </div>
            <p className="text-brand-navy/70 leading-relaxed">
              Fundada em 13 de setembro de 2000 por Jonimar Auzier, a Giralflex nasceu da determinação de quem deixou a estrada para construir um legado. O que começou em um espaço de apenas 9m², com reformas de mobiliário, hoje ocupa 225m² de showroom no coração de Manaus.
            </p>
            <p className="text-brand-navy/70 leading-relaxed">
              São mais de duas décadas dedicadas a oferecer cadeiras ergonômicas, mesas de escritório, reformas personalizadas e peças de reposição, com a qualidade e o atendimento que nossos clientes merecem. Nossa missão é simples: atender às suas necessidades com produtos e serviços de excelência.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="text-center p-4 rounded-xl bg-brand-sky/20 hover:bg-brand-sky/40 transition-colors">
                    <Icon width={22} height={22} className={s.iconClass} />
                    <p className="text-xl sm:text-2xl font-extrabold text-brand-navy">{s.value}</p>
                    <p className="text-xs text-brand-navy/60 mt-0.5">{s.label}</p>
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
