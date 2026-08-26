import { Target, Eye, MousePointer, DollarSign } from 'lucide-react';
import type { CSSProperties } from 'react';

interface Metric {
  icon: typeof Target;
  gradient: string;
  label: string;
  value: string;
  sub: string;
  delay: string;
}

const metrics: Metric[] = [
  {
    icon: Target,
    gradient: 'from-[#4285F4] to-[#357ae8]',
    label: 'Conversões',
    value: 'Maximizadas',
    sub: 'Taxa de conversão otimizada',
    delay: '0s',
  },
  {
    icon: Eye,
    gradient: 'from-[#DB4437] to-[#c53929]',
    label: 'Impressões',
    value: 'Alcançadas',
    sub: 'Visibilidade expandida',
    delay: '0.1s',
  },
  {
    icon: MousePointer,
    gradient: 'from-[#F4B400] to-[#e5a800]',
    label: 'Interações',
    value: 'Otimizadas',
    sub: 'Engajamento qualificado',
    delay: '0.2s',
  },
  {
    icon: DollarSign,
    gradient: 'from-[#0F9D58] to-[#0d8a4d]',
    label: 'Custo Médio',
    value: 'Reduzido',
    sub: 'Por conversão conquistada',
    delay: '0.3s',
  },
];

const anim = (spec: string): CSSProperties => ({ animation: spec });

export default function Performance() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Performance Real do Nosso <span className="text-[#F4B400]">Google Ads</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Dados históricos de 2020 a 2025 mostrando nossa expertise em gestão de campanhas
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className={`bg-gradient-to-br ${m.gradient} rounded-xl p-6 sm:p-8 text-white transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer`}
                style={anim(`0.5s ease-out ${m.delay} 1 normal backwards running fadeInScale`)}
              >
                <Icon size={36} className="mx-auto mb-4" />
                <div className="text-xs sm:text-sm opacity-90 mb-2 font-medium">{m.label}</div>
                <div className="text-2xl sm:text-3xl font-bold mb-1">{m.value}</div>
                <div className="text-xs opacity-75">{m.sub}</div>
              </div>
            );
          })}
        </div>
        <div
          className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-200"
          style={anim('0.6s ease-out 0.4s 1 normal backwards running fadeIn')}
        >
          <div className="relative">
            <img
              src="https://storage.lucasmendes.dev/site-sp/ads-marketing%2FS%C3%A9rie_temporal(2020.01.02-2025.11.15).png"
              alt="Série Temporal Google Ads"
              className="w-full rounded-lg"
            />
          </div>
          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              <span className="inline-block w-3 h-3 rounded-full bg-[#4285F4] mr-2"></span>Azul:
              Conversões
              <span className="inline-block w-3 h-3 rounded-full bg-[#DB4437] mx-2 ml-4"></span>
              Vermelho: Impressões
              <span className="inline-block w-3 h-3 rounded-full bg-[#F4B400] mx-2 ml-4"></span>
              Amarelo: Interações
              <span className="inline-block w-3 h-3 rounded-full bg-[#0F9D58] mx-2 ml-4"></span>
              Verde: Custo Médio
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">Série Temporal (2020-2025)</p>
          </div>
        </div>
        <div
          className="mt-12 sm:mt-16 text-center"
          style={anim('0.6s ease-out 0.6s 1 normal backwards running fadeIn')}
        >
          <div className="inline-block bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 sm:p-8 max-w-3xl border border-blue-100">
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              <strong className="text-gray-900">5 anos de expertise comprovada:</strong> Gerenciamos
              campanhas de Google Ads com otimização contínua, redução de custos e maximização de
              conversões. Nossa experiência garante que cada real investido traga o melhor retorno
              possível.
            </p>
            <button className="mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg">
              Solicitar Análise Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
