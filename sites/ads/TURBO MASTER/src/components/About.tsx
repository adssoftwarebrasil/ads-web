import { Award, CheckCircle, Cpu, Truck, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  Icon: LucideIcon;
  iconName: string;
  text: string;
}

const features: Feature[] = [
  {
    Icon: CheckCircle,
    iconName: 'check-circle',
    text: 'Equipe técnica altamente qualificada e especializada',
  },
  {
    Icon: Cpu,
    iconName: 'cpu',
    text: 'Equipamentos de última geração para diagnóstico',
  },
  {
    Icon: Truck,
    iconName: 'truck',
    text: 'Atendimento para veículos leves e pesados a diesel',
  },
  {
    Icon: Users,
    iconName: 'users',
    text: 'Mais de 30 anos de experiência no Mato Grosso',
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-gray-950 py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3]">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=TURBO%20MASTER%2Fimage_3.png&version_id=null"
                alt="Oficina Turbo Master"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary-600 p-6 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-subtle z-20">
              <div className="bg-white/20 p-3 rounded-xl">
                <Award className="lucide lucide-award text-white" width={32} height={32} />
              </div>
              <div>
                <p className="text-white font-black text-2xl leading-none">30+ Anos</p>
                <p className="text-primary-100 text-xs uppercase tracking-wider font-bold">
                  de Tradição
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
              <span className="text-primary-500 text-xs font-bold tracking-widest uppercase">
                Quem somos
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.1]">
              Referência em Diesel<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                no Mato Grosso
              </span>
            </h2>
            <div className="space-y-6 mb-10">
              <p className="text-gray-400 text-lg leading-relaxed">
                Com mais de três décadas de história, unimos a força da tradição com a precisão da
                tecnologia moderna para manter o seu motor rodando com máxima performance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature) => {
                  const { Icon } = feature;
                  return (
                    <div
                      key={feature.text}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary-500/30 transition-colors group"
                    >
                      <div className="bg-gray-900 p-2 rounded-lg group-hover:scale-110 transition-transform">
                        <Icon
                          className={`lucide lucide-${feature.iconName} text-primary-500`}
                          width={18}
                          height={18}
                        />
                      </div>
                      <span className="text-gray-300 text-sm font-medium leading-snug">
                        {feature.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5565992174220"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-500 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-primary-900/20"
              >
                Falar Conosco
              </a>
              <a
                href="https://instagram.com/turbo_master_mt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-gray-800 hover:border-gray-600 bg-gray-900/50 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300"
              >
                @turbo_master_mt
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
