import { CheckCircle2, ArrowRight, Phone, MapPin } from 'lucide-react';

const marcas = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mecrolamentos/marcas/logo-iko-rolamentos-agulha-vermelho-branco_275x183.webp',
    alt: 'Marca',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mecrolamentos/marcas/logo-ina-diamante-verde-letras-brancas_225x225.webp',
    alt: 'Marca',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mecrolamentos/marcas/logo-nsk-vermelho-sobre-fundo-branco_300x168.webp',
    alt: 'Marca',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mecrolamentos/marcas/logo-ntn-branco-fundo-azul-claro_200x200.webp',
    alt: 'Marca',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mecrolamentos/marcas/logotipo-frm-azul-com-simbolo-circular_320x157.webp',
    alt: 'Marca',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mecrolamentos/marcas/logotipo-koyo-azul-fundo-branco_250x100.webp',
    alt: 'Marca',
  },
];

const features = [
  'Atendimento técnico especializado',
  'Estoque amplo para pronta entrega',
  'Atendemos Sinop e raio de 150km',
  'Mais de 15 marcas líderes disponíveis',
  'Rolamentos para todas as aplicações',
  'Equipe com experiência no setor',
];

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="py-16 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1 lg:col-span-5">
            <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-[#EC3132] p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-center text-white transform -rotate-2 shadow-xl">
                <span className="text-3xl sm:text-5xl font-black italic">150km</span>
                <span className="text-[10px] sm:text-sm font-bold uppercase tracking-tighter opacity-90">
                  Raio de entrega
                </span>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-gray-100 flex items-center justify-center">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/mecrolamentos/marcas/logo-fag-vermelho-rolamento-esferas_355x142.webp"
                  alt="Brand"
                  className="max-h-8 sm:max-h-12 object-contain"
                />
              </div>
              <div className="col-span-2 bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-lg border border-gray-50 grid grid-cols-3 gap-4 sm:gap-8 items-center">
                {marcas.map((m, i) => (
                  <img
                    key={i}
                    src={m.src}
                    alt={m.alt}
                    className="h-6 sm:h-10 w-full object-contain transition-transform hover:scale-110"
                  />
                ))}
              </div>
              <div className="bg-[#2B559F] p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-center text-white transform rotate-2 shadow-xl">
                <span className="text-3xl sm:text-5xl font-black italic">+15</span>
                <span className="text-[10px] sm:text-sm font-bold uppercase tracking-tighter opacity-90">
                  Marcas Líderes
                </span>
              </div>
              <div className="bg-gray-900 p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white/50 text-[10px] uppercase font-bold tracking-widest">
                    Especialistas
                  </p>
                  <p className="text-white font-medium text-sm sm:text-lg italic">Qualidade</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-10 bg-[#EC3132]"></div>
              <span className="text-[#EC3132] text-xs font-black uppercase tracking-[0.2em]">
                Onde a precisão encontra a agilidade
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-8">
              Sua Loja Especializada <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-[#2B559F]">em Rolamentos</span>
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-[#2B559F]/10 -z-0"></span>
              </span>
              <br />
              em Sinop - MT
            </h2>
            <div className="space-y-4 sm:space-y-6 mb-10 text-base sm:text-lg text-gray-600 max-w-2xl">
              <p className="leading-relaxed">
                A <strong className="text-gray-900">MEC Rolamentos</strong> é referência técnica no
                Setor Industrial de Sinop. Entregamos soluções de alto nível em rolamentos,
                retentores e componentes para quem exige máxima performance.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-8 mb-10 sm:mb-12">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="bg-gray-100 p-1 rounded-full">
                    <CheckCircle2
                      width={16}
                      height={16}
                      className="lucide lucide-check-circle2 text-[#EC3132]"
                    />
                  </div>
                  <span className="text-sm sm:text-[15px] text-gray-700 font-semibold">{f}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
              <a
                href="https://wa.me/5566999952065"
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 bg-[#EC3132] text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight
                  width={18}
                  height={18}
                  className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
                />
              </a>
              <div className="flex flex-col items-center sm:items-start space-y-1">
                <div className="flex items-center gap-2 text-gray-900 font-bold">
                  <Phone width={16} height={16} className="lucide lucide-phone text-[#2B559F]" />
                  <span className="text-sm sm:text-base">(66) 3531-5352</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs font-medium">
                  <MapPin width={14} height={14} className="lucide lucide-map-pin" />
                  <span>Sinop - MT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
