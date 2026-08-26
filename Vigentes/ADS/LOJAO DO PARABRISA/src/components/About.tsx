import { Award } from 'lucide-react';
import { useReveal } from '../lib/useReveal';

const ABOUT_IMG = 'https://storage.lucasmendes.dev/site-sp/lojao%20do%20parabrisa/img/colocando-parabrisa-2.webp';

const stats = [
  { value: '19+', label: 'Anos no Mercado' },
  { value: '10.000+', label: 'Clientes Atendidos' },
  { value: '100%', label: 'Satisfação Garantida' },
  { value: '5 dias', label: 'Atendimento por Semana' },
];

export default function About() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[rgb(1,160,199)] font-semibold text-sm tracking-widest uppercase mb-3">
            NOSSA HISTÓRIA
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
            Tradição e Confiança desde 2005
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${
              shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              O Lojão do Parabrisa é referência em Salvador quando o assunto é vidros automotivos. Desde nossa fundação em 03 de agosto de 2005, nos dedicamos a oferecer produtos de qualidade superior e serviços especializados para carros, caminhões e ônibus.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Nossa equipe é altamente qualificada e experiente, garantindo instalação e reparo com eficiência, precisão e total segurança. Trabalhamos com parabrisas originais, importados, faróis, lanternas, retrovisores, borrachas e todos os acessórios necessários para a manutenção do seu veículo.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`bg-white p-6 rounded-xl border border-gray-200 text-center transition-all duration-500 hover:shadow-lg ${
                    shown ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <p className="text-3xl font-bold text-[rgb(1,160,199)] mb-2">{stat.value}</p>
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`relative transition-all duration-700 delay-300 ${
              shown ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img src={ABOUT_IMG} alt="Parabrisa" className="w-full h-auto object-cover" loading="lazy" />
            </div>
            <div className="absolute bottom-8 left-8 bg-white p-5 rounded-xl shadow-lg flex items-center gap-3">
              <Award width={32} height={32} className="text-[rgb(1,160,199)]" />
              <div>
                <p className="font-bold text-gray-900">Empresa Certificada</p>
                <p className="text-sm text-gray-600">CNPJ 07.527.565/0001-70</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
