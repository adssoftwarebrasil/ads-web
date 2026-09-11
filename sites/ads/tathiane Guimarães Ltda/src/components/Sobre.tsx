import { Target, Eye, Heart, Shield, CheckCircle2 } from 'lucide-react';

const estrutura = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/tathiane%20guimaraes/atualizadas/conheca-nossa-estrutura-01.webp',
    alt: 'Detalhe da estrutura da clínica 1',
    extra: '',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/tathiane%20guimaraes/atualizadas/conheca-nossa-estrutura-02.webp',
    alt: 'Detalhe da estrutura da clínica 2',
    extra: ' sm:-mt-2',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/tathiane%20guimaraes/atualizadas/conheca-nossa-estrutura-03.webp',
    alt: 'Detalhe da estrutura da clínica 3',
    extra: '',
  },
];

const valores = [
  {
    icon: Target,
    title: 'Missão',
    text: 'Promover o bem-estar dos nossos pacientes através de cuidados personalizados e de alta qualidade',
  },
  {
    icon: Eye,
    title: 'Visão',
    text: 'Ser referência em atendimento multidisciplinar integrado na região de Divinópolis',
  },
  {
    icon: Heart,
    title: 'Valores',
    text: 'Acolhimento, profissionalismo, ética e compromisso com a excelência em cada atendimento',
  },
  {
    icon: Shield,
    title: 'Diferencial',
    text: 'Equipe treinada pessoalmente pela Dra. Tathiane, garantindo qualidade em cada tratamento',
  },
];

const motivos = [
  { title: 'Atendimento Humanizado', text: 'Escuta atenta e cuidado personalizado em cada consulta' },
  { title: 'Equipe Multidisciplinar', text: 'Profissionais especializados trabalhando de forma integrada' },
  { title: 'Técnicas Avançadas', text: 'Investimento constante em capacitação e inovação' },
  { title: 'Estrutura Completa', text: '210m² com equipamentos modernos e ambiente acolhedor' },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-24" style={{ backgroundColor: 'rgb(178, 155, 133)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sobre a Clínica
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto font-medium">
            Um espaço pensado para oferecer cuidados integrados de saúde com excelência e humanização
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://storage.lucasmendes.dev/site-sp/tathiane%20guimaraes/atualizadas/sobre-a-clinica.webp"
                alt="Equipe Tathiane Guimarães"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl hidden sm:block ring-1 ring-black/5">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">2017</div>
                <div className="text-sm text-gray-600 mt-1">Fundação</div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Nossa História</h3>
            <p className="text-gray-800 leading-relaxed">
              Desde 2017, quando me formei em Odontologia, busquei criar um espaço onde pudesse
              oferecer atendimentos com o máximo de qualidade. Sempre investi em cursos com os mais
              conceituados nomes da Odontologia, adotando técnicas inovadoras para solucionar casos
              de maneira eficiente, sem perder a conexão humana com cada paciente.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Ao longo desses anos, conquistei uma cartela significativa de pacientes e entendi que a
              saúde bucal também depende da saúde corporal e mental. Por isso, estruturei uma equipe
              multidisciplinar capacitada para oferecer cuidados completos e integrados.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Hoje, nossa clínica conta com 210m² de estrutura moderna, 4 consultórios odontológicos,
              1 consultório de psicologia e espaço dedicado aos cuidados corporais. Cada profissional
              foi cuidadosamente treinado por mim para abraçar nossa missão de acolhimento e
              excelência profissional.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8 pt-4 border-t border-gray-900/10">
              {estrutura.map((img) => (
                <img
                  key={img.alt}
                  src={img.src}
                  alt={img.alt}
                  className={`rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 object-cover h-36 w-full${img.extra}`}
                />
              ))}
            </div>
            <div className="pt-2">
              <a
                href="https://wa.me/553791564540"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-900 transition-all transform hover:scale-105 shadow-lg"
              >
                Conheça Nossa Estrutura
              </a>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {valores.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="text-center p-8 bg-gray-50/90 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-2xl mb-4 shadow-lg">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Por que escolher nossa clínica?
              </h3>
              <p className="text-gray-300 mb-6">
                Acreditamos que a saúde vai além do tratamento de doenças. Oferecemos um ambiente
                acolhedor onde cada paciente é tratado de forma única e personalizada.
              </p>
            </div>
            <div className="space-y-4">
              {motivos.map((m) => (
                <div key={m.title} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-white">{m.title}</h5>
                    <p className="text-gray-300 text-sm">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
