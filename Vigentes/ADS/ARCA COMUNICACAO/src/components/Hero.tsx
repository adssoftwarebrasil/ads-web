import { ArrowRight, Award, Clock, Users } from 'lucide-react';

const IMG_LEFT =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=arca%20comunicacao%2Falteracoes%2Fhero2.jpeg&version_id=null';

const IMG_RIGHT =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=arca%20comunicacao%2Falteracoes%2FWhatsApp%20Image%202026-03-31%20at%2010.32.27.jpeg&version_id=null';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[rgb(11,9,48)] pt-20"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* ── Imagem ESQUERDA ── fade para a direita */}
      <div
        className="absolute left-0 top-0 h-full w-full md:w-[42%] opacity-55 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to right, black 25%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, black 25%, transparent 100%)',
        }}
      >
        <img src={IMG_LEFT} alt="" className="w-full h-full object-cover" />
      </div>

      {/* ── Imagem DIREITA ── fade para a esquerda | oculta no mobile */}
      <div
        className="absolute right-0 top-0 h-full w-[42%] opacity-55 pointer-events-none hidden md:block"
        style={{
          maskImage: 'linear-gradient(to left, black 25%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, black 25%, transparent 100%)',
        }}
      >
        <img src={IMG_RIGHT} alt="" className="w-full h-full object-cover" />
      </div>

      {/* ── Conteúdo central ── */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-6 py-20 text-center">

        {/* Título */}
        <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-snug text-white mb-4">
          <span className="block text-[rgb(255,204,44)] font-semibold">
            Elevando marcas,
          </span>
          <span className="block font-bold">
            construindo{' '}
            <span className="text-[rgb(255,204,44)]">LEGADOS VISUAIS</span>
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-xs sm:text-sm text-[rgb(255,204,44)] font-medium tracking-[0.45em] uppercase mb-10">
          projetos especiais&nbsp;-&nbsp;fachada&nbsp;-&nbsp;letreiros
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <button
            onClick={scrollToContact}
            className="group flex items-center justify-center gap-2 bg-[rgb(255,204,44)] text-[rgb(11,9,48)] font-semibold text-sm px-8 py-4 rounded-full hover:brightness-90 transition-all duration-300 hover:scale-105 shadow-[0_8px_24px_rgba(255,204,44,0.25)]"
          >
            Solicite Seu Orçamento
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>

          
           <a href="http://wa.me/553491008921"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-transparent border border-white/70 text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-white hover:text-[rgb(11,9,48)] transition-all duration-300 hover:scale-105"
          >
            {/* WhatsApp icon */}
            <svg className="w-[18px] h-[18px] fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Falar no WhatsApp
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-12 sm:gap-20 border-t border-white/10 pt-10 w-full max-w-xl">
          <div className="flex flex-col items-center gap-1">
            <Award className="text-[rgb(255,204,44)]" size={26} strokeWidth={1.2} />
            <span className="text-2xl font-light text-white">8+</span>
            <span className="text-[10px] text-[rgb(180,180,180)] font-light lowercase tracking-[0.4em]">
              anos de experiência
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <Users className="text-[rgb(255,204,44)]" size={26} strokeWidth={1.2} />
            <span className="text-2xl font-light text-white">3000+</span>
            <span className="text-[10px] text-[rgb(180,180,180)] font-light lowercase tracking-[0.4em]">
              projetos entregues
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <Clock className="text-[rgb(255,204,44)]" size={26} strokeWidth={1.2} />
            <span className="text-2xl font-light text-white">100%</span>
            <span className="text-[10px] text-[rgb(180,180,180)] font-light lowercase tracking-[0.4em]">
              cronograma rigoroso
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}