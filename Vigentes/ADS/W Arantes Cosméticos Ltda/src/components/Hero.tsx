import { MapPin, ArrowRight, Sparkles, Star, Clock, MessageCircle } from 'lucide-react';

const HERO_IMAGES = {
  unidade1:
    'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Biolune%20cosm%C3%A9ticos%20e%20beleza%2Ffachada-loja-beleza-uma-das-lojas.webp&version_id=null',
  unidade2:
    'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Biolune%20cosm%C3%A9ticos%20e%20beleza%2Floja-rosa-cosmeticos-fachada-uma-das-lojas.webp&version_id=null'
};

// Seg-Sex 09h as 19h | Sab 09h as 15h | Dom fechado (mesmos horarios de Contato e Rodape)
const getStatusDeHoje = () => {
  const agora = new Date();
  const dia = agora.getDay();
  const hora = agora.getHours() + agora.getMinutes() / 60;

  const fechamento = dia === 0 ? null : dia === 6 ? 15 : 19;

  if (fechamento === null) {
    return 'Fechado hoje · Abrimos segunda às 09:00';
  }
  if (hora < 9) {
    return 'Abrimos hoje às 09:00';
  }
  if (hora < fechamento) {
    return 'Aberto hoje até as ' + fechamento + ':00';
  }
  return dia === 6
    ? 'Fechado agora · Abrimos segunda às 09:00'
    : 'Fechado agora · Abrimos amanhã às 09:00';
};

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
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-10 items-center">

          {/* === COLUNA DE TEXTO === */}
          <div className="lg:col-span-5 space-y-6 animate-fadeIn">
            <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-sm pl-2 pr-4 py-2 rounded-full ring-1 ring-[#f4ccd4] shadow-sm">
              <div className="flex -space-x-1">
                <span className="w-4 h-4 rounded-full bg-[#c40278] ring-2 ring-white"></span>
                <span className="w-4 h-4 rounded-full bg-[#851756] ring-2 ring-white"></span>
                <span className="w-4 h-4 rounded-full bg-[#ff8ac6] ring-2 ring-white"></span>
              </div>
              <span className="text-[#c40278] font-bold text-xs uppercase tracking-wider">
                Top 1 em Goiânia
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#230015] leading-[1.1] tracking-tight">
              A Essência da Verdadeira Beleza
            </h1>

            <p className="text-lg text-[#350020]/80 leading-relaxed max-w-xl">
              Explore o maior acervo de cosméticos da região. Marcas renomadas,
              lançamentos exclusivos e a consultoria que você merece.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://wa.me/5562999597617"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#c40278] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#851756] hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Fale no WhatsApp</span>
              </a>

              <button
                onClick={scrollToLojas}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#230015] px-8 py-4 rounded-full font-bold ring-1 ring-[#f4ccd4] shadow-md hover:bg-[#fff0f5] transform hover:scale-105 transition-all duration-300"
              >
                <MapPin className="w-5 h-5 text-[#c40278]" />
                <span>Ver Lojas</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm text-[#350020]/70">
              <Clock className="w-4 h-4 text-[#c40278]" />
              <span>{getStatusDeHoje()}</span>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
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

          {/* === COLUNA DE IMAGENS: duas fotos sobrepostas e levemente inclinadas === */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full max-w-[600px] mx-auto aspect-[6/5]">

              {/* Foto de tras - Unidade 1 */}
              <div className="absolute top-0 left-0 w-[72%] rotate-[-4deg] transition-transform duration-500 hover:rotate-[-2deg] hover:-translate-y-1">
                <div className="aspect-[4/3] rounded-[28px] overflow-hidden bg-white p-2 shadow-[0_20px_50px_rgba(196,2,120,0.18)] ring-1 ring-pink-100/60">
                  <img
                    src={HERO_IMAGES.unidade1}
                    alt="Fachada da loja Biolune no Setor Negrão de Lima"
                    className="w-full h-full object-cover rounded-[22px]"
                  />
                </div>
              </div>

              {/* Foto da frente - Unidade 2 */}
              <div className="absolute bottom-0 right-0 w-[76%] rotate-[2deg] z-20 transition-transform duration-500 hover:rotate-0 hover:-translate-y-1">
                <div className="aspect-[4/3] rounded-[28px] overflow-hidden bg-white p-2 shadow-[0_25px_70px_rgba(196,2,120,0.28)] ring-1 ring-pink-100/60">
                  <img
                    src={HERO_IMAGES.unidade2}
                    alt="Fachada da loja Biolune no Conjunto Vera Cruz II"
                    className="w-full h-full object-cover rounded-[22px]"
                  />
                </div>

                {/* Selo "Duas Unidades" */}
                <div className="absolute -bottom-4 left-4 inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-[0_8px_30px_rgba(196,2,120,0.15)] ring-1 ring-pink-100/60">
                  <span className="w-2 h-2 rounded-full bg-[#c40278] animate-pulse"></span>
                  <span className="text-sm font-bold text-[#230015]">Duas Unidades</span>
                </div>

                {/* Atalho para a secao de lojas */}
                <button
                  onClick={scrollToLojas}
                  aria-label="Ver nossas lojas"
                  className="absolute -bottom-4 right-4 flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-[0_8px_30px_rgba(196,2,120,0.2)] ring-1 ring-pink-100/60 hover:bg-[#c40278] transition-colors duration-300 group/btn"
                >
                  <ArrowRight className="w-5 h-5 text-[#c40278] group-hover/btn:text-white transition-colors" />
                </button>
              </div>

              {/* Detalhe flutuante */}
              <div className="absolute top-[14%] right-[2%] z-30 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg ring-1 ring-pink-100 animate-bounce-slow">
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
