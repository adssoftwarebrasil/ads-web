import { MapPin, ArrowRight, Sparkles, Phone, Star } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToLojas = () => scrollToSection('lojas');

  return (
    <section
      id="início"
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#fff5f9] to-[#f4ccd4]/40 pt-28 pb-24 lg:pt-36 lg:pb-32"
    >
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#c40278]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#851756]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">

          {/* === COLUNA DE TEXTO (5 Colunas) === */}
          <div className="lg:col-span-5 space-y-6 animate-fadeIn">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full ring-1 ring-[#f4ccd4] shadow-sm">
              <Sparkles className="w-4 h-4 text-[#c40278]" />
              <span className="text-[#c40278] font-bold text-xs uppercase tracking-wider">
                Cosméticos e Beleza em Goiânia
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#230015] leading-tight">
              Sua beleza merece o{' '}
              <span className="text-[#c40278]">melhor cuidado</span>
            </h1>

            <p className="text-lg text-[#350020]/80 leading-relaxed max-w-xl">
              Na Biolune você encontra um mix completo de cosméticos, maquiagem e
              produtos para cabelo das melhores marcas nacionais e importadas — com
              preços competitivos e atendimento especializado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://wa.me/5562999597617"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#c40278] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#851756] hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Fale Conosco</span>
              </a>

              <button
                onClick={() => scrollToSection('produtos')}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#c40278] px-8 py-4 rounded-full font-bold ring-1 ring-[#f4ccd4] shadow-md hover:bg-[#fff0f5] transform hover:scale-105 transition-all duration-300"
              >
                <span>Ver Produtos</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-6">
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="w-4 h-4 fill-[#c40278] text-[#c40278]" />
                  ))}
                </div>
                <p className="text-sm text-[#350020]/70 mt-1">Clientes satisfeitas</p>
              </div>

              <div className="h-10 w-px bg-[#f4ccd4]"></div>

              <div>
                <p className="text-2xl font-bold text-[#230015]">2 Lojas</p>
                <p className="text-sm text-[#350020]/70">Goiânia - GO</p>
              </div>

              <div className="h-10 w-px bg-[#f4ccd4] hidden sm:block"></div>

              <div>
                <p className="text-2xl font-bold text-[#230015]">+500</p>
                <p className="text-sm text-[#350020]/70">Produtos disponíveis</p>
              </div>
            </div>
          </div>

          {/* === COLUNA DE IMAGENS (7 Colunas) === */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end">

            <div className="relative w-full max-w-2xl">
              {/* Imagem Principal - Grande e Centralizada */}
              <div className="relative group">
                {/* Glow effect de fundo */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#c40278]/20 via-[#ff8ac6]/20 to-[#c40278]/20 rounded-[40px] blur-3xl opacity-60 group-hover:opacity-100 transition-all duration-700"></div>

                {/* Container da imagem principal */}
                <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden bg-white shadow-[0_20px_70px_rgba(196,2,120,0.2)] ring-1 ring-pink-100/50 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_30px_90px_rgba(196,2,120,0.3)]">
                  <img
                    src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Biolune%20cosm%C3%A9ticos%20e%20beleza%2Ffachada-loja-beleza-uma-das-lojas.webp&version_id=null"
                    alt="Fachada Moderna Biolune"
                    className="w-full h-full object-contain p-4 transform transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay gradiente sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#c40278]/5 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Badge flutuante - Unidade 1 */}
                <div className="absolute -top-3 -right-3 bg-white rounded-2xl p-3 shadow-lg ring-1 ring-pink-100 transform transition-all duration-300 hover:scale-110 hover:-rotate-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#c40278] animate-pulse"></div>
                    <span className="text-xs font-bold text-[#230015]">Unidade 1</span>
                  </div>
                </div>
              </div>

              {/* Imagem Secundária - Menor, no canto */}
              <div className="absolute -bottom-6 -left-6 w-1/2 max-w-[240px] group/secondary">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-br from-[#851756]/30 to-[#c40278]/30 rounded-3xl blur-2xl opacity-50 group-hover/secondary:opacity-100 transition-opacity duration-500"></div>

                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-[0_15px_40px_rgba(196,2,120,0.25)] ring-1 ring-pink-100/50 transform transition-all duration-500 group-hover/secondary:-translate-y-1 group-hover/secondary:shadow-[0_20px_50px_rgba(196,2,120,0.35)]">
                  <img
                    src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Biolune%20cosm%C3%A9ticos%20e%20beleza%2Floja-rosa-cosmeticos-fachada-uma-das-lojas.webp&version_id=null"
                    alt="Loja Biolune Rosa"
                    className="w-full h-full object-contain p-2 transform transition-transform duration-700 group-hover/secondary:scale-105"
                  />
                </div>

                {/* Badge menor */}
                <div className="absolute -top-2 -right-2 bg-white rounded-xl p-2 shadow-md ring-1 ring-pink-100 transform transition-all duration-300 hover:scale-110">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c40278] animate-pulse"></div>
                    <span className="text-[10px] font-bold text-[#230015]">Unidade 2</span>
                  </div>
                </div>
              </div>

              {/* Card de Informação - Moderno e Minimalista */}
              <div className="absolute -bottom-8 right-0 lg:right-8">
                <div className="bg-white/90 backdrop-blur-2xl rounded-2xl p-4 shadow-[0_8px_30px_rgba(196,2,120,0.15)] ring-1 ring-pink-100/30 min-w-[200px] transform transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#c40278] to-[#ff8ac6] shadow-lg">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#230015]/60 font-medium">Nossas Lojas</p>
                      <p className="text-sm font-bold text-[#230015]">Goiânia - GO</p>
                    </div>
                    <button
                      onClick={scrollToLojas}
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-[#fff0f5] hover:bg-[#c40278] transition-all duration-300 group/btn"
                    >
                      <ArrowRight className="w-4 h-4 text-[#c40278] group-hover/btn:text-white transition-colors" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Elementos Decorativos Minimalistas */}
              <div className="absolute top-8 -right-8 w-20 h-20 rounded-full border-2 border-dashed border-[#c40278]/20 animate-spin-slow pointer-events-none"></div>

              <div className="absolute -top-6 left-12 bg-white/80 backdrop-blur-sm p-2.5 rounded-xl shadow-lg ring-1 ring-pink-100 animate-bounce-slow">
                <Sparkles className="w-5 h-5 text-[#c40278]" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
