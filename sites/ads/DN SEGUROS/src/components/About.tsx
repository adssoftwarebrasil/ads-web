import { Award, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const stats: { Icon: LucideIcon; iconClass: string; value: string; label: string }[] = [
  { Icon: Award, iconClass: 'lucide lucide-award text-brand-blue', value: '35+', label: 'Anos de Grupo' },
  { Icon: Users, iconClass: 'lucide lucide-users text-brand-blue', value: '5000+', label: 'Clientes Atendidos' },
  { Icon: TrendingUp, iconClass: 'lucide lucide-trending-up text-brand-blue', value: '20+', label: 'Tipos de Seguro' },
  { Icon: CheckCircle2, iconClass: 'lucide lucide-check-circle2 text-brand-blue', value: '100%', label: 'Brasil' },
];

const bullets = [
  'Fundada em 2022 com mais de 35 anos de experiência no grupo',
  'Atendimento personalizado para cada cliente',
  'Preços competitivos com as melhores seguradoras do mercado',
  'Suporte ágil e transparente do início ao fim',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-red/10 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-brand-blue/10 rounded-full"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Equipe DN Seguros"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/dn%20seguros/img/logo-sem-fundo.webp"
                    alt="DN Seguros"
                    className="h-14 w-auto object-contain"
                  />
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-brand-red text-white rounded-2xl p-5 shadow-xl">
                <p className="text-3xl font-extrabold">35+</p>
                <p className="text-sm font-medium opacity-90">Anos de Grupo</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map((stat) => {
                const { Icon } = stat;
                return (
                  <div
                    key={stat.label}
                    className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex items-center gap-4"
                  >
                    <div className="bg-brand-blue/10 rounded-xl p-2.5">
                      <Icon size={20} className={stat.iconClass} />
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-brand-blue">{stat.value}</p>
                      <p className="text-gray-500 text-xs font-medium">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <span className="text-brand-red font-semibold text-sm uppercase tracking-widest">Sobre a DN Seguros</span>
            <h2 className="section-title mt-2 mb-6">
              Segurança com tradição e<span className="text-brand-red"> preço justo</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                A <strong className="text-brand-blue">DN Seguros</strong> foi fundada em 2022 com um propósito
                claro: oferecer um serviço de qualidade com preço justo para quem busca proteção real. Fazemos
                parte de um grupo de corretora com <strong>mais de 35 anos de mercado</strong>, o que nos
                garante expertise, credibilidade e as melhores parcerias com as principais seguradoras do
                Brasil.
              </p>
              <p>
                Nossa missão é simplificar o processo de contratação de seguros, tornando-o acessível,
                transparente e personalizado para cada cliente — seja pessoa física ou jurídica.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0">
                    <CheckCircle2 size={20} className="lucide lucide-check-circle2 text-brand-red" />
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="btn-primary text-center py-3.5">
                Fale com um Especialista
              </a>
              <a
                href="http://wa.me/5584991089072"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-center py-3.5"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
