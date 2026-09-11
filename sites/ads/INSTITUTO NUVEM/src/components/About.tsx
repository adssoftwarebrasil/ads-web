import { Heart, Award, Users, Lightbulb } from 'lucide-react';

const values = [
  {
    Icon: Heart,
    title: 'Cuidado Humanizado',
    text: 'Cada criança é única. Personalizamos cada atendimento com empatia, acolhimento e atenção individualizada.',
  },
  {
    Icon: Award,
    title: 'Evidência Científica',
    text: 'Nossa equipe aplica as melhores práticas baseadas em pesquisa para resultados concretos e duradouros.',
  },
  {
    Icon: Users,
    title: 'Equipe Multidisciplinar',
    text: 'Psicólogos, fonoaudiólogos, terapeutas ocupacionais e mais – integrados para o desenvolvimento completo.',
  },
  {
    Icon: Lightbulb,
    title: 'Família no Centro',
    text: 'Envolvemos pais e responsáveis em cada etapa, fortalecendo vínculos e ampliando o impacto do tratamento.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="section-observe grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="tag mb-5 inline-block">Nossa História</span>
            <h2 className="section-title mb-6">
              Nascemos com o Propósito de<br />
              <span className="text-primary">Transformar Vidas</span>
            </h2>
            <div className="space-y-4 text-gray-600 font-sans text-base leading-relaxed">
              <p>
                O <strong className="text-gray-800">Instituto Nuvem</strong> nasceu em 2021 com uma missão clara: unir cuidado técnico e visão humana para transformar o desenvolvimento de crianças que precisam de atenção especializada.
              </p>
              <p>
                Iniciamos nossa jornada em <strong className="text-gray-800">Rondonópolis</strong> e, logo após, chegamos a <strong className="text-gray-800">Primavera do Leste</strong>, consolidando nossa reputação como referência em saúde e desenvolvimento infantil no Mato Grosso. Com a crescente demanda por atendimento especializado em neurodivergência, expandimos também para <strong className="text-gray-800">Campo Verde</strong>, levando nossa metodologia comprovada a mais famílias.
              </p>
              <p>
                Acreditamos que autoridade se constrói com resultados reais e com a confiança de quem nos entrega seu bem mais precioso: o futuro de seus filhos.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="text-center">
                <p className="font-heading font-bold text-3xl text-primary">3+</p>
                <p className="font-sans text-sm text-gray-500 mt-1">Anos de experiência</p>
              </div>
              <div className="text-center">
                <p className="font-heading font-bold text-3xl text-primary">3</p>
                <p className="font-sans text-sm text-gray-500 mt-1">Unidades no MT</p>
              </div>
              <div className="text-center">
                <p className="font-heading font-bold text-3xl text-primary">100%</p>
                <p className="font-sans text-sm text-gray-500 mt-1">Foco em resultados</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-cream rounded-3xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/20 rounded-3xl -z-10"></div>
            <div className="bg-white rounded-3xl p-2 shadow-xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/instituto%20nuuvem/img/terapia-ocupacional-menina-cilindro-homem-ajudando_4672x7008.webp"
                alt="Instituto Nuvem – Ambiente acolhedor"
                className="w-full h-72 sm:h-96 object-cover rounded-2xl"
              />
              <div className="p-5">
                <div className="flex items-center justify-center">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/instituto%20nuuvem/img/logo.webp"
                    alt="Logo Instituto Nuvem"
                    className="h-12 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="stagger-observe mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <Icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-gray-800 text-base mb-2">{title}</h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
