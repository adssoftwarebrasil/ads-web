import { Gavel, Heart } from 'lucide-react';

const AREAS = [
  {
    Icon: Gavel,
    title: 'Direito do Trabalho',
    subtitle: 'Defesa dos seus direitos laborais',
    items: [
      'Rescisão indireta',
      'Verbas rescisórias e FGTS',
      'Horas extras não pagas',
      'Assédio moral e dano moral',
      'Acidente de trabalho e doença ocupacional',
      'Reconhecimento de vínculo empregatício',
      'Estabilidade gestante e pós-acidente',
      'Equiparação salarial',
      'Adicional de insalubridade e periculosidade',
      'Fraude por pejotização',
    ],
    image:
      'https://storage.lucasmendes.dev/site-sp/lima%20advocacia/img/logo-ouro-lei-balanca-fundo-marmore_1080x1080.webp',
  },
  {
    Icon: Heart,
    title: 'Direito Previdenciário',
    subtitle: 'Garantindo os benefícios que você merece',
    items: [
      'Aposentadoria por tempo de contribuição',
      'Aposentadoria especial',
      'Aposentadoria por incapacidade permanente',
      'Auxílio por incapacidade temporária',
      'Auxílio-acidente',
      'BPC/LOAS',
      'Pensão por morte',
      'Salário-maternidade',
      'Revisão de benefício INSS',
      'Recurso de benefício negado',
    ],
    image:
      'https://storage.lucasmendes.dev/site-sp/lima%20advocacia/img/logotipo-lima-advocacia-escudo-balanca-dourado_1080x1080.webp',
  },
];

export default function PracticeAreas() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="font-sans text-xs tracking-[0.4em] text-[#A1825A] uppercase mb-3">
            Especialidades
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-5">
            Áreas de Atuação
          </h2>
          <div className="section-divider mb-5" />
          <p className="font-sans text-[#BBB39D] max-w-xl mx-auto leading-relaxed">
            Concentramos nossa expertise em duas áreas fundamentais para proteger trabalhadores e
            garantir benefícios previdenciários.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {AREAS.map(({ Icon, title, subtitle, items, image }, idx) => (
            <div
              key={title}
              className={`animate-on-scroll-${idx === 0 ? 'left' : 'right'} relative overflow-hidden rounded-sm border border-white/10`}
            >
              <div
                className="absolute inset-0 opacity-10 bg-cover bg-center"
                style={{ backgroundImage: `url('${image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/95 to-black/80" />

              <div className="relative z-10 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-sm gold-gradient flex items-center justify-center shrink-0">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-white">{title}</h3>
                    <p className="font-sans text-xs text-[#A1825A] tracking-wider mt-0.5">
                      {subtitle}
                    </p>
                  </div>
                </div>

                <ul className="grid grid-cols-1 gap-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-[#A1825A] shrink-0 mt-2" />
                      <span className="font-sans text-sm text-[#BBB39D] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="http://wa.me/5562981442263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#A1825A] hover:text-[#C49A52] transition-colors duration-300 group"
                >
                  Consultar sobre {title}
                  <span className="w-0 group-hover:w-5 overflow-hidden transition-all duration-300 inline-block">→</span>
                  <span className="group-hover:opacity-0 transition-opacity duration-300">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
