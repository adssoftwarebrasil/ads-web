import { ArrowRight } from 'lucide-react';

const IMG_MODULE = 'https://storage.lucasmendes.dev/site-sp/master%20diagnosticos%20(master%20truck)/img/modulo-scania-conector-peca-de-caminhao_1024x1536.webp';
const IMG_VALVE = 'https://storage.lucasmendes.dev/site-sp/master%20diagnosticos%20(master%20truck)/img/valvula-ecofit-peca-caminhao-fundo-adesivos_1536x1024.webp';
const WHATSAPP_URL = 'http://wa.me/556596363222?text=Ol%C3%A1!%20Tenho%20interesse%20em%20pe%C3%A7as.%20Pode%20me%20ajudar%3F';

const PRODUCTS = [
  { brand: 'Scania', items: ['Módulo do Motor', 'Cervo ECA', 'Módulo Scania'] },
  { brand: 'Volvo', items: ['Módulo do Motor', 'Módulo Volvo'] },
  { brand: 'Mercedes', items: ['Módulo do Motor', 'Módulo Mercedes'] },
  { brand: 'Iveco', items: ['Módulo Iveco'] },
  { brand: 'Sistema Arla', items: ['Bomba do Arla', 'Dosadora do Arla', 'Sensor NOx', 'Peças para Arla'] },
];

export default function Products() {
  return (
    <section id="produtos" className="bg-[#0a0a0a] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho Centralizado */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[#F07013] text-sm font-bold tracking-widest uppercase mb-3">
            Catálogo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFD] mb-6">
            Peças e Componentes para sua Frota
          </h2>
          <p className="text-[#FFFFFD]/60 max-w-2xl text-lg leading-relaxed">
            Disponibilizamos módulos e peças eletrônicas originais e remanufaturadas para as principais marcas de caminhões pesados. Garantia em todas as peças fornecidas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna das Imagens (Esquerda) */}
          <div className="lg:col-span-5 flex justify-center gap-4 px-4 sm:px-10 lg:px-0">
            <div className="flex flex-col w-1/2">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  src={IMG_MODULE}
                  alt="Módulo Scania"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010101]/80 to-transparent" />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <span className="bg-[#F07013] text-[#FFFFFD] text-xs font-bold px-3 py-1 rounded-full">
                    Módulos
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col w-1/2 pt-10">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  src={IMG_VALVE}
                  alt="Válvula Ecofit"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010101]/80 to-transparent" />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <span className="bg-[#F07013] text-[#FFFFFD] text-xs font-bold px-3 py-1 rounded-full">
                    Componentes
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna dos Produtos (Direita) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Grid de Categorias de Produtos */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PRODUCTS.map((group) => (
                <div 
                  key={group.brand} 
                  className="bg-[#FFFFFD]/[0.03] border border-[#FFFFFD]/10 rounded-xl p-6 hover:bg-[#FFFFFD]/[0.05] transition-colors duration-300 flex flex-col items-center sm:items-start"
                >
                  <h4 className="text-[#F07013] font-bold text-sm uppercase tracking-wide mb-4">
                    {group.brand}
                  </h4>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="bg-[#FFFFFD]/5 border border-[#FFFFFD]/10 text-[#FFFFFD]/70 text-xs px-3 py-1.5 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Botão de Ação */}
            <div className="mt-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-[#F07013] hover:bg-[#d4600f] text-[#FFFFFD] font-bold text-base px-8 py-4 rounded transition-all duration-200 shadow-lg shadow-[#F07013]/20"
              >
                Consultar Disponibilidade
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}