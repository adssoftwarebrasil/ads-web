import { Award, Users, Target, TrendingUp } from 'lucide-react';

const cards = [
  { Icon: Users, title: 'Equipe Especializada', desc: 'Profissionais treinados e qualificados' },
  { Icon: Target, title: 'Foco no Cliente', desc: 'Atendimento personalizado e eficiente' },
  { Icon: TrendingUp, title: 'Crescimento Contínuo', desc: 'Sempre inovando e evoluindo' },
  { Icon: Award, title: 'Reconhecimento', desc: 'Referência em qualidade e confiança' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-[rgb(16,215,237)] font-semibold text-sm uppercase tracking-wider">
                Nossa História
              </span>
              <div className="h-1 w-20 bg-[rgb(16,215,237)] mt-2"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(2,66,147)] leading-tight">
              Mais de 9 Anos Protegendo Seu Patrimônio
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                A <strong>TS Serviços</strong> surgiu da necessidade de oferecer
                soluções rápidas, seguras e confiáveis para quem depende de
                mobilidade no dia a dia. Com uma visão clara de criar um
                atendimento diferenciado, onde cada cliente é tratado com
                respeito, transparência e prioridade.
              </p>
              <p>
                No início, atuávamos apenas com serviços básicos de assistência
                veicular. Com o tempo, percebemos que nossos clientes buscavam
                mais: queriam{' '}
                <strong>confiança, compromisso e soluções ágeis</strong>. Foi
                dessa percepção que surgiram os investimentos em tecnologia de
                rastreamento veicular e gestão de frotas.
              </p>
              <p>
                Hoje, a TS Serviços é reconhecida pela{' '}
                <strong>seriedade, atendimento humano</strong> e capacidade de
                entregar soluções reais. Nosso crescimento continua, sempre
                movido pela confiança daqueles que acreditam em nosso trabalho.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-gradient-to-br from-[rgb(2,66,147)] to-[rgb(0,68,139)] rounded-2xl text-white">
                <div className="text-4xl font-bold text-[rgb(16,215,237)]">9+</div>
                <div className="text-sm mt-2">Anos de Experiência</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-[rgb(2,66,147)] to-[rgb(0,68,139)] rounded-2xl text-white">
                <div className="text-4xl font-bold text-[rgb(16,215,237)]">24/7</div>
                <div className="text-sm mt-2">Suporte Disponível</div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/ts%20tecnologia%2Fimg%2Fcaminhoes-azuis-monitoramento-localizacao-postagem-com-texto-01.webp"
                alt="Frota TS Serviços"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[rgb(16,215,237)] rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-[rgb(2,66,147)]" />
                  </div>
                  <div>
                    <div className="font-bold text-[rgb(2,66,147)]">
                      Qualidade Garantida
                    </div>
                    <div className="text-sm text-gray-600">
                      Certificação e excelência
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              {cards.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-8 h-8 text-[rgb(16,215,237)] mb-3" />
                  <h3 className="font-bold text-[rgb(2,66,147)] mb-2">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
