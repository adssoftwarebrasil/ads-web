import { CheckCircle2, Rocket, Eye, ShieldCheck, Award, Heart, TrendingUp, LucideIcon } from 'lucide-react';
import Star from './Star';

const highlights = [
  'Atendimento humanizado e personalizado',
  'Estratégias para redução legal de impostos',
  'Suporte ágil e transparente',
  'Experiência prática de quem empreendeu',
  'Tecnologia aliada à proximidade com o cliente',
  'Crescimento consistente desde 2022',
];

const values: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: ShieldCheck, title: 'Integridade', text: 'Premissa básica para o nosso sucesso.' },
  {
    icon: Award,
    title: 'Excelência',
    text: 'Entregamos com qualidade, agilidade e precisão aquilo que prometemos.',
  },
  {
    icon: Heart,
    title: 'Atendimento',
    text: 'O atendimento humanizado é nosso diferencial e a satisfação do cliente é nosso combustível.',
  },
  {
    icon: TrendingUp,
    title: 'Desenvolvimento',
    text: 'Investimos na capacitação do nosso time, fundamental para a excelência do atendimento.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll-left">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Nossa história
            </span>
            <h2 className="section-title mt-2 mb-6">
              Contabilidade Feita por <span className="text-gradient">Quem Venceu</span> através do
              Conhecimento
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A FerrariCont nasceu em 2022 de um sonho construído com muito esforço. José Carlos e
              Denise começaram a jornada na área contábil de forma humilde — trabalhando na faxina de
              um escritório de contabilidade. Com determinação, foram aprendendo, crescendo e,
              finalmente, realizando o sonho de ter o próprio negócio.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Hoje, a FerrariCont atende mais de{' '}
              <strong className="text-primary">90 clientes ativos</strong> em Lucas do Rio Verde e
              região, com uma equipe de 7 profissionais dedicados. Mais do que uma contabilidade,
              somos parceiros estratégicos do seu crescimento.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((h) => (
                <div key={h} className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-snug">{h}</span>
                </div>
              ))}
            </div>
            <a
              href="http://wa.me/556596828492?text=Ol%C3%A1!%20Quero%20conhecer%20mais%20sobre%20a%20FerrariCont."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-primary hover:bg-primary-light text-white py-3.5 px-8 rounded-xl inline-block"
            >
              Fale com Nossa Equipe
            </a>
          </div>
          <div className="animate-on-scroll-right">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Equipe FerrariCont em reunião"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-xl">FerrariCont</p>
                  <p className="text-white/80 text-sm mt-1">Contabilidade Consultiva desde 2022</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-4 bg-accent rounded-2xl p-5 shadow-xl shadow-accent/25 max-w-[180px]">
                <p className="text-primary font-black text-3xl leading-none">5.0</p>
                <div className="flex gap-0.5 my-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="#0A1528" />
                  ))}
                </div>
                <p className="text-primary/80 text-xs font-semibold">Google Reviews</p>
              </div>
              <div className="absolute -top-4 -left-4 bg-primary border border-white/15 rounded-2xl p-4 shadow-xl max-w-[160px]">
                <p className="text-accent font-black text-3xl leading-none">90+</p>
                <p className="text-white/70 text-xs mt-1 font-medium">Clientes satisfeitos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-16 border-t border-gray-100 animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-100/50 border border-gray-100 flex flex-col sm:flex-row gap-5 items-start">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Rocket size={28} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Nossa Missão</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Promover o Sucesso e Satisfação aos nossos clientes, através da prestação de
                  serviços contábeis e de consultoria.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-100/50 border border-gray-100 flex flex-col sm:flex-row gap-5 items-start">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Eye size={28} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Nossa Visão</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Ser referência de qualidade, bom atendimento, agilidade nos serviços prestados,
                  destacando-se através do sucesso de nossos clientes.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-center text-primary mb-10">Nossos Valores</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <h4 className="text-primary font-bold mb-2">{v.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
