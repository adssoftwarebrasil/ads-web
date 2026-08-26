import { Crown, Sparkles, Phone, ChevronRight, MapPin, Star } from 'lucide-react';

const HERO_IMAGE =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=rei-do-terno%2Falteracoes%2Fimage%20(1772).png&version_id=null';

const TAGS = ['Ternos Premium', 'Camisas Exclusivas', 'Sapatos no Couro Legitimo', 'Acessórios'];

export default function Hero() {
  const scrollToProdutos = () =>
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="inicio"
      className="relative pt-32 md:pt-40 pb-20 md:pb-28 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#2D587A] via-[#417EAD] to-[#5a93be]"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#B89E5E] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-[#B89E5E] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white">
                <Crown size={16} className="text-[#B89E5E]" />
                <span className="font-medium">Referência em Moda Masculina</span>
              </div>
              <div className="space-y-3">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                  Rei do<span className="block text-[#B89E5E] mt-1">Terno</span>
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-[#B89E5E] to-transparent mx-auto lg:mx-0"></div>
              </div>
              <h2 className="text-xl md:text-2xl text-[#FEFEFC]/95 font-light max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Elegância e sofisticação que transformam momentos em memórias inesquecíveis
              </h2>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start text-sm">
                {TAGS.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 text-white/90"
                  >
                    <Sparkles size={14} className="text-[#B89E5E]" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://wa.me/5517992369599"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-[#B89E5E] text-white px-8 py-4 rounded-xl hover:bg-[#a08952] transition-all duration-300 font-semibold text-center flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:shadow-[#B89E5E]/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <Phone size={20} className="relative z-10" />
                  <span className="relative z-10">Agende sua Visita</span>
                </a>
                <button
                  onClick={scrollToProdutos}
                  className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl hover:bg-white hover:text-[#417EAD] transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                >
                  Ver Produtos
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#B89E5E] rounded-full animate-pulse"></div>
                  <span>Atendimento Personalizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#B89E5E] rounded-full animate-pulse animation-delay-1000"></div>
                  <span>Qualidade Garantida</span>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-3xl border-4 border-white/20 p-2">
                <div className="w-full rounded-2xl overflow-hidden relative">
                  <img
                    src={HERO_IMAGE}
                    alt="Fachada da Loja Rei do Terno - São José do Rio Preto"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/20 to-transparent"></div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-5">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-3">
                        <MapPin size={20} className="text-[#2D587A]" />
                        <p className="text-[#2D587A] font-semibold text-xl leading-tight">
                          São José do Rio Preto
                        </p>
                      </div>
                      <p className="text-[#417EAD] text-base font-medium pl-8">Centro</p>
                    </div>
                    <div className="flex gap-1.5 items-center pt-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" className="text-[#B89E5E]" />
                      ))}
                      <span className="text-base font-semibold text-[#B89E5E] ml-2">5.0</span>
                    </div>
                  </div>
                  <div className="h-px bg-[#E5E5E5]"></div>
                  <div className="flex items-center justify-between text-sm text-[#417EAD]/80 font-medium px-1">
                    <span>Atendimento Segunda a Sábado</span>
                    <a
                      href="https://maps.app.goo.gl/vjXqN58CjA1vX6n89"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-[#2D587A] transition flex items-center gap-1.5"
                    >
                      Ver no Mapa <ChevronRight size={16} />
                    </a>
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
