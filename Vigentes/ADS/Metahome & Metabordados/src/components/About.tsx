import { Heart, Award, Clock, Quote } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Lado Esquerdo: Conteúdo */}
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 mb-6 border border-[#F7D061] rounded-full">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-neutral-600">Desde 2001</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-8 leading-tight">
              Décadas de <span className="text-[#F7D061] italic">excelência</span> em bordados industriais.
            </h2>

            <div className="space-y-6 text-neutral-600 text-lg leading-relaxed font-light">
              <p>
                A <strong className="font-semibold text-neutral-900">Metabordados</strong> nasceu do rigor técnico e da paixão pela perfeição, consolidando <span className="underline decoration-[#F7D061] decoration-2 underline-offset-4">24 anos de liderança</span> em personalização têxtil industrial.
              </p>

              <div className="relative pl-8 border-l-2 border-[#F7D061] my-8">
                <Quote className="absolute -left-3 -top-4 text-[#F7D061] bg-white" size={24} />
                <p className="italic text-neutral-800 font-medium">
                  "Transformamos tecidos em identidade. Cada bordado conta a história de uma marca, cada fardamento carrega o orgulho de uma equipe."
                </p>
              </div>

              <p>
                Atendemos empresas, confecções e marcas de todo o Brasil com tecnologia de ponta em bordados, sublimação, patches e personalização têxtil. Nossa <strong className="text-neutral-900">Metahome</strong> complementa nossa expertise com produtos para casa.
              </p>
            </div>

            {/* Ícones de Diferenciais */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {[
                { icon: Clock, title: "24 Anos", sub: "de Expertise" },
                { icon: Award, title: "Própria", sub: "Fabricação" },
                { icon: Heart, title: "Afeto", sub: "em Detalhes" }
              ].map((item, i) => (
                <div key={i} className="group p-6 rounded-2xl bg-neutral-50 hover:bg-[#F7D061]/10 transition-colors duration-300">
                  <item.icon className="text-[#F7D061] mb-4 group-hover:scale-110 transition-transform" size={28} />
                  <h3 className="font-bold text-neutral-900 leading-none">{item.title}</h3>
                  <p className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Imagem Composta */}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
              <img
                src="https://storage.lucasmendes.dev/site-sp/metabordados%2Fnvoa%2F3.jpeg"
                alt="Processo Metahome"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Elementos Decorativos */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#F7D061]/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 border-[12px] border-[#F7D061]/10 rounded-[3rem] -z-10"></div>
            
            {/* Badge Flutuante */}
            <div className="absolute -bottom-8 right-4 z-20 bg-neutral-900 text-white p-6 rounded-2xl shadow-xl hidden sm:block">
              <p className="text-3xl font-serif font-bold text-[#F7D061]">100%</p>
              <p className="text-[10px] uppercase tracking-widest leading-tight">Produção<br/>Nacional</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}