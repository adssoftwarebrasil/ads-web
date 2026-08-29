import { TrendingUp, Building2, Trophy, Quote, Clock, LucideIcon } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

interface CaseStat {
  value: string;
  label: string;
}

interface CaseItem {
  Icon: LucideIcon;
  accent: string;
  company: string;
  subtitle: string;
  desc: string;
  stats: CaseStat[];
  delay: number;
}

const cases: CaseItem[] = [
  {
    Icon: Building2,
    accent: 'rgb(255, 140, 0)',
    company: 'Supermercados Tatico',
    subtitle: 'Aniversário Corporativo',
    desc: 'Produzimos camisetas personalizadas para celebrar o aniversário da rede, entregando qualidade e identidade visual marcante para toda a equipe.',
    stats: [
      { value: '500+', label: 'Unidades' },
      { value: '7 dias', label: 'Entrega' },
    ],
    delay: 0,
  },
  {
    Icon: Trophy,
    accent: 'rgb(220, 38, 38)',
    company: 'Atlético Goianiense',
    subtitle: 'Uniformes da Base',
    desc: 'Confeccionamos os uniformes da base do time com tecido de alta performance e acabamento impecável para jovens atletas.',
    stats: [
      { value: '200+', label: 'Uniformes' },
      { value: 'Premium', label: 'Qualidade' },
    ],
    delay: 200,
  },
];

const works = [
  'https://storage.lucasmendes.dev/site-sp/brasil-camisetas%2Fcamisa-itau-laranja.jpg',
  'https://storage.lucasmendes.dev/site-sp/brasil-camisetas%2Fcamisa-itau-preta.jpg',
  'https://storage.lucasmendes.dev/site-sp/brasil-camisetas%2Fcamisa-pascom-preta.jpg',
  'https://storage.lucasmendes.dev/site-sp/brasil-camisetas%2Fcamisa-record-azul.jpg',
];

export default function Cases() {
  return (
    <section
      id="cases"
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{
        background:
          'linear-gradient(rgba(0, 45, 100, 0.02) 0%, rgba(6, 138, 80, 0.02) 100%)',
      }}
    >
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-5"
        style={{ backgroundColor: 'rgb(255, 241, 20)' }}
      ></div>
      <div
        className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full opacity-5"
        style={{ backgroundColor: 'rgb(6, 138, 80)' }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 animate-on-scroll opacity-0">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-4 font-semibold text-sm"
            style={{
              backgroundColor: 'rgba(255, 241, 20, 0.15)',
              color: 'rgb(0, 45, 100)',
              border: '2px solid rgb(255, 241, 20)',
            }}
          >
            <TrendingUp size={16} />
            Cases de Sucesso
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4" style={{ color: 'rgb(0, 45, 100)' }}>
            Marcas Que Confiam em Nós
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Parcerias que reforçam nossa excelência e compromisso com qualidade
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {cases.map((c) => (
            <div
              key={c.company}
              className="animate-on-scroll opacity-0 group"
              style={{ animationDelay: `${c.delay}ms` }}
            >
              <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div
                  className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl"
                  style={{ backgroundColor: c.accent }}
                ></div>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <c.Icon size={32} style={{ color: c.accent }} />
                  </div>
                  <Quote size={40} className="text-gray-200" />
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2" style={{ color: 'rgb(0, 45, 100)' }}>
                    {c.company}
                  </h3>
                  <h4 className="text-lg font-semibold mb-4" style={{ color: c.accent }}>
                    {c.subtitle}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-base">{c.desc}</p>
                </div>
                <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-100">
                  {c.stats.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl"
                      style={{ backgroundColor: 'rgba(6, 138, 80, 0.08)' }}
                    >
                      <div className="font-bold" style={{ color: 'rgb(6, 138, 80)' }}>
                        {s.value}
                      </div>
                      <div className="text-sm text-gray-600">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div
                  className="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-white"
                  style={{ backgroundColor: 'rgb(6, 138, 80)' }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="animate-on-scroll opacity-0 mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-3" style={{ color: 'rgb(0, 45, 100)' }}>
              Alguns de Nossos Trabalhos
            </h3>
            <p className="text-gray-600">Qualidade que você pode ver</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {works.map((src, i) => (
              <div
                key={src}
                className="group relative overflow-hidden rounded-2xl aspect-square shadow-md hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={src}
                  alt={`Trabalho realizado ${i + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: 'rgb(6, 138, 80)' }}
                >
                  ✓ Verificado
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-16 animate-on-scroll opacity-0">
          <div
            className="inline-block bg-gradient-to-br from-blue-900 to-green-800 rounded-2xl p-8 lg:p-12 text-white shadow-2xl"
            style={{ background: 'linear-gradient(135deg, rgb(0, 45, 100) 0%, rgb(6, 138, 80) 100%)' }}
          >
            <Clock size={48} className="mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Pronto para ser nosso próximo case de sucesso?
            </h3>
            <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Entre em contato e descubra como podemos criar soluções personalizadas para sua
              empresa
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: 'rgb(255, 241, 20)', color: 'rgb(0, 45, 100)' }}
            >
              Solicitar Orçamento Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
