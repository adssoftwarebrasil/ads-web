import { History, Trophy, Sparkles, Target } from 'lucide-react';

const stats = [
  { Icon: Sparkles, title: 'Qualidade Premium', text: 'Excelência em cada projeto' },
  { Icon: Target, title: 'Atendimento Personalizado', text: 'Focados nas suas necessidades' },
  { Icon: History, title: '40 Anos de Confiança', text: 'Tradição e credibilidade' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[rgb(2,126,198)] font-bold text-sm uppercase tracking-wider">
              Nossa História
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Tradição e Qualidade Há{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(2,126,198)] to-[rgb(6,51,133)]">
                40 Anos
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A Laborphoto é pioneira em serviços fotográficos no Guará. Somos a primeira e única
              empresa da região que mantém a tradição da revelação fotográfica em processo químico,
              combinando técnicas clássicas com tecnologia moderna.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[550px] w-full md:w-4/5 lg:w-full mx-auto group">
              <img
                src="https://storage.lucasmendes.dev/site-sp/laborphoto/img2/homem-laborphoto-fundo-fotos-conheca-empresa_719x1280.webp"
                alt="Fundador da Laborphoto no laboratório"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(6,51,133)]/20 to-transparent mix-blend-multiply"></div>
            </div>
            <div className="flex flex-col justify-center space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-[rgb(2,126,198)] to-[rgb(6,51,133)] rounded-2xl flex items-center justify-center mb-6">
                  <History className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Como Tudo Começou</h3>
                <p className="text-gray-600 leading-relaxed">
                  Iniciamos sem grandes pretensões, apenas com a paixão pela fotografia e o desejo de
                  formalizar nosso trabalho. Com dedicação e qualidade, nos tornamos referência na
                  região e estamos há 40 anos preservando memórias e histórias.
                </p>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-[rgb(6,51,133)] to-[rgb(34,9,92)] rounded-2xl flex items-center justify-center mb-6">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossos Diferenciais</h3>
                <p className="text-gray-600 leading-relaxed">
                  Somos a única empresa na região com revelação tradicional em processo químico e
                  ampliações em formatos grandes. Nossa experiência em restauração de fotografias
                  antigas é incomparável.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[rgb(6,51,133)] to-[rgb(34,9,92)] rounded-3xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {stats.map(({ Icon, title, text }) => (
                <div key={title} className="text-center md:text-left">
                  <Icon className="w-12 h-12 text-cyan-300 mb-4 mx-auto md:mx-0" />
                  <h3 className="text-3xl font-bold mb-2">{title}</h3>
                  <p className="text-gray-200">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
