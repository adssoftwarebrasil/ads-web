import { Award, Users, TrendingUp, Target, Eye, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
  Icon: LucideIcon;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { Icon: Award, value: '20+', label: 'Anos de Experiência' },
  { Icon: Users, value: '300km', label: 'Raio de Atendimento' },
  { Icon: TrendingUp, value: '100%', label: 'Qualidade Garantida' },
];

interface Pilar {
  Icon: LucideIcon;
  title: string;
  text: string;
}

const pilares: Pilar[] = [
  {
    Icon: Target,
    title: 'Missão',
    text: 'Oferecer soluções em embreagens remanufaturadas com qualidade, segurança e eficiência, substituindo os componentes com desgaste por componentes novos. Contribuindo para a economia e a sustentabilidade do setor de transportes.',
  },
  {
    Icon: Eye,
    title: 'Visão',
    text: 'Ser reconhecida como referência nacional em embreagens remanufaturadas na linha leve, pesada e agrícola, destacando-se pela excelência técnica, confiabilidade e compromisso com a qualidade.',
  },
  {
    Icon: Heart,
    title: 'Valores',
    text: 'Qualidade: compromisso com produtos duráveis. Sustentabilidade: reutilizar e recuperar componentes. Confiabilidade: cumprir prazos. Inovação: aprimorar processos. Ética e transparência.',
  },
];

const motivos = [
  { title: 'Qualidade Garantida', text: 'Componentes novos em todas as remanufaturas' },
  { title: 'Experiência', text: 'Mais de 20 anos no mercado' },
  { title: 'Sustentabilidade', text: 'Economia circular e redução de impacto' },
  { title: 'Atendimento', text: 'Cobertura em 300km de raio' },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[rgb(240,178,121)]/10 border border-[rgb(240,178,121)]/30 px-5 py-2 rounded-full mb-6">
            <svg className="w-5 h-5 text-[rgb(240,178,121)]" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-sm font-semibold text-[rgb(60,88,144)] tracking-wide">SOBRE NÓS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(60,88,144)] mb-4">
            Conheça a
            <span className="block text-[rgb(240,178,121)] mt-2">União Embreagens</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl md:text-4xl font-bold text-[rgb(60,88,144)] mb-6">Quem Somos</h3>
            <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
              <p>
                A{' '}
                <strong className="text-[rgb(240,178,121)] font-bold">União Embreagens</strong>{' '}
                começou sua atuação no ano de <strong>2003</strong> no ramo de embreagens
                remanufaturadas. Foi fundada pelos sócios <strong>João Messias Teodoro</strong> e{' '}
                <strong>Regiane Anacleto do Nascimento Teodoro</strong>.
              </p>
              <p>
                Com mais de{' '}
                <strong className="text-[rgb(240,178,121)]">20 anos de experiência</strong>, nos
                especializamos em embreagens remanufaturadas para linhas{' '}
                <strong>leve, pesada e agrícola</strong>, substituindo componentes com desgaste por
                componentes novos de alta qualidade.
              </p>
              <p>
                Atendemos <strong>Ribeirão Preto e região</strong> num raio de até{' '}
                <strong className="text-[rgb(240,178,121)]">300km</strong>, oferecendo produtos
                duráveis, de alto desempenho e com foco em sustentabilidade e economia circular.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map(({ Icon, value, label }) => (
                <div
                  key={label}
                  className="bg-gradient-to-br from-[rgb(60,88,144)]/5 to-[rgb(240,178,121)]/5 p-4 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all"
                >
                  <div className="flex justify-center mb-2">
                    <Icon className="w-10 h-10 text-[rgb(240,178,121)]" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-[rgb(60,88,144)] mb-1">
                    {value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(240,178,121)]/20 to-[rgb(60,88,144)]/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="relative">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=embreagens%2Fheroembreagem.jpeg&version_id=null"
                alt="União Embreagens - Profissionais em Ação"
                className="rounded-2xl shadow-2xl w-full h-[450px] md:h-[550px] object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-[rgb(240,178,121)] p-3 rounded-full">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-[rgb(60,88,144)] font-bold text-lg">Desde 2003</div>
                    <div className="text-gray-600 text-sm">Qualidade e Experiência</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-[rgb(60,88,144)] text-center mb-12">
            Nossos Pilares
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pilares.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[rgb(240,178,121)] transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-gradient-to-br from-[rgb(240,178,121)]/10 to-[rgb(60,88,144)]/10 p-4 rounded-full group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8 text-[rgb(240,178,121)]" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-[rgb(60,88,144)] text-center mb-4">{title}</h4>
                <p className="text-gray-600 leading-relaxed text-center">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-r from-[rgb(60,88,144)]/5 to-[rgb(240,178,121)]/5 rounded-2xl p-8 md:p-12 border border-gray-200">
          <h3 className="text-2xl md:text-3xl font-bold text-[rgb(60,88,144)] text-center mb-8">
            Por que escolher a União Embreagens?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {motivos.map((m) => (
              <div key={m.title} className="text-center">
                <div className="bg-[rgb(240,178,121)] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h4 className="font-bold text-[rgb(60,88,144)] mb-2">{m.title}</h4>
                <p className="text-gray-600 text-sm">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
