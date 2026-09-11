import { CheckCircle2, TrendingUp, MapPin, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const checklist = [
  'Empresa familiar com mais de 20 anos sob o mesmo comando e valores',
  'Revendedor autorizado e regularizado pela ANP (Agência Nacional do Petróleo)',
  'Parceiro oficial Supergasbras — a marca mais confiável do setor',
  'Atendemos residências, condomínios, restaurantes e pequenos comércios',
  'Equipe treinada, uniformizada e comprometida com a sua segurança',
];

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { icon: TrendingUp, value: '+20', label: 'Anos de mercado' },
  { icon: CheckCircle2, value: '4.9', label: 'Avaliação no Google' },
  { icon: CheckCircle2, value: '100%', label: 'Autorizado ANP' },
  { icon: MapPin, value: 'GYN', label: 'Goiânia e região' },
];

export default function About() {
  const left = useReveal();
  const right = useReveal();

  return (
    <section id="about" className="py-20 md:py-28 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            ref={left.ref}
            className={`transition-all duration-700 ${
              left.inView
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="inline-block bg-orange-500/10 text-orange-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-orange-500/20">
              Nossa História
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Tradição e confiança{' '}
              <span className="text-orange-400">há mais de 20 anos</span>
            </h2>
            <img
              src="https://storage.lucasmendes.dev/site-sp/imperial%20gas/img2/supergasbras-imperial-gas-tanques-rua-dia_680x510.webp"
              alt="Gás do Povo distribuidora de gás Jardim América"
              className="w-full h-auto rounded-2xl mb-8 shadow-2xl border border-gray-700 object-cover"
            />
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              A Imperial Gás, a principal{' '}
              <strong>Gás do Povo distribuidora de gás Jardim América</strong>,
              nasceu em Goiânia com um propósito simples: entregar gás de
              qualidade com rapidez e segurança. Duas décadas depois, seguimos
              com o mesmo dono, os mesmos valores e um compromisso ainda mais
              forte.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Somos o seu <strong>depósito de gás Jardim América</strong> de
              confiança e revendedores autorizados da Supergasbras. Cada botijão
              que sai daqui passou por verificação rigorosa, garantindo que você
              receba um produto seguro, limpo e pronto para usar.
            </p>
            <ul className="space-y-3 mb-10">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              <div className="w-10 h-1 bg-orange-500 rounded-full"></div>
              <p className="text-orange-400 text-sm font-semibold italic">
                "Imperial Gás / Gás do Povo Jardim América Goiânia."
              </p>
            </div>
          </div>
          <div
            ref={right.ref}
            className={`transition-all duration-700 delay-200 ${
              right.inView
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="grid grid-cols-2 gap-5 mb-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-orange-500/40 hover:bg-gray-800/80 transition-all duration-300 group shadow-lg"
                  >
                    <Icon className="w-8 h-8 text-orange-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl sm:text-4xl font-black text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 sm:p-10 shadow-2xl shadow-orange-500/20 transform transition-transform hover:-translate-y-1 duration-300">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="bg-white/20 p-4 rounded-2xl flex-shrink-0">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">
                    Atendemos residências e comércios
                  </h3>
                  <p className="text-orange-50 text-base leading-relaxed">
                    Desde o morador de apartamento até o restaurante mais
                    movimentado da cidade — a Imperial tem a solução certa para
                    você.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
