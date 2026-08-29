import { Award, Package, MapPin, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    Icon: Award,
    iconClass: 'lucide lucide-award w-5 h-5 text-brand-orange',
    title: 'Qualidade Certificada',
    desc: 'Materiais selecionados com os mais altos padrões do mercado de construção e serralheria.',
  },
  {
    Icon: Package,
    iconClass: 'lucide lucide-package w-5 h-5 text-brand-orange',
    title: 'Estoque Completo',
    desc: 'Ampla variedade de perfis, tubos e cantoneiras prontos para pronta entrega.',
  },
  {
    Icon: MapPin,
    iconClass: 'lucide lucide-map-pin w-5 h-5 text-brand-orange',
    title: 'Localização Estratégica',
    desc: 'Situados em Goiânia, atendemos toda a região com agilidade e eficiência.',
  },
  {
    Icon: Clock,
    iconClass: 'lucide lucide-clock w-5 h-5 text-brand-orange',
    title: 'Atendimento Ágil',
    desc: 'De segunda a sábado, prontos para atender sua demanda com rapidez e comprometimento.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative animate-on-scroll">
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/ferro-e-aco-do-vale/galeria/pilha-perfis-metalicos-variados-industria_1440x1800.webp"
                alt="Perfis metálicos variados - estoque Ferro e Aço do Vale"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-orange rounded-2xl -z-10"></div>
            </div>
            <div className="absolute -bottom-2 left-6 bg-brand-orange text-white px-5 py-3 rounded-xl shadow-xl shadow-brand-orange/30">
              <span className="block text-2xl font-black leading-none">2024</span>
              <span className="block text-xs font-medium tracking-wide opacity-90">Fundação</span>
            </div>
          </div>
          <div>
            <div className="animate-on-scroll mb-8">
              <span className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-3 block">
                Sobre Nós
              </span>
              <h2 className="section-title text-white mb-5">
                Ferro e Aço do Vale —<br />
                <span className="text-brand-orange">Solidez que Sustenta</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Nascemos em Goiânia com uma missão clara: fornecer materiais metálicos de alta qualidade para
                serralherias, construtoras e profissionais que não abrem mão de excelência.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Nossa loja, localizada no Setor Estrela Dalva, conta com um estoque diversificado de metalons, perfis
                enrijecidos, tubos, cantoneiras e outros produtos essenciais para a construção civil e projetos de
                serralheria em geral.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="animate-on-scroll flex gap-3 p-4 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-brand-orange/30 transition-colors"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                    <f.Icon className={f.iconClass} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-0.5">{f.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="animate-on-scroll mt-8 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong className="text-gray-300">Ferro e Aço do Vale LTDA</strong> · CNPJ: 56.083.293/0001-72 ·
                Atividade principal: Comércio varejista de ferragens e ferramentas (CNAE 47.44-0-01) · Goiânia, Goiás.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
