import { ShieldCheck, Truck, Leaf, Award } from 'lucide-react'

const GREEN = '#004a27'
const RED = 'rgb(236,28,36)'

const diferenciais = [
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    description: 'Trabalhamos apenas com madeiras de reflorestamento, preservando o meio ambiente.',
  },
  {
    icon: ShieldCheck,
    title: 'Qualidade Garantida',
    description: 'Produtos selecionados e controlados para garantir o melhor resultado na sua obra.',
  },
  {
    icon: Truck,
    title: 'Atendimento Regional',
    description: 'Atendemos Primavera do Leste e toda a região com agilidade e eficiência.',
  },
  {
    icon: Award,
    title: 'Experiência',
    description: 'Anos de atuação no mercado madeireiro, com tradição e confiança dos clientes.',
  },
]

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ backgroundColor: `${GREEN}15`, color: GREEN }}
            >
              Sobre a Empresa
            </span>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6" style={{ color: GREEN }}>
              Tradição e Compromisso<br />com a Natureza
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
              A <strong style={{ color: GREEN }}>Top Madeiras Materiais e Serviços</strong> é uma empresa
              sólida, com atuação em Primavera do Leste e toda a região. Nascemos com o propósito de
              oferecer madeiras de alta qualidade, sempre com foco na sustentabilidade.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
              Nosso diferencial está no compromisso com o meio ambiente: trabalhamos
              <strong className="text-gray-800"> exclusivamente com madeiras de reflorestamento</strong>,
              garantindo responsabilidade ambiental sem abrir mão da qualidade e resistência dos nossos produtos.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Seja para construção civil, obras, cercas ou projetos especiais, a Top Madeiras tem
              o produto certo para você. Venha nos visitar ou entre em contato para um atendimento
              personalizado!
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5566999371417?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-2xl text-white font-bold transition-all duration-300 hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: RED }}
              >
                Falar no WhatsApp
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-2xl font-bold border-2 transition-all duration-300 hover:bg-gray-50"
                style={{ borderColor: GREEN, color: GREEN }}
              >
                Ver Localização
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {diferenciais.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${GREEN}15` }}
                  >
                    <Icon size={22} style={{ color: GREEN }} />
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: GREEN }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
