import { Clock, ChefHat, Award } from 'lucide-react';

const heroImages = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/produtos%20alimenticios%20veranita%2Fprodutos%20em%20destaque%2FFAROFA%20PRONTA.webp',
    cls: 'rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/produtos%20alimenticios%20veranita%2Fprodutos%20em%20destaque%2FALHO%20FRITO%20-%20POTE.webp',
    cls: 'rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 mt-8',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/produtos%20alimenticios%20veranita%2Fprodutos%20em%20destaque%2FCHIMICHURRI.webp',
    cls: 'rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 -mt-8',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/produtos%20alimenticios%20veranita%2Fprodutos%20em%20destaque%2FPIPOCA%20PREMIUM.webp',
    cls: 'rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300',
  },
];

export default function Hero() {
  const scrollToProdutos = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="pt-20 lg:pt-24 bg-gradient-to-br from-white via-[rgb(0,173,239)]/5 to-white overflow-hidden"
    >
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-[rgb(238,29,35)] to-[rgb(253,241,0)] text-white px-4 py-2 rounded-full text-sm font-semibold">
                Desde 1976 levando sabor à sua mesa
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Quase <span className="text-[rgb(238,29,35)]">50 Anos</span> de{' '}
              <span className="text-[rgb(0,173,239)]">Tradição</span> e{' '}
              <span className="text-[rgb(46,49,146)]">Qualidade</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              A Veranita Produtos Alimentícios nasceu em Sertãozinho-SP com a missão de levar mais
              sabor, qualidade e praticidade à mesa das famílias brasileiras. Especiarias, temperos,
              molhos e farináceos que transformam cada refeição em uma experiência inesquecível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="http://wa.me/5516997516375"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[rgb(238,29,35)] to-[rgb(238,29,35)]/90 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
              >
                Solicite um Orçamento
              </a>
              <button
                onClick={scrollToProdutos}
                className="border-2 border-[rgb(0,173,239)] text-[rgb(0,173,239)] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[rgb(0,173,239)] hover:text-white transition-all duration-300 text-center"
              >
                Conheça Nossos Produtos
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-[rgb(0,173,239)]/10 p-4 rounded-full mb-3">
                  <Clock className="lucide lucide-clock w-8 h-8 text-[rgb(0,173,239)]" />
                </div>
                <p className="font-bold text-2xl text-gray-900">50</p>
                <p className="text-sm text-gray-600">Anos de História</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-[rgb(238,29,35)]/10 p-4 rounded-full mb-3">
                  <ChefHat className="lucide lucide-chef-hat w-8 h-8 text-[rgb(238,29,35)]" />
                </div>
                <p className="font-bold text-2xl text-gray-900">100+</p>
                <p className="text-sm text-gray-600">Produtos</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-[rgb(46,49,146)]/10 p-4 rounded-full mb-3">
                  <Award className="lucide lucide-award w-8 h-8 text-[rgb(46,49,146)]" />
                </div>
                <p className="font-bold text-2xl text-gray-900">TOP</p>
                <p className="text-sm text-gray-600">Qualidade</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-8 -right-8 w-72 h-72 bg-[rgb(253,241,0)]/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-[rgb(0,173,239)]/20 rounded-full blur-3xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
              {heroImages.map((img, i) => (
                <img key={i} src={img.src} alt="Produto Veranita" className={img.cls} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
