import { CheckCircle2, Award, Users, Truck } from 'lucide-react';

const features = [
  'Mármores, granitos e quartzos nacionais e importados',
  'Fabricação própria com equipamentos modernos',
  'Atendimento em Aparecida de Goiânia e Grande Goiânia',
  'Orçamento gratuito e entrega no prazo',
];

const stats = [
  { icon: Award, iconClass: 'lucide lucide-award', value: 'Premium', label: 'Qualidade de pedras' },
  { icon: Users, iconClass: 'lucide lucide-users', value: '100%', label: 'Clientes satisfeitos' },
  { icon: Truck, iconClass: 'lucide lucide-truck', value: 'Regional', label: 'Cobertura na Grande Goiânia' },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 h-[540px]">
              <div className="gallery-item row-span-2 overflow-hidden">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/pia-de-marmore-sendo-fabricada-em-oficina_1200x1600.webp"
                  alt="Fabricação"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="gallery-item overflow-hidden">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/bancada-preta-granito-pia-embutida-oficina_1600x1200.webp"
                  alt="Bancada"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="gallery-item overflow-hidden">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/ilha-granito-branco-luz-led-docol_1600x1197.webp"
                  alt="Ilha"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="section-subtitle mb-4">Quem somos</p>
            <h2 className="section-title text-stone-950 mb-6">
              Uma fábrica de sonhos<span className="text-gold-400 italic"> em pedras naturais</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              Somos uma empresa especializada em transformar sonhos em realidade, usando as mais belas pedras naturais. Transformamos mármores, granitos, quartzos e quartzitos em bancadas, lavatórios, escadas, ilhas gourmet, fachadas, pisos e muito mais.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Unindo profissionalismo e arte, cada projeto é tratado como uma obra única — porque aqui não é só uma marmoraria, é uma fábrica de sonhos.
            </p>
            <ul className="space-y-3 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2
                    className="lucide lucide-check-circle2 text-gold-400 mt-0.5 flex-shrink-0"
                    width={18}
                    height={18}
                  />
                  <span className="text-gray-600 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-4 mb-10 border-t border-gray-100 pt-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.value} className="text-center">
                    <Icon className={`${stat.iconClass} text-gold-400 mx-auto mb-2`} width={22} height={22} />
                    <p className="font-serif font-bold text-xl text-stone-950">{stat.value}</p>
                    <p className="text-gray-400 text-xs mt-0.5 leading-tight">{stat.label}</p>
                  </div>
                );
              })}
            </div>
            <a
              href="https://wa.me/5562992861117?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Marques%20Marmoraria."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
