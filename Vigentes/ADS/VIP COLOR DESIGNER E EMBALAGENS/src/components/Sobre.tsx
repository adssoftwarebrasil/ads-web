import { Heart, TrendingUp, Target, CheckCircle } from 'lucide-react';

const features = [
  'Especialistas em identidade visual completa',
  'Personalização total: forma, cor e tamanho sob medida',
  'Atendimento em todo Brasil e exterior',
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[rgb(229,198,99)]/20 to-[rgb(3,101,84)]/20 rounded-3xl blur-2xl"></div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/vip%20color/img/fachada-loja.webp"
              alt="Fachada Vip Designer e Embalagens"
              className="relative w-full h-[400px] sm:h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border-4 border-[rgb(229,198,99)]">
              <div className="text-center">
                <div className="text-4xl font-bold text-[rgb(3,101,84)]">15+</div>
                <div className="text-sm font-semibold text-gray-700">
                  Anos de Excelência
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-[rgb(229,198,99)] font-semibold text-sm uppercase tracking-wider">
                  Nossa História
                </span>
                <div className="h-1 w-20 bg-[rgb(229,198,99)] mt-2"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(3,101,84)] leading-tight">
                Referência em Embalagens Personalizadas
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Desde 2013, a <strong>Vip Color Designer</strong> nasceu no Setor
                Jardim América em Goiânia, com a visão de transformar embalagens em
                verdadeiras experiências. Hoje, localizada no Conjunto Cruzeiro do
                Sul, somos especialistas em criar desde a identidade visual até
                impressos personalizados sob medida.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Fundada por <strong>Najara Rodrigues Bruno</strong>, com mais de 15
                anos de experiência no mercado gráfico, nossa empresa se consolidou
                como referência absoluta em embalagens personalizadas para lojas de
                todo o Brasil.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-[rgb(229,198,99)]/20 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[rgb(3,101,84)]" />
                </div>
                <h3 className="font-bold text-[rgb(3,101,84)]">Missão</h3>
                <p className="text-sm text-gray-600">
                  Realizar o sonho de cada cliente com embalagens que valorizam sua
                  marca
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-[rgb(229,198,99)]/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[rgb(3,101,84)]" />
                </div>
                <h3 className="font-bold text-[rgb(3,101,84)]">Visão</h3>
                <p className="text-sm text-gray-600">
                  Estar sempre atualizado com embalagens inovadoras e modernas
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-[rgb(229,198,99)]/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-[rgb(3,101,84)]" />
                </div>
                <h3 className="font-bold text-[rgb(3,101,84)]">Valores</h3>
                <p className="text-sm text-gray-600">
                  Entregar qualidade excepcional em cada embalagem produzida
                </p>
              </div>
            </div>
            <div className="space-y-3 pt-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[rgb(229,198,99)] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
