import { Leaf, Award, Shield, Heart } from 'lucide-react';

const IMG_COMECOU =
  'https://storage.lucasmendes.dev/site-sp/casarustica/casarustica-alteracao/como-tudo-comecou.png';
const IMG_PARCEIROS =
  'https://storage.lucasmendes.dev/site-sp/casarustica/casarustica-alteracao/somos-parceiros-do-meio-ambiente.png';

const features = [
  {
    icon: Leaf,
    gradient: 'from-[rgb(5,86,77)] to-[rgb(4,70,63)]',
    title: 'Sustentabilidade',
    text: 'Madeira de demolição 100% ecológica',
  },
  {
    icon: Shield,
    gradient: 'from-[rgb(248,177,1)] to-[rgb(228,157,0)]',
    title: 'Durabilidade',
    text: 'Resistência superior por gerações',
  },
  {
    icon: Award,
    gradient: 'from-[rgb(184,11,41)] to-[rgb(150,9,33)]',
    title: 'Qualidade',
    text: 'Madeira nobre peroba rosa',
  },
  {
    icon: Heart,
    gradient: 'from-[rgb(5,86,77)] to-[rgb(4,70,63)]',
    title: 'Sob Medida',
    text: 'Personalização completa',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-40 -left-20 w-96 h-96 bg-[rgb(248,177,1)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-[rgb(5,86,77)]/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-[rgb(248,177,1)] font-semibold text-sm tracking-widest uppercase">Nossa História</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(5,86,77)] mb-6">Conheça a Casa Rústica</h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-[rgb(248,177,1)]"></div>
            <div className="w-3 h-3 bg-[rgb(248,177,1)] rounded-full"></div>
            <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-[rgb(248,177,1)]"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Tradição, sustentabilidade e qualidade em cada peça</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-24 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <div className="inline-block">
              <h3 className="text-3xl lg:text-4xl font-bold text-[rgb(5,86,77)] mb-2">Como Tudo Começou</h3>
              <div className="h-1 w-24 bg-[rgb(248,177,1)]"></div>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Fomos presenteados por Deus com a possibilidade de abrir uma empresa. E foi assim que nasceu a{' '}
              <span className="font-semibold text-[rgb(5,86,77)]">Casa Rústica</span>: nome sugestão do nosso filho.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A Casa Rústica surgiu em <span className="font-semibold text-[rgb(5,86,77)]">março de 2020</span> para
              oferecer aos seus clientes móveis de madeira maciça cem por cento feitos de peroba rosa de demolição, uma
              madeira ecologicamente correta, com um anti-praga natural e com uma beleza e durabilidade únicas.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Todos sabem que a madeira traz aconchego e calor, e na decoração de um lar, unir peças de madeira com uma
              decoração moderna faz toda diferença no resultado. Quem vivencia essa experiência de ter móveis duráveis
              que contam sua história, não abre mão de ter esse aconchego e calor em seu lar.
            </p>
            <div className="bg-gradient-to-r from-[rgb(5,86,77)]/10 to-transparent border-l-4 border-[rgb(248,177,1)] p-6 rounded-r-lg">
              <p className="text-gray-800 font-medium">
                Trabalhamos com móveis para casa toda, área interna e externa, além de atender com peças sob medida!
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-[rgb(248,177,1)] to-[rgb(5,86,77)] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <img
                  src={IMG_COMECOU}
                  alt="Móveis Casa Rústica"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-24 items-center">
          <div className="relative group w-full max-w-sm mx-auto md:mx-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-[rgb(5,86,77)] to-[rgb(248,177,1)] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
              <img
                src={IMG_PARCEIROS}
                alt="Madeira Peroba Rosa"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="inline-block">
              <h3 className="text-3xl lg:text-4xl font-bold text-[rgb(5,86,77)] mb-2">Somos Parceiros do Meio Ambiente</h3>
              <div className="h-1 w-24 bg-[rgb(248,177,1)]"></div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-green-50 rounded-xl border border-green-100">
              <Leaf className="w-6 h-6 text-[rgb(5,86,77)] flex-shrink-0 mt-1" />
              <p className="text-gray-700 leading-relaxed">
                A Peroba Rosa é <span className="font-semibold text-[rgb(5,86,77)]">protegida por lei</span> e não pode
                mais ser explorada. Por causa disso, novos móveis de Peroba Rosa no Brasil devem sempre ser produzidos
                com Madeiras de Demolição.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Isso significa que reutilizamos a madeira de móveis ou construções já existentes, como de armários,
              cadeiras, mesas e vigas de antigos casarões.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Devido às propriedades de resistência e durabilidade desta madeira, é possível reutilizá-la mesmo depois
              de <span className="font-semibold text-[rgb(5,86,77)]">décadas e às vezes até séculos</span>, sem perder
              suas características e qualidade.
            </p>
          </div>
        </div>

        <div className="relative mb-24">
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(5,86,77)] to-[rgb(4,70,63)] rounded-3xl"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDM2YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnptMC0xOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L2c+PC9zdmc+')] opacity-30"></div>
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[rgb(248,177,1)] rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">Sobre a Madeira de Demolição Peroba Rosa</h3>
              </div>
              <div className="space-y-4">
                <p className="text-white/95 leading-relaxed text-lg">
                  A Madeira Peroba Rosa é uma <span className="font-semibold text-[rgb(248,177,1)]">madeira nobre</span>,
                  característica por sua resistência e durabilidade alta. Sua coloração varia do amarelo ao rosa
                  avermelhado, às vezes apresentando pequenos veios escuros.
                </p>
                <p className="text-white/90 leading-relaxed">
                  Cada peça tem ranhuras de pregos e veios únicos que trazem ainda mais valor para o material. É uma
                  madeira extremamente valorizada no exterior por apresentar uma qualidade superior e uma beleza única.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-[rgb(248,177,1)] font-bold text-2xl mb-1">100%</p>
                  <p className="text-white/90 text-sm">Sustentável</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-[rgb(248,177,1)] font-bold text-2xl mb-1">+100</p>
                  <p className="text-white/90 text-sm">Anos de durabilidade</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-[rgb(248,177,1)] font-bold text-2xl mb-1">Premium</p>
                  <p className="text-white/90 text-sm">Madeira nobre</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h3 className="text-3xl md:text-4xl font-bold text-[rgb(5,86,77)] mb-2">Os Fundadores</h3>
            <div className="h-1 w-32 bg-[rgb(248,177,1)] mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <p className="text-2xl font-bold text-[rgb(5,86,77)] mb-4">Alessandra Durães &amp; Fábio Durães</p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Fundadores da empresa, Fábio e Alessandra são naturais de <span className="font-semibold">Oliveira-MG</span>{' '}
                e vieram para Uberlândia como forma de expandirem seu negócio em um polo que demanda altamente de móveis
                com maior durabilidade e variedade. Ambos empreendedores possuem muito conhecimento sobre móveis rústicos
                e encontraram na Madeira de Demolição Peroba Rosa uma forma de oferecerem ao mercado móveis mais
                sustentáveis e duradouros.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-[rgb(5,86,77)] mb-2">Conheça Nossa História</h3>
            <p className="text-gray-600">Assista ao vídeo e saiba mais sobre a Casa Rústica</p>
          </div>
          <div className="relative group max-w-5xl mx-auto">
            <div className="absolute -inset-2 bg-gradient-to-r from-[rgb(248,177,1)] to-[rgb(5,86,77)] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/QLj6SyLsEAw"
                title="Casa Rústica Uberlândia"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} rounded-2xl transform group-hover:scale-105 transition duration-300`}></div>
                <div className="relative p-8 text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{f.title}</h4>
                  <p className="text-white/80">{f.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
