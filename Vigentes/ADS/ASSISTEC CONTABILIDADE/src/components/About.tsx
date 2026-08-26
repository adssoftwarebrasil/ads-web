import { Landmark, CheckCircle2 } from 'lucide-react';

const features = [
  'Atendimento personalizado e próximo ao cliente',
  'Equipe especializada em agronegócio e produtores rurais',
  'Planejamento tributário para redução de custos legalmente',
  'Suporte online para clientes em todo o Brasil',
  'Mais de 30 anos de credibilidade e confiança no mercado',
  'Soluções para MEI, Simples Nacional, Lucro Presumido e Real',
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Equipe Assistec Contabilidade"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Landmark className="lucide lucide-landmark text-brand-blue" width={22} height={22} strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-brand-burgundy font-bold text-sm">Fundada em 1994</div>
                    <div className="text-gray-500 text-xs">por Vanderlei Francisconi Tolfo</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-burgundy/10 rounded-full blur-2xl"></div>
          </div>
          <div>
            <span className="inline-block text-brand-blue font-semibold text-sm tracking-widest uppercase mb-3">
              Nossa História
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-burgundy mb-6 leading-tight">
              Mais de 30 Anos Construindo Confiança e Resultados
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              A Assistec Contabilidade foi fundada pelo Sr.{' '}
              <strong className="text-brand-burgundy">Vanderlei Francisconi Tolfo</strong> com o propósito de oferecer
              suporte contábil confiável, próximo e de qualidade para empresas e produtores rurais da região de
              Primavera do Leste – MT.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              Ao longo de mais de três décadas, construímos uma trajetória sólida baseada na{' '}
              <strong className="text-brand-burgundy">confiança, ética e compromisso</strong> com os resultados dos
              nossos clientes. Nos especializamos no atendimento ao agronegócio — uma das principais forças econômicas
              da região — e expandimos nossa atuação para todo o Brasil por meio do atendimento online.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Mais do que prestar serviços contábeis, somos uma{' '}
              <strong className="text-brand-burgundy">parceira estratégica</strong> dos nossos clientes, oferecendo
              segurança, organização e apoio na tomada de decisões com foco no crescimento sustentável dos negócios.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2
                    className="lucide lucide-check-circle2 text-brand-blue mt-0.5 flex-shrink-0"
                    width={18}
                    height={18}
                    strokeWidth={2}
                  />
                  <span className="text-gray-600 text-sm leading-snug">{feature}</span>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/5566999538963?text=Olá!%20Gostaria%20de%20conhecer%20melhor%20os%20serviços%20da%20Assistec%20Contabilidade."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-burgundy hover:bg-brand-burgundy-light text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              Falar com um especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
