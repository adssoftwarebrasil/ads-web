import { ArrowRight, Activity, CheckCircle, Heart, Users } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

const exams = [
  {
    title: 'Audiometria Tonal',
    description:
      'Avalia a capacidade auditiva em diferentes frequências e intensidades sonoras. É o exame fundamental para identificar o tipo e o grau de perda auditiva, determinando a melhor abordagem de tratamento.',
    details: [
      'Avaliação de frequências de 250 Hz a 8000 Hz',
      'Mapeamento da capacidade auditiva',
      'Resultados apresentados em audiograma detalhado',
    ],
  },
  {
    title: 'Audiometria Vocal',
    description:
      'Complementa a audiometria tonal avaliando a capacidade de reconhecer e compreender a fala humana. Essencial para entender como a perda auditiva impacta a comunicação cotidiana do paciente.',
    details: [
      'Avaliação da discriminação da fala',
      'Mede o impacto da perda auditiva na comunicação',
      'Auxilia na escolha do melhor aparelho auditivo',

    ],
  },
  {
    title: 'Imitanciometria',
    description:
      'Avalia a integridade e funcionamento da orelha média, incluindo a membrana timpânica e os ossículos. Identifica problemas como otite média, perfurações timpânicas e disfunções da tuba auditiva.',
    details: [
      'Timpanometria para avaliação da orelha média',
      'Medida dos reflexos estapedianos',
      'Exame rápido, preciso e não invasivo',
    ],
  },
];

export default function Exames() {
  return (
    <ServicePageLayout>
      <section className="relative bg-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(246,182,31)] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[rgb(246,182,31)] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block bg-[rgb(246,182,31)] text-black font-bold px-5 py-1.5 rounded-full text-sm uppercase tracking-wider">
            Diagnóstico Preciso
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Exames <span className="text-[rgb(246,182,31)]">Auditivos</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Exames para avaliar a audição e obter o melhor tratamento para ter vida plena, em harmonia com pessoas e ambientes, e conectar-se com o mundo.
          </p>
          <a
            href="http://wa.me/5565999818250"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[rgb(246,182,31)] text-black px-8 py-4 rounded-full font-bold hover:bg-[rgb(226,162,11)] transition-all shadow-lg gap-2 mt-4"
          >
            Agendar Exame
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nossos <span className="text-[rgb(246,182,31)]">Exames</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Realizados por fonoaudióloga audiologista, com equipamentos modernos para garantir resultados precisos e confiáveis.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {exams.map((exam, index) => (
              <div key={exam.title} className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="h-2 bg-[rgb(246,182,31)]" />
                <div className="p-8 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-black text-[rgb(246,182,31)]/20 leading-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <Activity className="w-7 h-7 text-[rgb(246,182,31)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{exam.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{exam.description}</p>
                  <ul className="space-y-3 pt-2">
                    {exam.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[rgb(246,182,31)] shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=beevox%2Falteracoes2%2FINFO%20PARA%20SITE%20BEEVOX%20GOOGLE%2Fotorrino.webp&version_id=null"
                alt="Exame auditivo"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Por que fazer exames <span className="text-[rgb(246,182,31)]">regulares?</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                A saúde auditiva impacta diretamente a qualidade de vida, os relacionamentos e o bem-estar emocional. Diagnósticos precoces permitem tratamentos mais eficazes e preservam a audição por mais tempo.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Heart, text: 'Diagnóstico precoce e preciso' },
                  { icon: Activity, text: 'Monitoramento da saúde auditiva' },
                  { icon: Users, text: 'Melhor comunicação e qualidade de vida' },
                  { icon: CheckCircle, text: 'Base para o tratamento ideal' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <item.icon className="w-5 h-5 text-[rgb(246,182,31)] shrink-0" />
                    <span className="text-gray-700 font-medium text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <Activity className="w-10 h-10 text-[rgb(246,182,31)] mx-auto" />
          <h2 className="text-3xl sm:text-4xl font-bold">
            Cuide da sua audição <span className="text-[rgb(246,182,31)]">hoje mesmo</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Agende seu exame auditivo e tenha uma avaliação completa realizada por especialistas.
          </p>
          <a
            href="http://wa.me/5565999818250"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[rgb(246,182,31)] text-black px-10 py-4 rounded-full font-bold hover:bg-[rgb(226,162,11)] transition-all shadow-lg gap-2 text-lg"
          >
            Agendar Exame
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </ServicePageLayout>
  );
}
