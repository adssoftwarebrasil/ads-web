import { Star, CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  'Atendimento personalizado por especialistas',
  'Apenas marcas com certificação de qualidade',
  'Preços justos e honestos',
  'Mais de 500 produtos em estoque',
];

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById('featured-products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-cover bg-center bg-no-repeat pt-20 lg:pt-0"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/sowfit%2Fimg%2Fhero-background.jpeg")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-900/60 z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-fadeIn max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-medium mx-auto lg:mx-0">
              <Star className="w-4 h-4 fill-orange-500" />
              <span>Eleita a melhor loja de Uberaba em 2023</span>
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Transforme Seus Resultados com <span className="text-orange-500">Suplementos de Elite</span>
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                Há mais de 10 anos ajudando atletas e entusiastas a alcançarem o próximo nível com
                atendimento humanizado e produtos certificados.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 text-left">
              {features.map((feature, i) => (
                <div
                  key={feature}
                  className="flex items-start space-x-3 group justify-center lg:justify-start"
                  style={{ animation: `0.5s ease-out ${i * 0.1}s 1 normal forwards running fadeInUp`, opacity: 0 }}
                >
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1 transition-transform group-hover:scale-110" />
                  <span className="text-gray-300 text-base font-medium">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/553497228602?text=Olá! Gostaria de falar com um especialista sobre suplementação."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-orange-600 rounded-xl hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-1 active:translate-y-0"
              >
                Fale com Especialista
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <button
                onClick={scrollToProducts}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-transparent border-2 border-gray-700 rounded-xl hover:border-white hover:bg-white hover:text-gray-900 hover:-translate-y-1"
              >
                Ver Produtos
              </button>
            </div>
          </div>
          <div className="relative lg:h-[550px] w-full max-w-lg mx-auto lg:max-w-none perspective-1000 mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-orange-500/10 rounded-3xl blur-3xl -z-10 transform scale-90"></div>
            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl aspect-[4/5] lg:aspect-auto group">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent z-10"></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/sowfit/img/fachada%20melhorada.webp"
                alt="Frente da Loja SowFit - Melhores Suplementos"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 backdrop-blur-md bg-black/40 border border-white/10 p-4 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-lg">Loja Física</p>
                    <p className="text-gray-300 text-sm">Uberaba - MG</p>
                  </div>
                  <div className="bg-orange-500/20 p-2 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-orange-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
