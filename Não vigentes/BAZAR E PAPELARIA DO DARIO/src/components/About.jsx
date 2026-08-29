import { CheckCircle } from 'lucide-react'

const BANNER = '/img/banner-sobre.webp'

const features = [
  'Mais de 40 anos de tradição e confiança',
  'Estoque amplo e sempre atualizado',
  'Atendimento personalizado e humanizado',
  'Preços competitivos e acessíveis',
  'Variedade de produtos em um só lugar',
  'Atende 11 cidades da região de Goiás',
]

const stats = [
  { value: '1984', label: 'Fundação' },
  { value: '+40', label: 'Anos ativos' },
  { value: '11', label: 'Cidades' },
]

const areas = [
  'Papelaria',
  'Brinquedos',
  'Aviamentos',
  'Bolsas',
  'Material Escolar',
  'Escritório',
  'Cosméticos',
  'Encadernação',
  'Fotocópias',
]

export default function About() {
  return (
    <section id="sobre" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="inline-block text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3">
              Nossa História
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-black leading-tight mb-6">
              Desde 1984 servindo <span className="text-brand-blue">com excelência</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              O Bazar e Papelaria do Dario nasceu em 1984 com um propósito simples: oferecer
              qualidade, variedade e bom atendimento à população de Rialma e toda a região
              centro-norte de Goiás.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Ao longo de mais de quatro décadas, construímos nossa reputação atendendo famílias,
              estudantes, artesãos, profissionais e empreendedores — sempre com foco em economia
              real e produtos de qualidade.
            </p>
            <div className="bg-brand-black rounded-2xl px-6 py-5 mb-8">
              <p className="text-brand-blue font-bold text-xl">"Economia na ponta do lápis!"</p>
              <p className="text-white/60 text-sm mt-1">
                Nosso compromisso com preços justos e qualidade real.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-gray-700"
                >
                  <CheckCircle size={18} className="flex-shrink-0 mt-0.5 text-brand-blue" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={BANNER}
                alt="Banner Bazar e Papelaria do Dario"
                className="w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-5 text-center shadow-md border border-gray-100"
                >
                  <p className="text-2xl md:text-3xl font-extrabold text-brand-blue">{stat.value}</p>
                  <p className="text-gray-500 text-xs mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                Áreas de Atuação
              </p>
              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
