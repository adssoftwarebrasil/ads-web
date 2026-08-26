import {
  CheckCircle,
  Award,
  TrendingUp,
  Cloud,
  Target,
  Users,
  Wrench,
  Globe,
  Link2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { scrollToSection } from '../lib/nav';

const stats = [
  { value: '40+', label: 'Anos de Mercado', color: 'text-[#3d009e]' },
  { value: '1000+', label: 'Clientes Atendidos', color: 'text-[#bc0000]' },
  { value: '100%', label: 'Cobertura Nacional', color: 'text-green-600' },
  { value: '24/7', label: 'Suporte Disponível', color: 'text-blue-600' },
];

type Timeline = { Icon: LucideIcon; iconClass: string; grad: string; year: string; text: string };
const timeline: Timeline[] = [
  {
    Icon: Award,
    iconClass: 'lucide-award',
    grad: 'from-blue-500 to-indigo-600',
    year: '1985',
    text: 'Fundação como revenda de PABX',
  },
  {
    Icon: TrendingUp,
    iconClass: 'lucide-trending-up',
    grad: 'from-purple-500 to-[#3d009e]',
    year: '40 anos',
    text: 'Evolução tecnológica constante',
  },
  {
    Icon: Cloud,
    iconClass: 'lucide-cloud',
    grad: 'from-[#3d009e] to-[#5a1abd]',
    year: 'Hoje',
    text: 'Operadora nacional com soluções Omnichannel',
  },
  {
    Icon: Target,
    iconClass: 'lucide-target',
    grad: 'from-[#bc0000] to-red-600',
    year: 'Futuro',
    text: 'Tecnologia e atendimento humanizado',
  },
];

type Diff = { Icon: LucideIcon; iconClass: string; grad: string; title: string; text: string };
const differentials: Diff[] = [
  {
    Icon: Users,
    iconClass: 'lucide-users',
    grad: 'from-blue-500 to-cyan-600',
    title: 'Atendimento Humanizado',
    text: 'Rápido e eficaz, sempre que você precisar',
  },
  {
    Icon: Wrench,
    iconClass: 'lucide-wrench',
    grad: 'from-orange-500 to-amber-600',
    title: 'Suporte Técnico Especializado',
    text: 'Urgência quando você precisa, com profissionais certificados',
  },
  {
    Icon: Cloud,
    iconClass: 'lucide-cloud',
    grad: 'from-purple-500 to-[#3d009e]',
    title: 'Tecnologia de Ponta',
    text: 'PABX IP em Nuvem com recursos avançados',
  },
  {
    Icon: Globe,
    iconClass: 'lucide-globe',
    grad: 'from-green-500 to-emerald-600',
    title: 'Cobertura Nacional',
    text: 'Presença em todo Brasil com qualidade garantida',
  },
  {
    Icon: Link2,
    iconClass: 'lucide-link2',
    grad: 'from-indigo-500 to-blue-600',
    title: 'Integração Total',
    text: 'Todos os canais unificados em uma única plataforma',
  },
  {
    Icon: Target,
    iconClass: 'lucide-target',
    grad: 'from-[#bc0000] to-red-600',
    title: 'Experiência Sólida',
    text: 'Quase 40 anos no mercado com excelência comprovada',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#3d009e] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#bc0000] rounded-full blur-3xl"></div>
      </div>
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233d009e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center bg-[#3d009e]/10 px-4 py-2 rounded-full mb-6">
            <CheckCircle className="lucide lucide-check-circle w-5 h-5 text-[#3d009e] mr-2" />
            <span className="text-sm font-semibold text-[#3d009e]">Por que nos escolher</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Por Que Escolher a Sati?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Experiência e inovação que conectam o sucesso da sua empresa há quase 40 anos
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`text-4xl lg:text-5xl font-bold ${s.color} mb-2 group-hover:scale-110 transition-transform`}>
                {s.value}
              </div>
              <div className="text-sm lg:text-base text-gray-600 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="sticky top-24">
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Nossa Trajetória</h3>
                <p className="text-gray-600">Experiência há quase 40 anos que conecta o sucesso</p>
              </div>
              <div className="relative">
                <div className="absolute left-5 top-8 bottom-8 w-1 bg-gradient-to-b from-[#3d009e] via-purple-500 to-[#bc0000] rounded-full"></div>
                {timeline.map((t, i) => (
                  <div key={i} className="relative pl-16 pb-12 last:pb-0 group">
                    <div
                      className={`absolute left-0 top-0 w-10 h-10 bg-gradient-to-br ${t.grad} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white`}
                    >
                      <t.Icon className={`lucide ${t.iconClass} w-5 h-5 text-white`} />
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 border border-gray-100">
                      <span className={`inline-block bg-gradient-to-r ${t.grad} text-transparent bg-clip-text font-bold text-xl mb-2`}>
                        {t.year}
                      </span>
                      <p className="text-gray-700 leading-relaxed font-medium">{t.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Nossos Diferenciais</h3>
              <p className="text-gray-600">O que nos torna únicos no mercado de telecomunicações</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {differentials.map((d, i) => (
                <div
                  key={i}
                  className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${d.grad} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className={`w-14 h-14 bg-gradient-to-br ${d.grad} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <d.Icon className={`lucide ${d.iconClass} w-7 h-7 text-white`} strokeWidth={2.5} />
                    </div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#3d009e] transition-colors">
                      {d.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{d.text}</p>
                  </div>
                  <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${d.grad} group-hover:w-full transition-all duration-500`}></div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-gradient-to-br from-[#3d009e] to-[#5a1abd] rounded-2xl p-8 text-white shadow-2xl">
              <h4 className="text-2xl font-bold mb-3">Pronto para transformar sua comunicação?</h4>
              <p className="text-white/90 mb-6">Descubra como a Sati pode otimizar a telefonia da sua empresa</p>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-[#3d009e] px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
