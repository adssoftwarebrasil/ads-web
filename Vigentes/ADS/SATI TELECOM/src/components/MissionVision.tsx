import { Sparkles, Target, CheckCircle2, Heart } from 'lucide-react';

const missionItems = ['Tecnologia Atualizada', 'Atendimento Humanizado', 'Atuação Personalizada', 'Serviços de Qualidade'];
const visionItems = ['Expansão Nacional', 'Empresa Mais Bem Avaliada', 'Soluções Inovadoras', 'Referência no Mercado'];

const values = [
  { emoji: '🎯', title: 'Comprometimento', text: 'Com o sucesso do cliente.' },
  { emoji: '⭐', title: 'Excelência', text: 'Em todas as áreas da empresa.' },
  { emoji: '📈', title: 'Melhoria Contínua', text: 'Investir constantemente em desenvolvimento e novas habilidades.' },
  { emoji: '🤝', title: 'Integridade', text: 'Coerência entre pensar, falar e agir.' },
  { emoji: '💡', title: 'Valorização das Pessoas', text: 'São elas que tornam tudo possível.' },
];

const bottomStats = [
  { value: '40+', label: 'Anos de Confiança' },
  { value: '100%', label: 'Dedicação' },
  { value: '24/7', label: 'Suporte' },
  { value: '1000+', label: 'Clientes Felizes' },
];

const Telescope = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"></path>
    <path d="m13.56 11.747 4.332-.924"></path>
    <path d="m16 21-3.105-6.21"></path>
    <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"></path>
    <path d="m6.158 8.633 1.114 4.456"></path>
    <path d="m8 21 3.105-6.21"></path>
    <circle cx="12" cy="13" r="2"></circle>
  </svg>
);

function EssenceItem({ label, grad }: { label: string; grad: string }) {
  return (
    <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm p-3 rounded-lg border border-gray-200 hover:border-[#3d009e] transition-colors">
      <CheckCircle2
        className={`lucide lucide-check-circle2 w-5 h-5 flex-shrink-0 bg-gradient-to-r ${grad} text-transparent`}
        style={{ backgroundClip: 'text' }}
      />
      <span className="text-gray-800 font-medium text-sm">{label}</span>
    </div>
  );
}

export default function MissionVision() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#3d009e] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#bc0000] rounded-full blur-3xl"></div>
      </div>
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233d009e' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-[#3d009e]/10 to-[#bc0000]/10 px-5 py-2.5 rounded-full mb-6">
            <Sparkles className="lucide lucide-sparkles w-5 h-5 text-[#3d009e] mr-2" />
            <span className="text-sm font-semibold bg-gradient-to-r from-[#3d009e] to-[#bc0000] text-transparent bg-clip-text">
              Nossa Essência
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Missão, Visão e Valores
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Os princípios que nos guiam há quase 40 anos e moldam nosso futuro
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Missão */}
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100 ">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 to-red-600"></div>
            <div className="relative z-10 p-8 lg:p-10">
              <div className="">
                <div className="flex items-start gap-6 mb-6 ">
                  <div className="flex-shrink-0 inline-flex w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Target className="lucide lucide-target w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-[#3d009e] transition-colors">
                      Missão
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                      Oferecer soluções integradas de telefonia com tecnologia atualizada, agilidade e atendimento humanizado. Compreendendo o dia a dia de nossos clientes e atuando de forma personalizada, atendendo necessidades específicas com excelência, garantindo serviços de qualidade e fortalecendo nossa posição como referência no mercado.
                    </p>
                  </div>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-6 group-hover:w-full transition-all duration-700 mx-auto"></div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {missionItems.map((m) => (
                    <EssenceItem key={m} label={m} grad="from-orange-500 to-red-600" />
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
              <Target className="lucide lucide-target w-full h-full text-gray-900" strokeWidth={1} />
            </div>
          </div>
          {/* Visão */}
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100 ">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#3d009e] to-[#5a1abd]"></div>
            <div className="relative z-10 p-8 lg:p-10">
              <div className="">
                <div className="flex items-start gap-6 mb-6 ">
                  <div className="flex-shrink-0 inline-flex w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#3d009e] to-[#5a1abd] rounded-2xl items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Telescope className="lucide lucide-telescope w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-[#3d009e] transition-colors">
                      Visão
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                      Continuar expandindo em nível nacional, consolidando-se como a empresa mais bem avaliada do segmento. Ampliar o reconhecimento da marca SATI, construindo junto aos clientes soluções cada vez mais eficazes e inovadoras, fortalecendo nossa posição de referência no mercado.
                    </p>
                  </div>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-[#3d009e] to-[#5a1abd] rounded-full mb-6 group-hover:w-full transition-all duration-700 mx-auto"></div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {visionItems.map((v) => (
                    <EssenceItem key={v} label={v} grad="from-[#3d009e] to-[#5a1abd]" />
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
              <Telescope className="lucide lucide-telescope w-full h-full text-gray-900" />
            </div>
          </div>
          {/* Valores */}
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100 lg:col-span-3">
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 to-[#bc0000]"></div>
            <div className="relative z-10 p-8 lg:p-10">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-start gap-6 mb-6 justify-center">
                  <div className="flex-shrink-0 inline-flex w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-red-500 to-[#bc0000] rounded-2xl items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Heart className="lucide lucide-heart w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-[#3d009e] transition-colors">
                      Valores
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                      Princípios fundamentais que orientam nossas decisões e ações diárias, construindo relacionamentos sólidos e duradouros.
                    </p>
                  </div>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-[#bc0000] rounded-full mb-6 group-hover:w-full transition-all duration-700 mx-auto"></div>
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {values.map((v) => (
                    <div
                      key={v.title}
                      className="relative group/item bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl border-2 border-gray-200 hover:border-[#bc0000] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="text-3xl mb-3 transform group-hover/item:scale-110 transition-transform duration-300">
                        {v.emoji}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-base lg:text-lg">{v.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{v.text}</p>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-[#bc0000] transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 rounded-b-xl"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 lg:mt-20 max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#3d009e] to-[#5a1abd] rounded-2xl p-8 lg:p-12 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <div className="mb-6">
                <svg className="w-12 h-12 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
                </svg>
              </div>
              <blockquote className="text-xl lg:text-2xl text-white font-medium mb-6 leading-relaxed">
                "Há quase 40 anos transformamos a comunicação empresarial com comprometimento, excelência e valorização das pessoas que tornam tudo possível."
              </blockquote>
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-white font-bold text-lg">Equipe Sati Telecom</p>
                  <p className="text-white/80 text-sm">Comprometidos com sua excelência desde 1985</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                    <Heart className="lucide lucide-heart w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {bottomStats.map((s) => (
            <div
              key={s.label}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#3d009e] to-[#bc0000] text-transparent bg-clip-text mb-2">
                {s.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
